import { NextApiRequest, NextApiResponse } from 'next';
import { isValidEmail } from '@/lib/utils';

interface NewsletterData {
  email: string;
  source?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email, source = 'website' }: NewsletterData = req.body;

    // Validation
    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ 
        message: 'Valid email address is required',
        success: false 
      });
    }

    // Here you would typically:
    // 1. Add to email marketing platform (e.g., Mailchimp, ConvertKit)
    // 2. Add to CRM (HubSpot)
    // 3. Send welcome email
    // 4. Track subscription event

    console.log('Newsletter subscription:', {
      email,
      source,
      timestamp: new Date().toISOString(),
      userAgent: req.headers['user-agent'],
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
    });

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    res.status(200).json({
      message: 'Thanks for subscribing! Check your email for confirmation.',
      success: true,
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      message: 'Something went wrong. Please try again.',
      success: false,
    });
  }
}
