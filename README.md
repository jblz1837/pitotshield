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

## Verified hosting architecture and cutover plan (November 2026)

The **current production** website is deployed from [Mullign/Degroff](https://github.com/Mullign/Degroff) via `.github/workflows/nextjs.yml`. That workflow builds the app in `degroff-next/` with `output: "export"`, publishes `out/` to GitHub Pages on pushes to `main`, and the old repository has `CNAME` set to `pitotshields.com`.

This **new** repository is prepared for the same GitHub Pages static-export format:
- `next.config.ts` exports to `out/`, supports base paths, and disables Next image optimization for static Pages hosting.
- `.github/workflows/verify.yml` checks TypeScript and static export on pull requests. It does **not deploy**.
- `.github/workflows/pages-preview.yml` deploys **only when manually triggered**, using `/pitotshield` as the project base path. Its intended preview URL is `https://jblz1837.github.io/pitotshield/`.
- There is **no** `CNAME` in this new repository, intentionally. Do **not** attach `pitotshields.com` to two GitHub Pages projects.

### Enable a GitHub Pages preview (account action required)

1. In `jblz1837/pitotshield`, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Open **Actions → Publish review preview to GitHub Pages (manual only) → Run workflow**. Choose `feature/complete-approved-redesign` as the branch.
3. Review the Pages deployment result and preview at `https://jblz1837.github.io/pitotshield/`.
4. If deployment doesn't appear, check Actions permissions and Pages environment approvals.

### Before moving the real domain

1. Back up the old repository and document the existing Pages/DNS records.
2. Verify the new site matches required existing production functionality. Current new site does **not** include the entire original media gallery, video library, newsletter state, theme switcher or locally hosted copies of documents.
3. Configure EmailJS and GA4, verify lead delivery and live tracking, and test real downloads.
4. Resolve any build errors and test mobile, desktop, and accessibility.
5. Plan a short controlled cutover window. Remove `pitotshields.com` from the old GitHub Pages Settings first, then configure the new project for the apex custom domain, and only then adjust DNS as instructed by GitHub. Never point DNS to an unverified new build.
6. Set the static export build base path to the empty root path for production, update robots/metadata appropriately, run a fresh deployment with a **separate approved production workflow**, verify HTTPS, forms, videos, documents and redirects, then retire the old deployment.
7. Roll back by reassigning the domain to the original Pages project and restoring the original DNS if checks fail.

**Important:** The repository's current GitHub Pages workflow is preview-only, not a production-domain deployment action. GitHub Pages is the hosting provider, but full connection to the existing custom domain is pending account-level settings and an approved cutover.
