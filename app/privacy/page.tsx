import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection, ConfigPlaceholder } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Munch collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const businessName = siteConfig.legalBusinessName;
  const privacyEmail = siteConfig.privacyEmail;
  const address = siteConfig.businessAddress;

  const businessNameNode = businessName ? (
    <strong>{businessName}</strong>
  ) : (
    <ConfigPlaceholder>[LEGAL COMPANY NAME]</ConfigPlaceholder>
  );
  const addressNode = address ? (
    <>{address}</>
  ) : (
    <ConfigPlaceholder>[BUSINESS ADDRESS]</ConfigPlaceholder>
  );
  const privacyEmailNode = privacyEmail ? (
    <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
  ) : (
    <ConfigPlaceholder>[CONTACT EMAIL]</ConfigPlaceholder>
  );

  return (
    <LegalLayout title="Privacy Policy" meta="Effective date: 19 August 2026">
      <LegalSection heading="Introduction">
        <p>
          Munch respects your privacy and is committed to protecting your
          personal information. This Privacy Policy explains how{" "}
          {businessNameNode}, trading as Munch (&ldquo;Munch&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) collects,
          uses, stores and shares personal information when you use the
          Munch mobile application, website, business platform or related
          services (together, the &ldquo;Munch Platform&rdquo;).
        </p>
        <p>
          We handle personal information in accordance with the Privacy Act
          2020 (New Zealand) and other applicable privacy laws.
        </p>
      </LegalSection>

      <LegalSection heading="About Munch">
        <p>
          Munch is a platform that helps consumers discover offers, discounts
          and promotions from participating restaurants, cafés, bars and
          other food and beverage businesses. Businesses can also use Munch
          to create or manage their business profile and publish offers to
          Munch users.
        </p>
        <p>Our details are:</p>
        <ul>
          <li>
            <strong>Legal entity:</strong> {businessNameNode}
          </li>
          <li>
            <strong>Trading name:</strong> Munch
          </li>
          <li>
            <strong>Address:</strong> {addressNode}
          </li>
          <li>
            <strong>Privacy contact:</strong> {privacyEmailNode}
          </li>
        </ul>
      </LegalSection>

      <LegalSection heading="Information we collect">
        <p>The information we collect depends on how you use Munch.</p>
      </LegalSection>

      <LegalSection heading="Account information">
        <p>When you create or manage an account, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Login and authentication information</li>
          <li>Profile information</li>
          <li>Account settings and preferences</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Location information">
        <p>
          If you give Munch permission to access your device location, we
          may collect your approximate or precise location.
        </p>
        <p>We use this information to:</p>
        <ul>
          <li>Show deals near you</li>
          <li>Calculate distances to participating businesses</li>
          <li>Recommend relevant businesses and offers</li>
          <li>Improve location-based features</li>
        </ul>
        <p>You can change location permissions through your device settings.</p>
      </LegalSection>

      <LegalSection heading="Deal and app activity">
        <p>We may collect information about how you use Munch, including:</p>
        <ul>
          <li>Deals you view</li>
          <li>Deals you save</li>
          <li>Deals you redeem</li>
          <li>Businesses you view or interact with</li>
          <li>Searches</li>
          <li>Favourite businesses or offers</li>
          <li>Redemption dates and times</li>
          <li>Promotional or referral codes used</li>
          <li>App interactions and feature usage</li>
        </ul>
        <p>
          This information helps us operate the service, understand how
          Munch is being used and improve our recommendations and features.
        </p>
      </LegalSection>

      <LegalSection heading="Business information">
        <p>
          If you create or manage a business through Munch, we may collect:
        </p>
        <ul>
          <li>Business name</li>
          <li>Business address and locations</li>
          <li>Contact details</li>
          <li>Owner, manager or authorised representative details</li>
          <li>Business hours</li>
          <li>Website and social media information</li>
          <li>Logos, photographs and other business content</li>
          <li>Deal and promotional information</li>
          <li>Billing information</li>
          <li>Information relating to deal performance and redemptions</li>
        </ul>
        <p>
          Some business information will be publicly displayed to Munch
          users.
        </p>
      </LegalSection>

      <LegalSection heading="Device and technical information">
        <p>
          When you use Munch, we may automatically collect information such
          as:
        </p>
        <ul>
          <li>IP address</li>
          <li>Device type</li>
          <li>Operating system</li>
          <li>App version</li>
          <li>Device identifiers</li>
          <li>Browser information</li>
          <li>Crash reports</li>
          <li>Diagnostic information</li>
          <li>Usage and performance information</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Communications">
        <p>
          If you contact us, we may collect your contact details and the
          contents of your communication. This includes communications
          relating to support requests, complaints, business enquiries and
          feedback.
        </p>
      </LegalSection>

      <LegalSection heading="Payment information">
        <p>
          If Munch offers paid subscriptions, business plans or other paid
          services, payments may be processed by third-party payment
          providers or app stores. We may receive information such as:
        </p>
        <ul>
          <li>Payment status</li>
          <li>Subscription status</li>
          <li>Transaction reference</li>
          <li>Billing details</li>
          <li>Purchase history</li>
        </ul>
        <p>
          Payment card information may be collected and processed directly
          by the relevant payment provider rather than by Munch.
        </p>
      </LegalSection>

      <LegalSection heading="How we collect information">
        <p>We may collect personal information:</p>
        <ul>
          <li>Directly from you</li>
          <li>Automatically when you use Munch</li>
          <li>From participating businesses</li>
          <li>From payment providers</li>
          <li>From authentication providers</li>
          <li>From analytics and technology providers</li>
          <li>When someone invites, refers or adds you to Munch</li>
          <li>From publicly available sources where appropriate</li>
          <li>From another person or organisation where permitted by law</li>
        </ul>
        <p>
          Where we collect personal information about you indirectly, we
          will take reasonable steps to notify you where required by the
          Privacy Act 2020.
        </p>
      </LegalSection>

      <LegalSection heading="Why we use your information">
        <p>We may use personal information to:</p>
        <ul>
          <li>Create and manage accounts</li>
          <li>Provide the Munch Platform</li>
          <li>Show nearby businesses and deals</li>
          <li>Personalise recommendations</li>
          <li>Enable deal redemption</li>
          <li>Operate business listings</li>
          <li>Process subscriptions and payments</li>
          <li>Measure deal and business performance</li>
          <li>Prevent fraudulent or abusive redemptions</li>
          <li>Protect the security of Munch</li>
          <li>Provide customer support</li>
          <li>Communicate important service information</li>
          <li>Send notifications you have enabled</li>
          <li>Send marketing communications where permitted</li>
          <li>Conduct analytics and improve Munch</li>
          <li>Develop new products and features</li>
          <li>Investigate complaints or disputes</li>
          <li>Enforce our Terms of Use</li>
          <li>Comply with legal and regulatory requirements</li>
        </ul>
        <p>
          We aim to collect only information that is reasonably necessary
          for the operation of Munch and our legitimate business purposes.
        </p>
      </LegalSection>

      <LegalSection heading="Notifications and marketing">
        <p>If you enable push notifications, we may send you information about:</p>
        <ul>
          <li>Nearby deals</li>
          <li>Saved businesses</li>
          <li>Expiring offers</li>
          <li>New offers</li>
          <li>Account activity</li>
          <li>Munch updates</li>
          <li>Promotions</li>
        </ul>
        <p>You can turn push notifications off through your device settings.</p>
        <p>
          Where we send marketing emails or other electronic marketing
          messages, you can unsubscribe using the unsubscribe option provided
          or by contacting us.
        </p>
        <p>
          You may still receive important non-marketing communications
          relating to your account or use of Munch.
        </p>
      </LegalSection>

      <LegalSection heading="How we share information">
        <p>We may share information where reasonably necessary to operate Munch.</p>
      </LegalSection>

      <LegalSection heading="Participating businesses">
        <p>
          When you interact with or redeem an offer from a participating
          business, we may provide that business with information reasonably
          necessary to validate, process or measure the redemption.
        </p>
        <p>
          We do not give participating businesses unrestricted access to
          your Munch account information.
        </p>
      </LegalSection>

      <LegalSection heading="Service providers">
        <p>We may use third parties to help provide Munch, including providers of:</p>
        <ul>
          <li>Cloud hosting</li>
          <li>Database services</li>
          <li>Authentication</li>
          <li>Analytics</li>
          <li>Maps and location services</li>
          <li>Notifications</li>
          <li>Email and communications</li>
          <li>Customer support</li>
          <li>Payment processing</li>
          <li>Fraud prevention</li>
          <li>App infrastructure</li>
        </ul>
        <p>These providers may process personal information on our behalf.</p>
      </LegalSection>

      <LegalSection heading="Legal requirements">
        <p>We may disclose information where reasonably necessary to:</p>
        <ul>
          <li>Comply with the law</li>
          <li>Respond to lawful requests from authorities</li>
          <li>Protect Munch, our users or other people</li>
          <li>Investigate fraud, security incidents or unlawful activity</li>
          <li>Establish, exercise or defend legal claims</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Business transactions">
        <p>
          If Munch or its business is involved in a merger, acquisition,
          investment, restructuring or sale, information may be disclosed to
          relevant advisers and potential purchasers subject to appropriate
          confidentiality and privacy protections.
        </p>
      </LegalSection>

      <LegalSection heading="Overseas service providers">
        <p>
          Some technology providers used by Munch may store or process
          information outside New Zealand. Where personal information is
          disclosed outside New Zealand, we will take reasonable steps to
          ensure the disclosure complies with applicable requirements under
          the Privacy Act 2020.
        </p>
      </LegalSection>

      <LegalSection heading="Data security">
        <p>
          We take reasonable technical and organisational measures designed
          to protect personal information against:
        </p>
        <ul>
          <li>Loss</li>
          <li>Unauthorised access</li>
          <li>Misuse</li>
          <li>Disclosure</li>
          <li>Alteration</li>
          <li>Destruction</li>
        </ul>
        <p>
          However, no internet-connected service or electronic storage
          system can be guaranteed to be completely secure. You are
          responsible for keeping your account password and login
          credentials secure.
        </p>
      </LegalSection>

      <LegalSection heading="Data retention">
        <p>
          We retain personal information only for as long as reasonably
          necessary for the purposes for which it was collected, including
          to:
        </p>
        <ul>
          <li>Operate your account</li>
          <li>Provide our services</li>
          <li>Maintain transaction or redemption records</li>
          <li>Resolve disputes</li>
          <li>Prevent fraud</li>
          <li>Meet legal, tax, accounting or regulatory obligations</li>
        </ul>
        <p>
          Information may be deleted or anonymised when it is no longer
          reasonably required.
        </p>
      </LegalSection>

      <LegalSection heading="Accessing and correcting your information">
        <p>
          You may request access to personal information Munch holds about
          you and ask us to correct information that is inaccurate. You can
          make a request by contacting {privacyEmailNode}.
        </p>
        <p>We may need to verify your identity before processing the request.</p>
      </LegalSection>

      <LegalSection heading="Closing your account">
        <p>You may request to close your Munch account.</p>
        <p>
          Where appropriate, we will delete or anonymise personal
          information associated with the account, except where we
          reasonably need to retain information for legal, security,
          fraud-prevention, dispute-resolution or other legitimate purposes.
          See our{" "}
          <Link href="/support#delete-account">account deletion</Link>{" "}
          instructions on the Support page.
        </p>
      </LegalSection>

      <LegalSection heading="Cookies and similar technology">
        <p>
          The Munch website and Platform may use cookies, software
          development kits and similar technologies to:
        </p>
        <ul>
          <li>Keep users signed in</li>
          <li>Remember preferences</li>
          <li>Understand usage</li>
          <li>Measure performance</li>
          <li>Diagnose technical problems</li>
          <li>Improve the Platform</li>
        </ul>
        <p>
          Where required, you may be able to control certain cookies or
          tracking technologies through your browser, device or Munch
          settings.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party websites and services">
        <p>
          Munch may contain links to businesses, websites or services
          operated by third parties. Their privacy practices are governed by
          their own privacy policies. Munch is not responsible for how
          independent third parties handle personal information.
        </p>
      </LegalSection>

      <LegalSection heading="Privacy breaches">
        <p>
          If Munch becomes aware of a privacy breach, we will investigate
          and respond appropriately. Where a privacy breach is notifiable
          under the Privacy Act 2020, we will notify the Office of the
          Privacy Commissioner and affected individuals as required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to this Privacy Policy">
        <p>
          We may update this Privacy Policy as Munch develops or our legal
          obligations change. The latest version will be made available
          through the Munch Platform or website. If we make material
          changes, we may provide additional notice through the app,
          website, email or another appropriate method.
        </p>
      </LegalSection>

      <LegalSection heading="Privacy complaints">
        <p>
          If you have a privacy concern or complaint, please contact our
          Privacy Officer first so we can investigate it.
        </p>
        <p>
          <strong>Privacy Officer</strong>
          <br />
          {businessNameNode}
          <br />
          {addressNode}
          <br />
          {privacyEmailNode}
        </p>
        <p>
          You also have the right to make a complaint to the Office of the
          Privacy Commissioner of New Zealand.
        </p>
      </LegalSection>

      <LegalSection heading="Contact us">
        <p>
          For questions about this Privacy Policy or how Munch handles
          personal information, contact:
        </p>
        <p>
          {businessNameNode}, trading as Munch
          <br />
          {addressNode}
          <br />
          {privacyEmailNode}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
