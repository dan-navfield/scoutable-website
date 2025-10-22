import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Card, CardContent, Badge } from '@/components/ui';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { 
  Check, 
  X, 
  ArrowRight, 
  Users, 
  Building, 
  Crown,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const plans = [
  {
    id: 'agency',
    name: 'Agency',
    description: 'Perfect for government agencies and departments',
    price: 'Custom',
    priceQualifier: 'per month',
    popular: false,
    features: [
      'Up to 100 active contractors',
      'Basic talent marketplace access',
      'Standard compliance checking',
      'Email support',
      'Basic reporting',
      'Australian data residency',
      'IRAP alignment',
      'Standard integrations',
    ],
    notIncluded: [
      'Advanced analytics',
      'Custom workflows',
      'Dedicated support',
      'API access',
    ],
    cta: 'Contact Sales',
    href: '/demo',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For large organisations with complex needs',
    price: 'Custom',
    priceQualifier: 'per month',
    popular: true,
    features: [
      'Unlimited contractors',
      'Full talent marketplace access',
      'Advanced compliance & vetting',
      'Priority support',
      'Advanced analytics & reporting',
      'Australian data residency',
      'IRAP alignment',
      'All integrations included',
      'Custom workflows',
      'API access',
      'Dedicated account manager',
      'Custom training',
    ],
    notIncluded: [],
    cta: 'Request Demo',
    href: '/demo',
  },
  {
    id: 'contractor',
    name: 'Contractor',
    description: 'For individual contractors and consultants',
    price: 'Free',
    priceQualifier: 'forever',
    popular: false,
    features: [
      'Professional profile',
      'Skills verification',
      'Opportunity matching',
      'Basic messaging',
      'Portfolio showcase',
      'Availability calendar',
      'Performance tracking',
      'Mobile app access',
    ],
    notIncluded: [
      'Premium placement',
      'Advanced analytics',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Get Started',
    href: '/signup',
  },
];

const faqs = [
  {
    question: 'How does pricing work for government agencies?',
    answer: 'We offer flexible pricing models for government agencies including annual contracts, usage-based pricing, and volume discounts. Our team works with your procurement requirements to ensure compliance with government purchasing guidelines.',
  },
  {
    question: 'What\'s included in the IRAP alignment?',
    answer: 'Our platform follows IRAP (Information Security Registered Assessors Program) guidelines including data encryption, access controls, audit logging, and security monitoring. We provide detailed security documentation for your compliance teams.',
  },
  {
    question: 'Can we integrate with existing systems?',
    answer: 'Yes, Scoutable integrates with popular enterprise systems including Microsoft 365, Entra ID, ServiceNow, Workato, and more. We also provide REST APIs for custom integrations.',
  },
  {
    question: 'What support is available?',
    answer: 'Enterprise customers receive dedicated account management, priority support, and custom training. Agency plans include email support with guaranteed response times. All plans include comprehensive documentation and self-service resources.',
  },
  {
    question: 'Is there a minimum contract term?',
    answer: 'Enterprise and Agency plans typically require annual contracts. We offer flexible terms for pilot programs and can accommodate specific procurement requirements.',
  },
  {
    question: 'How does contractor verification work?',
    answer: 'All contractors undergo multi-stage verification including identity checks, qualification verification, reference checks, and skills assessments. Additional security clearance verification is available for government projects.',
  },
];

const comparisonFeatures = [
  {
    category: 'Core Features',
    features: [
      { name: 'Talent marketplace access', agency: true, enterprise: true, contractor: true },
      { name: 'Skills matching', agency: 'Basic', enterprise: 'Advanced', contractor: true },
      { name: 'Compliance checking', agency: 'Standard', enterprise: 'Advanced', contractor: 'Basic' },
      { name: 'Mobile app', agency: true, enterprise: true, contractor: true },
    ],
  },
  {
    category: 'Analytics & Reporting',
    features: [
      { name: 'Basic reporting', agency: true, enterprise: true, contractor: true },
      { name: 'Advanced analytics', agency: false, enterprise: true, contractor: false },
      { name: 'Custom dashboards', agency: false, enterprise: true, contractor: false },
      { name: 'API access', agency: false, enterprise: true, contractor: false },
    ],
  },
  {
    category: 'Support & Services',
    features: [
      { name: 'Email support', agency: true, enterprise: true, contractor: true },
      { name: 'Priority support', agency: false, enterprise: true, contractor: false },
      { name: 'Dedicated account manager', agency: false, enterprise: true, contractor: false },
      { name: 'Custom training', agency: false, enterprise: true, contractor: false },
    ],
  },
];

const PricingPage: React.FC = () => {
  const [showComparison, setShowComparison] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const renderFeatureValue = (value: boolean | string) => {
    if (value === true) {
      return <Check className="h-5 w-5 text-success-600 dark:text-success-400" />;
    } else if (value === false) {
      return <X className="h-5 w-5 text-secondary-400 dark:text-secondary-600" />;
    } else {
      return <span className="text-sm text-secondary-600 dark:text-secondary-400">{value}</span>;
    }
  };

  return (
    <Layout
      seo={{
        title: 'Pricing',
        description: 'Flexible pricing for government agencies, enterprises, and contractors. Find the right plan for your talent acquisition needs.',
      }}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="container-wide text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl">
                Simple, transparent pricing
              </h1>
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
                Choose the plan that fits your organisation. All plans include Australian data residency and IRAP-aligned security.
              </p>
            </div>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-secondary-600 dark:text-secondary-400">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success-600 dark:text-success-400" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success-600 dark:text-success-400" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-success-600 dark:text-success-400" />
                <span>Australian support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card 
                key={plan.id} 
                className={cn(
                  'relative overflow-hidden',
                  plan.popular && 'ring-2 ring-primary-600 dark:ring-primary-400'
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                
                <CardContent className={cn('space-y-6', plan.popular && 'pt-12')}>
                  {/* Header */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      {plan.id === 'agency' && <Building className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
                      {plan.id === 'enterprise' && <Crown className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
                      {plan.id === 'contractor' && <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />}
                      <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
                        {plan.name}
                      </h3>
                    </div>
                    <p className="text-secondary-600 dark:text-secondary-400">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center space-y-1">
                    <div className="flex items-baseline justify-center space-x-1">
                      <span className="text-4xl font-bold text-secondary-900 dark:text-secondary-100">
                        {plan.price}
                      </span>
                      {plan.priceQualifier && (
                        <span className="text-lg text-secondary-600 dark:text-secondary-400">
                          {plan.priceQualifier}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-secondary-900 dark:text-secondary-100">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-secondary-600 dark:text-secondary-400">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {plan.notIncluded.length > 0 && (
                      <ul className="space-y-2">
                        {plan.notIncluded.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <X className="h-4 w-4 text-secondary-400 dark:text-secondary-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-secondary-500 dark:text-secondary-500">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* CTA */}
                  <Link href={plan.href}>
                    <Button 
                      variant={plan.popular ? 'primary' : 'secondary'} 
                      fullWidth 
                      size="lg"
                      rightIcon={ArrowRight}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-wide">
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={() => setShowComparison(!showComparison)}
              rightIcon={showComparison ? ChevronUp : ChevronDown}
            >
              {showComparison ? 'Hide' : 'Show'} detailed comparison
            </Button>
          </div>

          {showComparison && (
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-secondary-200 dark:border-secondary-700">
                        <th className="text-left p-4 font-semibold text-secondary-900 dark:text-secondary-100">
                          Features
                        </th>
                        <th className="text-center p-4 font-semibold text-secondary-900 dark:text-secondary-100">
                          Agency
                        </th>
                        <th className="text-center p-4 font-semibold text-secondary-900 dark:text-secondary-100">
                          Enterprise
                        </th>
                        <th className="text-center p-4 font-semibold text-secondary-900 dark:text-secondary-100">
                          Contractor
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((category, categoryIndex) => (
                        <React.Fragment key={categoryIndex}>
                          <tr className="bg-secondary-100 dark:bg-secondary-700">
                            <td colSpan={4} className="p-4 font-semibold text-secondary-900 dark:text-secondary-100">
                              {category.category}
                            </td>
                          </tr>
                          {category.features.map((feature, featureIndex) => (
                            <tr key={featureIndex} className="border-b border-secondary-200 dark:border-secondary-700">
                              <td className="p-4 text-secondary-700 dark:text-secondary-300">
                                {feature.name}
                              </td>
                              <td className="p-4 text-center">
                                {renderFeatureValue(feature.agency)}
                              </td>
                              <td className="p-4 text-center">
                                {renderFeatureValue(feature.enterprise)}
                              </td>
                              <td className="p-4 text-center">
                                {renderFeatureValue(feature.contractor)}
                              </td>
                            </tr>
                          ))}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors"
                  >
                    <h3 className="font-semibold text-secondary-900 dark:text-secondary-100 pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-secondary-500 dark:text-secondary-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-secondary-500 dark:text-secondary-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
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
              Ready to get started?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join leading Australian government agencies and enterprises who trust Scoutable for their talent needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/demo">
                <Button variant="secondary" size="lg" rightIcon={ArrowRight}>
                  Request a Demo
                </Button>
              </Link>
              <Link href="/company/contact">
                <Button variant="ghost" size="lg" className="text-white hover:bg-primary-700">
                  Talk to Sales
                </Button>
              </Link>
            </div>
            <p className="text-sm text-primary-200">
              Questions? Contact our team at{' '}
              <a href="mailto:sales@scoutable.app" className="underline hover:no-underline">
                sales@scoutable.app
              </a>{' '}
              or{' '}
              <a href="tel:+61-2-8123-4567" className="underline hover:no-underline">
                +61 2 8123 4567
              </a>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
