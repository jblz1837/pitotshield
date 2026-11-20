# Contact form, Analytics and media integration — November 18, 2026

## Completed and independently tested in GitHub Actions

- The original public `Mullign/Degroff/degroff-next/public/docs` library (7 PDFs) and `public/assets` library (57 top-level entries, including 7 MP4 demonstrations and original photographs) were copied to this review branch by workflow run **44346082388**. The workflow verified byte-for-byte directory equality. Git object IDs also matched for all 7 documents.
- The homepage now uses **local, base-path-aware** technical-document links and contains seven `<video>` players with `preload="none"`.
- A browser integration test using Chromium and a local static GitHub Pages-style server passed in workflow **44347967187**. It confirmed that the logo renders, 7 video players appear, 5 substantive PDF download links return HTTP 200, an MP4 returns HTTP 200, and a mocked EmailJS request displays a success message and records a GA4 `generate_lead` event.
- The production build and static file regression tests also passed on the same approved feature branch.

## Two original PDFs are *placeholders*

The legacy `pitotshield-v2-installation-guide.pdf` and `pitotshield-v2-safety-compliance.pdf` are only ~600 bytes each and literally contain the word **Placeholder**. They are copied unchanged to preserve links, but removed from the homepage's official technical-resource cards. The User Instruction Manual should be used instead of these placeholders.

## Contact form: remaining live delivery setup

The **EmailJS REST API shape has been checked against official EmailJS documentation**. Browser tests intentionally intercept the request and return a fake success; **no real email has been sent** from the replacement site and end-to-end deliverability remains unverified.

The old production website includes a newsletter integration with service `service_dw49i0o` and template `template_ifsa9jp`. This template is for newsletter subscriptions and must **not** be silently reused for the new quote/demo contact form.

Configure a dedicated EmailJS inquiry template with these parameters:
- `from_name`, `from_email`, `reply_to`
- `company`, `aircraft`, `interest`, `message`

Set the intended receiving address in the EmailJS template dashboard, and test both delivery and Reply-To. The contact form currently falls back to a **prefilled email to info@degroffaviation.com**, with a visible explanation, when EmailJS settings are missing.

For the GitHub Pages preview, set the following **repository Actions variables** at [Settings → Secrets and variables → Actions → Variables](https://github.com/jblz1837/pitotshield/settings/variables/actions):

- `PITOTSHIELD_EMAILJS_SERVICE_ID`
- `PITOTSHIELD_EMAILJS_TEMPLATE_ID`
- `PITOTSHIELD_EMAILJS_PUBLIC_KEY`

Then publish a fresh preview from `main` using the existing approved-preview workflow, and send a real test inquiry. These are **browser-public identifiers**, not private API keys; never paste an EmailJS private key, Outlook password or OAuth secret in the repository.

## Google Analytics 4

The previous website's `degroff-next/src/app/layout.tsx` uses measurement ID **G-GH3FLHMFLH**. This is documented in `.env.example`. The new site only initializes GA4 when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is provided.

The automated Chromium test supplied this measurement ID in an **isolated build** and verified `generate_lead` was queued after a mocked EmailJS success. This establishes wiring, **not real collection in the GA4 account**.

The public preview leaves GA4 disabled on purpose to avoid contaminating live marketing metrics. On approved production deployment, set the existing measurement ID and verify page views + `generate_lead` in GA4 Realtime or DebugView.

## Remaining checks before moving pitotshields.com

- Validate *actual MP4 decoding and playback* in Chrome, Safari and mobile browsers; current tests confirm file signatures, URLs and browser presentation, not every codec/browser combination.
- Validate full contents of the original PDF manual/catalog/specs and user-facing documentation.
- Supply the EmailJS account settings; send and receive a real inquiry with correct Reply-To.
- Verify real GA4 events in the correct property on a controlled production/staging site.
- Review brand assets and old/new functionality side by side.
- Keep domain, DNS and old GitHub Pages deployment unchanged until final user-approved cutover.
