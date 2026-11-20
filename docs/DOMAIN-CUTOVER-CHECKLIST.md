# PitotShields.com — Domain Transition Checklist

**Status as of November 18, 2026:** GitHub Pages preview has **not** deployed successfully. The latest preview workflow on `main` failed at `actions/configure-pages` because GitHub Pages is not enabled for `jblz1837/pitotshield`. The redesigned branch passed TypeScript/static-export validation (run 44333603524).

## Repositories
- **Current production:** `Mullign/Degroff` (read-only access from current GitHub connection), Next.js under `degroff-next/`, static export published by `.github/workflows/nextjs.yml`, `CNAME` contains `pitotshields.com`.
- **Replacement:** `jblz1837/pitotshield`, approved redesign is **draft PR #1** from `feature/complete-approved-redesign`. Never assume changes in this PR are on `main`.

## Stage 1 — Enable and verify preview (no domain changes)
- [ ] In https://github.com/jblz1837/pitotshield/settings/pages select **Build and deployment → Source: GitHub Actions**. **Do not** set a custom domain here.
- [ ] Open https://github.com/jblz1837/pitotshield/actions/workflows/pages-preview.yml and choose **Run workflow**, selecting branch `feature/complete-approved-redesign`. The earlier run selected `main` and failed before publishing.
- [ ] Confirm the workflow succeeds, including the `deploy` job.
- [ ] Open `https://jblz1837.github.io/pitotshield/` and verify header logo, hero, desktop/mobile styles, navigation anchors, ROI disclaimer, demonstration link and all resources.
- [ ] Check browser console and network errors, including missing files and improper `/pitotshield` base-path references.
- [ ] Verify the product logo's fidelity against the original uploaded logo, and add approved full-quality photography rather than placeholders.

## Stage 2 — Functional parity and content sign-off
- [ ] Compare old and new homepages section by section, preserving required product imagery, videos, newsletter functionality and technical downloads.
- [ ] Current replacement references `https://pitotshields.com/docs/...` rather than hosting the documents itself. Copy all required PDF/media assets into the replacement repo's `public/` tree **before domain cutover**, retaining URLs/redirects where necessary.
- [ ] Preserve customer-facing links such as the existing distributor and procurement contacts.
- [ ] Configure `NEXT_PUBLIC_EMAILJS_SERVICE_ID`, `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`; test a request, delivery, reply-to and spam handling. These public identifiers are not user passwords.
- [ ] Configure GA4 using the existing measurement ID, and verify page views + `generate_lead` events.
- [ ] Verify wording and claims with current operating manual. Its warnings require manual cover removal before aircraft operation; auto-release is not an unconditional guarantee.
- [ ] Verify the original ROI calculation; label illustrative until approved for publication.
- [ ] Run production static export, type checking, mobile/desktop testing and accessibility review.
- [ ] Confirm final `noindex` and robots restrictions can be safely lifted when the site is live.

## Stage 3 — Prepare a production build (not yet authorized by this checklist)
- [ ] Merge reviewed changes to `main` only after test sign-off; do not enable a deploy-on-push action until the cutover is intentionally scheduled.
- [ ] Create an approved production GitHub Pages workflow with **root** `NEXT_PUBLIC_BASE_PATH` / `NEXT_PUBLIC_ASSET_PREFIX` and canonical `NEXT_PUBLIC_SITE_URL=https://pitotshields.com`.
- [ ] Include `public/CNAME` only at cutover with content `pitotshields.com`; keep this file absent from previews.
- [ ] Review DNS configuration and any `www` forwarding, redirects, MX/TXT email records. Change only the website records; do not alter mail-related records.
- [ ] Record original DNS values, the old Pages custom-domain setting and the old GitHub Pages workflow revision for rollback.
- [ ] Choose a quiet maintenance window; lower DNS TTL beforehand if your DNS provider allows it.

## Stage 4 — Controlled domain transfer (requires separate launch decision)
- [ ] Confirm the new GitHub Pages preview and production-root build function with all resources.
- [ ] Remove `pitotshields.com` from the original project's **Settings → Pages** so it can be assigned to a different Pages project.
- [ ] Add `pitotshields.com` under the new project's **Settings → Pages** and configure/verify DNS according to GitHub's live instructions.
- [ ] Configure/verify HTTPS, certificate provisioning, canonical URL and mobile+desktop loading.
- [ ] Test contact submissions, demo videos, all PDFs, product links, 404 behavior, analytics and redirects at the custom domain.
- [ ] Monitor for broken links or downtime.

## Rollback
If launch checks fail: remove the custom domain from the new GitHub Pages project, restore it on the original Pages project, and restore previous DNS records if changed. Verify the original site's HTTPS and critical product/contact pages. The original GitHub repo/Pages deployment should remain intact until the replacement passes a monitored stabilization window.

**Do not switch the production custom domain solely because a Next.js build passes.** The actual preview and all production features must be verified first.
