import React from 'react';
import { NextSeo } from 'next-seo';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  seo?: {
    title?: string;
    description?: string;
    canonical?: string;
    noindex?: boolean;
    openGraph?: {
      title?: string;
      description?: string;
      images?: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    };
    twitter?: {
      cardType?: 'summary' | 'summary_large_image';
      site?: string;
      handle?: string;
    };
  };
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className,
  seo = {}
}) => {
  const {
    title,
    description,
    canonical,
    noindex = false,
    openGraph,
    twitter,
  } = seo;

  const defaultTitle = 'Scoutable - Find, trust, and deploy specialist talent — fast';
  const defaultDescription = 'One place to run panels, suppliers, and contractors with real-time skills intelligence. Built for government and enterprise: security first, people-centred by design.';

  return (
    <>
      <NextSeo
        title={title ? `${title} | Scoutable` : defaultTitle}
        description={description || defaultDescription}
        canonical={canonical}
        noindex={noindex}
        openGraph={{
          type: 'website',
          locale: 'en_AU',
          url: canonical || process.env.NEXT_PUBLIC_SITE_URL,
          siteName: 'Scoutable',
          title: openGraph?.title || title || defaultTitle,
          description: openGraph?.description || description || defaultDescription,
          images: openGraph?.images || [
            {
              url: `${process.env.NEXT_PUBLIC_SITE_URL}/og-image.jpg`,
              width: 1200,
              height: 630,
              alt: 'Scoutable - Talent marketplace and intelligence platform',
            },
          ],
        }}
        twitter={{
          handle: '@scoutable',
          site: '@scoutable',
          cardType: twitter?.cardType || 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#2563eb',
          },
          {
            name: 'msapplication-TileColor',
            content: '#2563eb',
          },
          {
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'default',
          },
        ]}
        additionalLinkTags={[
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
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-white dark:bg-secondary-900">
        <Header />
        
        <main 
          id="main-content"
          className={cn('flex-1 pt-16', className)}
          role="main"
        >
          {children}
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Layout;
