import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Trademarks | Frontier® Fiber',
  description: 'Trademark information for Frontier® Fiber, an independent authorized reseller of Frontier® services, including how third-party marks are used on this site.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Trademarks</p>
          <h1>Trademarks</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#frontier">Frontier trademarks</a></li><li><a href="#status">Our independent status</a></li><li><a href="#nominative">Permitted use of marks</a></li><li><a href="#endorsement">No implied endorsement</a></li><li><a href="#other">Other trademarks</a></li><li><a href="#reporting">Reporting a concern</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>This page explains the trademarks that appear on our website and the basis on which we use them.</p>
          <h2 id="frontier">1. Frontier trademarks</h2>
          <p>Frontier®, Frontier Fiber™, and related names, logos, product names and slogans are trademarks or registered trademarks of Verizon or its affiliates and its affiliates ("Frontier"). All rights in those marks belong to Frontier.</p>
          <h2 id="status">2. Our independent status</h2>
          <p>{req('legalName')} is an independent, authorized reseller of Frontier services. We are not owned by, operated by, or the official website of Frontier. Our own name, logo and branding are separate from Frontier's marks.</p>
          <h2 id="nominative">3. Permitted use of marks</h2>
          <p>We reference Frontier's marks only to accurately identify and describe the services we help customers order — a nominative use. We use the marks no more than necessary, do not alter them, and do not use them in a way intended to suggest sponsorship or endorsement beyond our authorized-reseller relationship.</p>
          <h2 id="endorsement">4. No implied endorsement</h2>
          <p>Use of Frontier's marks on this site does not imply that Frontier has reviewed, approved or endorsed the specific content, offers, pricing or opinions presented here, except where we expressly state that information comes from Frontier.</p>
          <h2 id="other">5. Other trademarks</h2>
          <p>All other product and company names mentioned on this site may be trademarks of their respective owners. Their use does not imply any affiliation with or endorsement by those owners.</p>
          <h2 id="reporting">6. Reporting a concern</h2>
          <p>If you believe any trademark is used incorrectly on this site, please let us know and we will review it promptly.</p>
          <h2 id="contact">7. Contact us</h2>
          <p>Email <a href={`mailto:${req('email')}`}>{req('email')}</a> or call <a href={telHref()} data-call-cta>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
