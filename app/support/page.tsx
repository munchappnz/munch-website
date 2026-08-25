import type { Metadata } from "next";
import Link from "next/link";
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
          Both consumers and businesses can request deletion of their account
          for the <strong className="text-munch-black">Munch</strong> app
          (published on Google Play and the App Store by{" "}
          {siteConfig.legalBusinessName || "Munch"}) and its associated data.
        </p>

        <div className="mt-4 rounded-2xl border border-munch-border bg-munch-white p-4 text-sm text-munch-muted">
          <h3 className="font-bold text-munch-black">How to request deletion</h3>
          <p className="mt-2">
            <strong className="text-munch-black">In the app:</strong> go to{" "}
            <strong className="text-munch-black">
              Settings → Account → Delete Account
            </strong>{" "}
            and follow the prompts.
          </p>
          <p className="mt-3">
            <strong className="text-munch-black">
              By email (no app install required):
            </strong>{" "}
            email{" "}
            {siteConfig.privacyEmail ? (
              <a
                href={`mailto:${siteConfig.privacyEmail}?subject=Account%20deletion%20request`}
                className="font-semibold text-munch-orange underline underline-offset-2"
              >
                {siteConfig.privacyEmail}
              </a>
            ) : (
              <ConfigPlaceholder>[PRIVACY EMAIL]</ConfigPlaceholder>
            )}{" "}
            from the address associated with your account, with the subject
            line &ldquo;Account deletion request&rdquo;, and include your name
            and the mobile number or email used to sign up so we can verify
            the account. We may ask you to verify your identity before
            completing the request, and we&rsquo;ll confirm once your account
            and personal data have been removed.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-munch-border bg-munch-white p-4 text-sm text-munch-muted">
          <h3 className="font-bold text-munch-black">What gets deleted</h3>
          <p className="mt-2">
            Account deletion permanently removes your account &mdash; it
            isn&rsquo;t the same as disabling or logging out. Once processed,
            we delete:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>your name, email address and mobile phone number;</li>
            <li>your date of birth;</li>
            <li>your account login and authentication information;</li>
            <li>saved or favourited venues and offers;</li>
            <li>your offer and redemption history;</li>
            <li>notification and marketing preferences; and</li>
            <li>
              profile content, photos, reviews and comments tied to your
              account (or these are de-identified so they can no longer be
              linked to you).
            </li>
          </ul>
          <p className="mt-3">
            Our target is to remove this information from active production
            systems within <strong className="text-munch-black">30 days</strong>{" "}
            of your request.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-munch-border bg-munch-white p-4 text-sm text-munch-muted">
          <h3 className="font-bold text-munch-black">
            What may be retained, and for how long
          </h3>
          <p className="mt-2">
            A small amount of information may be kept for a limited period,
            only where reasonably necessary:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <strong className="text-munch-black">System backups</strong> —
              up to 30 days, until overwritten in the normal backup cycle.
            </li>
            <li>
              <strong className="text-munch-black">
                Fraud, security and dispute records
              </strong>{" "}
              — kept only as long as reasonably necessary to investigate or
              resolve the matter.
            </li>
            <li>
              <strong className="text-munch-black">
                Business and tax records
              </strong>{" "}
              — invoicing and accounting records for business accounts are
              kept for at least seven tax years, as required by New Zealand
              law.
            </li>
            <li>
              <strong className="text-munch-black">Legal obligations</strong>{" "}
              — kept only for as long as the legal obligation applies.
            </li>
          </ul>
          <p className="mt-3">
            Full details are set out in the{" "}
            <Link
              href="/privacy"
              className="font-semibold text-munch-orange underline underline-offset-2"
            >
              Munch Privacy Policy
            </Link>
            , in particular the &ldquo;How long we retain information&rdquo;
            and &ldquo;Account deletion&rdquo; sections.
          </p>
        </div>
      </section>
    </div>
  );
}
