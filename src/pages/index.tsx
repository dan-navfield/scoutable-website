import React from 'react';
import { GetStaticProps } from 'next';
import { StoryblokComponent } from '@storyblok/react';
import { Layout } from '@/components/layout';
import { fetchStory } from '@/lib/storyblok';
import { PageStory } from '@/types/storyblok';

interface HomePageProps {
  story: PageStory;
  preview: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ story, preview }) => {
  const { content } = story;

  return (
    <Layout
      seo={{
        title: content.seo?.title || 'Home',
        description: content.seo?.description,
        canonical: content.seo?.canonical_url,
        noindex: content.seo?.no_index,
        openGraph: {
          title: content.seo?.og_title,
          description: content.seo?.og_description,
          images: content.seo?.og_image ? [
            {
              url: content.seo.og_image.filename,
              width: 1200,
              height: 630,
              alt: content.seo.og_image.alt,
            }
          ] : undefined,
        },
        twitter: {
          cardType: 'summary_large_image',
        },
      }}
    >
      {/* Preview banner */}
      {preview && (
        <div className="bg-warning-100 border-b border-warning-200 px-4 py-2 text-center text-sm text-warning-800">
          <strong>Preview Mode:</strong> You are viewing draft content.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:no-underline font-medium"
          >
            Exit Preview
          </a>
        </div>
      )}

      {/* Render Storyblok content */}
      {content.body?.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  try {
    const story = await fetchStory('home', preview ? 'true' : 'false');

    return {
      props: {
        story,
        preview,
      },
      revalidate: preview ? 1 : 3600, // Revalidate every hour in production, every second in preview
    };
  } catch (error) {
    console.error('Error fetching home page:', error);
    
    // Return a fallback page with sample content
    return {
      props: {
        story: {
          id: 0,
          uuid: 'fallback',
          name: 'Home',
          slug: 'home',
          full_slug: 'home',
          created_at: new Date().toISOString(),
          published_at: new Date().toISOString(),
          content: {
            _uid: 'fallback',
            component: 'page',
            body: [
              {
                _uid: 'hero-fallback',
                component: 'hero',
                heading: 'Find, trust, and deploy specialist talent — fast',
                subheading: 'One place to run panels, suppliers, and contractors with real-time skills intelligence',
                description: 'Built for government and enterprise: security first, people-centred by design.',
                primary_cta_text: 'Request a Demo',
                primary_cta_link: {
                  id: 'demo',
                  url: '/demo',
                  linktype: 'story',
                  fieldtype: 'multilink',
                  cached_url: '/demo',
                },
                secondary_cta_text: 'Learn More',
                secondary_cta_link: {
                  id: 'product',
                  url: '/product',
                  linktype: 'story',
                  fieldtype: 'multilink',
                  cached_url: '/product',
                },
                background_variant: 'gradient',
              },
            ],
          },
        },
        preview,
      },
      revalidate: 60,
    };
  }
};

export default HomePage;
