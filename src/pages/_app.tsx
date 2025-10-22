import type { AppProps } from 'next/app';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import { DefaultSeo } from 'next-seo';
import '@/styles/globals.css';

// Import Storyblok components
import Hero from '@/components/storyblok/Hero';
import FeatureGrid from '@/components/storyblok/FeatureGrid';
import Stats from '@/components/storyblok/Stats';
import Testimonial from '@/components/storyblok/Testimonial';
import LogoCloud from '@/components/storyblok/LogoCloud';
import CTA from '@/components/storyblok/CTA';

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
  components: {
    hero: Hero,
    feature_grid: FeatureGrid,
    stats: Stats,
    testimonial: Testimonial,
    logo_cloud: LogoCloud,
    cta: CTA,
  },
  apiOptions: {
    region: 'au',
  },
});

// Default SEO configuration
const defaultSEO = {
  titleTemplate: '%s | Scoutable',
  defaultTitle: 'Scoutable - Find, trust, and deploy specialist talent — fast',
  description: 'One place to run panels, suppliers, and contractors with real-time skills intelligence. Built for government and enterprise: security first, people-centred by design.',
  canonical: process.env.NEXT_PUBLIC_SITE_URL,
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Scoutable',
    title: 'Scoutable - Find, trust, and deploy specialist talent — fast',
    description: 'One place to run panels, suppliers, and contractors with real-time skills intelligence. Built for government and enterprise: security first, people-centred by design.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Scoutable - Talent marketplace and intelligence platform',
      },
    ],
  },
  twitter: {
    handle: '@scoutable',
    site: '@scoutable',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#2563eb',
    },
    {
      name: 'author',
      content: 'Scoutable',
    },
    {
      name: 'keywords',
      content: 'talent marketplace, government contractors, enterprise hiring, skills intelligence, talent acquisition, vendor management, Australia',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://a.storyblok.com',
    },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Component {...pageProps} />
    </>
  );
}
