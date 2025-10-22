import React from 'react';
import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react';
import { CtaBlok } from '@/types/storyblok';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  blok: CtaBlok;
}

const CTA: React.FC<CTAProps> = ({ blok }) => {
  const {
    headline,
    description,
    button_text,
    button_link,
    variant = 'default',
    background = 'default',
  } = blok;

  const backgroundStyles = {
    default: 'bg-secondary-50 dark:bg-secondary-800',
    primary: 'bg-primary-600 dark:bg-primary-700',
    secondary: 'bg-secondary-100 dark:bg-secondary-800',
  };

  const textStyles = {
    default: {
      headline: 'text-secondary-900 dark:text-secondary-100',
      description: 'text-secondary-600 dark:text-secondary-400',
    },
    primary: {
      headline: 'text-white',
      description: 'text-primary-100',
    },
    secondary: {
      headline: 'text-secondary-900 dark:text-secondary-100',
      description: 'text-secondary-700 dark:text-secondary-300',
    },
  };

  const buttonVariant = background === 'primary' ? 'secondary' : 'primary';

  const renderContent = () => (
    <>
      <div className="space-y-4">
        <h2 className={cn(
          'text-3xl font-bold tracking-tight sm:text-4xl',
          textStyles[background].headline
        )}>
          {headline}
        </h2>
        
        {description && (
          <p className={cn(
            'text-lg max-w-3xl',
            variant === 'centered' ? 'mx-auto' : '',
            textStyles[background].description
          )}>
            {description}
          </p>
        )}
      </div>

      <div className={cn(
        'flex',
        variant === 'centered' ? 'justify-center' : 'justify-start'
      )}>
        <Link href={button_link.cached_url || button_link.url}>
          <Button 
            variant={buttonVariant} 
            size="lg" 
            rightIcon={ArrowRight}
          >
            {button_text}
          </Button>
        </Link>
      </div>
    </>
  );

  if (variant === 'split') {
    return (
      <section {...storyblokEditable(blok)} className="py-16 sm:py-24">
        <div className={cn('rounded-2xl', backgroundStyles[background])}>
          <div className="container-wide py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className={cn(
                  'text-3xl font-bold tracking-tight sm:text-4xl',
                  textStyles[background].headline
                )}>
                  {headline}
                </h2>
                
                {description && (
                  <p className={cn(
                    'text-lg',
                    textStyles[background].description
                  )}>
                    {description}
                  </p>
                )}
              </div>

              <div className="flex justify-start lg:justify-end">
                <Link href={button_link.cached_url || button_link.url}>
                  <Button 
                    variant={buttonVariant} 
                    size="lg" 
                    rightIcon={ArrowRight}
                  >
                    {button_text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section {...storyblokEditable(blok)} className="py-16 sm:py-24">
      <div className={cn('rounded-2xl', backgroundStyles[background])}>
        <div className="container-wide py-16">
          <div className={cn(
            'space-y-8',
            variant === 'centered' ? 'text-center' : ''
          )}>
            {renderContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
