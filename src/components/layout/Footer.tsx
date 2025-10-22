import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight 
} from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

const footerNavigation = {
  product: {
    title: 'Product',
    links: [
      { name: 'Overview', href: '/product' },
      { name: 'Talent Marketplace', href: '/product/modules/talent-marketplace' },
      { name: 'Talent Intelligence', href: '/product/modules/talent-intelligence' },
      { name: 'Talent Development', href: '/product/modules/talent-development' },
      { name: 'Security & Compliance', href: '/security' },
      { name: 'Integrations', href: '/product/integrations' },
    ] as FooterLink[],
  },
  solutions: {
    title: 'Solutions',
    links: [
      { name: 'Government Procurement', href: '/solutions/government-procurement' },
      { name: 'Program Delivery', href: '/solutions/program-delivery' },
      { name: 'HR & Talent Acquisition', href: '/solutions/hr-talent-acquisition' },
      { name: 'Vendor Management', href: '/solutions/vendor-management' },
      { name: 'Partner Ecosystem', href: '/solutions/partner-ecosystem' },
    ] as FooterLink[],
  },
  resources: {
    title: 'Resources',
    links: [
      { name: 'All Resources', href: '/resources' },
      { name: 'Guides & Playbooks', href: '/resources?type=guide' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/resources?type=blog' },
      { name: 'Webinars', href: '/resources?type=webinar' },
      { name: 'Product Updates', href: '/resources?type=changelog' },
    ] as FooterLink[],
  },
  company: {
    title: 'Company',
    links: [
      { name: 'About', href: '/company/about' },
      { name: 'Careers', href: '/company/careers' },
      { name: 'Press & Media', href: '/company/press' },
      { name: 'Contact', href: '/company/contact' },
      { name: 'Status', href: 'https://status.scoutable.app', external: true },
    ] as FooterLink[],
  },
  legal: {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/legal/privacy' },
      { name: 'Terms of Service', href: '/legal/terms' },
      { name: 'Acceptable Use', href: '/legal/acceptable-use' },
      { name: 'Security Posture', href: '/security' },
    ] as FooterLink[],
  },
};

const socialLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/scoutable',
    icon: Twitter,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/scoutable',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/scoutable',
    icon: Github,
  },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-50 dark:bg-secondary-900 border-t border-secondary-200 dark:border-secondary-700">
      {/* Newsletter Section */}
      <div className="border-b border-secondary-200 dark:border-secondary-700">
        <div className="container-wide py-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-2">
                Stay updated with Scoutable
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400">
                Get the latest product updates, industry insights, and talent intelligence delivered to your inbox.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="email-newsletter" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-newsletter"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-600 rounded-md bg-white dark:bg-secondary-800 text-secondary-900 dark:text-secondary-100 placeholder:text-secondary-500 dark:placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <Button rightIcon={ArrowRight}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="relative h-8 w-8">
                  <Image
                    src="/logo.svg"
                    alt="Scoutable"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-bold text-secondary-900 dark:text-secondary-100">
                  Scoutable
                </span>
              </Link>

              <p className="text-secondary-600 dark:text-secondary-400 max-w-md">
                Find, trust, and deploy specialist talent — fast. One place to run panels, suppliers, and contractors with real-time skills intelligence.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-secondary-600 dark:text-secondary-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Sydney, Australia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <a 
                    href="mailto:hello@scoutable.app"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    hello@scoutable.app
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <a 
                    href="tel:+61-2-8123-4567"
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    +61 2 8123 4567
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-1"
                    aria-label={`Follow us on ${item.name}`}
                  >
                    <item.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerNavigation).map(([key, section]) => (
            <div key={key}>
              <h4 className="text-sm font-semibold text-secondary-900 dark:text-secondary-100 uppercase tracking-wider mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm focus:outline-none focus:underline"
                    >
                      {link.name}
                      {link.external && (
                        <span className="sr-only"> (opens in new tab)</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-200 dark:border-secondary-700">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-secondary-600 dark:text-secondary-400">
              <p>
                © {currentYear} Scoutable Pty Ltd. All rights reserved.
              </p>
              <p>
                ABN: 12 345 678 901
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-secondary-600 dark:text-secondary-400">
                Built for Australian Government & Enterprise
              </span>
              <div className="flex items-center space-x-1">
                <div className="h-2 w-2 rounded-full bg-success-500"></div>
                <span className="text-success-600 dark:text-success-400 font-medium">
                  All systems operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
