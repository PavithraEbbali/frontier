import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Marketing Policy | Frontier® Fiber',
  description: "Frontier® Fiber's marketing and advertising standards — truthful claims, transparent pricing, honest testimonials, and compliant email, SMS and digital advertising.",
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Marketing Policy</p>
          <h1>Marketing Policy</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#commitment">Our commitment</a></li><li><a href="#claims">Truthful, substantiated claims</a></li><li><a href="#pricing">Pricing &amp; offer transparency</a></li><li><a href="#testimonials">Endorsements &amp; testimonials</a></li><li><a href="#email">Email &amp; SMS marketing</a></li><li><a href="#digital">Digital &amp; search advertising</a></li><li><a href="#affiliate">Partner &amp; affiliate disclosure</a></li><li><a href="#prohibited">Prohibited practices</a></li><li><a href="#complaints">Complaints</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>{req('legalName')} believes good marketing is honest marketing. This policy sets the standards we hold ourselves and our partners to when advertising Frontier® fiber services.</p>
          <h2 id="commitment">1. Our commitment</h2>
          <p>We aim to advertise in a way that is truthful, clear and not misleading, and to comply with applicable advertising laws and platform policies, including FTC guidance, the CAN-SPAM Act, the TCPA, and the advertising policies of the networks we use.</p>
          <h2 id="claims">2. Truthful, substantiated claims</h2>
          <p>We describe speeds, features and benefits accurately. Advertised speeds are stated as maximums that vary by plan and location, and we avoid absolute guarantees we cannot support. Material terms are disclosed clearly and conspicuously rather than hidden in fine print.</p>
          <h2 id="pricing">3. Pricing &amp; offer transparency</h2>
          <p>Where we show pricing, we identify it as a starting or promotional rate where applicable, note that taxes, fees, equipment and terms may apply, and make clear that final pricing and availability are confirmed with you by phone before any order is placed. Promotional conditions and any term commitments are disclosed before you order.</p>
          <h2 id="testimonials">4. Endorsements &amp; testimonials</h2>
          <p>Any customer reviews or testimonials we publish reflect genuine experiences of real customers. We do not fabricate reviews, and we disclose material connections where they exist. Results described by individuals are their own and may not be typical.</p>
          <h2 id="email">5. Email &amp; SMS marketing</h2>
          <p>We send marketing emails and texts only in line with consent and the law. Every marketing email identifies us, includes a valid physical address, and offers an easy way to unsubscribe. Text programs follow our <Link href="/tcpa">TCPA Policy</Link>, including STOP-to-opt-out.</p>
          <h2 id="digital">6. Digital &amp; search advertising</h2>
          <p>When we advertise through search, display and social platforms, we identify ourselves as an authorized reseller and avoid implying that we are Frontier or the official Frontier website. Landing pages match the ad, disclose our reseller status, and provide working navigation and accurate information, consistent with major ad networks' misrepresentation and business-transparency policies.</p>
          <h2 id="affiliate">7. Partner &amp; affiliate disclosure</h2>
          <p>{req('legalName')} earns compensation as an authorized reseller when customers order qualifying Frontier services through us. This does not add cost to you. Any additional affiliate relationships will be disclosed where required.</p>
          <h2 id="prohibited">8. Prohibited practices</h2>
          <ul>
            <li>Impersonating Frontier or any other brand, or implying an affiliation we do not have.</li>
            <li>Deceptive "bait-and-switch" offers, hidden material terms, or false urgency.</li>
            <li>Unsubstantiated superiority or performance claims.</li>
            <li>Contacting people who have opted out, or ignoring do-not-call rules.</li>
          </ul>
          <h2 id="complaints">9. Complaints</h2>
          <p>If you believe any of our advertising is inaccurate or misleading, tell us and we will investigate and correct it where warranted.</p>
          <h2 id="contact">10. Contact us</h2>
          <p>Email <a href={`mailto:${req('email')}`}>{req('email')}</a> or call <a href={telHref()}>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
