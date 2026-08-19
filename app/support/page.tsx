import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { ConfigPlaceholder } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help using Munch as a consumer or a business.",
  alternates: { canonical: "/support" },
};

function EmailLine({ label, email }: { label: string; email: string }) {
  return (
    <p className="mt-3 text-sm">
      <span className="text-munch-muted">{label}: </span>
      {email ? (
        <a
          href={`mailto:${email}`}
          className="font-semibold text-munch-orange underline underline-offset-2"
        >
          {email}
        </a>
      ) : (
        <ConfigPlaceholder>[{label.toUpperCase()} NOT SET]</ConfigPlaceholder>
      )}
    </p>
  );
}

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-center text-3xl font-extrabold text-munch-black sm:text-4xl">
        How can we help?
      </h1>
      <p className="mx-auto mt-3 max-w-md text-center text-munch-muted">
        Find the right place to reach us, whether you&rsquo;re using Munch to
        find deals or running a business on Munch.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-3xl border border-munch-border bg-munch-white p-6">
          <h2 className="font-bold text-munch-black">Using Munch</h2>
          <ul className="mt-2 space-y-1 text-sm text-munch-muted">
            <li>Claiming deals</li>
            <li>Redeeming deals</li>
            <li>Account problems</li>
            <li>App issues</li>
          </ul>
          <EmailLine label="Support email" email={siteConfig.supportEmail} />
        </div>

        <div className="rounded-3xl border border-munch-border bg-munch-white p-6">
          <h2 className="font-bold text-munch-black">Munch for businesses</h2>
          <ul className="mt-2 space-y-1 text-sm text-munch-muted">
            <li>Creating a business account</li>
            <li>Listing a venue</li>
            <li>Creating &amp; managing deals</li>
            <li>Business account issues</li>
          </ul>
          <EmailLine label="Business email" email={siteConfig.businessEmail} />
        </div>

        <div className="rounded-3xl border border-munch-border bg-munch-white p-6">
          <h2 className="font-bold text-munch-black">Privacy</h2>
          <ul className="mt-2 space-y-1 text-sm text-munch-muted">
            <li>Privacy questions</li>
            <li>Data access requests</li>
            <li>Account deletion</li>
          </ul>
          <EmailLine label="Privacy email" email={siteConfig.privacyEmail} />
        </div>
      </div>

      <section
        id="delete-account"
        className="scroll-mt-20 mt-14 rounded-3xl border border-munch-border bg-munch-cream-deep p-6 sm:p-8"
      >
        <h2 className="text-xl font-extrabold text-munch-black">
          Deleting your account
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-munch-muted">
          Both consumers and businesses can request deletion of their Munch
          account and associated data.
        </p>
        <div className="mt-4 rounded-2xl border border-dashed border-munch-orange/40 bg-munch-white p-4 text-sm text-munch-muted">
          <ConfigPlaceholder>[ACCOUNT DELETION STEPS TBC]</ConfigPlaceholder>
          <p className="mt-2">
            The exact in-app deletion flow hasn&rsquo;t been confirmed yet.
            Once available, this section should explain how to delete an
            account from within the Munch app (e.g. Settings → Delete
            Account). Until then, account deletion can be requested by
            emailing{" "}
            {siteConfig.privacyEmail ? (
              <a
                href={`mailto:${siteConfig.privacyEmail}`}
                className="font-semibold text-munch-orange underline underline-offset-2"
              >
                {siteConfig.privacyEmail}
              </a>
            ) : (
              <ConfigPlaceholder>[PRIVACY EMAIL]</ConfigPlaceholder>
            )}{" "}
            from the email address associated with the account.
          </p>
        </div>
      </section>
    </div>
  );
}
