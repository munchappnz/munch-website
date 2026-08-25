import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection, ConfigPlaceholder } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Delete Your Account",
  description:
    "How to request deletion of your Munch account, and what happens to your data.",
  alternates: { canonical: "/delete-account" },
};

export default function DeleteAccountPage() {
  const businessName = siteConfig.legalBusinessName;
  const privacyEmail = siteConfig.privacyEmail;

  const operatorNode = businessName ? (
    <strong>{businessName}</strong>
  ) : (
    <ConfigPlaceholder>[LEGAL OPERATOR NAME]</ConfigPlaceholder>
  );
  const privacyEmailNode = privacyEmail ? (
    <a href={`mailto:${privacyEmail}?subject=Account%20deletion%20request`}>
      {privacyEmail}
    </a>
  ) : (
    <ConfigPlaceholder>[CONTACT EMAIL]</ConfigPlaceholder>
  );

  return (
    <LegalLayout
      title="Delete Your Munch Account"
      meta="Last updated: 25 August 2026"
    >
      <p>
        This page explains how to request deletion of your account for the{" "}
        <strong>Munch</strong> app (published on Google Play and the App
        Store by {operatorNode}), and what happens to your data once you do.
      </p>

      <LegalSection heading="Step 1: Request deletion">
        <p>You can request deletion of your Munch account in either of the following ways.</p>
        <p>
          <strong>Option A — In the Munch app</strong>
        </p>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>Open the Munch app and sign in.</li>
          <li>
            Go to <strong>Settings → Account → Delete Account</strong>.
          </li>
          <li>Confirm the deletion when prompted.</li>
        </ol>
        <p>
          <strong>Option B — By email (no app install required)</strong>
        </p>
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>
            Email {privacyEmailNode} from the email address associated with
            your Munch account.
          </li>
          <li>Use the subject line &ldquo;Account deletion request&rdquo;.</li>
          <li>
            Include your name and the mobile number or email address used to
            sign up, so we can verify the account.
          </li>
          <li>
            We will confirm your identity if needed, then confirm once your
            account and personal data have been deleted.
          </li>
        </ol>
        <p>
          We may ask you to verify your identity before completing a
          deletion request, to prevent someone else from deleting your
          account.
        </p>
      </LegalSection>

      <LegalSection heading="Step 2: What gets deleted">
        <p>
          Deleting your account is a permanent deletion of your account and
          associated personal information &mdash; it is not the same as
          simply disabling or logging out of the account.
        </p>
        <p>Once your deletion request is processed, the following are deleted:</p>
        <ul>
          <li>your name, email address and mobile phone number;</li>
          <li>your date of birth;</li>
          <li>your account login and authentication information;</li>
          <li>saved or favourited venues and offers;</li>
          <li>your offer and redemption history;</li>
          <li>notification and marketing preferences;</li>
          <li>profile content and photos you uploaded; and</li>
          <li>reviews, comments and other content tied to your account (or it is de-identified so it can no longer be linked to you).</li>
        </ul>
        <p>
          Munch&rsquo;s target is to remove this information from active
          production systems within <strong>30 days</strong> of your request.
        </p>
      </LegalSection>

      <LegalSection heading="Step 3: What may be retained, and for how long">
        <p>
          A small amount of information may be kept for a limited period
          after deletion, only where reasonably necessary:
        </p>
        <ul>
          <li>
            <strong>System backups</strong> — deleted data can remain in
            encrypted backups for up to <strong>30 days</strong> until it is
            overwritten in the normal backup cycle.
          </li>
          <li>
            <strong>Fraud, security and dispute records</strong> — limited
            records (e.g. redemption fraud checks, abuse reports) may be kept
            for as long as reasonably necessary to investigate or resolve the
            matter.
          </li>
          <li>
            <strong>Business and tax records</strong> — invoicing and
            accounting records for business accounts are kept for at least
            seven tax years, as required by New Zealand law.
          </li>
          <li>
            <strong>Legal obligations</strong> — information Munch is legally
            required to retain will be kept only for as long as that
            obligation applies.
          </li>
        </ul>
        <p>
          Retained information is limited to what is legitimately required
          for these purposes and is not used to continue providing you with
          the Munch service.
        </p>
        <p>
          Full details are set out in the{" "}
          <Link href="/privacy">Munch Privacy Policy</Link>, in particular
          the &ldquo;How long we retain information&rdquo; and &ldquo;Account
          deletion&rdquo; sections.
        </p>
      </LegalSection>

      <LegalSection heading="Questions">
        <p>
          If you have questions about deleting your account or what happens
          to your data, contact {privacyEmailNode}.
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
