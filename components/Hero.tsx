import Image from 'next/image';
import heroBg from '@/public/assets/hero-bg.jpg';

export default function Hero() {
  return (
    <section className="hero hero--photo" id="home" aria-labelledby="heroTitle" data-hero>
      <div className="hero__bg" aria-hidden="true">
        <Image
          className="hero__bgimg"
          src={heroBg}
          alt=""
          data-hero-bg
          priority
          sizes="100vw"
          placeholder="blur"
        />
        <span className="hero__scrim"></span>
        <span className="hero__trail"></span>
        <span className="hero__trailflow"></span>
        <span className="hero__windows"></span>
      </div>

      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="kicker" data-hero-kicker>
            <span className="kicker__diamond" aria-hidden="true"></span>
            <span className="kicker__txt">Independent authorized Frontier® fiber retailer</span>
          </p>

          <h1 className="hero__title" id="heroTitle">
            <span className="mask"><span className="mask__i" data-split>Frontier Fiber,</span></span>
            <span className="mask"><span className="mask__i" data-split>up to 7 Gig.</span></span>
          </h1>

          <p className="hero__lead" data-hero-lead>
            100% fiber from 500 Mbps to 7 Gig, with upload speeds that match your download.
            No data caps, no annual contract, and an eero Wi-Fi router on every plan.
          </p>

          {/* Availability starts with a ZIP. Frontier sets both serviceability and
              pricing by address, so this hands off to the callback request below
              rather than pretending to be a live lookup. */}
          <form className="ziplookup" id="zipForm" data-hero-cta noValidate>
            <label className="ziplookup__label" htmlFor="heroZip">See what Frontier offers at your address</label>
            <div className="ziplookup__row">
              <input
                id="heroZip"
                name="zip"
                className="ziplookup__input"
                type="text"
                inputMode="numeric"
                autoComplete="postal-code"
                placeholder="Enter your ZIP code"
                maxLength={5}
                required
              />
              <button className="btn btn--primary btn--lg ziplookup__btn" type="submit">
                Check availability
              </button>
            </div>
            <p className="ziplookup__note" id="zipNote" role="status" aria-live="polite"></p>
          </form>

          <ul className="feats" aria-label="Highlights">
            <li className="feat" data-feat>
              <span className="feat__ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path className="dp" d="M4.5 12c0-2.2 1.8-4 4-4 1.6 0 2.6 1 3.5 2s1.9 2 3.5 2 3.5-1.3 3.5-2-1.6-2-3.5-2c-1.6 0-2.6 1-3.5 2s-1.9 2-3.5 2-4-1.8-4-4Z"/></svg></span>
              <span className="feat__tx"><b>No data caps</b><i>Unlimited data</i></span>
            </li>
            <li className="feat" data-feat>
              <span className="feat__ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path className="dp" d="M4 6h16M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6M8 3v4M16 3v4"/><path className="dp2" d="m9 13 2 2 4-4"/></svg></span>
              <span className="feat__tx"><b>No contract</b><i>Month to month</i></span>
            </li>
            <li className="feat" data-feat>
              <span className="feat__ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path className="dp" d="M14.5 5.5a3.5 3.5 0 0 0-4.9 4.9l-5.3 5.3a1.5 1.5 0 0 0 2.1 2.1l5.3-5.3a3.5 3.5 0 0 0 4.9-4.9l-2 2-1.8-.3-.3-1.8 2-2Z"/></svg></span>
              <span className="feat__tx"><b>Free install</b><i>On select plans</i></span>
            </li>
            <li className="feat" data-feat>
              <span className="feat__ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path className="dp" d="M2.5 9.5a13 13 0 0 1 19 0M5.5 13a8.5 8.5 0 0 1 13 0M8.5 16.5a4 4 0 0 1 7 0"/><circle className="dp2" cx="12" cy="20" r="1.2"/></svg></span>
              <span className="feat__tx"><b>eero router</b><i>Included</i></span>
            </li>
          </ul>
        </div>
      </div>

      <a className="scroll-cue" href="#plans" aria-label="Scroll to plans">
        <span className="scroll-cue__track"><span className="scroll-cue__thumb"></span></span>
        <span className="scroll-cue__label">Scroll</span>
      </a>
    </section>
  );
}
