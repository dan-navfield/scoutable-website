import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const robots = `User-agent: *
Allow: /

# Disallow preview and API routes
Disallow: /api/
Disallow: /preview/

# Sitemap
Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1`;

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.status(200).send(robots);
}
