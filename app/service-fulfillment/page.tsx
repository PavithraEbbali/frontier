import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Service Fulfillment | Frontier® Fiber',
  description: 'How ordering Frontier® fiber through Frontier® Fiber works — availability, pricing and fees, installation, activation, changes, cancellations, billing and support.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Service Fulfillment</p>
          <h1>Service Fulfillment</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#how">How ordering works</a></li><li><a href="#plans">Availability &amp; serviceability</a></li><li><a href="#pricing">Pricing, taxes &amp; fees</a></li><li><a href="#install">Installation &amp; equipment</a></li><li><a href="#activation">Activation &amp; timelines</a></li><li><a href="#changes">Changes &amp; cancellations</a></li><li><a href="#billing">Billing</a></li><li><a href="#support">Support</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>This notice explains how {req('legalName')} helps you order Frontier® fiber services and what to expect through fulfillment. Because {req('legalName')} is an authorized reseller, Frontier ultimately provides, installs and bills your service under its own terms.</p>
          <h2 id="how">1. How ordering works</h2>
          <p>You share your address and preferences with us; we confirm which Frontier plans are serviceable and current pricing; and we help you place your order with Frontier. Your service agreement for the internet, phone or TV service is with Frontier and is subject to Frontier's terms and conditions.</p>
          <h2 id="availability">2. Availability &amp; serviceability</h2>
          <p>Fiber availability depends on your exact address. Plans and speeds shown on our site may not be available everywhere. We verify serviceability before completing an order, and some addresses may qualify for different tiers than those advertised.</p>
          <h2 id="pricing">3. Pricing, taxes &amp; fees</h2>
          <p>Prices displayed are starting or promotional rates for illustration and are confirmed with you by phone before any order is placed. Your total may include applicable taxes, surcharges, government fees and optional equipment or add-ons. Promotional pricing may require specific conditions, which we disclose before you order.</p>
          <h2 id="install">4. Installation &amp; equipment</h2>
          <p>Qualifying fiber orders include professional installation by a certified technician, and a compatible Wi-Fi router is provided with your plan. Additional equipment (such as mesh extenders) may be available for an added cost. Someone 18 or older typically must be present for installation.</p>
          <h2 id="activation">5. Activation &amp; timelines</h2>
          <p>After your order is confirmed, Frontier schedules installation at a time that works for you. Most fiber installations are completed in a single visit, and service is usually active the same day. Timelines can vary based on location and scheduling.</p>
          <h2 id="changes">6. Changes &amp; cancellations</h2>
          <p>You can change or cancel an order before installation by contacting us or Frontier. After activation, plan changes, cancellations and any promotional term commitments or early-termination fees are governed by Frontier's terms. We will always disclose any term commitment before you order.</p>
          <h2 id="billing">7. Billing</h2>
          <p>Frontier bills you directly for your monthly service. {req('legalName')} does not collect your monthly payments and does not store your payment card details; see our <Link href="/pci-dss">PCI DSS</Link> notice. Billing questions after activation are handled by Frontier, and we're happy to help point you in the right direction.</p>
          <h2 id="support">8. Support</h2>
          <p>Frontier provides technical support for active service, typically around the clock. For help choosing or ordering a plan, {req('legalName')} is here for you by phone or email.</p>
          <h2 id="contact">9. Contact us</h2>
          <p>Email <a href={`mailto:${req('email')}`}>{req('email')}</a> or call <a href={telHref()}>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
