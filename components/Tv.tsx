import Image from 'next/image';
import tvImage from '@/public/assets/tv-livingroom.jpg';
import { TV } from '@/lib/catalog';
import { callLabel, telHref } from '@/lib/business';

/* TV gets its own static section per the canonical order (Fiber → Bundles →
   TV → Phone). Previously buried as one card inside a drag carousel. */
export default function Tv() {
  return (
    <section className="section tvsec" id="tv" aria-labelledby="tvTitle">
      <div className="wrap tvsec__grid">
        <div className="tvsec__copy" data-reveal="left">
          <p className="eyebrow-mono">TV</p>
          <h2 className="head__title" id="tvTitle">
            Frontier + {TV.partner}
          </h2>
          <p className="tvsec__lede">A better way to get live TV.</p>
          <p className="tvsec__sub">
            Live channels, unlimited DVR and the apps your household already uses, with the
            discount applied to your Frontier bill.
          </p>

          <ul className="tvsec__list">
            <li className="fitem">
              <span className="fchk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg></span>
              {TV.offer}
            </li>
            <li className="fitem">
              <span className="fchk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg></span>
              Eligibility: {TV.eligibility}
            </li>
            <li className="fitem">
              <span className="fchk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg></span>
              No long-term contract
            </li>
          </ul>

          <a className="btn btn--primary btn--order" href={telHref()}><svg className="ico" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" /></svg>{callLabel("Call to order")}</a>
        </div>

        <div className="tvsec__cards" data-reveal="right">
          <figure className="tvsec__figure">
            <Image
              src={tvImage}
              alt="Living room in the evening with a large wall-mounted television playing"
              sizes="(max-width: 899px) 100vw, 46vw"
              placeholder="blur"
            />
          </figure>

          <article className="tvcard">
            <h3 className="tvcard__name">{TV.partner}</h3>
            <div className="lockup">
              <p className="lockup__row">
                <span className="lockup__amt">{TV.promoPrice.split('/')[0]}</span>
                <span className="lockup__per">/mo. + taxes</span>
              </p>
              <p className="lockup__step">
                Promotional rate. Regular price {TV.regularPrice}.
              </p>
            </div>
          </article>

          <article className="tvcard">
            <h3 className="tvcard__name">{TV.netflixBundle.name}</h3>
            <div className="lockup">
              <p className="lockup__quoted">{TV.netflixBundle.price}</p>
              <p className="lockup__step">Includes {TV.netflixBundle.includes}.</p>
            </div>
          </article>

          <p className="tvsec__tm">{TV.partnerTrademark}</p>
        </div>
      </div>
    </section>
  );
}
