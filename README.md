# Ngwebo Website

Next.js + TailwindCSS site for Ngwebo, with a secure backend API for contact form submissions.

## Deployment

This project is configured for Vercel deployment.

- Build command: `npm run build`
- Output directory: `.next`
- Root directory: project root

### Environment variables

Set these values in Vercel Project Settings for Production (and Preview if needed):

- `SENDGRID_API_KEY`
- `SENDGRID_FROM_EMAIL`
- `SENDGRID_TO_EMAIL`
- `SENTRY_DSN` (optional)

### Vercel setup

1. Push the repository to GitHub if not already pushed.
2. In Vercel, import the GitHub repository: `undumwakasungula/ngwebo-site`.
3. Use the default Vercel settings for a Next.js app.
4. Add the environment variables above in Vercel's dashboard.
5. Deploy.

### Optional CLI setup

If you want to use the Vercel CLI locally:

```bash
npm install -D vercel
npx vercel login
npx vercel --prod
```

## Local setup

```bash
npm install
npm run dev
```
