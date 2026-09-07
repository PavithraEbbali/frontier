import Image from 'next/image';
import offersBg from '@/public/assets/offers-bg.jpg';
import { OFFERS, PROMO_NOTE, formatOfferDate } from '@/lib/catalog';
import { callLabel, telHref } from '@/lib/business';

/* Offers get the loudest treatment on the page: dark ground so the section
   separates from the white ones above and below it, red accents, oversized
   values, and a call CTA in the section itself. Static cards — the drag/tap
   carousel is gone. */
export default function Bundles() {
  return (
    <section className="section section--ink offers" id="bundles" aria-labelledby="bundlesTitle">
      <Image
        className="offers__bg"
        src={offersBg}
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        placeholder="blur"
      />
      <div className="wrap">
        <header className="head head--split" data-reveal="up">
          <div>
            <p className="eyebrow-mono eyebrow-mono--light">Current offers</p>
            <h2 className="head__title head__title--light" id="bundlesTitle">
              Offers running right&nbsp;now
            </h2>
          </div>
          <p className="head__note head__note--light">
            Frontier&apos;s published new-customer offers. Which ones apply depends on your plan
            and address, and we confirm that with you before you order.
          </p>
        </header>

        <ul className="offergrid" data-stagger>
          {OFFERS.map((o) => (
            <li className="offercard" key={o.name} data-reveal="up">
              <div className="offercard__top">
                <h3 className="offercard__name">{o.name}</h3>
                {o.expires ? (
                  <span className="offercard__badge">Ends {formatOfferDate(o.expires)}</span>
                ) : null}
              </div>
              <p className="offercard__value">{o.value}</p>
              <p className="offercard__cond">{o.condition}</p>
            </li>
          ))}
        </ul>

        <div className="offers__foot" data-reveal="up">
          <a className="btn btn--light btn--lg btn--order" href={telHref()} data-call-cta>
            <svg className="ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" /></svg>
            {callLabel('Call to claim an offer')}
          </a>
          <p className="offers__fine">
            {PROMO_NOTE} Offers are subject to change and discontinuance without notice, and are
            not available in all areas.
          </p>
        </div>
      </div>
    </section>
  );
}
