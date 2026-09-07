import { callLabel, telHref } from "@/lib/business";

export default function Cta() {
  return (
    <section className="cta" aria-labelledby="ctaTitle">
      <div className="wrap">
        <div className="cta__panel" data-reveal="scale" data-tilt data-tilt-max="5">
          <p className="eyebrow-mono eyebrow-mono--light">Ready to order</p>
          <h2 id="ctaTitle" className="cta__title">Get Frontier Fiber at your&nbsp;address.</h2>
          <p className="cta__sub">Call and we will confirm what is serviceable where you live, and what it costs.</p>
          <div className="cta__actions">
            <a className="btn btn--light btn--lg btn--order" href={telHref()}>{callLabel("Call to order")}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
