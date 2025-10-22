import { StoryblokStory } from '@storyblok/react';

// Base Storyblok types
export interface StoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  filename: string;
  copyright: string;
  fieldtype: string;
}

export interface StoryblokLink {
  id: string;
  url: string;
  linktype: string;
  fieldtype: string;
  cached_url: string;
}

// SEO Block
export interface SeoBlok {
  _uid: string;
  title: string;
  description: string;
  canonical_url?: string;
  no_index?: boolean;
  og_image?: StoryblokAsset;
  og_title?: string;
  og_description?: string;
  twitter_title?: string;
  twitter_description?: string;
  twitter_image?: StoryblokAsset;
  component: 'seo';
}

// Hero Block
export interface HeroBlok {
  _uid: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  description?: string;
  primary_cta_text?: string;
  primary_cta_link?: StoryblokLink;
  secondary_cta_text?: string;
  secondary_cta_link?: StoryblokLink;
  image?: StoryblokAsset;
  video_url?: string;
  background_variant?: 'default' | 'gradient' | 'pattern';
  component: 'hero';
}

// Feature Grid Block
export interface FeatureGridBlok {
  _uid: string;
  title?: string;
  description?: string;
  features: FeatureItemBlok[];
  columns?: '2' | '3' | '4';
  component: 'feature_grid';
}

export interface FeatureItemBlok {
  _uid: string;
  icon?: string;
  title: string;
  description: string;
  link?: StoryblokLink;
  component: 'feature_item';
}

// Stats Block
export interface StatsBlok {
  _uid: string;
  title?: string;
  stats: StatItemBlok[];
  component: 'stats';
}

export interface StatItemBlok {
  _uid: string;
  value: string;
  label: string;
  qualifier?: string;
  component: 'stat_item';
}

// Testimonial Block
export interface TestimonialBlok {
  _uid: string;
  quote: string;
  author_name: string;
  author_role: string;
  author_company?: string;
  author_image?: StoryblokAsset;
  company_logo?: StoryblokAsset;
  component: 'testimonial';
}

// Logo Cloud Block
export interface LogoCloudBlok {
  _uid: string;
  title?: string;
  logos: LogoItemBlok[];
  component: 'logo_cloud';
}

export interface LogoItemBlok {
  _uid: string;
  name: string;
  logo: StoryblokAsset;
  url?: StoryblokLink;
  component: 'logo_item';
}

// CTA Block
export interface CtaBlok {
  _uid: string;
  headline: string;
  description?: string;
  button_text: string;
  button_link: StoryblokLink;
  variant?: 'default' | 'centered' | 'split';
  background?: 'default' | 'primary' | 'secondary';
  component: 'cta';
}

// FAQ Block
export interface FaqBlok {
  _uid: string;
  title?: string;
  faqs: FaqItemBlok[];
  component: 'faq';
}

export interface FaqItemBlok {
  _uid: string;
  question: string;
  answer: string;
  component: 'faq_item';
}

// Pricing Card Block
export interface PricingCardBlok {
  _uid: string;
  name: string;
  price: string;
  price_qualifier?: string;
  description?: string;
  features: string[];
  cta_text: string;
  cta_link?: StoryblokLink;
  popular?: boolean;
  footnotes?: string;
  component: 'pricing_card';
}

// Tabs Block
export interface TabsBlok {
  _uid: string;
  tabs: TabItemBlok[];
  component: 'tabs';
}

export interface TabItemBlok {
  _uid: string;
  label: string;
  content: any[]; // Array of other blocks
  component: 'tab_item';
}

// Steps Block
export interface StepsBlok {
  _uid: string;
  title?: string;
  steps: StepItemBlok[];
  component: 'steps';
}

export interface StepItemBlok {
  _uid: string;
  title: string;
  description: string;
  icon?: string;
  component: 'step_item';
}

// Section Block
export interface SectionBlok {
  _uid: string;
  title?: string;
  content: any; // Rich text content
  width?: 'narrow' | 'wide' | 'full';
  background?: 'default' | 'secondary' | 'primary';
  component: 'section';
}

// Media Block
export interface MediaBlok {
  _uid: string;
  image?: StoryblokAsset;
  video_url?: string;
  caption?: string;
  alt_text?: string;
  component: 'media';
}

// Integration Tile Block
export interface IntegrationTileBlok {
  _uid: string;
  name: string;
  logo: StoryblokAsset;
  description: string;
  link?: StoryblokLink;
  category?: string;
  component: 'integration_tile';
}

// Resource Card Block
export interface ResourceCardBlok {
  _uid: string;
  type: 'guide' | 'case-study' | 'blog' | 'webinar' | 'whitepaper';
  title: string;
  summary: string;
  image?: StoryblokAsset;
  tags: string[];
  date: string;
  author?: string;
  read_time?: string;
  link: StoryblokLink;
  component: 'resource_card';
}

// Callout Block
export interface CalloutBlok {
  _uid: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title?: string;
  content: string;
  component: 'callout';
}

// Form Embed Block
export interface FormEmbedBlok {
  _uid: string;
  form_key: string;
  title?: string;
  description?: string;
  tracking_event?: string;
  component: 'form_embed';
}

// Page Types
export interface PageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    body: any[];
    component: 'page';
  };
}

export interface ModulePageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    hero: HeroBlok;
    body: any[];
    component: 'module_page';
  };
}

export interface UseCasePageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    hero: HeroBlok;
    body: any[];
    component: 'use_case_page';
  };
}

export interface ResourceArticleStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    title: string;
    summary: string;
    content: any; // Rich text
    author?: string;
    date: string;
    tags: string[];
    featured_image?: StoryblokAsset;
    read_time?: string;
    component: 'resource_article';
  };
}

export interface CaseStudyStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    title: string;
    client_name: string;
    client_logo?: StoryblokAsset;
    industry: string;
    challenge: string;
    solution: string;
    results: string;
    metrics: StatItemBlok[];
    testimonial?: TestimonialBlok;
    featured_image?: StoryblokAsset;
    gallery?: StoryblokAsset[];
    component: 'case_study';
  };
}

export interface PricingPageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    hero: HeroBlok;
    plans: PricingCardBlok[];
    faqs?: FaqBlok;
    component: 'pricing_page';
  };
}

export interface SecurityPageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    hero: HeroBlok;
    body: any[];
    component: 'security_page';
  };
}

export interface CompanyPageStory extends StoryblokStory {
  content: {
    _uid: string;
    seo?: SeoBlok;
    hero: HeroBlok;
    body: any[];
    component: 'company_page';
  };
}

// Global Types
export interface SiteSettings {
  _uid: string;
  site_name: string;
  site_description: string;
  site_url: string;
  logo: StoryblokAsset;
  logo_dark?: StoryblokAsset;
  favicon: StoryblokAsset;
  social_links: SocialLinkBlok[];
  announcement_bar?: AnnouncementBarBlok;
  component: 'site_settings';
}

export interface SocialLinkBlok {
  _uid: string;
  platform: string;
  url: string;
  component: 'social_link';
}

export interface AnnouncementBarBlok {
  _uid: string;
  text: string;
  link?: StoryblokLink;
  enabled: boolean;
  component: 'announcement_bar';
}

export interface PrimaryNav {
  _uid: string;
  menu_items: NavItemBlok[];
  cta_text?: string;
  cta_link?: StoryblokLink;
  component: 'primary_nav';
}

export interface NavItemBlok {
  _uid: string;
  label: string;
  link?: StoryblokLink;
  children?: NavItemBlok[];
  component: 'nav_item';
}

export interface FooterNav {
  _uid: string;
  columns: FooterColumnBlok[];
  bottom_links: NavItemBlok[];
  copyright_text: string;
  component: 'footer_nav';
}

export interface FooterColumnBlok {
  _uid: string;
  title: string;
  links: NavItemBlok[];
  component: 'footer_column';
}

// Union type for all blocks
export type StoryblokBlok = 
  | SeoBlok
  | HeroBlok
  | FeatureGridBlok
  | FeatureItemBlok
  | StatsBlok
  | StatItemBlok
  | TestimonialBlok
  | LogoCloudBlok
  | LogoItemBlok
  | CtaBlok
  | FaqBlok
  | FaqItemBlok
  | PricingCardBlok
  | TabsBlok
  | TabItemBlok
  | StepsBlok
  | StepItemBlok
  | SectionBlok
  | MediaBlok
  | IntegrationTileBlok
  | ResourceCardBlok
  | CalloutBlok
  | FormEmbedBlok;
