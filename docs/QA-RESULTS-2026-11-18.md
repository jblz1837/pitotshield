# PitotShields.com deployment QA — November 18, 2026

## Results
| Check | Result | Evidence / follow-up |
|---|---|---|
| Approved branch TypeScript check | **PASS** | GitHub Actions run 44336208893 |
| Approved branch Next.js static export | **PASS** | GitHub Actions run 44336208893; artifact `pitotshield-static-review` |
| GitHub Pages enabled for new repository | **PASS** | GitHub Actions deployment run 44336838056 |
| GitHub Pages deployment job | **PASS on main, not approved redesign** | Run 44336838056 had head branch `main`, commit `e7b9a470...` |
| Correct version in public preview | **NOT VERIFIED / WRONG BRANCH DEPLOYED** | Approved feature branch is still in draft PR #1. Public page at `https://jblz1837.github.io/pitotshield/` must be replaced by a manual workflow dispatch selecting `feature/complete-approved-redesign` |
| Remote browser response from preview | **NOT VERIFIED** | Direct public URL retrieval was unavailable in this session; workflow result confirms only deployment, not end-user rendering |
| EmailJS sending | **NOT VERIFIED** | IDs not supplied to new build; form falls back to `mailto:`. Must test delivery before domain move |
| GA4 tracking | **NOT VERIFIED** | New project has optional configuration. Existing production uses `G-GH3FLHMFLH` (visible in original source); do not silently enable in unapproved preview |
| Technical PDF parity | **FAIL / NOT MIGRATED** | Original `Mullign/Degroff/degroff-next/public/docs/` contains 7 PDFs. New repository has no PDFs in `public/`; links still point to the live original domain |
| Product media parity | **FAIL / NOT MIGRATED** | Original production `public/assets/` contains 57 entries, including photos and videos. New repository contains only `public/brand/` |
| Production domain | **SAFE — UNCHANGED** | Old repo `Mullign/Degroff` retains `CNAME=pitotshields.com`; new repo has no CNAME |
| Deployment safety | **IMPROVED** | Preview workflow now rejects branch `main` to prevent mistakenly publishing the incomplete scaffold again |

## Key risks

1. **The public preview may display the wrong content.** GitHub Pages succeeded from `main` rather than the approved redesign branch.
2. **The replacement lacks original media and documents** so a domain move now could break significant customer-facing resources.
3. **EmailJS functionality is unverified** and the new form currently uses different template fields from the original newsletter form; template and delivery testing are required.
4. **Marketing and safety claims** must be reviewed against the actual operations manual, which expressly requires removal before aircraft operation and documents auto-release limits.
5. **Preview noindex** is intentional; do not remove or switch custom domain before launch readiness.

## Required next tests

- Enable Pages Source: GitHub Actions (completed), then manually run **Publish review preview to GitHub Pages (manual only)** from `feature/complete-approved-redesign` and check deployment status and browser rendering.
- Migrate all original `public/docs` and required `public/assets` into the new repository, retaining stable relative URLs. Keep file sizes in mind (catalog ~15 MB and videos over 12 MB).
- Confirm product photography and exact brand logo appearance.
- Configure EmailJS, test test submissions and error handling; verify Analytics events.
- Confirm 404 paths, responsive layout, accessibility, HTTPS, and cross-device rendering.
- Only then prepare a separate `main` production-root build and custom-domain cutover/rollback.

**Do not transfer `pitotshields.com` yet.**
