import { storyblokInit, apiPlugin, useStoryblokApi } from '@storyblok/react';

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: 'au', // Australian region
  },
});

// Helper functions
export const getStoryblokApi = () => {
  // For server-side usage, we'll create a simple fetch-based implementation
  const baseUrl = 'https://api.storyblok.com/v2/cdn';
  const token = process.env.STORYBLOK_ACCESS_TOKEN;
  
  return {
    get: async (path: string, options: any = {}) => {
      const params = new URLSearchParams({
        token: token || '',
        ...options,
      });
      
      const response = await fetch(`${baseUrl}/${path}?${params}`);
      if (!response.ok) {
        throw new Error(`Storyblok API error: ${response.statusText}`);
      }
      
      return response.json();
    }
  };
};

export const isPreview = (preview?: string | string[]): boolean => {
  return preview === 'true' || preview === '1';
};

export const getStoryVersion = (preview?: string | string[]): 'draft' | 'published' => {
  return isPreview(preview) ? 'draft' : 'published';
};

// Cache configuration
export const CACHE_DURATION = {
  SHORT: 60, // 1 minute
  MEDIUM: 300, // 5 minutes
  LONG: 3600, // 1 hour
  VERY_LONG: 86400, // 24 hours
};

// Common story fetching options
export const getStoryOptions = (preview?: string | string[]) => ({
  version: getStoryVersion(preview),
  resolve_links: 'url',
  resolve_relations: ['page.author', 'resource_article.author'],
  cv: Date.now(), // Cache busting for preview
});

// Fetch a single story
export const fetchStory = async (slug: string, preview?: string | string[]) => {
  const api = getStoryblokApi();
  const options = getStoryOptions(preview);
  
  try {
    const { data } = await api.get(`cdn/stories/${slug}`, options);
    return data.story;
  } catch (error) {
    console.error(`Error fetching story ${slug}:`, error);
    throw error;
  }
};

// Fetch multiple stories
export const fetchStories = async (options: {
  starts_with?: string;
  content_type?: string;
  per_page?: number;
  page?: number;
  sort_by?: string;
  preview?: string | string[];
}) => {
  const api = getStoryblokApi();
  const storyOptions = getStoryOptions(options.preview);
  
  try {
    const { data } = await api.get('cdn/stories', {
      ...storyOptions,
      starts_with: options.starts_with,
      filter_query: options.content_type ? {
        component: {
          in: options.content_type
        }
      } : undefined,
      per_page: options.per_page || 25,
      page: options.page || 1,
      sort_by: options.sort_by || 'created_at:desc',
    });
    
    return {
      stories: data.stories,
      total: data.total,
      perPage: data.perPage,
      page: data.page,
    };
  } catch (error) {
    console.error('Error fetching stories:', error);
    throw error;
  }
};

// Fetch global content (singletons)
export const fetchGlobal = async (slug: string, preview?: string | string[]) => {
  return fetchStory(slug, preview);
};

// Generate sitemap data
export const generateSitemap = async () => {
  const api = getStoryblokApi();
  
  try {
    const { data } = await api.get('cdn/stories', {
      version: 'published',
      per_page: 100,
      excluding_fields: 'body',
    });
    
    return data.stories.map((story: any) => ({
      slug: story.full_slug,
      lastmod: story.published_at || story.created_at,
      changefreq: getChangeFrequency(story.content.component),
      priority: getPriority(story.full_slug, story.content.component),
    }));
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
};

// Helper function to determine change frequency for sitemap
const getChangeFrequency = (component: string): string => {
  switch (component) {
    case 'page':
      return 'weekly';
    case 'resource_article':
    case 'case_study':
      return 'monthly';
    case 'pricing_page':
      return 'weekly';
    default:
      return 'monthly';
  }
};

// Helper function to determine priority for sitemap
const getPriority = (slug: string, component: string): number => {
  if (slug === 'home' || slug === '') return 1.0;
  if (slug.includes('product') || slug.includes('pricing')) return 0.9;
  if (slug.includes('solutions') || slug.includes('resources')) return 0.8;
  if (component === 'resource_article' || component === 'case_study') return 0.7;
  return 0.6;
};

// Rich text resolver
export const resolveRichText = (richText: any) => {
  // This would typically use storyblok-rich-text-react-renderer
  // For now, return a simple implementation
  return richText;
};

// Image optimization helper
export const optimizeImage = (
  imageUrl: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpg' | 'png';
    fit?: 'in' | 'out' | 'fill';
  } = {}
) => {
  if (!imageUrl) return '';
  
  const params = new URLSearchParams();
  
  if (options.width) params.append('m', `${options.width}x${options.height || 0}`);
  if (options.quality) params.append('q', options.quality.toString());
  if (options.format) params.append('f', options.format);
  if (options.fit) params.append('fit', options.fit);
  
  const queryString = params.toString();
  return queryString ? `${imageUrl}/m/${queryString}` : imageUrl;
};
