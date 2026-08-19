// ---------------------------------------------------------------------------
// App link helpers, kept separate from siteConfig so download/deep-link
// logic can evolve independently (e.g. swapping in smart-banner or
// platform-detection logic later) without touching company/legal config.
// ---------------------------------------------------------------------------

import { siteConfig } from "./siteConfig";

export const appLinks = {
  appStore: siteConfig.appStoreUrl,
  googlePlay: siteConfig.googlePlayUrl,
  consumerDeepLink: siteConfig.consumerDeepLink,
  businessDeepLink: siteConfig.businessDeepLink,
} as const;

export function hasAppStoreLink() {
  return appLinks.appStore.length > 0;
}

export function hasGooglePlayLink() {
  return appLinks.googlePlay.length > 0;
}

export function hasAnyStoreLink() {
  return hasAppStoreLink() || hasGooglePlayLink();
}
