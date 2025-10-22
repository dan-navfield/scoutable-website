import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { Home, RefreshCw, AlertTriangle, Mail } from 'lucide-react';

const Custom500: React.FC = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Layout
      seo={{
        title: 'Server Error',
        description: 'We\'re experiencing technical difficulties. Please try again later.',
        noindex: true,
      }}
    >
      <div className="min-h-[60vh] flex items-center justify-center py-16">
        <div className="container-narrow text-center">
          <div className="space-y-8">
            {/* Error illustration */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="text-8xl font-bold text-error-200 dark:text-error-800 select-none">
                  500
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <AlertTriangle className="h-16 w-16 text-error-600 dark:text-error-400" />
                </div>
              </div>
            </div>

            {/* Error message */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
                Something went wrong
              </h1>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
                We're experiencing technical difficulties on our end. Our team has been notified and is working to fix the issue.
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleRefresh} leftIcon={RefreshCw}>
                Try Again
              </Button>
              <Link href="/">
                <Button variant="secondary" leftIcon={Home}>
                  Go Home
                </Button>
              </Link>
            </div>

            {/* Status and support info */}
            <Card className="max-w-2xl mx-auto">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <h2 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 mb-2">
                    What you can do
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <RefreshCw className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <h3 className="font-medium text-secondary-900 dark:text-secondary-100">
                      Wait a moment
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      Try refreshing the page in a few minutes. The issue might resolve itself.
                    </p>
                  </div>

                  <div className="text-center space-y-2">
                    <div className="flex justify-center">
                      <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                    <h3 className="font-medium text-secondary-900 dark:text-secondary-100">
                      Contact support
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      If the problem persists, please let us know at{' '}
                      <a 
                        href="mailto:support@scoutable.app" 
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        support@scoutable.app
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status page link */}
            <div className="text-center">
              <p className="text-sm text-secondary-600 dark:text-secondary-400 mb-4">
                Check our system status for real-time updates
              </p>
              <a
                href="https://status.scoutable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
              >
                <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                <span className="text-sm font-medium">Visit Status Page</span>
              </a>
            </div>

            {/* Error ID for support */}
            <div className="text-center">
              <p className="text-xs text-secondary-500 dark:text-secondary-400">
                Error ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Custom500;
