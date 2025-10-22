import React, { useState } from 'react';
import { Layout } from '@/components/layout';
import { Button, Input, Textarea, Card, CardContent } from '@/components/ui';
import { cn } from '@/lib/utils';
import { 
  CheckCircle, 
  Users, 
  Shield, 
  Zap, 
  Calendar,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const benefits = [
  {
    icon: Users,
    title: 'Access 10,000+ Verified Specialists',
    description: 'Pre-vetted contractors across technology, consulting, and specialist domains',
  },
  {
    icon: Shield,
    title: 'Government-Grade Security',
    description: 'IRAP-aligned security posture with data residency and compliance built-in',
  },
  {
    icon: Zap,
    title: 'Deploy Teams 5x Faster',
    description: 'From brief to deployment in days, not months, with intelligent matching',
  },
];

const DemoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    role: '',
    teamSize: '',
    useCase: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'demo',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout
      seo={{
        title: 'Request a Demo',
        description: 'See how Scoutable can help you find, trust, and deploy specialist talent faster. Book a personalised demo with our team.',
      }}
    >
      <div className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-secondary-900 dark:text-secondary-100 sm:text-5xl">
                  See Scoutable in Action
                </h1>
                <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
                  Book a personalised demo and discover how leading government agencies and enterprises are transforming their talent acquisition with Scoutable.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-400">
                        <benefit.icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                        {benefit.title}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* What to Expect */}
              <Card>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                    What to expect in your demo:
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Live walkthrough of the platform',
                      'Customised use case discussion',
                      'Security and compliance overview',
                      'Integration possibilities',
                      'Pricing and implementation timeline',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-success-600 dark:text-success-400 flex-shrink-0" />
                        <span className="text-secondary-600 dark:text-secondary-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-secondary-100">
                  Prefer to talk directly?
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+61-2-8123-4567" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      +61 2 8123 4567
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:demo@scoutable.app" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      demo@scoutable.app
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card>
                <CardContent className="space-y-6">
                  {isSubmitted ? (
                    <div className="text-center space-y-4">
                      <div className="flex justify-center">
                        <CheckCircle className="h-12 w-12 text-success-600 dark:text-success-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-secondary-100">
                        Demo Request Received!
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        Thank you for your interest in Scoutable. Our team will contact you within 24 hours to schedule your personalised demo.
                      </p>
                      <Button onClick={() => window.location.href = '/'}>
                        Return to Home
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="text-center">
                        <h2 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100">
                          Request Your Demo
                        </h2>
                        <p className="text-secondary-600 dark:text-secondary-400 mt-2">
                          Takes less than 2 minutes
                        </p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Input
                            label="Full Name *"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            fullWidth
                          />
                          <Input
                            label="Work Email *"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            fullWidth
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <Input
                            label="Company *"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            required
                            fullWidth
                          />
                          <Input
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                          />
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                              Your Role *
                            </label>
                            <select
                              name="role"
                              value={formData.role}
                              onChange={handleChange}
                              required
                              className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                              <option value="">Select your role</option>
                              <option value="procurement">Procurement Manager</option>
                              <option value="hr">HR/Talent Acquisition</option>
                              <option value="pmo">PMO/Program Manager</option>
                              <option value="it">IT Manager</option>
                              <option value="executive">Executive/Director</option>
                              <option value="other">Other</option>
                            </select>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                              Team Size
                            </label>
                            <select
                              name="teamSize"
                              value={formData.teamSize}
                              onChange={handleChange}
                              className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            >
                              <option value="">Select team size</option>
                              <option value="1-10">1-10 people</option>
                              <option value="11-50">11-50 people</option>
                              <option value="51-200">51-200 people</option>
                              <option value="201-1000">201-1000 people</option>
                              <option value="1000+">1000+ people</option>
                            </select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-secondary-900 dark:text-secondary-100">
                            Primary Use Case
                          </label>
                          <select
                            name="useCase"
                            value={formData.useCase}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          >
                            <option value="">Select primary use case</option>
                            <option value="government-procurement">Government Procurement</option>
                            <option value="program-delivery">Program/Project Delivery</option>
                            <option value="talent-acquisition">Talent Acquisition</option>
                            <option value="vendor-management">Vendor Management</option>
                            <option value="partner-ecosystem">Partner Ecosystem</option>
                            <option value="other">Other</option>
                          </select>
                        </div>

                        <Textarea
                          label="Tell us about your requirements"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="What challenges are you looking to solve? Any specific requirements or questions?"
                          rows={4}
                          fullWidth
                        />

                        {error && (
                          <div className="text-sm text-error-600 dark:text-error-400 bg-error-50 dark:bg-error-900/20 p-3 rounded-md">
                            {error}
                          </div>
                        )}

                        <Button
                          type="submit"
                          loading={isSubmitting}
                          rightIcon={ArrowRight}
                          fullWidth
                          size="lg"
                        >
                          {isSubmitting ? 'Sending Request...' : 'Request Demo'}
                        </Button>

                        <p className="text-xs text-secondary-500 dark:text-secondary-400 text-center">
                          By submitting this form, you agree to our{' '}
                          <a href="/legal/privacy" className="underline hover:no-underline">
                            Privacy Policy
                          </a>{' '}
                          and{' '}
                          <a href="/legal/terms" className="underline hover:no-underline">
                            Terms of Service
                          </a>
                          .
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DemoPage;
