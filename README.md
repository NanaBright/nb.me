# Bright Yanchirah — portfolio

A Next.js portfolio for Bright Yanchirah, Senior Full-Stack Software Engineer.

## Run locally

```sh
npm ci
npm run dev
```

## Validate

```sh
npm run typecheck
npm run build
```

`npm run lint` is also available. The project retains its existing Next.js/Vercel setup.

## Content

- `lib/portfolio.ts`: public profile, project descriptions, case-study content, and expertise.
- `app/`: home, work, individual project pages, about, expertise, and contact.
- `public/projects/`: screenshots of the public Slatetrends and M-HUB homepages, captured on 20 October 2026.
- `cv/cv-content.json`: editable CV content; see `cv/README.md` for generation and provenance.
- `app/opengraph-image.tsx`: social sharing image.
- `app/sitemap.ts` and `app/robots.ts`: crawl metadata.

The portfolio contains selected public work. Kwarleyz's specific systems and company website attribution are intentionally absent. The CV contains only a brief description of software development and IT operations.

CV downloads use `/Bright_Yanchirah_Senior_Full_Stack_Engineer_CV.pdf`. The older PDF path remains available with the updated content, and the legacy HTML CV directs visitors to the current PDF.

No external font or third-party service is required to build the portfolio. Contact uses email links and a clipboard control; there is no simulated form submission.

## Hosting

Deploy using the existing Vercel project with `npm run build`. Local source changes do not deploy automatically until pushed or otherwise published through the hosting workflow.
