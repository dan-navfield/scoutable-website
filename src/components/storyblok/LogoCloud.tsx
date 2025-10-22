import React from 'react';
import Image from 'next/image';
import { storyblokEditable } from '@storyblok/react';
import { LogoCloudBlok, LogoItemBlok } from '@/types/storyblok';

interface LogoCloudProps {
  blok: LogoCloudBlok;
}

const LogoCloud: React.FC<LogoCloudProps> = ({ blok }) => {
  const { title, logos } = blok;

  return (
    <section {...storyblokEditable(blok)} className="py-16 sm:py-24">
      <div className="container-wide">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-lg font-semibold text-secondary-600 dark:text-secondary-400">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <LogoItem key={logo._uid} blok={logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface LogoItemProps {
  blok: LogoItemBlok;
}

const LogoItem: React.FC<LogoItemProps> = ({ blok }) => {
  const { name, logo, url } = blok;

  const logoElement = (
    <div 
      {...storyblokEditable(blok)}
      className="flex items-center justify-center p-4 transition-all duration-200 hover:scale-105"
    >
      <div className="relative h-12 w-full max-w-32">
        <Image
          src={logo.filename}
          alt={logo.alt || `${name} logo`}
          fill
          className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-200 dark:opacity-40 dark:hover:opacity-70"
        />
      </div>
    </div>
  );

  if (url?.cached_url || url?.url) {
    return (
      <a
        href={url.cached_url || url.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
        aria-label={`Visit ${name}`}
      >
        {logoElement}
      </a>
    );
  }

  return logoElement;
};

export default LogoCloud;
