// ---------------------------------------------------------------------------
// Central site configuration.
//
// Every URL, email address and piece of company/legal information used across
// the Munch marketing site is read from this one file. Update values here —
// never hardcode a URL, email or legal string anywhere else in the codebase.
//
// Empty strings are treated as "not supplied yet" and are handled gracefully
// by the components that consume them (e.g. StoreButtons shows "Coming soon"
// instead of a dead link; social icons are hidden if no URL is set).
// ---------------------------------------------------------------------------

export const siteConfig = {
  /** Production domain, e.g. "https://munch.app". Used for canonical URLs, sitemap.xml and OG tags. */
  siteUrl: "",

  /** App Store listing URL. Leave blank until the app is live — the button will show "Coming soon". */
  appStoreUrl: "",

  /** Google Play listing URL. Leave blank until the app is live — the button will show "Coming soon". */
  googlePlayUrl: "",

  /** Deep link that opens the normal consumer experience inside Munch. */
  consumerDeepLink: "",

  /** Deep link that takes an existing app user directly into business onboarding. */
  businessDeepLink: "",

  /** Social links. Leave blank if not supplied — the footer hides icons with no URL. */
  instagramUrl: "https://www.instagram.com/munchapp_nz/",
  tiktokUrl: "",

  /** Support contact addresses. Leave blank if not supplied — the support page shows a placeholder. */
  supportEmail: "admin@munchapp.co.nz",
  businessEmail: "",
  privacyEmail: "",

  /** Legal / company information for the Privacy Policy and Terms of Use. */
  legalBusinessName: "",
  businessAddress: "",

  /** Where Munch is currently available. Shown in the FAQ. */
  launchLocation: "Auckland",
} as const;

export type SiteConfig = typeof siteConfig;
