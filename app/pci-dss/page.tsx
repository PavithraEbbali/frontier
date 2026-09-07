import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'PCI DSS — Payment Security | Frontier® Fiber',
  description: 'How Frontier® Fiber approaches payment card security and PCI DSS. We do not collect or store card data on this website; payments are handled by compliant providers.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>PCI DSS</p>
          <h1>PCI DSS — Payment Security</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#commitment">Our commitment</a></li><li><a href="#what">What is PCI DSS</a></li><li><a href="#nostore">We don't store card data</a></li><li><a href="#encryption">Encryption &amp; secure transmission</a></li><li><a href="#scope">Scope &amp; shared responsibility</a></li><li><a href="#safe">Safe payment tips</a></li><li><a href="#reporting">Reporting a concern</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>Protecting your payment information matters to us. This notice explains our approach to payment card security and the Payment Card Industry Data Security Standard (PCI DSS).</p>
          <div className="callout"><p><strong>Important:</strong> this website does not collect, process or store credit or debit card numbers. When payment is needed to activate service, it is handled by Frontier and/or PCI-compliant payment providers through their own secure systems.</p></div>
          <h2 id="commitment">1. Our commitment</h2>
          <p>{req('legalName')} is committed to handling any personal information responsibly and to working only with partners and payment providers that maintain appropriate security standards, including PCI DSS where card data is involved.</p>
          <h2 id="what">2. What is PCI DSS</h2>
          <p>The PCI DSS is a set of security standards created by the major payment card brands to protect cardholder data. It covers areas such as secure networks, encryption, access control, monitoring and regular testing for organizations that store, process or transmit card information.</p>
          <h2 id="nostore">3. We don't store card data</h2>
          <p>Our lead and availability forms request contact and address details only — never full card numbers, CVV codes or PINs. If you ever encounter a page on our site asking for card data, do not enter it and please <a href="#contact">contact us</a> immediately.</p>
          <h2 id="encryption">4. Encryption &amp; secure transmission</h2>
          <p>Our website is served over encrypted HTTPS/TLS connections to help protect information in transit. Any payment that occurs during activation takes place within the secure, PCI-compliant environment of Frontier or its payment processor.</p>
          <h2 id="scope">5. Scope &amp; shared responsibility</h2>
          <p>Because card payments are processed by Frontier and/or third-party providers, PCI DSS compliance for cardholder data primarily rests with those parties. {req('legalName')}'s responsibility is to avoid unnecessarily collecting card data, to route any payment steps to compliant providers, and to protect the personal information we do handle as described in our <Link href="/privacy">Privacy &amp; Data Protection</Link> notice.</p>
          <h2 id="safe">6. Safe payment tips</h2>
          <ul>
            <li>Only enter payment details on secure pages that begin with "https://".</li>
            <li>Never share full card numbers, CVV codes or one-time passcodes by email or text.</li>
            <li>If an offer or request seems suspicious, verify it by calling us at the number below.</li>
          </ul>
          <h2 id="reporting">7. Reporting a concern</h2>
          <p>If you suspect a security issue involving payments or this website, contact us right away so we can investigate.</p>
          <h2 id="contact">8. Contact us</h2>
          <p>Email <a href={`mailto:${req('privacyEmail')}`}>{req('privacyEmail')}</a> or call <a href={telHref()} data-call-cta>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
