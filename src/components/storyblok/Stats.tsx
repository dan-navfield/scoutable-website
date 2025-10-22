import React from 'react';
import { storyblokEditable } from '@storyblok/react';
import { StatsBlok, StatItemBlok } from '@/types/storyblok';
import { cn } from '@/lib/utils';

interface StatsProps {
  blok: StatsBlok;
}

const Stats: React.FC<StatsProps> = ({ blok }) => {
  const { title, stats } = blok;

  return (
    <section {...storyblokEditable(blok as any)} className="py-16 sm:py-24">
      <div className="container-wide">
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
              {title}
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem key={stat._uid} blok={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  blok: StatItemBlok;
}

const StatItem: React.FC<StatItemProps> = ({ blok }) => {
  const { value, label, qualifier } = blok;

  return (
    <div {...storyblokEditable(blok as any)} className="text-center">
      <div className="space-y-2">
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-4xl font-bold text-primary-600 dark:text-primary-400 sm:text-5xl">
            {value}
          </span>
          {qualifier && (
            <span className="text-xl font-medium text-secondary-600 dark:text-secondary-400">
              {qualifier}
            </span>
          )}
        </div>
        <p className="text-lg font-medium text-secondary-900 dark:text-secondary-100">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Stats;
