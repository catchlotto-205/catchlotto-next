/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Transpile packages from monorepo
  transpilePackages: ['@catchlotto/ui', '@catchlotto/utils', '@catchlotto/config'],
};

module.exports = nextConfig;
