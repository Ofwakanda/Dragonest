import Link from "next/link";
import { money, pricing, site } from "@/config/site";

/**
 * LEGAL TEMPLATES. Written in plain language as a starting point.
 * They are NOT legal advice. Have a qualified lawyer in your jurisdiction
 * review and adapt every document before launch.
 */

type Doc = { summary: string; body: React.ReactNode };
const S = site.name;

export const legal: Record<string, Doc> = {
  terms: {
    summary: "The rules for using our website and services.",
    body: (
      <>
        <h2>1. Who we are</h2>
        <p>{site.legalEntity} (&quot;{S}&quot;, &quot;we&quot;) provides managed staffing for AI-training accounts. These Terms apply to everyone who uses our website or services.</p>
        <h2>2. Eligible platforms only</h2>
        <p>We provide services only for AI-training platforms whose terms explicitly permit subcontracting, remote access or agency-managed work. We decide eligibility after our own review. We may decline or stop work on any account if a platform does not permit it, or stops permitting it.</p>
        <h2>3. Accounts and responsibility</h2>
        <p>Account owners keep ownership of their accounts and remain solely responsible for platform taxes, reporting and legal compliance in their country. We are not a party to your agreement with any platform.</p>
        <h2>4. No income guarantee</h2>
        <p>We do not guarantee any level of work, earnings or income for account owners or taskers. Task availability is controlled by the platforms.</p>
        <h2>5. Fees</h2>
        <p>Our fees are listed on the <Link href="/pricing" className="link">pricing page</Link> and in your plan. We will give at least 30 days&apos; notice before changing fees on an active plan.</p>
        <h2>6. Acceptable use</h2>
        <ul><li>Do not submit accounts you do not own.</li><li>Do not share passwords outside Telegram&apos;s end-to-end encrypted secret chat.</li><li>Do not misrepresent your identity, location or qualifications.</li><li>Do not harass or discriminate against anyone.</li></ul>
        <h2>7. Ending the service</h2>
        <p>You may end the service at any time. We may suspend or end the service for breach of these Terms, platform-rule changes, security risks or suspected fraud.</p>
        <h2>8. Liability</h2>
        <p>To the extent permitted by law, our total liability is limited to the fees you paid us in the 3 months before the claim. We are not liable for platform decisions, including suspensions, pay changes or project removals.</p>
        <h2>9. Governing law</h2>
        <p>These Terms are governed by the laws of {site.jurisdiction}.</p>
        <h2>10. Contact</h2>
        <p><a className="link" href={`mailto:${site.email.legal}`}>{site.email.legal}</a></p>
      </>
    ),
  },
  privacy: {
    summary: "What personal data we collect, why, and your rights.",
    body: (
      <>
        <h2>1. Data we collect</h2>
        <ul>
          <li><strong>Account owners:</strong> name, email, country, account details, platform credentials (Telegram encrypted chat only), invoices.</li>
          <li><strong>Taskers:</strong> name, email, country, time zone, skills, identity-verification result, payout details, work records, session recordings, and any accommodation needs you choose to share.</li>
          <li><strong>Visitors:</strong> necessary cookies and, with consent only, anonymous analytics.</li>
        </ul>
        <h2>2. Why we use it</h2>
        <p>To provide the service, verify identity, prevent fraud, pay people, check quality, resolve disputes and meet legal obligations. We do not sell personal data or use it for advertising.</p>
        <h2>3. Sensitive information</h2>
        <p>Accommodation information is optional, stored separately, and visible only to your coach and our accommodations lead. We never share it with account owners. We never ask for a diagnosis.</p>
        <h2>4. Retention</h2>
        <p>Session recordings: 90 days, or until a dispute closes. Audit logs: 2 years. Identity-verification results: as long as the law requires. Other data: while you use the service plus 12 months, unless the law requires longer.</p>
        <h2>5. Sharing</h2>
        <p>With our identity-verification partner, payment providers, hosting providers under data-processing agreements, and authorities where legally required.</p>
        <h2>6. Your rights</h2>
        <p>You can ask to access, correct, delete, export or restrict your data, and object to processing, subject to legal limits. Email <a className="link" href={`mailto:${site.email.privacy}`}>{site.email.privacy}</a>. You may also complain to your local data-protection authority.</p>
        <h2 id="cookies">7. Cookies</h2>
        <p>Necessary cookies keep the site secure and remember your cookie choice. Analytics cookies are off unless you turn them on. You can change your choice any time with &quot;Cookie settings&quot; in the footer.</p>
      </>
    ),
  },
  "host-agreement": {
    summary: "The agreement between account owners (hosts) and us.",
    body: (
      <>
        <h2>1. Parties and scope</h2>
        <p>This agreement is between you, the account owner (&quot;Host&quot;), and {S}. It covers the audit, onboarding, tasking and QA services for the accounts you submit.</p>
        <h2>2. Your promises</h2>
        <ul>
          <li>You own each submitted account and are allowed to authorize work on it.</li>
          <li>You have told us everything you know about the platform&apos;s rules on subcontracting and remote access.</li>
          <li>You will keep two-factor sign-in on and approve prompts during agreed shifts.</li>
          <li>You remain responsible for platform taxes, reporting and legal compliance.</li>
        </ul>
        <h2>3. Our promises</h2>
        <ul>
          <li>We only work on accounts after confirming the platform permits managed work.</li>
          <li>We verify every tasker&apos;s identity and skills and bind them to an NDA.</li>
          <li>We exchange credentials exclusively via Telegram&apos;s end-to-end encrypted secret chat with verified admins and never share them with taskers.</li>
          <li>We pay taskers at least {pricing.taskerShare}% of task earnings, weekly.</li>
          <li>We replace a tasker within {pricing.replacementDays} business days on reasonable request.</li>
        </ul>
        <h2>4. Fees and invoices</h2>
        <p>Fees are as listed on the pricing page at the time you sign. Invoices are monthly, show tasker pay and our fee separately, and are due within 7 days.</p>
        <h2>5. Stopping work</h2>
        <p>Either party may end this agreement at any time. We remove all tasker access the same business day and securely delete your credentials from our session storage within 7 days.</p>
        <h2>6. Platform changes</h2>
        <p>If a platform stops permitting managed work, we pause immediately and tell you. Neither party owes the other a penalty for this.</p>
      </>
    ),
  },
  "tasker-agreement": {
    summary: "The agreement between taskers and us.",
    body: (
      <>
        <h2>1. Your status</h2>
        <p>You are an independent contractor, not an employee, unless the law where you live says otherwise. You choose your hours and can decline any assignment.</p>
        <h2>2. Pay</h2>
        <ul>
          <li>At least {pricing.taskerShare}% of the gross task earnings for work you complete.</li>
          <li>Paid every Friday for the previous week&apos;s approved work, even if an owner pays us late.</li>
          <li>You never pay to join, train, test or receive work.</li>
          <li>We do not guarantee any number of hours or amount of income.</li>
        </ul>
        <h2>3. Rules</h2>
        <ul>
          <li>Work only inside our secure, recorded session.</li>
          <li>Do not try to access, copy or reveal account credentials or task content.</li>
          <li>Follow each platform&apos;s guidelines and our session rules.</li>
          <li>Don&apos;t let anyone else work under your identity.</li>
        </ul>
        <h2>4. Accommodations</h2>
        <p>You may ask for accommodations at any time. They are free, confidential and never reduce your pay share or ratings. See our <Link className="link" href="/legal/anti-discrimination">Anti-Discrimination Policy</Link>.</p>
        <h2>5. Recordings</h2>
        <p>Sessions are recorded for quality, security and disputes, kept for 90 days, and viewable by you on request.</p>
        <h2>6. Ending</h2>
        <p>You may stop at any time. We pay for all approved work through your last day.</p>
      </>
    ),
  },
  "data-processing": {
    summary: "How we process personal data on behalf of account owners and platforms.",
    body: (
      <>
        <h2>1. Roles</h2>
        <p>When we process task content or platform data for an account owner or platform, they are the controller and we are the processor. For tasker data, we are the controller.</p>
        <h2>2. Instructions</h2>
        <p>We process controller data only on documented instructions and only to deliver the services.</p>
        <h2>3. Security measures</h2>
        <ul><li>Encryption at rest and in transit</li><li>Isolated virtual machines per account</li><li>No clipboard, file transfer or USB</li><li>Role-based access and 2FA</li><li>Tamper-evident audit logs kept for 2 years</li></ul>
        <h2>4. Sub-processors</h2>
        <p>We keep a current list of sub-processors (hosting, identity verification, payments) and give 30 days&apos; notice of changes, with a right to object.</p>
        <h2>5. Breaches</h2>
        <p>We notify the controller without undue delay, and within 72 hours of becoming aware of a personal data breach.</p>
        <h2>6. Deletion and return</h2>
        <p>At the end of the service we delete or return controller data within 30 days, unless the law requires us to keep it.</p>
        <h2>7. Audits</h2>
        <p>We make information available to show compliance and allow reasonable audits once a year, with 30 days&apos; notice.</p>
      </>
    ),
  },
  "anti-discrimination": {
    summary: "Our commitment to fair treatment and reasonable accommodations.",
    body: (
      <>
        <h2>1. Our commitment</h2>
        <p>We do not discriminate on the basis of disability, health condition, neurodivergence, race, ethnicity, national origin, religion, sex, gender identity, sexual orientation, age (over 18), marital or family status, or where someone lives.</p>
        <h2>2. Accommodations</h2>
        <p>We provide reasonable accommodations to taskers and applicants at no cost. You don&apos;t need to share a diagnosis. Accommodation requests never affect assignment decisions, pay share or ratings.</p>
        <h2>3. Ratings and reviews</h2>
        <p>Reviews may not mention a person&apos;s disability, accommodations or identity. Account owners may not reject a tasker for these reasons.</p>
        <h2>4. Language</h2>
        <p>We use respectful, plain language. Slurs and demeaning language are not allowed anywhere on our platform.</p>
        <h2>5. Reporting</h2>
        <p>Report discrimination to <a className="link" href={`mailto:${site.email.legal}`}>{site.email.legal}</a>. We investigate within 10 business days and do not tolerate retaliation.</p>
      </>
    ),
  },
  "platform-compliance": {
    summary: "Important limits on which platforms we work with.",
    body: (
      <>
        <h2>Only permitted platforms</h2>
        <p>{S} works only with AI-training platforms whose terms, contributor agreements or written policies <strong>explicitly</strong> permit subcontracting, remote access by a third party or agency-managed work.</p>
        <p>Many AI-training and crowd-work platforms prohibit account sharing, third-party access or subcontracting. We do not accept accounts from those platforms, and we do not help anyone get around a platform&apos;s rules, identity checks or location restrictions.</p>
        <h2>How we check</h2>
        <ul>
          <li>Every account audit includes a review of the platform&apos;s current terms.</li>
          <li>Where terms are unclear, we seek written confirmation from the platform or decline.</li>
          <li>We re-check every platform at least quarterly and on any announced change.</li>
        </ul>
        <h2>If rules change</h2>
        <p>If a platform stops permitting managed work, we stop work on that platform within one business day and notify affected owners and taskers.</p>
        <h2>Owner responsibility</h2>
        <p>Account owners keep ownership and remain responsible for platform taxes, reporting and legal compliance. Our review is not legal advice.</p>
        <h2>Fees if we decline</h2>
        <p>If we decline an account because the platform does not permit managed work, the {money(pricing.audit.price)} audit fee is refunded in full.</p>
      </>
    ),
  },
};
