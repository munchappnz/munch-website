import type { Metadata } from "next";
import { LegalLayout, LegalSection, ConfigPlaceholder } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of Munch.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  const businessName = siteConfig.legalBusinessName;
  const supportEmail = siteConfig.supportEmail;
  const address = siteConfig.businessAddress;

  const businessNameNode = businessName ? (
    <strong>{businessName}</strong>
  ) : (
    <ConfigPlaceholder>[LEGAL COMPANY NAME]</ConfigPlaceholder>
  );
  const operatorIsMunch = businessName.trim().toLowerCase() === "munch";
  const addressNode = address ? (
    <>{address}</>
  ) : (
    <ConfigPlaceholder>[BUSINESS ADDRESS]</ConfigPlaceholder>
  );
  const supportEmailNode = supportEmail ? (
    <a href={`mailto:${supportEmail}`}>{supportEmail}</a>
  ) : (
    <ConfigPlaceholder>[CONTACT EMAIL]</ConfigPlaceholder>
  );

  return (
    <LegalLayout title="Terms of Use" meta="Effective date: 19 August 2026">
      <LegalSection heading="Introduction">
        <p>
          These Terms of Use (&ldquo;Terms&rdquo;) apply to your use of the
          Munch mobile application, website, business platform and related
          services (together, the &ldquo;Munch Platform&rdquo;).
        </p>
        <p>
          The Munch Platform is operated by {businessNameNode}
          {!operatorIsMunch && <>, trading as Munch</>} (&ldquo;Munch&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
        </p>
        <p>By creating an account or using Munch, you agree to these Terms.</p>
      </LegalSection>

      <LegalSection heading="What Munch does">
        <p>
          Munch connects consumers with participating restaurants, cafés,
          bars and other food and beverage businesses offering discounts,
          promotions and other offers during selected periods.
        </p>
        <p>Munch may allow:</p>
        <ul>
          <li>Consumers to discover nearby businesses and offers</li>
          <li>Consumers to save and redeem deals</li>
          <li>Businesses to create and manage listings</li>
          <li>Businesses to publish deals and promotions</li>
          <li>Businesses to measure deal performance and redemptions</li>
          <li>Users and businesses to access other features introduced by Munch</li>
        </ul>
        <p>
          We may change or expand the functionality of the Munch Platform
          over time.
        </p>
      </LegalSection>

      <LegalSection heading="Accounts">
        <p>You may need an account to use certain Munch features.</p>
        <p>You agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Keep your information reasonably up to date</li>
          <li>Keep your login details secure</li>
          <li>Not allow another person to misuse your account</li>
          <li>Notify us if you believe your account has been compromised</li>
        </ul>
        <p>
          You are responsible for activity carried out through your account
          to the extent permitted by law. You must not create accounts using
          false or misleading information.
        </p>
      </LegalSection>

      <LegalSection heading="Younger users">
        <p>
          If you are under 18, you should use Munch only with the permission
          of a parent or legal guardian.
        </p>
        <p>
          Some participating businesses may offer products or services
          subject to legal age restrictions. You are responsible for
          satisfying any applicable age requirement, and businesses may
          require acceptable identification.
        </p>
      </LegalSection>

      <LegalSection heading="Deals and offers">
        <p>
          Businesses may publish discounts, promotions or other offers
          (&ldquo;Deals&rdquo;) through Munch. Each Deal may have specific
          conditions including:
        </p>
        <ul>
          <li>Start and end times</li>
          <li>Valid days</li>
          <li>Participating locations</li>
          <li>Minimum spend</li>
          <li>Product exclusions</li>
          <li>Quantity restrictions</li>
          <li>Redemption limits</li>
          <li>Availability restrictions</li>
          <li>Other conditions displayed with the Deal</li>
        </ul>
        <p>
          You are responsible for reviewing the conditions before attempting
          to redeem a Deal.
        </p>
        <p>Unless otherwise stated, Deals:</p>
        <ul>
          <li>Cannot be exchanged for cash</li>
          <li>Cannot be transferred or resold for commercial purposes</li>
          <li>Cannot be combined with other promotions unless permitted by the business</li>
          <li>Must be redeemed using the method shown in Munch</li>
          <li>May be subject to availability</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Participating businesses">
        <p>
          Participating businesses are responsible for the products and
          services they sell.
        </p>
        <p>Businesses are responsible for:</p>
        <ul>
          <li>Their food and beverages</li>
          <li>Product quality and safety</li>
          <li>Allergen and dietary information</li>
          <li>Pricing</li>
          <li>Service</li>
          <li>Opening hours</li>
          <li>Deal availability</li>
          <li>Compliance with applicable laws</li>
          <li>Age-restricted products</li>
          <li>Information included in their listings</li>
        </ul>
        <p>
          Businesses must ensure that offers they publish through Munch are
          accurate, clear and not misleading.
        </p>
        <p>
          Businesses must honour valid Deals in accordance with the
          conditions displayed while those Deals are active, subject to
          applicable law and any clearly disclosed availability limitations.
        </p>
        <p>
          Munch may remove or correct a listing or Deal that we reasonably
          believe is inaccurate, misleading, unlawful, expired or otherwise
          unsuitable for the Platform.
        </p>
      </LegalSection>

      <LegalSection heading="Munch's role">
        <p>
          Unless expressly stated otherwise, Munch provides a technology and
          promotional platform connecting users with independent businesses.
          The participating business, rather than Munch, supplies the food,
          beverages and other goods or services purchased from that
          business. A transaction with a participating business is therefore
          generally between you and that business.
        </p>
        <p>
          Munch does not own or operate participating venues unless
          expressly stated. This does not affect any separate service that
          Munch directly supplies to you, including any paid Munch
          subscription.
        </p>
      </LegalSection>

      <LegalSection heading="Redemption">
        <p>
          Deals must be redeemed legitimately and in accordance with the
          instructions shown in Munch.
        </p>
        <p>You must not:</p>
        <ul>
          <li>Redeem the same single-use Deal more than once</li>
          <li>Manipulate redemption records</li>
          <li>Create multiple accounts to avoid Deal restrictions</li>
          <li>Share single-use redemption codes without permission</li>
          <li>Create fraudulent transactions</li>
          <li>Use automated methods to obtain or redeem Deals</li>
          <li>Interfere with Munch&rsquo;s redemption systems</li>
          <li>Exploit technical bugs or errors</li>
        </ul>
        <p>
          We may cancel a redemption, suspend an account or investigate
          activity where we reasonably suspect fraud or misuse.
        </p>
      </LegalSection>

      <LegalSection heading="Business accounts">
        <p>
          If you create, claim or manage a business on Munch, you confirm
          that:
        </p>
        <ul>
          <li>You are authorised to act for that business</li>
          <li>Information you provide is accurate</li>
          <li>You have permission to provide business logos, photographs and other content</li>
          <li>You will keep listings and Deal information reasonably current</li>
          <li>Your promotions comply with applicable laws</li>
          <li>You will not publish misleading prices, discounts or claims</li>
          <li>You will honour Deals according to their published conditions</li>
          <li>You will comply with relevant food, health, safety, licensing and consumer obligations</li>
        </ul>
        <p>
          Munch may request reasonable information to verify your authority
          to represent a business.
        </p>
        <p>
          We may suspend a business listing if we cannot verify the business
          or reasonably believe that the listing presents a legal, security,
          fraud or consumer-protection risk.
        </p>
      </LegalSection>

      <LegalSection heading="Fees and subscriptions">
        <p>Some Munch services may be free and others may require payment.</p>
        <p>Where a fee applies, the relevant:</p>
        <ul>
          <li>Price</li>
          <li>Billing period</li>
          <li>Renewal arrangement</li>
          <li>Included features</li>
          <li>Cancellation conditions</li>
        </ul>
        <p>
          will be displayed before you purchase the service or otherwise
          agreed with you.
        </p>
        <p>
          If a subscription automatically renews, this will be disclosed as
          part of the subscription process. You are responsible for
          cancelling a subscription using the relevant cancellation method if
          you do not want it to renew.
        </p>
        <p>
          Where a subscription is purchased through an app store or
          third-party payment provider, its billing and payment processes
          may also apply.
        </p>
        <p>
          Nothing in these Terms limits any refund or other right you have
          under applicable New Zealand consumer law.
        </p>
      </LegalSection>

      <LegalSection heading="Business fees">
        <p>Munch may charge participating businesses fees for services such as:</p>
        <ul>
          <li>Business subscriptions</li>
          <li>Premium listings</li>
          <li>Advertising or promotion</li>
          <li>Additional business tools</li>
          <li>Transaction or redemption services</li>
          <li>Other optional services</li>
        </ul>
        <p>
          Any applicable business fees will be disclosed or agreed with the
          business before they are charged. Unless stated otherwise,
          applicable New Zealand GST will be handled as required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Content submitted to Munch">
        <p>You may be able to submit content including:</p>
        <ul>
          <li>Business descriptions</li>
          <li>Logos</li>
          <li>Photographs</li>
          <li>Menus</li>
          <li>Deal information</li>
          <li>Reviews or feedback</li>
          <li>Other materials</li>
        </ul>
        <p>You retain ownership of content you own.</p>
        <p>
          By submitting content to Munch, you grant Munch a non-exclusive,
          worldwide, royalty-free licence to host, reproduce, display, adapt
          and distribute that content as reasonably necessary to:
        </p>
        <ul>
          <li>Operate Munch</li>
          <li>Display your listing or content</li>
          <li>Promote Deals</li>
          <li>Promote participating businesses</li>
          <li>Market the Munch Platform</li>
        </ul>
        <p>
          This licence ends when the content is removed from Munch, except
          where continued use is reasonably necessary for existing marketing
          materials, legal records, backups or other legitimate purposes.
        </p>
        <p>You must not submit content that:</p>
        <ul>
          <li>Infringes another person&rsquo;s intellectual property</li>
          <li>Is unlawful</li>
          <li>Is deceptive or misleading</li>
          <li>Is defamatory</li>
          <li>Contains malicious software</li>
          <li>Is abusive or threatening</li>
          <li>Infringes another person&rsquo;s privacy</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Munch intellectual property">
        <p>
          Munch and its licensors own all intellectual property rights in
          the Munch Platform, including its:
        </p>
        <ul>
          <li>Software</li>
          <li>Brand</li>
          <li>Logos</li>
          <li>Designs</li>
          <li>Interface</li>
          <li>Graphics</li>
          <li>Platform technology</li>
          <li>Original content</li>
        </ul>
        <p>
          Except as permitted through normal use of Munch, you may not copy,
          modify, distribute, reverse engineer, sell or commercially exploit
          the Munch Platform without our permission.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable use">
        <p>You must not use Munch to:</p>
        <ul>
          <li>Break the law</li>
          <li>Commit fraud</li>
          <li>Harass another person</li>
          <li>Impersonate another person or business</li>
          <li>Scrape the Platform at scale without permission</li>
          <li>Access another user&rsquo;s account</li>
          <li>Introduce malware</li>
          <li>Circumvent security measures</li>
          <li>Interfere with Munch&rsquo;s systems</li>
          <li>Manipulate ratings, redemptions, analytics or business performance information</li>
          <li>Use the Platform in a way that materially harms Munch, participating businesses or other users</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Availability of Munch">
        <p>We aim to provide a reliable service, but Munch may occasionally be unavailable because of:</p>
        <ul>
          <li>Maintenance</li>
          <li>Updates</li>
          <li>Technical problems</li>
          <li>Internet or telecommunications failures</li>
          <li>Third-party service failures</li>
          <li>Events outside our reasonable control</li>
        </ul>
        <p>We do not guarantee that every feature will always be available.</p>
        <p>We may modify, add or discontinue features where reasonably necessary.</p>
      </LegalSection>

      <LegalSection heading="Deal availability and errors">
        <p>
          Businesses may sell out of products, change opening hours or
          experience circumstances affecting a Deal.
        </p>
        <p>
          Munch and participating businesses should take reasonable steps to
          keep Deal information accurate. If we become aware of an obvious
          pricing, technical or listing error, the Deal may be corrected or
          removed.
        </p>
        <p>
          Nothing in this section permits Munch or a participating business
          to avoid obligations imposed by applicable consumer law.
        </p>
      </LegalSection>

      <LegalSection heading="Third-party services">
        <p>
          Munch may contain links to, integrate with or rely upon
          third-party websites, maps, payment services or other technology.
          Independent third parties operate their own services under their
          own terms and policies.
        </p>
        <p>
          Munch is not responsible for independent third-party services
          except to the extent required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Suspension and termination">
        <p>You may stop using Munch at any time.</p>
        <p>We may suspend or terminate an account where we reasonably believe that:</p>
        <ul>
          <li>These Terms have been materially breached</li>
          <li>Fraud or Deal abuse has occurred</li>
          <li>The account creates a security risk</li>
          <li>The user is impersonating another person or business</li>
          <li>Continued access may expose Munch or others to legal harm</li>
          <li>Suspension is required by law</li>
        </ul>
        <p>
          Where appropriate, we may provide notice and an opportunity to
          address the issue. Serious fraud, security risks or unlawful
          activity may result in immediate suspension.
        </p>
      </LegalSection>

      <LegalSection heading="Consumer rights">
        <p>
          Nothing in these Terms excludes, restricts or modifies any right
          or remedy that cannot lawfully be excluded under New Zealand law.
          This includes rights that may apply under the:
        </p>
        <ul>
          <li>Consumer Guarantees Act 1993</li>
          <li>Fair Trading Act 1986</li>
        </ul>
        <p>
          Where those laws apply, they take priority over any inconsistent
          provision of these Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Liability">
        <p>
          To the maximum extent permitted by law, Munch is not responsible
          for losses arising solely from the acts or omissions of an
          independent participating business, including the quality,
          preparation or supply of products sold directly by that business.
          Munch remains responsible for its own obligations to the extent
          required by law.
        </p>
        <p>
          To the extent permitted by law, Munch will not be liable for
          indirect or consequential losses that were not reasonably
          foreseeable. Nothing in these Terms excludes liability that cannot
          legally be excluded or limited.
        </p>
        <p>
          <strong>Business users.</strong> Where you use Munch for business
          purposes, any limitation of liability will apply only to the
          extent permitted by law. Unless otherwise agreed in writing, and
          to the extent legally permitted, Munch&rsquo;s aggregate liability
          to a business arising from the Munch services will not exceed the
          fees paid by that business to Munch during the 12 months
          immediately preceding the event giving rise to the claim. This
          limitation does not apply to fraud, wilful misconduct or liability
          that cannot legally be limited.
        </p>
      </LegalSection>

      <LegalSection heading="Privacy">
        <p>
          Our collection and handling of personal information is governed by
          the Munch Privacy Policy. By using Munch, you acknowledge that you
          have had the opportunity to review that policy.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to these Terms">
        <p>We may update these Terms where reasonably necessary, including when:</p>
        <ul>
          <li>We introduce new features</li>
          <li>Our business model changes</li>
          <li>Legal requirements change</li>
          <li>We need to address security or operational issues</li>
        </ul>
        <p>The current Terms will be available through the Munch Platform or website.</p>
        <p>
          If a change materially affects your rights or obligations, we will
          take reasonable steps to notify you before it takes effect. Where
          appropriate, you may stop using or cancel the affected service if
          you do not agree to the updated Terms.
        </p>
      </LegalSection>

      <LegalSection heading="Disputes">
        <p>
          If you have a problem with Munch, please contact us first so we
          can attempt to resolve it. For an issue relating to food,
          beverages, customer service or another product supplied by a
          participating business, you should generally contact the relevant
          business first.
        </p>
        <p>
          Nothing in this section prevents you from exercising any legal
          right or using any dispute-resolution process available to you
          under New Zealand law.
        </p>
      </LegalSection>

      <LegalSection heading="Governing law">
        <p>
          These Terms are governed by the laws of New Zealand. Subject to
          any rights you have under mandatory applicable law, disputes
          relating to these Terms may be dealt with by the courts and
          tribunals of New Zealand.
        </p>
      </LegalSection>

      <LegalSection heading="Severability">
        <p>
          If any part of these Terms is found to be unlawful or
          unenforceable, the remaining provisions will continue to apply to
          the extent legally possible.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>Questions about these Terms can be sent to:</p>
        <p>
          {businessNameNode}
          {!operatorIsMunch && <>, trading as Munch</>}
          <br />
          {addressNode}
          <br />
          {supportEmailNode}
        </p>
      </LegalSection>
    </LegalLayout>
  );
}
