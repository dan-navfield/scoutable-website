import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Clear the preview mode cookies
  res.clearPreviewData();

  // Redirect the user back to the index page
  res.redirect('/');
}
