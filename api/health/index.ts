/**
 * Health check endpoint for Wervify API services.
 */
export default async function handler(_req: any, res: any) {
  return res.status(200).json({
    status: 'ok',
    service: 'wervify-api',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
}
