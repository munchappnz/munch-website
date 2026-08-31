# Munch — marketing website

A simple, static Next.js marketing site for Munch: explains the app,
drives consumer and business downloads, and hosts the required support and
legal pages. There is no backend, database, auth or signup form — the app
itself lives entirely in the Munch mobile app.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4. The only extra
dependency is `qrcode`, used to render a real QR code next to the download
buttons (only when a real store URL is configured).

## Configuration

Everything environment-specific lives in two files:

- `lib/siteConfig.ts` — URLs, emails, legal/company info, launch location.
- `lib/appLinks.ts` — derives app store / deep link values from `siteConfig`.

Update values there; nothing else in the codebase hardcodes a URL, email or
legal string. Empty values are handled gracefully (e.g. `StoreButtons` shows
"Coming soon" instead of a dead link).

## Running it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm start         # serve the production build
```

## Before launch

The site is fully built and functional, but several values are placeholders
because the real information hasn't been supplied yet. Complete this list
before going live:

- [x] Add App Store URL (`siteConfig.appStoreUrl`)
- [ ] Add Google Play URL (`siteConfig.googlePlayUrl`)
- [ ] Confirm production domain (`siteConfig.siteUrl`)
- [x] Add support email (`siteConfig.supportEmail`)
- [x] Add business support email (`siteConfig.businessEmail`)
- [x] Add privacy email (`siteConfig.privacyEmail`)
- [x] Add legal business name (`siteConfig.legalBusinessName`)
- [x] Add legal/business address, if required (`siteConfig.businessAddress`)
- [x] Confirm launch location(s) (`siteConfig.launchLocation`, currently "Auckland")
- [x] Add Instagram URL, if applicable (`siteConfig.instagramUrl`)
- [ ] Add TikTok URL, if applicable (`siteConfig.tiktokUrl`)
- [ ] Confirm the real account-deletion process (`app/support/page.tsx`, "Deleting your account")
- [ ] **Review the Privacy Policy** (`app/privacy/page.tsx`) with a qualified professional — it's a clearly-marked draft with placeholders (`[EFFECTIVE DATE]`, governing jurisdiction, retention periods, etc.)
- [ ] **Review the Terms of Use** (`app/terms/page.tsx`) with a qualified professional — same draft status
- [ ] Confirm the FAQ pricing answer once consumer pricing is finalised (`components/FAQ.tsx`)
- [ ] Add analytics, if required, and confirm consent requirements
- [ ] Test App Store and Google Play links once live
- [ ] Test mobile layouts on real devices
- [ ] Test all legal page and support links
- [ ] Set final production metadata (title/description already set; confirm `siteConfig.siteUrl` for canonical/OG URLs)
- [ ] Test social share preview (`public/og-image.png`) once the domain is live
- [ ] Confirm favicon/app icon render correctly across browsers and devices

## Notes on assets

Brand and app screenshot assets supplied by Munch live in:

```
public/brand/               munch-wordmark.png, munch-icon.png (+ original .jpg)
public/app/                 home-screen.png, deal-screen.png
public/business-onboarding/ /business page video, poster and the 9 numbered step screenshots
```

The homepage's `BusinessSection`/`BusinessHowItWorks` still reuse the
consumer deal-detail screenshot — swap in a dedicated business/dashboard
screenshot in `components/BusinessHowItWorks.tsx` once one is available; no
other changes should be needed. The dedicated `/business` landing page
(`app/business/page.tsx`) has its own real onboarding screenshots and video,
all featuring the fictional example business "Little Fig Kitchen"
(`lib/littleFig.ts`).

Colour tokens (`app/globals.css`) were sampled directly from the supplied
logo/icon files, not guessed — update them there if the brand palette
changes.
