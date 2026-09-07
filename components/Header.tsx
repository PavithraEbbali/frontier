import Brand from "@/components/Brand";
import { callLabel, telHref } from "@/lib/business";

function PhoneIcon({ size = 18 }: { size?: number }) {
  return (
    <svg className="ico" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" />
    </svg>
  );
}

export default function Header() {
  return (
    <header className="site-header" id="siteHeader">
      <div className="wrap header__row">
        <a className="brand" href="#top" aria-label="Frontier fiber internet, home">
          <Brand size={34} />
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#plans" className="nav__link">Plans</a>
          <a href="#bundles" className="nav__link">Offers</a>
          <a href="#tv" className="nav__link">TV</a>
          <a href="#phone" className="nav__link">Home&nbsp;Phone</a>
          <a href="#why" className="nav__link">Why&nbsp;fiber</a>
          <a href="#faq" className="nav__link">FAQ</a>
        </nav>
        <div className="header__actions">
          {/* Primary conversion is the phone call, so the number is the button. */}
          <a className="btn btn--primary btn--call" href={telHref()} data-call-cta>
            <PhoneIcon size={17} />
            <span className="btn__callnum">{callLabel()}</span>
          </a>
          <button className="nav-toggle" id="navToggle" aria-expanded="false" aria-controls="mobileNav" aria-label="Open menu"><span></span><span></span><span></span></button>
        </div>
      </div>
      <div className="mobile-nav" id="mobileNav" hidden>
        <a href="#plans">Plans</a>
        <a href="#bundles">Offers</a>
        <a href="#tv">TV</a>
        <a href="#phone">Home Phone</a>
        <a href="#why">Why fiber</a>
        <a href="#faq">FAQ</a>
        <a className="btn btn--primary mobile-nav__call" href={telHref()} data-call-cta>
          <PhoneIcon size={17} /> {callLabel()}
        </a>
      </div>
    </header>
  );
}
