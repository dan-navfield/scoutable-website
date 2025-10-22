import React from 'react';
import { Layout } from '@/components/layout';
import { Card, CardContent, Badge } from '@/components/ui';
import { 
  Shield, 
  Lock, 
  Eye, 
  Server, 
  Users, 
  FileText,
  CheckCircle,
  Globe,
  Database,
  Key
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'IRAP Aligned Security',
    description: 'Our platform follows Information Security Registered Assessors Program (IRAP) guidelines, ensuring government-grade security standards.',
    features: [
      'Regular security assessments',
      'Continuous monitoring',
      'Incident response procedures',
      'Security documentation',
    ],
  },
  {
    icon: Database,
    title: 'Australian Data Residency',
    description: 'All data is stored and processed within Australian borders, ensuring compliance with local data sovereignty requirements.',
    features: [
      'Sydney-based data centres',
      'No offshore data processing',
      'Compliance with Privacy Act 1988',
      'GDPR compliance for international users',
    ],
  },
  {
    icon: Lock,
    title: 'Encryption & Access Control',
    description: 'End-to-end encryption and robust access controls protect your sensitive information at all times.',
    features: [
      'AES-256 encryption at rest',
      'TLS 1.3 encryption in transit',
      'Role-based access control (RBAC)',
      'Multi-factor authentication (MFA)',
    ],
  },
  {
    icon: Eye,
    title: 'Audit & Compliance',
    description: 'Comprehensive audit logging and compliance reporting to meet your organisational requirements.',
    features: [
      'Complete audit trails',
      'Real-time monitoring',
      'Compliance reporting',
      'Data lineage tracking',
    ],
  },
];

const certifications = [
  {
    name: 'ISO 27001',
    description: 'Information Security Management',
    status: 'Certified',
    badge: 'success',
  },
  {
    name: 'SOC 2 Type II',
    description: 'Security, Availability & Confidentiality',
    status: 'Certified',
    badge: 'success',
  },
  {
    name: 'IRAP Assessment',
    description: 'Australian Government Security',
    status: 'In Progress',
    badge: 'warning',
  },
  {
    name: 'Privacy Act 1988',
    description: 'Australian Privacy Compliance',
    status: 'Compliant',
    badge: 'success',
  },
];

const dataHandling = [
  {
    category: 'Data Collection',
    practices: [
      'Minimal data collection principle',
      'Clear consent mechanisms',
      'Purpose limitation',
      'Data minimisation',
    ],
  },
  {
    category: 'Data Processing',
    practices: [
      'Automated processing controls',
      'Human oversight requirements',
      'Processing transparency',
      'Right to explanation',
    ],
  },
  {
    category: 'Data Storage',
    practices: [
      'Australian data centres only',
      'Encrypted storage systems',
      'Regular backup procedures',
      'Secure deletion protocols',
    ],
  },
  {
    category: 'Data Sharing',
    practices: [
      'Explicit consent required',
      'Data sharing agreements',
      'Third-party security validation',
      'Cross-border transfer controls',
    ],
  },
];

const SecurityPage: React.FC = () => {
  return (
    <Layout
      seo={{
        title: 'Security & Compliance',
        description: 'Learn about Scoutable\'s security measures, data protection practices, and compliance with Australian government standards including IRAP alignment.',
      }}
    >
      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
        <div className="container-wide">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200">
              Security & Compliance
            </div>
            
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl lg:text-6xl">
                Security first, people-centred by design
              </h1>
              
              <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
                Built for Australian government and enterprise with comprehensive security measures, data protection, and compliance frameworks.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-sm">
                <Globe className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                  Australian Data Residency
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-sm">
                <Shield className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                  IRAP Aligned
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white dark:bg-secondary-800 px-4 py-2 rounded-full shadow-sm">
                <Lock className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                  End-to-End Encryption
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Comprehensive Security Framework
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Multi-layered security approach designed to protect your most sensitive data and operations
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="h-full">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                      {feature.title}
                    </h3>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400 flex-shrink-0" />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 sm:py-24 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Independently verified security standards and compliance frameworks
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                      <FileText className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-secondary-600 dark:text-secondary-400">
                      {cert.description}
                    </p>
                  </div>
                  
                  <Badge 
                    variant={cert.badge as 'success' | 'warning'}
                    size="sm"
                  >
                    {cert.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl mb-4">
              Data Handling Practices
            </h2>
            <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
              Transparent and responsible data practices throughout the entire lifecycle
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {dataHandling.map((section, index) => (
              <Card key={index}>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                    {section.category}
                  </h3>
                  
                  <ul className="space-y-2">
                    {section.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-secondary-600 dark:text-secondary-400">
                          {practice}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-16 sm:py-24 bg-secondary-50 dark:bg-secondary-800">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-4xl">
                Advanced Access Control
              </h2>
              
              <p className="text-lg text-secondary-600 dark:text-secondary-400">
                Granular permissions and role-based access ensure that users only see and access what they need to do their job effectively.
              </p>
              
              <div className="space-y-4">
                {[
                  'Role-based access control (RBAC)',
                  'Multi-factor authentication (MFA)',
                  'Single sign-on (SSO) integration',
                  'Session management and timeout',
                  'IP whitelisting and geo-restrictions',
                  'Privileged access management (PAM)',
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900">
                      <CheckCircle className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-secondary-700 dark:text-secondary-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-8">
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                      <Key className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900 dark:text-secondary-100">
                        Access Control Matrix
                      </h3>
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        Granular permissions by role
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {['Admin', 'Manager', 'User', 'Contractor'].map((role, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary-50 dark:bg-secondary-700 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Users className="h-4 w-4 text-secondary-500 dark:text-secondary-400" />
                          <span className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                            {role}
                          </span>
                        </div>
                        <div className="flex space-x-1">
                          {Array.from({ length: 4 - index }).map((_, dotIndex) => (
                            <div key={dotIndex} className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full" />
                          ))}
                          {Array.from({ length: index }).map((_, dotIndex) => (
                            <div key={dotIndex} className="w-2 h-2 bg-secondary-300 dark:bg-secondary-600 rounded-full" />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow text-center">
          <Card>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
                  Questions about our security?
                </h2>
                <p className="text-secondary-600 dark:text-secondary-400">
                  Our security team is available to discuss your specific requirements and provide detailed documentation.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2 justify-center text-sm text-secondary-600 dark:text-secondary-400">
                  <span>📧 security@scoutable.app</span>
                  <span className="hidden sm:inline">•</span>
                  <span>📞 +61 2 8123 4567</span>
                </div>
                
                <p className="text-xs text-secondary-500 dark:text-secondary-400">
                  Security documentation and compliance reports available under NDA
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default SecurityPage;
