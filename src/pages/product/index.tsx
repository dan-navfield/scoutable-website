import React from 'react';
import { Layout } from '@/components/layout';
import { Button, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { 
  Users, 
  Brain, 
  TrendingUp, 
  Shield, 
  Zap, 
  Target,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react';

const modules = [
  {
    id: 'talent-marketplace',
    icon: Users,
    name: 'Talent Marketplace',
    tagline: 'Verified specialists on demand',
    description: 'Access 10,000+ pre-vetted contractors across technology, consulting, and specialist domains with intelligent matching and automated vetting.',
    features: [
      'Pre-vetted specialist profiles',
      'Intelligent skills matching',
      'Automated compliance checking',
      'Real-time availability',
      'Integrated contracting',
    ],
    href: '/product/modules/talent-marketplace',
  },
  {
    id: 'talent-intelligence',
    icon: Brain,
    name: 'Talent Intelligence',
    tagline: 'Skills graph, insights, bench & market signals',
    description: 'Real-time skills intelligence across your talent ecosystem with predictive analytics, market insights, and capability gap analysis.',
    features: [
      'Dynamic skills graph',
      'Market rate intelligence',
      'Capability gap analysis',
      'Predictive availability',
      'Performance analytics',
    ],
    href: '/product/modules/talent-intelligence',
  },
  {
    id: 'talent-development',
    icon: TrendingUp,
    name: 'Talent Development',
    tagline: 'Grow capability across teams and suppliers',
    description: 'Structured pathways for capability development across internal teams and external suppliers with skills tracking and certification management.',
    features: [
      'Skills development pathways',
      'Certification tracking',
      'Learning recommendations',
      'Progress monitoring',
      'Supplier capability building',
    ],
    href: '/product/modules/talent-development',
  },
];

const coreFeatures = [
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'IRAP-aligned security posture with data residency, RBAC, and comprehensive audit trails.',
  },
  {
    icon: Zap,
    title: 'Rapid Deployment',
    description: 'From brief to deployment in days, not months, with pre-configured workflows.',
  },
  {
    icon: Target,
    title: 'Intelligent Matching',
    description: 'AI-powered matching based on skills, experience, availability, and cultural fit.',
  },
];

const howItWorks = [
  {
    step: 1,
    title: 'Define Requirements',
    description: 'Create detailed briefs with skills, experience, and compliance requirements using our guided workflow.',
  },
  {
    step: 2,
    title: 'Intelligent Matching',
    description: 'Our AI analyses your requirements against our verified talent pool and market intelligence.',
  },
  {
    step: 3,
    title: 'Deploy & Manage',
    description: 'Select, contract, and manage your specialists with integrated tools and real-time insights.',
  },
];

const ProductPage: React.FC = () => {
  return (
    <Layout
      seo={{
        title: 'Product Overview',
        description: 'Discover how Scoutable\'s talent marketplace and intelligence platform helps government and enterprise find, trust, and deploy specialist talent faster.',
      }}
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950 py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                Product Overview
              </div>
              
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl lg:text-6xl">
                  One platform for all your talent needs
                </h1>
                
                <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl">
                  Find, trust, and deploy specialist talent with real-time skills intelligence. Built for government and enterprise with security-first design.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/demo">
                  <Button size="lg" rightIcon={ArrowRight}>
                    Request a Demo
                  </Button>
                </Link>
                <Button variant="secondary" size="lg" leftIcon={Play}>
                  Watch Overview
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl p-8">
                <div className="h-full bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary-600 rounded-lg mx-auto flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      Interactive Product Demo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              How Scoutable Works
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Three simple steps to transform your talent acquisition process
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                <Card className="h-full" padding="lg">
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-600 text-white font-bold">
                        {item.step}
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Arrow connector */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 sm:py-24 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Three Integrated Modules
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Each module works independently or together to create a comprehensive talent ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:gap-12">
            {modules.map((module, index) => (
              <Card key={module.id} className="overflow-hidden" hover>
                <CardContent className="p-0">
                  <div className={cn(
                    'grid grid-cols-1 lg:grid-cols-2 gap-0',
                    index % 2 === 1 && 'lg:grid-flow-col-dense'
                  )}>
                    {/* Content */}
                    <div className={cn(
                      'p-8 lg:p-12 space-y-6',
                      index % 2 === 1 && 'lg:col-start-2'
                    )}>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                          <module.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
                            {module.name}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {module.tagline}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-lg text-secondary-600 dark:text-secondary-400">
                        {module.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400 flex-shrink-0" />
                            <span className="text-secondary-600 dark:text-secondary-400">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href={module.href}>
                        <Button variant="outline" rightIcon={ArrowRight}>
                          Learn More
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Visual */}
                    <div className={cn(
                      'bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-800 p-8 lg:p-12 flex items-center justify-center',
                      index % 2 === 1 && 'lg:col-start-1'
                    )}>
                      <div className="w-full max-w-sm aspect-square bg-white dark:bg-secondary-800 rounded-2xl shadow-lg flex items-center justify-center">
                        <module.icon className="h-24 w-24 text-primary-600 dark:text-primary-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Built for Enterprise & Government
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Security-first architecture with the flexibility and scalability you need
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="text-center" padding="lg">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <feature.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600 dark:bg-primary-700">
        <div className="container-wide text-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to transform your talent acquisition?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join leading government agencies and enterprises who trust Scoutable to find, vet, and deploy specialist talent at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="secondary" size="lg" rightIcon={ArrowRight}>
                  Request a Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" size="lg" className="text-white hover:bg-primary-700">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductPage;
