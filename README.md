# PitotShields.com — Approved Redesign

**Project stage: review and integration. Not deployed.**

This is the approved DeGroff Aviation Technologies™ website redesign, implemented in Next.js (App Router), TypeScript, React and Tailwind CSS.

## Included

- Approved **Stop Covered Pitot Events (COPEs)** homepage and brand messaging.
- Official DeGroff logo in the **top header only** (compressed image embedded in the SVG asset).
- Responsive navigation and content for OEM, MRO, airline engineering and business aviation.
- Published technical manuals/specification/catalog links from the existing site.
- Official on-wing demonstration video link.
- Inquiry form that sends through EmailJS **when configured**. Otherwise it explicitly opens a prefilled email addressed to `info@degroffaviation.com`.
- Google Analytics 4 initialization and a `generate_lead` event on EmailJS submission (only when GA is configured).
- Illustrative ROI figures with attribution and caveats.

## Setup

1. Use Node.js 20+.
2. `npm install`
3. Copy `.env.example` to `.env.local`.
4. Fill in your **existing** public EmailJS service ID, template ID and public key, and your GA4 measurement ID.
5. Confirm your existing EmailJS template supports these parameters:
   `from_name`, `reply_to`, `from_email`, `company`, `aircraft`, `interest`, `message`.
6. `npm run typecheck && npm run build`
7. `npm run dev` for browser testing.

Never commit private passwords or EmailJS private keys. Environment-specific public configuration values should be configured in the hosting provider.

## Production migration checklist

- [ ] Confirm **production** source assets and existing website behavior. This new repository is not a verified copy of the old website.
- [ ] Verify all technical document URLs and migrate their hosting before changing the custom domain. The new site currently links to existing `pitotshields.com/docs/...` paths.
- [ ] Configure and successfully test EmailJS form delivery and reply-to with a real inquiry.
- [ ] Configure and verify GA4 and lead tracking.
- [ ] Reconfirm compatibility claims, release conditions and technical statements with the operations manual.
- [ ] Validate and sign off the methodology behind the illustrative ROI figures or remove them.
- [ ] Obtain full-quality official logo and product photography/video assets from your existing project.
- [ ] Run `npm run typecheck`, `npm run build`, desktop/mobile review, accessibility checks.
- [ ] Confirm the old website's DNS, hosting, redirects, and rollback procedure.
- [ ] Remove `noindex` metadata and blocking robots directive **only after** release approval.
- [ ] Deploy after a successful preview and explicit release decision.

## Important safety statement

PitotShield V2™ must be removed before aircraft operation. Verify fit and operating conditions from the published operations manual. Auto-release is an additional safeguard; never treat the website's "Stop COPEs" headline as a guarantee of 100% prevention.

## GitHub workflow

Changes in `feature/complete-approved-redesign` are intended for review in a pull request against `main`. There is **no deploy-on-push workflow** in this repository. Do not point the custom domain to a preview or incomplete app.
