import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { Home, Search, ArrowLeft, HelpCircle } from 'lucide-react';

const popularLinks = [
  { name: 'Product Overview', href: '/product' },
  { name: 'Request a Demo', href: '/demo' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact Us', href: '/company/contact' },
  { name: 'About Scoutable', href: '/company/about' },
];

const Custom404: React.FC = () => {
  return (
    <Layout
      seo={{
        title: 'Page Not Found',
        description: 'The page you\'re looking for doesn\'t exist. Find what you need from our popular pages.',
        noindex: true,
      }}
    >
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="container-narrow text-center">
          <div className="space-y-8">
            {/* Error illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-8xl font-bold text-primary-200 dark:text-primary-800 select-none">
                  404
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <HelpCircle className="h-16 w-16 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
            </div>

            {/* Error message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
                Page not found
              </h1>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => window.history.back()} leftIcon={ArrowLeft}>
                Go Back
              </Button>
              <Link href="/">
                <Button variant="secondary" leftIcon={Home}>
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Popular links */}
            <Card className="max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                    Popular pages
                  </h2>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    Here are some pages you might be looking for:
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {popularLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block p-3 rounded-md border border-secondary-200 dark:border-secondary-700 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950 transition-all duration-200 text-left group"
                    >
                      <span className="text-secondary-700 dark:text-secondary-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Search suggestion */}
            <div className="text-center space-y-4">
              <p className="text-secondary-600 dark:text-secondary-400">
                Still can't find what you're looking for?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/resources">
                  <Button variant="outline" leftIcon={Search}>
                    Search Resources
                  </Button>
                </Link>
                <Link href="/company/contact">
                  <Button variant="outline">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom404;
