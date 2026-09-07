import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Privacy & Data Protection | Frontier® Fiber',
  description: 'How an independent authorized Frontier® retailer collects, uses, shares and protects your personal information — and the privacy choices available to you.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Privacy &amp; Data Protection</p>
          <h1>Privacy &amp; Data Protection</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              <li><a href="#who">Who we are</a></li>
              <li><a href="#collect">Information we collect</a></li>
              <li><a href="#use">How we use your information</a></li>
              <li><a href="#share">When we share information</a></li>
              <li><a href="#choices">Your choices &amp; rights</a></li>
              <li><a href="#security">How we protect data</a></li>
              <li><a href="#retention">Data retention</a></li>
              <li><a href="#contact">Contact us</a></li>
            </ol>
          </nav>

          <p>{req('legalName')} ("we," "us," or "our") respects your privacy. This notice explains what personal information we collect when you visit our website or ask us to help you shop for Frontier® fiber services, how we use it, who we share it with, and the choices you have. {req('legalName')} is an independent authorized retailer and is not Frontier; when you order service, Frontier's own privacy practices also apply.</p>

          <div className="callout"><p><strong>The short version:</strong> we collect only what we need to check availability and help you order service, we don't sell your personal information for money, and you can opt out of marketing at any time.</p></div>

          <h2 id="who">1. Who we are</h2>
          <p>This website is operated by {req('legalName')}, doing business as {req('legalName')}, located at {req('street')}, {req('cityStateZip')}. We are the controller responsible for the personal information described here. You can reach us any time using the details in the <a href="#contact">Contact</a> section.</p>

          <h2 id="collect">2. Information we collect</h2>
          <h3>Information you give us</h3>
          <p>When you use our availability checker, request a quote, or contact us, you may provide your name, service address, ZIP code, phone number, email address, and the plan you're interested in. If you call us, we may keep notes of that conversation to serve your request.</p>
          <h3>Information collected automatically</h3>
          <p>Like most websites, we automatically receive certain technical information — such as your device type, browser, approximate location derived from your IP address, pages viewed, and referring links. Some of this is collected through cookies and similar technologies, described in our <Link href="/cookies">Cookies Policy</Link>.</p>
          <h3>Information from other sources</h3>
          <p>We may receive serviceability and order-status information from Frontier or its systems in order to confirm which plans are available at your address and to help complete your order.</p>

          <h2 id="use">3. How we use your information</h2>
          <ul>
            <li>Check whether Frontier fiber service is available at your address and share current pricing.</li>
            <li>Respond to your questions and help you place and track an order.</li>
            <li>Contact you about your request or, with your consent, about relevant offers.</li>
            <li>Operate, secure, measure and improve our website and services.</li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>
          <p>We contact you by phone, text and email only in line with your consent choices and our <Link href="/tcpa">TCPA Policy</Link> and <Link href="/marketing-policy">Marketing Policy</Link>.</p>

          <h2 id="share">4. When we share information</h2>
          <p>We share personal information only as needed and never sell it for money. Categories of recipients include:</p>
          <ul>
            <li><strong>Frontier Communications</strong> — to verify availability, submit and fulfill your order, and arrange installation.</li>
            <li><strong>Service providers</strong> — vendors who host our site, send communications, or provide analytics and customer-support tools on our behalf, under contract.</li>
            <li><strong>Legal &amp; safety</strong> — where required by law, to respond to lawful requests, or to protect rights, property and safety.</li>
            <li><strong>Business transfers</strong> — in connection with a merger, acquisition or sale of assets, subject to this notice.</li>
          </ul>

          <h2 id="choices">5. Your choices &amp; rights</h2>
          <p>Depending on where you live, you may have the right to access, correct, delete, or receive a copy of your personal information, and to opt out of certain sharing or targeted advertising. Residents of California and several other states have specific rights, including the right to opt out of the "sale" or "sharing" of personal information as those terms are defined by law.</p>
          <ul>
            <li><strong>Marketing opt-out:</strong> unsubscribe from emails using the link in any message, reply STOP to texts, or contact us.</li>
            <li><strong>Do Not Sell or Share:</strong> we do not sell personal information for money; to opt out of any sharing for cross-context advertising, contact us at [{req('privacyEmail')}].</li>
            <li><strong>Access / deletion:</strong> submit a request using the <a href="#contact">Contact</a> details; we will verify your identity before acting.</li>
          </ul>
          <p>We will not discriminate against you for exercising any of these rights.</p>

          <h2 id="security">6. How we protect data</h2>
          <p>We use administrative, technical and physical safeguards designed to protect personal information, including encryption in transit (HTTPS/TLS) and access controls. Payment card data is never collected or stored on this website; see our <Link href="/pci-dss">PCI DSS</Link> notice. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.</p>

          <h2 id="retention">7. Data retention</h2>
          <p>We keep personal information only as long as needed for the purposes described here, to comply with legal, accounting or reporting obligations, and to resolve disputes. When information is no longer needed, we take reasonable steps to delete or de-identify it.</p>

          <h3>Children's privacy</h3>
          <p>Our website is intended for adults. We do not knowingly collect personal information from children under 13 (or under 16 where applicable). If you believe a child has provided us information, please contact us so we can remove it.</p>

          <h3>Changes to this notice</h3>
          <p>We may update this notice from time to time. The "Last updated" date reflects the most recent version. Material changes will be posted on this page.</p>

          <h2 id="contact">8. Contact us</h2>
          <p>Questions or requests about your privacy? Email <a href={`mailto:${req('privacyEmail')}`}>{req('privacyEmail')}</a>, call <a href={telHref()}>{phoneDisplay()}</a>, or write to {req('legalName')}, {req('street')}, {req('cityStateZip')}.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
