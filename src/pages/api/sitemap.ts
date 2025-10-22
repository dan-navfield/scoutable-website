import { NextApiRequest, NextApiResponse } from 'next';
import { generateSitemap } from '@/lib/storyblok';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const sitemapData = await generateSitemap();
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapData
    .map(
      (item: any) => `
  <url>
    <loc>${process.env.NEXT_PUBLIC_SITE_URL}/${item.slug}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.status(200).send(sitemap);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ message: 'Error generating sitemap' });
  }
}
