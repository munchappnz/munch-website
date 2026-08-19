import type { Metadata } from "next";
import Link from "next/link";
import { LegalLayout, LegalSection, ConfigPlaceholder } from "@/components/LegalLayout";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Munch collects, uses, stores, shares and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  const businessName = siteConfig.legalBusinessName;
  const privacyEmail = siteConfig.privacyEmail;

  const legalOperatorNode = businessName ? (
    <strong>{businessName}</strong>
  ) : (
    <ConfigPlaceholder>[LEGAL OPERATOR NAME]</ConfigPlaceholder>
  );
  const privacyEmailNode = privacyEmail ? (
    <a href={`mailto:${privacyEmail}`}>{privacyEmail}</a>
  ) : (
    <ConfigPlaceholder>[CONTACT EMAIL]</ConfigPlaceholder>
  );

  return (
    <LegalLayout title="Munch Privacy Policy" meta="Last updated: 19 August 2026">
      <p>
        Munch respects your privacy and is committed to protecting your
        personal information.
      </p>
      <p>
        This Privacy Policy explains how Munch collects, uses, stores, shares
        and protects personal information when you use the Munch mobile
        application, the Munch website at munchapp.co.nz, or interact with
        Munch as a consumer, participating business or other user.
      </p>
      <p>
        Munch operates in New Zealand and handles personal information in
        accordance with the Privacy Act 2020 and other applicable New Zealand
        law.
      </p>

      <LegalSection heading="1. Who we are">
        <p>
          Munch is currently an unincorporated New Zealand business operated
          by {legalOperatorNode} under the trading name Munch.
        </p>
        <p>
          When Munch becomes an incorporated company, this Privacy Policy
          will be updated to identify the relevant company.
        </p>
        <p>
          Website: <Link href="/">munchapp.co.nz</Link>
        </p>
        <p>Privacy and support email: {privacyEmailNode}</p>
        <p>
          <strong>Privacy Officer</strong>
        </p>
        <p>
          Munch has appointed a Privacy Officer responsible for overseeing
          Munch&rsquo;s privacy practices and responding to privacy
          enquiries, access requests, correction requests and complaints.
        </p>
        <p>The Privacy Officer can be contacted at: {privacyEmailNode}</p>
      </LegalSection>

      <LegalSection heading="2. Scope of this Privacy Policy">
        <p>This Privacy Policy applies to personal information collected through:</p>
        <ul>
          <li>the Munch iOS application;</li>
          <li>the Munch Android application;</li>
          <li>munchapp.co.nz;</li>
          <li>consumer Munch accounts;</li>
          <li>business and restaurant Munch accounts;</li>
          <li>Munch customer support;</li>
          <li>Munch marketing communications;</li>
          <li>offer and redemption activity;</li>
          <li>business onboarding; and</li>
          <li>other services operated by Munch that link to this Privacy Policy.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="3. Information we collect from consumers">
        <p>When you create and use a Munch account, we may collect:</p>
        <ul>
          <li>your name;</li>
          <li>email address;</li>
          <li>mobile phone number;</li>
          <li>date of birth;</li>
          <li>Munch user or account ID;</li>
          <li>account authentication information;</li>
          <li>saved or favourited venues or offers;</li>
          <li>offer and redemption history;</li>
          <li>notification preferences;</li>
          <li>marketing preferences;</li>
          <li>content you upload or submit;</li>
          <li>communications you send to Munch; and</li>
          <li>other information you choose to provide.</li>
        </ul>
        <p>
          We collect this information where it is reasonably necessary to
          create and operate your account, provide Munch&rsquo;s services,
          maintain security or provide features you request.
        </p>
      </LegalSection>

      <LegalSection heading="4. Sign in with Apple and Google">
        <p>Munch may allow users to create or access an account using:</p>
        <ul>
          <li>Sign in with Apple; or</li>
          <li>Sign in with Google.</li>
        </ul>
        <p>
          If you use one of these services, Munch may receive information
          that you have authorised the provider to make available to us,
          such as:
        </p>
        <ul>
          <li>your name;</li>
          <li>email address;</li>
          <li>provider account identifier; and</li>
          <li>other basic authentication information.</li>
        </ul>
        <p>
          If you use Apple&rsquo;s Hide My Email feature, Munch may receive
          an Apple-generated relay email address rather than your personal
          email address.
        </p>
        <p>
          Munch does not receive your Apple ID password or Google account
          password.
        </p>
        <p>
          Your use of Apple or Google services is also subject to the privacy
          practices of the relevant provider.
        </p>
      </LegalSection>

      <LegalSection heading="5. Date of birth and age information">
        <p>Munch collects date of birth to:</p>
        <ul>
          <li>confirm eligibility to use Munch;</li>
          <li>provide an age-appropriate experience;</li>
          <li>
            manage access to age-restricted content or offers where relevant;
          </li>
          <li>meet legal, safety or platform requirements; and</li>
          <li>prevent underage use of age-restricted offers.</li>
        </ul>
        <p>Munch is intended for users aged 13 years and older.</p>
        <p>
          Some businesses, products, services or offers accessible through
          Munch may have a higher legal age requirement.
        </p>
        <p>
          For example, alcohol-related products or offers may only be
          purchased or redeemed by people who meet the applicable legal
          purchasing age and any identification requirements imposed by the
          participating business or applicable law.
        </p>
      </LegalSection>

      <LegalSection heading="6. Location information">
        <p>
          Munch uses location information to help users discover businesses
          and offers near them.
        </p>
        <p>
          If you give Munch permission to access your device location, Munch
          may access your location while you are using the app in order to:
        </p>
        <ul>
          <li>
            identify nearby restaurants, cafés, bars and other participating
            businesses;
          </li>
          <li>show nearby offers;</li>
          <li>calculate approximate distance from a venue;</li>
          <li>display businesses and offers on a map;</li>
          <li>order search results based on location; and</li>
          <li>provide other location-based functionality requested by you.</li>
        </ul>
        <p>
          Munch does not intentionally collect your location continuously
          while the app is closed.
        </p>
        <p>
          Munch does not require background location tracking for its normal
          functionality.
        </p>
        <p>Where possible, you may instead search for or select an area manually.</p>
        <p>
          You can disable Munch&rsquo;s access to your location at any time
          through your device settings.
        </p>
        <p>
          Munch uses Apple Maps and Apple mapping services for certain
          location and mapping functionality on supported devices.
        </p>
        <p>Munch does not sell your location information.</p>
        <p>
          Munch does not use precise location information for third-party
          targeted advertising.
        </p>
      </LegalSection>

      <LegalSection heading="7. Location history">
        <p>
          Munch is designed to use location to provide nearby results rather
          than to create a continuous record of your movements.
        </p>
        <p>
          We do not intentionally create or maintain a continuous location
          history showing everywhere a user has travelled.
        </p>
        <p>
          Certain technical logs may temporarily contain location-related
          information where this is necessary to provide a requested
          service, maintain security, diagnose technical problems or prevent
          fraud.
        </p>
        <p>
          Such information will not be retained longer than reasonably
          necessary for those purposes.
        </p>
      </LegalSection>

      <LegalSection heading="8. Businesses using Munch">
        <p>Businesses may create or manage listings and offers through Munch.</p>
        <p>For business users, we may collect:</p>
        <ul>
          <li>name of the business;</li>
          <li>trading name;</li>
          <li>business address;</li>
          <li>contact person&rsquo;s name;</li>
          <li>business email address;</li>
          <li>business telephone number;</li>
          <li>position or relationship to the business;</li>
          <li>website and social media links;</li>
          <li>opening hours;</li>
          <li>menu or product information;</li>
          <li>logos and photographs;</li>
          <li>business descriptions;</li>
          <li>offers and promotions;</li>
          <li>offer availability times;</li>
          <li>redemption information;</li>
          <li>account information;</li>
          <li>communications with Munch;</li>
          <li>invoicing information; and</li>
          <li>
            other information reasonably necessary to operate the
            business&rsquo;s Munch account.
          </li>
        </ul>
        <p>
          Information about a business that does not identify an individual
          may not constitute personal information.
        </p>
        <p>
          Where business information identifies a person, such as a sole
          trader, owner, manager or staff member, Munch will treat that
          information appropriately as personal information.
        </p>
      </LegalSection>

      <LegalSection heading="9. Business payments and invoicing">
        <p>
          Consumers do not currently make payments to Munch through the
          Munch app.
        </p>
        <p>
          Participating businesses may be charged by Munch through direct
          monthly invoicing outside of the mobile application.
        </p>
        <p>For business invoicing and accounting purposes, Munch may collect or retain:</p>
        <ul>
          <li>business name;</li>
          <li>billing contact;</li>
          <li>billing email address;</li>
          <li>invoice amounts;</li>
          <li>payment status;</li>
          <li>payment references;</li>
          <li>transaction records; and</li>
          <li>other records reasonably necessary for accounting or taxation purposes.</li>
        </ul>
        <p>
          Munch does not currently collect or store consumer credit or debit
          card details through the Munch app.
        </p>
        <p>
          Financial and business records may be retained for longer periods
          where required by New Zealand taxation, accounting or other legal
          obligations.
        </p>
      </LegalSection>

      <LegalSection heading="10. Offer and redemption information">
        <p>
          When you view, save, activate or redeem an offer, Munch may record
          information including:
        </p>
        <ul>
          <li>the offer;</li>
          <li>the participating business;</li>
          <li>your Munch account identifier;</li>
          <li>the date and time;</li>
          <li>whether an offer was redeemed;</li>
          <li>redemption identifiers or codes;</li>
          <li>redemption status; and</li>
          <li>
            information reasonably necessary to prevent duplicate or
            fraudulent redemptions.
          </li>
        </ul>
        <p>We may use redemption information to:</p>
        <ul>
          <li>make the redemption function work;</li>
          <li>verify that an offer has been used;</li>
          <li>enforce redemption limits;</li>
          <li>prevent fraud or misuse;</li>
          <li>resolve disputes;</li>
          <li>measure offer performance;</li>
          <li>
            provide businesses with aggregate or transactional redemption
            reporting; and
          </li>
          <li>improve Munch.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="11. What businesses see when you redeem">
        <p>
          Participating businesses can receive confirmation that a Munch
          offer has been redeemed.
        </p>
        <p>
          Businesses are not provided with unnecessary private information
          about the consumer simply because an offer has been redeemed.
        </p>
        <p>
          For example, Munch does not ordinarily provide the restaurant with
          your:
        </p>
        <ul>
          <li>personal email address;</li>
          <li>personal phone number;</li>
          <li>password;</li>
          <li>date of birth;</li>
          <li>precise device location;</li>
          <li>unrelated Munch activity; or</li>
          <li>private account information.</li>
        </ul>
        <p>
          A business may receive information reasonably required to verify
          the redemption, such as:
        </p>
        <ul>
          <li>confirmation that the offer has been redeemed;</li>
          <li>the relevant offer;</li>
          <li>redemption date or time;</li>
          <li>redemption identifier; and</li>
          <li>redemption status.</li>
        </ul>
        <p>
          Information may be disclosed where required by law or where
          reasonably necessary to investigate fraud, misuse or a dispute.
        </p>
      </LegalSection>

      <LegalSection heading="12. User-generated content">
        <p>Munch may allow consumers or businesses to create, upload or submit content.</p>
        <p>This may include:</p>
        <ul>
          <li>reviews;</li>
          <li>comments;</li>
          <li>photographs;</li>
          <li>business photographs;</li>
          <li>profile content;</li>
          <li>venue information;</li>
          <li>offer information;</li>
          <li>descriptions; and</li>
          <li>other content submitted through Munch.</li>
        </ul>
        <p>
          When you intentionally submit content for public display, that
          content may be visible to other Munch users.
        </p>
        <p>
          You should not include sensitive personal information in public
          reviews, comments, photographs or other public content.
        </p>
        <p>Munch may collect information associated with submitted content, including:</p>
        <ul>
          <li>the account that submitted it;</li>
          <li>submission date and time;</li>
          <li>moderation status; and</li>
          <li>reports made about the content.</li>
        </ul>
        <p>
          Munch may moderate, restrict, remove or retain records relating to
          content where reasonably necessary to:
        </p>
        <ul>
          <li>enforce Munch&rsquo;s Terms of Use;</li>
          <li>maintain community safety;</li>
          <li>investigate complaints;</li>
          <li>prevent fraud or abuse;</li>
          <li>respond to legal requirements; or</li>
          <li>protect Munch, its users or participating businesses.</li>
        </ul>
        <p>
          When an account is deleted, Munch will also delete or appropriately
          de-identify user-generated content associated with that account
          unless there is a legitimate legal or safety reason for retaining
          particular information.
        </p>
      </LegalSection>

      <LegalSection heading="13. Information collected automatically">
        <p>
          When you use Munch, we may automatically receive limited technical
          information including:
        </p>
        <ul>
          <li>device type;</li>
          <li>operating system;</li>
          <li>app version;</li>
          <li>browser type;</li>
          <li>IP address;</li>
          <li>language;</li>
          <li>login and session information;</li>
          <li>security logs;</li>
          <li>app interactions;</li>
          <li>pages or screens viewed;</li>
          <li>offers viewed;</li>
          <li>saved items;</li>
          <li>feature usage;</li>
          <li>crash information;</li>
          <li>performance information; and</li>
          <li>other technical information reasonably required to operate and secure Munch.</li>
        </ul>
        <p>We use this information for purposes including:</p>
        <ul>
          <li>providing Munch;</li>
          <li>maintaining security;</li>
          <li>preventing fraud;</li>
          <li>diagnosing errors;</li>
          <li>understanding feature usage;</li>
          <li>improving performance; and</li>
          <li>developing Munch.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="14. Website cookies">
        <p>
          The Munch website may use cookies or similar technologies that are
          reasonably necessary to:
        </p>
        <ul>
          <li>operate the website;</li>
          <li>maintain sessions;</li>
          <li>remember user preferences;</li>
          <li>maintain security; and</li>
          <li>prevent abuse.</li>
        </ul>
        <p>
          Munch does not currently use advertising pixels or third-party
          cross-site tracking technologies such as Meta Pixel or TikTok
          Pixel.
        </p>
        <p>
          Munch does not currently use information collected through its
          website to build advertising profiles across unrelated websites.
        </p>
        <p>
          If Munch introduces non-essential analytics, advertising or
          tracking technology in the future, this Privacy Policy will be
          updated and any consent or disclosure required by applicable law
          will be implemented.
        </p>
      </LegalSection>

      <LegalSection heading="15. Advertising and tracking">
        <p>Munch does not currently:</p>
        <ul>
          <li>sell consumer personal information;</li>
          <li>sell consumer location data;</li>
          <li>share consumer personal information with data brokers;</li>
          <li>use Meta advertising SDKs within the app;</li>
          <li>use TikTok advertising SDKs within the app;</li>
          <li>use personal information for third-party behavioural advertising; or</li>
          <li>
            track users across unrelated companies&rsquo; apps or websites
            for targeted advertising.
          </li>
        </ul>
        <p>
          If Munch introduces functionality that constitutes tracking under
          Apple or Google platform requirements, Munch will comply with the
          relevant consent and disclosure requirements before using that
          functionality.
        </p>
      </LegalSection>

      <LegalSection heading="16. How we use personal information">
        <p>Munch may use personal information to:</p>
        <ul>
          <li>create and manage accounts;</li>
          <li>authenticate users;</li>
          <li>operate the Munch website and app;</li>
          <li>provide nearby offers;</li>
          <li>provide maps and location-based results;</li>
          <li>personalise relevant content;</li>
          <li>display participating businesses;</li>
          <li>facilitate and verify offer redemptions;</li>
          <li>prevent duplicate redemptions;</li>
          <li>communicate with users;</li>
          <li>communicate with participating businesses;</li>
          <li>provide customer support;</li>
          <li>send security notifications;</li>
          <li>send service notifications;</li>
          <li>send marketing communications where permitted;</li>
          <li>send push notifications;</li>
          <li>administer business accounts;</li>
          <li>manage business invoicing;</li>
          <li>detect and prevent fraud;</li>
          <li>protect the security of Munch;</li>
          <li>moderate user-generated content;</li>
          <li>resolve complaints and disputes;</li>
          <li>maintain and improve Munch;</li>
          <li>understand how features are used;</li>
          <li>develop new features;</li>
          <li>comply with legal obligations; and</li>
          <li>establish, exercise or defend legal rights.</li>
        </ul>
        <p>
          We will not use personal information for a materially unrelated
          purpose where doing so would be inconsistent with applicable
          privacy law.
        </p>
      </LegalSection>

      <LegalSection heading="17. Email, SMS and push notifications">
        <p>Munch may communicate with users through:</p>
        <ul>
          <li>email;</li>
          <li>SMS;</li>
          <li>app push notifications; and</li>
          <li>messages within Munch.</li>
        </ul>
        <p>
          <strong>Service communications</strong>
        </p>
        <p>
          We may send messages reasonably necessary to operate your account,
          including:
        </p>
        <ul>
          <li>verification messages;</li>
          <li>security alerts;</li>
          <li>password reset information;</li>
          <li>important account notices;</li>
          <li>redemption information;</li>
          <li>changes to Munch&rsquo;s services; and</li>
          <li>privacy or legal notices.</li>
        </ul>
        <p>
          <strong>Marketing communications</strong>
        </p>
        <p>Where permitted, Munch may send promotional communications regarding:</p>
        <ul>
          <li>new Munch offers;</li>
          <li>participating businesses;</li>
          <li>new features;</li>
          <li>competitions or promotions;</li>
          <li>nearby deals; and</li>
          <li>other Munch news.</li>
        </ul>
        <p>
          You can unsubscribe from marketing communications using the
          unsubscribe method provided in the communication or by contacting:{" "}
          {privacyEmailNode}
        </p>
        <p>
          Opting out of marketing does not prevent Munch from sending
          necessary service or security communications.
        </p>
        <p>Push notifications can also be disabled through your device settings.</p>
      </LegalSection>

      <LegalSection heading="18. Who we share personal information with">
        <p>
          Munch only shares personal information where reasonably necessary
          for a legitimate purpose, where you have authorised the
          disclosure, or where disclosure is otherwise permitted or required
          by law.
        </p>
        <p>Information may be shared with the following categories of recipient.</p>
        <p>
          <strong>Participating businesses</strong>
        </p>
        <p>
          Only information reasonably necessary to administer or verify
          Munch offers and redemptions.
        </p>
        <p>
          <strong>Technology providers</strong>
        </p>
        <p>Providers that assist with:</p>
        <ul>
          <li>hosting;</li>
          <li>databases;</li>
          <li>authentication;</li>
          <li>website operation;</li>
          <li>app operation;</li>
          <li>communications;</li>
          <li>security;</li>
          <li>backups;</li>
          <li>customer support; and</li>
          <li>other technical infrastructure.</li>
        </ul>
        <p>
          <strong>Apple</strong>
        </p>
        <p>Apple services may be used for:</p>
        <ul>
          <li>Sign in with Apple;</li>
          <li>Apple Maps;</li>
          <li>iOS functionality;</li>
          <li>app distribution; and</li>
          <li>related Apple services.</li>
        </ul>
        <p>
          <strong>Google</strong>
        </p>
        <p>Google services may be used for:</p>
        <ul>
          <li>Google account authentication;</li>
          <li>Android functionality;</li>
          <li>app distribution; and</li>
          <li>related Google services.</li>
        </ul>
        <p>
          <strong>Professional advisers</strong>
        </p>
        <p>
          Information may be provided where reasonably necessary to
          accountants, lawyers, insurers and other professional advisers
          subject to appropriate confidentiality obligations.
        </p>
        <p>
          <strong>Authorities</strong>
        </p>
        <p>
          Munch may disclose personal information where required or
          permitted by law, including in response to appropriate legal
          process or where reasonably necessary to investigate unlawful
          conduct, fraud or serious safety or security incidents.
        </p>
        <p>
          <strong>Business transactions</strong>
        </p>
        <p>
          If Munch&rsquo;s business is incorporated, sold, merged,
          reorganised or transferred, relevant information may be transferred
          as part of that transaction subject to appropriate privacy and
          confidentiality protections.
        </p>
      </LegalSection>

      <LegalSection heading="19. Overseas processing">
        <p>
          Some technology providers used by Munch may process or store
          information outside New Zealand.
        </p>
        <p>
          Where personal information is processed using overseas service
          providers, Munch will take reasonable steps to ensure appropriate
          privacy and security protections are in place.
        </p>
        <p>
          Munch remains responsible for personal information where
          applicable New Zealand privacy law treats an overseas service
          provider as processing information on Munch&rsquo;s behalf.
        </p>
        <p>
          Where personal information is disclosed to an overseas organisation
          for its own purposes, Munch will comply with applicable
          requirements relating to overseas disclosures.
        </p>
      </LegalSection>

      <LegalSection heading="20. Security">
        <p>
          Munch takes reasonable technical and organisational steps to
          protect personal information against:
        </p>
        <ul>
          <li>loss;</li>
          <li>unauthorised access;</li>
          <li>misuse;</li>
          <li>unauthorised disclosure;</li>
          <li>alteration; and</li>
          <li>destruction.</li>
        </ul>
        <p>These measures may include:</p>
        <ul>
          <li>encrypted network connections;</li>
          <li>HTTPS;</li>
          <li>secure account authentication;</li>
          <li>password hashing;</li>
          <li>access controls;</li>
          <li>restricted administrative access;</li>
          <li>secure databases;</li>
          <li>backup systems;</li>
          <li>software updates;</li>
          <li>security logging; and</li>
          <li>appropriate controls over service providers.</li>
        </ul>
        <p>No online service can guarantee absolute security.</p>
        <p>
          Users are responsible for maintaining the confidentiality of their
          account credentials and should contact Munch if they believe their
          account has been compromised.
        </p>
      </LegalSection>

      <LegalSection heading="21. How long we retain information">
        <p>
          Munch aims to retain personal information only for as long as
          reasonably necessary for the purpose for which it may lawfully be
          used.
        </p>
        <p>
          <strong>Active accounts</strong>
        </p>
        <p>
          Account information is generally retained while your Munch account
          remains active and while it is reasonably required to provide
          Munch&rsquo;s services.
        </p>
        <p>
          <strong>Deleted accounts</strong>
        </p>
        <p>
          When you delete your account, Munch will begin deleting personal
          information associated with the account.
        </p>
        <p>
          Munch&rsquo;s target is to complete deletion of ordinary account
          information from active production systems within 30 days, unless
          particular information must legitimately be retained for legal,
          fraud-prevention, security or dispute-resolution purposes.
        </p>
        <p>
          <strong>Backups</strong>
        </p>
        <p>Deleted information may remain temporarily within secure system backups.</p>
        <p>
          Munch&rsquo;s intended backup retention period is up to 30 days,
          after which backups are overwritten or deleted through the normal
          backup cycle.
        </p>
        <p>
          <strong>User-generated content</strong>
        </p>
        <p>
          Content associated with a deleted account will be deleted or
          appropriately de-identified unless Munch has a legitimate reason to
          retain particular information.
        </p>
        <p>
          <strong>Business and tax records</strong>
        </p>
        <p>
          Invoices, accounting records and related business records may be
          retained for at least seven tax years or for another period where
          required by applicable law.
        </p>
        <p>
          <strong>Security and dispute records</strong>
        </p>
        <p>
          Certain records may be retained for longer where reasonably
          necessary to investigate fraud, enforce Munch&rsquo;s Terms,
          resolve a dispute, protect users or comply with law.
        </p>
        <p>
          <strong>De-identified information</strong>
        </p>
        <p>
          Munch may retain aggregated or genuinely de-identified information
          that can no longer reasonably identify an individual.
        </p>
      </LegalSection>

      <LegalSection heading="22. Account deletion">
        <p>
          You can request deletion of your Munch account through the Munch
          app and through the Munch website.
        </p>
        <p>
          <strong>In the app</strong>
        </p>
        <p>
          Account deletion is available through the account or settings area
          of the Munch application.
        </p>
        <p>
          <strong>On the website</strong>
        </p>
        <p>An account deletion facility is available through:</p>
        <p>
          <Link href="/delete-account">munchapp.co.nz/delete-account</Link>
        </p>
        <p>
          Account deletion means deletion of the user&rsquo;s account and
          associated personal information, rather than simply disabling or
          freezing the account.
        </p>
        <p>
          Munch may require reasonable authentication before deleting an
          account in order to prevent unauthorised deletion.
        </p>
        <p>Some limited information may be retained where reasonably necessary or required by law.</p>
      </LegalSection>

      <LegalSection heading="23. Accessing your information">
        <p>
          You may request confirmation of whether Munch holds personal
          information about you and may request access to personal
          information you are entitled to receive under applicable New
          Zealand privacy law.
        </p>
        <p>Requests can be sent to: {privacyEmailNode}</p>
        <p>Munch may need to verify your identity before providing personal information.</p>
        <p>
          There are limited circumstances in which access may legally be
          refused or information may be withheld.
        </p>
      </LegalSection>

      <LegalSection heading="24. Correcting your information">
        <p>
          If you believe personal information held by Munch is incorrect,
          incomplete or out of date, you may request correction.
        </p>
        <p>Some information may also be editable through your Munch account.</p>
        <p>Correction requests can be sent to: {privacyEmailNode}</p>
      </LegalSection>

      <LegalSection heading="25. Your privacy choices">
        <p>Depending on the relevant feature, you may be able to:</p>
        <ul>
          <li>disable location access;</li>
          <li>manually search for a location;</li>
          <li>disable push notifications;</li>
          <li>unsubscribe from email marketing;</li>
          <li>unsubscribe from SMS marketing;</li>
          <li>change account details;</li>
          <li>change communication preferences;</li>
          <li>request access to your information;</li>
          <li>request correction of your information;</li>
          <li>remove uploaded content;</li>
          <li>disconnect third-party authentication; and</li>
          <li>delete your Munch account.</li>
        </ul>
        <p>
          If you withdraw permission for information that is necessary to
          provide a particular feature, that feature may no longer function.
        </p>
      </LegalSection>

      <LegalSection heading="26. Users under 13">
        <p>Munch is not intended for children under 13 years of age.</p>
        <p>Users must not create a Munch account if they are under 13.</p>
        <p>
          If Munch becomes aware that an account has been created by a child
          under 13 in circumstances where Munch should not hold the
          information, Munch may delete the account and associated
          information.
        </p>
        <p>
          Parents or guardians who believe Munch is holding information
          relating to a child under 13 may contact: {privacyEmailNode}
        </p>
        <p>Munch will take additional care when handling information relating to younger users.</p>
      </LegalSection>

      <LegalSection heading="27. Business outreach information">
        <p>
          Munch may separately maintain business-development information
          relating to restaurants, cafés, bars and other prospective business
          partners.
        </p>
        <p>
          This information is kept separate from consumer app profiles and is
          not used to build profiles of Munch consumers.
        </p>
        <p>Business contact information may come from:</p>
        <ul>
          <li>publicly available business websites;</li>
          <li>public business directories;</li>
          <li>information supplied directly by the business;</li>
          <li>professional networking information;</li>
          <li>referrals; or</li>
          <li>other legitimate sources.</li>
        </ul>
        <p>
          Where this information identifies an individual, such as a
          business owner or manager, Munch will handle it as personal
          information.
        </p>
        <p>
          Where New Zealand privacy law requires Munch to notify a person
          that their information was collected indirectly, Munch will take
          reasonable steps to provide the required information unless an
          applicable exception applies.
        </p>
      </LegalSection>

      <LegalSection heading="28. Privacy breaches">
        <p>
          Munch maintains processes for responding to suspected privacy and
          security incidents.
        </p>
        <p>If a breach occurs, Munch will take reasonable steps to:</p>
        <ul>
          <li>contain the incident;</li>
          <li>investigate what happened;</li>
          <li>determine what information was affected;</li>
          <li>reduce potential harm;</li>
          <li>correct relevant security weaknesses; and</li>
          <li>prevent recurrence.</li>
        </ul>
        <p>
          Where a privacy breach is notifiable under New Zealand law, Munch
          will notify the New Zealand Office of the Privacy Commissioner and
          affected individuals as required.
        </p>
      </LegalSection>

      <LegalSection heading="29. Independent businesses">
        <p>
          Restaurants, cafés, bars and other businesses displayed through
          Munch are generally independent businesses.
        </p>
        <p>
          If you provide personal information directly to a participating
          business outside Munch — for example by:
        </p>
        <ul>
          <li>making a booking;</li>
          <li>purchasing directly from the business;</li>
          <li>joining the business&rsquo;s loyalty programme;</li>
          <li>contacting the business; or</li>
          <li>visiting its external website —</li>
        </ul>
        <p>that business&rsquo;s own privacy practices may apply.</p>
        <p>
          Munch is not responsible for the independent privacy practices of
          third-party businesses.
        </p>
      </LegalSection>

      <LegalSection heading="30. External websites and services">
        <p>Munch may contain links to websites or services operated by third parties.</p>
        <p>
          This Privacy Policy applies to Munch and does not govern
          information independently collected by third-party websites or
          services.
        </p>
        <p>You should review the privacy information supplied by those providers where relevant.</p>
      </LegalSection>

      <LegalSection heading="31. Changes to this Privacy Policy">
        <p>Munch may update this Privacy Policy where:</p>
        <ul>
          <li>Munch introduces new features;</li>
          <li>the way personal information is handled changes;</li>
          <li>service providers change;</li>
          <li>legal requirements change; or</li>
          <li>Apple, Google or other platform requirements change.</li>
        </ul>
        <p>
          The current version will be available at:{" "}
          <Link href="/privacy">munchapp.co.nz/privacy</Link>
        </p>
        <p>
          The date at the beginning of this Privacy Policy will show when it
          was last updated.
        </p>
        <p>
          Where a change materially affects the way Munch handles personal
          information, Munch may provide additional notice through the app,
          website, email or another appropriate method.
        </p>
      </LegalSection>

      <LegalSection heading="32. Complaints">
        <p>
          If you have a privacy concern or complaint, please contact
          Munch&rsquo;s Privacy Officer first:
        </p>
        <p>
          Privacy Officer – Munch
          <br />
          {privacyEmailNode}
        </p>
        <p>Munch will consider privacy complaints and endeavour to respond appropriately.</p>
        <p>
          You may also have the right to make a complaint to the Office of
          the Privacy Commissioner of New Zealand.
        </p>
      </LegalSection>

      <LegalSection heading="33. Contact Munch">
        <p>For privacy questions, requests or concerns:</p>
        <p>
          Munch
          <br />
          Website: <Link href="/">munchapp.co.nz</Link>
          <br />
          Email: {privacyEmailNode}
        </p>
        <p>For privacy enquiries, include &ldquo;Privacy&rdquo; in the subject line where practical.</p>
      </LegalSection>
    </LegalLayout>
  );
}
