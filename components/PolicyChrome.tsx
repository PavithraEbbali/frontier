import Link from 'next/link';
import Brand from '@/components/Brand';
import { BUSINESS, agreementNoun, agreementNounLower, callLabel, hasPhone, phoneDisplay, req, telHref } from '@/lib/business';
import { FRONTIER_COPYRIGHT, FRONTIER_TRADEMARK, PRICING_REVIEWED } from '@/lib/catalog';

export default function PolicyChrome({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>

      <div className="disclosure" role="note">
        <div className="wrap disclosure__row">
          <span className="disclosure__dot" aria-hidden="true"></span>
          <p>Independent <strong>authorized {agreementNounLower()}</strong> of Frontier® services — not the official Frontier website.</p>
          <Link className="disclosure__cta" href="/#plans">Check availability →</Link>
        </div>
      </div>

      <header className="site-header" id="siteHeader">
        <div className="wrap header__row">
          <Link className="brand" href="/#top" aria-label="Frontier fiber internet, home">
            <Brand size={34} />
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/#plans" className="nav__link">Plans</Link>
            <Link href="/#why" className="nav__link">Why Fiber</Link>
            <Link href="/#process" className="nav__link">How it works</Link>
            <Link href="/#bundles" className="nav__link">Bundles</Link>
            <Link href="/#faq" className="nav__link">FAQ</Link>
          </nav>
          <div className="header__actions">
            <a className="phone-link" href={telHref()} data-call-cta><svg className="ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" /></svg><span>{callLabel()}</span></a>
            <Link className="btn btn--primary btn--sm magnetic" href="/#plans" data-magnetic>Check availability</Link>
            <button className="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu"><span /><span /><span /></button>
          </div>
        </div>
        <div className="mobile-nav" id="mobileNav" hidden>
          <Link href="/#plans">Plans</Link>
          <Link href="/#why">Why Fiber</Link>
          <Link href="/#process">How it works</Link>
          <Link href="/#bundles">Bundles</Link>
            <Link href="/#tv">TV</Link>
            <Link href="/#phone">Home Phone</Link>
          <Link href="/#faq">FAQ</Link>
          <Link className="btn btn--primary" href="/#plans">Check availability</Link>
          <a className="mobile-nav__call" href={telHref()} data-call-cta>Call {phoneDisplay()}</a>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer" role="contentinfo">
        <div className="wrap footer__grid">
          <div className="footer__brand">
            <Link className="brand brand--footer" href="/#top" aria-label="Frontier fiber internet, home">
              <Brand size={30} withQualifier={false} />
            </Link>
            <p className="footer__blurb">Independent authorized {agreementNounLower()} of Frontier® fiber internet, TV and Home Phone services.</p>
            {hasPhone() ? <a className="footer__phone" href={telHref()} data-call-cta>{phoneDisplay()}</a> : null}
            {BUSINESS.email ? <a className="footer__email" href={`mailto:${req('email')}`}>{req('email')}</a> : null}
            {BUSINESS.hours ? <p className="footer__hours">{req('hours')}</p> : null}
          </div>
          <nav className="footer__col" aria-label="Explore">
            <h3>Explore</h3>
            <Link href="/#plans">Fiber plans</Link>
            <Link href="/#why">Why fiber</Link>
            <Link href="/#process">How it works</Link>
            <Link href="/#bundles">Bundles</Link>
            <Link href="/#tv">TV</Link>
            <Link href="/#phone">Home Phone</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#plans">Fiber plans</Link>
          </nav>
          <nav className="footer__col" aria-label="Policies and legal">
            <h3>Policies &amp; Legal</h3>
            <Link href="/privacy">Privacy &amp; Data Protection</Link>
            <Link href="/disclaimer">Disclaimer</Link>
            <Link href="/cookies">Cookies Policy</Link>
            <Link href="/tcpa">TCPA Policy</Link>
            <Link href="/trademarks">Trademarks</Link>
            <Link href="/marketing-policy">Marketing Policy</Link>
            <Link href="/service-fulfillment">Service Fulfillment</Link>
            <Link href="/pci-dss">PCI DSS</Link>
          </nav>
          <div className="footer__col footer__social">
            <h3>Follow</h3>
            <div className="social">
              <a href="#" aria-label="{req('legalName')} on X" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M3 3h4.5l4 5.6L16.5 3H21l-6.6 8.4L21 21h-4.5l-4.3-6L7.3 21H3l7-8.7z" fill="currentColor" /></svg></a>
              <a href="#" aria-label="{req('legalName')} on Facebook" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M14 8h3V4h-3a5 5 0 0 0-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9a1 1 0 0 1 1-1z" fill="currentColor" /></svg></a>
              <a href="#" aria-label="{req('legalName')} on Instagram" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.4" fill="currentColor" /></svg></a>
              <a href="#" aria-label="{req('legalName')} on YouTube" rel="noopener"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M10 9l5 3-5 3z" fill="currentColor" /></svg></a>
            </div>
            {BUSINESS.legalName ? <p className="footer__addr">{req('legalName')}<br />{req('street')}<br />{req('cityStateZip')}</p> : null}
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
    </>
  );
}
