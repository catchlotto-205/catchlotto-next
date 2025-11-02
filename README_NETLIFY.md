# Netlify Deployment Guide

## Setup Instructions

1. **Connect Repository to Netlify**
   - Go to Netlify dashboard
   - Add new site from Git
   - Connect your repository (GitHub/GitLab/Bitbucket)
   - Select the repository

2. **Build Settings**
   - Netlify will automatically detect `netlify.toml` configuration
   - Base directory: `apps/web`
   - Build command: Automatically uses `pnpm install && pnpm build:web` (defined in netlify.toml)
   - Publish directory: `apps/web/.next` (handled by Next.js plugin)

3. **Environment Variables**
   - Add any required environment variables in Netlify dashboard
   - Go to Site settings → Environment variables
   - Add variables for production, preview, and branch deploys

4. **Preview Deployments**
   - Automatically enabled via `netlify.toml`
   - Every pull request will create a preview deployment
   - Branch deployments are also configured for non-main branches

## Features

✅ **Preview Deployments**: Every PR gets its own preview URL  
✅ **Branch Deployments**: Deploys for branches other than main  
✅ **Production Deployments**: Automatic deploys for main branch  
✅ **Next.js Plugin**: Uses `@netlify/plugin-nextjs` for optimal Next.js support

## Manual Deployment

If you need to deploy manually:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

## Troubleshooting

- If build fails, check that `pnpm` is available in Netlify build environment
- Ensure all workspace dependencies are properly installed
- Check Netlify build logs for detailed error messages

