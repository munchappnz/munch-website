// ---------------------------------------------------------------------------
// Example business used consistently throughout the /business landing page
// (hero copy, onboarding steps, pending-review callout, live-deal preview).
// Keeping it in one place means the same name/deal never drifts between
// sections. Little Fig Kitchen is a fictional example, not a real customer.
// ---------------------------------------------------------------------------

export const littleFig = {
  name: "Little Fig Kitchen",
  description: "Modern neighbourhood dining",
  address: "24 New North Road",
  suburb: "Kingsland",
  venueType: "Restaurant",
  cuisine: "Modern New Zealand",
  email: "owner@littlefig.co.nz",
} as const;

export const littleFigDeal = {
  name: "Early Dinner",
  description: "25% off the total bill, dine-in only",
  repeats: "Monday to Friday",
  discount: "25%",
  codesPerDay: 10,
  startTime: "5:00 PM",
  endTime: "7:00 PM",
} as const;
