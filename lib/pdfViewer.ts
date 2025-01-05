// pages/api/pdf-viewer.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { url } = req.query;
    
    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL parameter is required' });
    }

    // Remove any potential path traversal attempts
    const sanitizedUrl = url.replace(/\.\./g, '');
    
    // Construct the path to the PDF file in the public directory
    const pdfPath = path.join(process.cwd(), 'public', sanitizedUrl);

    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    // Get file stats
    const stat = fs.statSync(pdfPath);

    // Set appropriate headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Disposition', 'inline; filename=' + path.basename(pdfPath));

    // Stream the PDF file
    const pdfStream = fs.createReadStream(pdfPath);
    pdfStream.pipe(res);
  } catch (error) {
    console.error('Error serving PDF:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}