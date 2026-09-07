import Link from 'next/link';
import Brand from '@/components/Brand';
import { BUSINESS, agreementNoun, agreementNounLower, hasPhone, phoneDisplay, req, telHref } from '@/lib/business';
import { FRONTIER_COPYRIGHT, FRONTIER_TRADEMARK, PRICING_REVIEWED } from '@/lib/catalog';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <a className="brand brand--footer" href="#top" aria-label={`${BUSINESS.tradeName} home`}>
            <Brand size={30} withQualifier={false} />
          </a>
          <p className="footer__blurb">
            Independent authorized {agreementNounLower()} of Frontier® fiber internet,
            TV and Home Phone services.
          </p>
          {hasPhone() ? <a className="footer__phone" href={telHref()}>{phoneDisplay()}</a> : null}
          {BUSINESS.email ? <a className="footer__email" href={`mailto:${req('email')}`}>{req('email')}</a> : null}
          {BUSINESS.hours ? <p className="footer__hours">{req('hours')}</p> : null}
        </div>
        <nav className="footer__col" aria-label="Explore">
          <h3>Explore</h3>
          <a href="#plans">Fiber plans</a><a href="#why">Why fiber</a><a href="#process">How it works</a><a href="#bundles">Bundles</a><a href="#tv">TV</a><a href="#phone">Home Phone</a><a href="#faq">FAQ</a>
        </nav>
        <nav className="footer__col" aria-label="Policies and legal">
          <h3>Policies &amp; Legal</h3>
          <Link href="/privacy">Privacy &amp; Data Protection</Link><Link href="/disclaimer">Disclaimer</Link><Link href="/cookies">Cookies Policy</Link><Link href="/tcpa">TCPA Policy</Link><Link href="/trademarks">Trademarks</Link><Link href="/marketing-policy">Marketing Policy</Link><Link href="/service-fulfillment">Service Fulfillment</Link><Link href="/pci-dss">PCI DSS</Link>
        </nav>
        <div className="footer__col footer__social">
          <h3>Company</h3>
          <p className="footer__addr">
            {req('legalName')}<br />{req('street')}<br />{req('cityStateZip')}
          </p>
        </div>
      </div>
      <div className="wrap footer__legal">
        <p className="footer__trademark">
          This site is operated by {req('legalName')}, an independent Authorized{' '}
          {agreementNoun()} of Frontier®. {FRONTIER_TRADEMARK} {FRONTIER_COPYRIGHT}.{' '}
          {BUSINESS.tradeName} is not affiliated with, endorsed by, or the official website of
          Frontier. All other trademarks are the property of their respective owners, and are used
          by {req('legalName')} only to describe products and services offered by each respective
          trademark holder.
        </p>
        <p className="footer__pricing-date">
          Pricing last reviewed {PRICING_REVIEWED}. Pricing, terms
          and offers are subject to change and discontinuance without notice. Services are not
          available in all areas.
        </p>
        <div className="footer__bottom">
          <p>© 2026 {req('legalName')}. All rights reserved.</p>
          <p className="footer__mini"><Link href="/privacy">Privacy</Link><span aria-hidden="true">·</span><Link href="/cookies">Cookies</Link><span aria-hidden="true">·</span><Link href="/disclaimer">Disclaimer</Link><span aria-hidden="true">·</span><Link href="/tcpa">TCPA</Link></p>
        </div>
      </div>
    </footer>
  );
}
