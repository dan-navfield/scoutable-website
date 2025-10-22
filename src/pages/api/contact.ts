import { NextApiRequest, NextApiResponse } from 'next';
import { isValidEmail, isValidAustralianPhone } from '@/lib/utils';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  type: 'general' | 'demo' | 'support' | 'partnership';
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, company, phone, message, type }: ContactFormData = req.body;

    // Validation
    const errors: string[] = [];

    if (!name || name.trim().length < 2) {
      errors.push('Name is required and must be at least 2 characters');
    }

    if (!email || !isValidEmail(email)) {
      errors.push('Valid email address is required');
    }

    if (!message || message.trim().length < 10) {
      errors.push('Message is required and must be at least 10 characters');
    }

    if (phone && !isValidAustralianPhone(phone)) {
      errors.push('Please provide a valid Australian phone number');
    }

    if (!type || !['general', 'demo', 'support', 'partnership'].includes(type)) {
      errors.push('Valid inquiry type is required');
    }

    if (errors.length > 0) {
      return res.status(400).json({ message: 'Validation failed', errors });
    }

    // Here you would typically:
    // 1. Send email notification
    // 2. Save to database
    // 3. Integrate with CRM (HubSpot)
    // 4. Send auto-response

    // For now, we'll just log and return success
    console.log('Contact form submission:', {
      name,
      email,
      company,
      phone,
      message,
      type,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    res.status(200).json({
      message: 'Thank you for your inquiry. We\'ll get back to you within 24 hours.',
      success: true,
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      message: 'Something went wrong. Please try again or contact us directly.',
      success: false,
    });
  }
}
