/** @type {import('next').NextConfig} */
module.exports = {
  target: 'serverless',
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
}
