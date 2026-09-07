import Image from 'next/image';
import phoneImage from '@/public/assets/phone-handset.jpg';
import { PHONE } from '@/lib/catalog';
import { callLabel, telHref } from '@/lib/business';

/* Home Phone gets its own static section per the canonical order. Previously
   buried as one card inside a drag carousel. */
export default function Phone() {
  return (
    <section className="section section--soft phonesec" id="phone" aria-labelledby="phoneTitle">
      <div className="wrap phonesec__grid">
        <div data-reveal="up">
          <p className="eyebrow-mono">Home Phone</p>
          <h2 className="head__title" id="phoneTitle">Frontier Home&nbsp;Phone</h2>
          <p className="phonesec__sub">
            Frontier sells Home Phone as an add-on to internet. Frontier sets the price by
            address, so we confirm yours on the call.
          </p>
        </div>

        <figure className="phonesec__figure" data-reveal="up">
          <Image
            src={phoneImage}
            alt="Cordless landline handset resting in its base on a kitchen counter"
            sizes="(max-width: 899px) 100vw, 46vw"
            placeholder="blur"
          />
        </figure>

        <div className="phonesec__cols" data-reveal="up">
          <div className="phonecol">
            <h3 className="phonecol__h">What you get</h3>
            <ul>
              {PHONE.features.map((f) => (
                <li className="fitem" key={f}>
                  <span className="fchk" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 13l4 4 10-11" /></svg></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="phonecol">
            <h3 className="phonecol__h">Worth knowing</h3>
            <ul>
              {PHONE.conditions.map((c) => (
                <li className="fitem fitem--note" key={c}>
                  <span className="fchk fchk--note" aria-hidden="true">
                    <svg viewBox="0 0 24 24"><path d="M12 8v5M12 16.5v.01" /><circle cx="12" cy="12" r="9" /></svg>
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          <a className="btn btn--primary btn--order" href={telHref()} data-call-cta><svg className="ico" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z" fill="currentColor" /></svg>{callLabel("Call to order")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
