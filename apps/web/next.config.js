/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile packages from monorepo
  transpilePackages: ['@catchlotto/ui', '@catchlotto/utils', '@catchlotto/config'],
  // Netlify Next.js plugin will handle the deployment automatically
};

module.exports = nextConfig;
