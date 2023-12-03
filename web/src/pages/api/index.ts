import { getAccessToken } from '@auth0/nextjs-auth0'
import httpProxyMiddleware from 'next-http-proxy-middleware'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { accessToken } = await getAccessToken(req, res)

  console.log('accessToken', accessToken)
  return httpProxyMiddleware(req, res, {
    target: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  })
}
