import Link from 'next/link';
import { PLANS, PROMO_NOTE } from '@/lib/catalog';
import { hasPhone, phoneDisplay, telHref } from '@/lib/business';

/* Static, simultaneously-visible plan cards. Replaces the pinned, scroll-
   scrubbed speed dial: every tier is readable at once, no scroll-jacking.
   Cards enter with a single stagger — see globals.css [data-reveal]. */
export default function Plans() {
  return (
    <section className="section plans" id="plans" aria-labelledby="plansTitle">
      <div className="wrap">
        <header className="head head--split" data-reveal="up">
          <div>
            <p className="eyebrow-mono">Fiber plans</p>
            <h2 className="head__title" id="plansTitle">Frontier Fiber plans and&nbsp;speeds</h2>
          </div>
          <p className="head__note">
            Every tier is 100% fiber and fully symmetrical, with no data caps. Frontier sets
            pricing by address, so we confirm your exact rate on the call.
          </p>
        </header>

        <ul className="plangrid" data-stagger>
          {PLANS.map((p) => (
            <li className="plancard" key={p.id} data-reveal="up" data-popular={p.popular ? 'true' : undefined}>
              <article className="plancard__inner">
                <header className="plancard__head">
                  <h3 className="plancard__name">
                    {p.name}
                    {p.popular ? <span className="plancard__badge">Most popular</span> : null}
                  </h3>
                  <p className="plancard__speed">
                    <span className="plancard__num">{p.speedLabel}</span>
                    <span className="plancard__unit">
                      {p.speedUnit}
                      <i>↑↓ symmetrical</i>
                    </span>
                  </p>
                </header>

                {/* Canonical price lockup: dollar figure dominant, flex baseline,
                    promo condition line, step-up line. Only rendered for tiers
                    Frontier actually publishes a price for. */}
                {p.price ? (
                  <div className="lockup">
                    {p.price.intro ? <p className="lockup__intro">{p.price.intro}</p> : null}
                    <p className="lockup__row">
                      <span className="lockup__amt">{p.price.monthly.split('/')[0]}</span>
                      <span className="lockup__per">/mo</span>
                    </p>
                    <p className="lockup__step">{p.price.stepUp}</p>
                    <ul className="lockup__cond">
                      {p.price.conditions.map((c) => (
                        <li key={c}>{c}</li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="lockup lockup--quoted">
                    <p className="lockup__quoted">Pricing set by address</p>
                    <p className="lockup__step">
                      Frontier does not publish a rate for this tier online. Call and we
                      confirm the current price for your address.
                    </p>
                  </div>
                )}

                <ul className="plancard__feats">
                  {p.features.map((f) => (
                    <li className="fitem" key={f}>
                      <span className="fchk" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                  <li className="fitem">
                    <span className="fchk" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg>
                    </span>
                    {p.equipment}
                  </li>
                  <li className="fitem">
                    <span className="fchk" aria-hidden="true">
                      <svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg>
                    </span>
                    {p.install}
                  </li>
                </ul>

                <div className="plancard__actions">
                  <a className="btn btn--primary btn--block btn--order" href={telHref()} data-call-cta>
                    <svg className="ico" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" /></svg>
                    Call to order
                  </a>
                  {hasPhone() ? <a className="plancard__call" href={telHref()} data-call-cta>{phoneDisplay()}</a> : null}
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="plans__fine" data-reveal="up">
          Frontier sets pricing by address, so the rates and conditions above are what Frontier
          advertises publicly. {PROMO_NOTE} Availability, promotions and equipment vary by address,
          and your exact rate is confirmed with you on the call before any order is placed. Taxes
          and fees may apply. See <Link href="/service-fulfillment">Service Fulfillment</Link>.
        </p>
      </div>
    </section>
  );
}
