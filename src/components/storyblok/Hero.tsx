import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react';
import { HeroBlok } from '@/types/storyblok';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  blok: HeroBlok;
}

const Hero: React.FC<HeroProps> = ({ blok }) => {
  const {
    eyebrow,
    heading,
    subheading,
    description,
    primary_cta_text,
    primary_cta_link,
    secondary_cta_text,
    secondary_cta_link,
    image,
    video_url,
    background_variant = 'default',
  } = blok;

  const backgroundStyles = {
    default: 'bg-white dark:bg-secondary-900',
    gradient: 'bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950',
    pattern: 'bg-white dark:bg-secondary-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100 via-white to-white dark:from-primary-950 dark:via-secondary-900 dark:to-secondary-900',
  };

  return (
    <section
      {...storyblokEditable(blok as any)}
      className={cn(
        'relative overflow-hidden py-16 sm:py-24 lg:py-32',
        backgroundStyles[background_variant]
      )}
    >
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="flex flex-col justify-center space-y-8">
            {eyebrow && (
              <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200 w-fit">
                {eyebrow}
              </div>
            )}
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl lg:text-6xl">
                {heading}
              </h1>
              
              {subheading && (
                <h2 className="text-xl font-medium text-secondary-700 dark:text-secondary-300 sm:text-2xl">
                  {subheading}
                </h2>
              )}
              
              {description && (
                <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl">
                  {description}
                </p>
              )}
            </div>
            
            {/* CTAs */}
            {(primary_cta_text || secondary_cta_text) && (
              <div className="flex flex-col sm:flex-row gap-4">
                {primary_cta_text && primary_cta_link && (
                  <Link href={primary_cta_link.cached_url || primary_cta_link.url}>
                    <Button size="lg" rightIcon={ArrowRight}>
                      {primary_cta_text}
                    </Button>
                  </Link>
                )}
                
                {secondary_cta_text && secondary_cta_link && (
                  <Link href={secondary_cta_link.cached_url || secondary_cta_link.url}>
                    <Button 
                      variant="secondary" 
                      size="lg"
                      leftIcon={video_url ? Play : undefined}
                    >
                      {secondary_cta_text}
                    </Button>
                  </Link>
                )}
              </div>
            )}
          </div>
          
          {/* Media */}
          {(image || video_url) && (
            <div className="relative">
              {image && (
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src={image.filename}
                    alt={image.alt || heading}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              
              {video_url && (
                <div className="relative aspect-video overflow-hidden rounded-2xl shadow-2xl">
                  <iframe
                    src={video_url}
                    title={heading}
                    className="absolute inset-0 h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 h-72 w-72 rounded-full bg-primary-200 opacity-20 blur-3xl dark:bg-primary-800" />
              <div className="absolute -bottom-8 -left-8 h-64 w-64 rounded-full bg-secondary-200 opacity-20 blur-3xl dark:bg-secondary-700" />
            </div>
          )}
        </div>
      </div>
      
      {/* Background decoration */}
      {background_variant === 'pattern' && (
        <div className="absolute inset-0 bg-grid-secondary-100/[0.02] bg-[size:60px_60px] dark:bg-grid-secondary-800/[0.02]" />
      )}
    </section>
  );
};

export default Hero;
