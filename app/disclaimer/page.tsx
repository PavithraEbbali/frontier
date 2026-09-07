import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Disclaimer | Frontier® Fiber',
  description: 'Important disclaimers about Frontier® Fiber, an independent authorized reseller of Frontier® services, including plan, pricing and availability information.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Disclaimer</p>
          <h1>Disclaimer</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#purpose">General information only</a></li><li><a href="#reseller">Authorized reseller relationship</a></li><li><a href="#warranty">No warranties</a></li><li><a href="#pricing">Plans, pricing &amp; availability</a></li><li><a href="#thirdparty">Third-party content &amp; links</a></li><li><a href="#liability">Limitation of liability</a></li><li><a href="#changes">Changes</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>The information on this website is provided by {req('legalName')} for general informational purposes. By using this site you accept this disclaimer in full. If you disagree with any part of it, please do not use the site.</p>
          <div className="callout"><p><strong>Please note:</strong> {req('legalName')} is an independent authorized reseller of Frontier® services. We are not Frontier Communications, and this is not Frontier's official website.</p></div>
          <h2 id="purpose">1. General information only</h2>
          <p>Content on this site is offered in good faith to help you understand and shop for Frontier fiber services. It does not constitute a binding offer, contract, or professional advice. While we work to keep information current and accurate, we make no representation that everything here is complete, correct or up to date at all times.</p>
          <h2 id="reseller">2. Authorized reseller relationship</h2>
          <p>{req('legalName')} markets and helps customers order Frontier fiber-optic internet, phone and TV services as an authorized reseller. Frontier owns and operates the network and is responsible for provisioning, installation, service quality and billing. References to Frontier and its products are for identification only and do not imply that Frontier authored, reviewed or endorses the specific content on this site unless expressly stated.</p>
          <h2 id="warranty">3. No warranties</h2>
          <p>This website and its content are provided "as is" and "as available" without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement. We do not warrant that the site will be uninterrupted, secure or error-free.</p>
          <h2 id="pricing">4. Plans, pricing &amp; availability</h2>
          <p>Speeds, plans, promotions, equipment and prices shown on this site are illustrative, may change without notice, and vary by service address. Advertised speeds are maximums and are not guaranteed; actual speeds depend on many factors. Final plans, pricing, taxes, fees and terms are confirmed by Frontier at the time of order. See our <Link href="/service-fulfillment">Service Fulfillment</Link> notice for how ordering works.</p>
          <h2 id="thirdparty">5. Third-party content &amp; links</h2>
          <p>Our site may reference or link to third-party websites and trademarks. We do not control and are not responsible for third-party content, policies or practices. Trademarks are the property of their respective owners as described in our <Link href="/trademarks">Trademarks</Link> notice.</p>
          <h2 id="liability">6. Limitation of liability</h2>
          <p>To the fullest extent permitted by law, {req('legalName')} will not be liable for any indirect, incidental, consequential or special damages arising out of or in connection with your use of this website or reliance on its content. Nothing in this disclaimer limits any liability that cannot be limited under applicable law.</p>
          <h2 id="changes">7. Changes</h2>
          <p>We may update this disclaimer at any time. The "Last updated" date shows the current version, and continued use of the site means you accept the latest version.</p>
          <h2 id="contact">8. Contact us</h2>
          <p>Questions about this disclaimer? Email <a href={`mailto:${req('email')}`}>{req('email')}</a> or call <a href={telHref()} data-call-cta>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
