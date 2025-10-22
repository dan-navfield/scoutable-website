import React from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { TestimonialBlok } from '@/types/storyblok';
import { Card, CardContent } from '@/components/ui';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  blok: TestimonialBlok;
}

const Testimonial: React.FC<TestimonialProps> = ({ blok }) => {
  const {
    quote,
    author_name,
    author_role,
    author_company,
    author_image,
    company_logo,
  } = blok;

  return (
    <section {...storyblokEditable(blok)} className="py-16 sm:py-24">
      <div className="container-narrow">
        <Card className="relative overflow-hidden" padding="xl">
          <CardContent className="space-y-8">
            {/* Quote Icon */}
            <div className="flex justify-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                <Quote className="h-6 w-6" />
              </div>
            </div>

            {/* Quote */}
            <blockquote className="text-center">
              <p className="text-xl font-medium text-secondary-900 dark:text-secondary-100 sm:text-2xl leading-relaxed">
                "{quote}"
              </p>
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-4">
                {author_image && (
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={author_image.filename}
                      alt={author_image.alt || author_name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                <div className="text-center">
                  <p className="font-semibold text-secondary-900 dark:text-secondary-100">
                    {author_name}
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {author_role}
                    {author_company && (
                      <>
                        {' at '}
                        <span className="font-medium">{author_company}</span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Company Logo */}
              {company_logo && (
                <div className="relative h-8 w-auto max-w-32">
                  <Image
                    src={company_logo.filename}
                    alt={company_logo.alt || `${author_company} logo`}
                    width={128}
                    height={32}
                    className="object-contain opacity-60 dark:opacity-40"
                  />
                </div>
              )}
            </div>
          </CardContent>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="h-24 w-24 rounded-full bg-primary-100 opacity-20 dark:bg-primary-900" />
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="h-32 w-32 rounded-full bg-secondary-100 opacity-20 dark:bg-secondary-800" />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Testimonial;
