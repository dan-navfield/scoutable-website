import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import { FeatureGridBlok, FeatureItemBlok } from '@/types/storyblok';
import { Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import * as LucideIcons from 'lucide-react';

interface FeatureGridProps {
  blok: FeatureGridBlok;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ blok }) => {
  const { title, description, features, columns = '3' } = blok;

  const gridCols = {
    '2': 'grid-cols-1 md:grid-cols-2',
    '3': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    // Convert icon name to PascalCase and get from Lucide
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  return (
    <section {...storyblokEditable(blok)} className="py-16 sm:py-24">
      <div className="container-wide">
        {/* Header */}
        {(title || description) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={cn('grid gap-8', gridCols[columns])}>
          {features.map((feature) => (
            <FeatureItem key={feature._uid} blok={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeatureItemProps {
  blok: FeatureItemBlok;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ blok }) => {
  const { icon, title, description, link } = blok;

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-6 w-6" /> : null;
  };

  const content = (
    <Card 
      {...storyblokEditable(blok)}
      className="h-full transition-all duration-200 hover:shadow-lg group"
      padding="lg"
    >
      <CardContent className="space-y-4">
        {/* Icon */}
        {icon && (
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
            {getIcon(icon)}
          </div>
        )}

        {/* Content */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );

  if (link?.cached_url || link?.url) {
    return (
      <a
        href={link.cached_url || link.url}
        className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default FeatureGrid;
