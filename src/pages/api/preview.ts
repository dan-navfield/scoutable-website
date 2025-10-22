import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { secret, slug = '' } = req.query;

  // Check the secret and next parameters
  if (secret !== process.env.STORYBLOK_PREVIEW_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({});

  // Redirect to the path from the fetched post
  // We don't redirect to req.query.slug as that might lead to open redirect vulnerabilities
  const path = `/${slug}`.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
  res.redirect(path);
}
