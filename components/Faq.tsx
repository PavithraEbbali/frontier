import { telHref } from '@/lib/business';

export default function Faq() {
  return (
    <section className="section section--soft faq" id="faq" aria-labelledby="faqTitle">
      <div className="wrap faq__grid">
        <header className="faq__aside" data-reveal="left">
          <p className="eyebrow-mono">FAQ</p>
          <h2 className="head__title" id="faqTitle">Questions we get&nbsp;asked</h2>
          <p className="faq__sub">Straight answers about speeds, pricing and how ordering through a retailer works.</p>
          <a className="faq__ask" href={telHref()}>Call to order →</a>
        </header>

        <div className="faq__list" data-reveal="right">
          <details className="qa" name="faq" open><summary><span>Are you the same company as Frontier?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>No. This site is operated by an independent, <strong>authorized retailer</strong> of Frontier® services. We help you compare plans and place your order, while Frontier owns the network and handles installation and billing.</p></div></details>
          <details className="qa" name="faq"><summary><span>What speeds can I get with Frontier fiber?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Plans range from <strong>500 Mbps up to 7 Gig</strong>, and every tier is symmetrical, so your upload matches your download. Exact availability depends on your address.</p></div></details>
          <details className="qa" name="faq"><summary><span>Are there data caps or annual contracts?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Frontier fiber plans include <strong>unlimited data with no overage charges</strong>, and Frontier advertises its fiber deals with no contract. Any term attached to a promotion is stated to you before you order.</p></div></details>
          <details className="qa" name="faq"><summary><span>Is installation really free?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Frontier advertises free installation on select plans. Fiber 500 carries a $100 expert installation charge. An eero Wi-Fi router is included on every tier, and a Frontier technician handles the setup.</p></div></details>
          <details className="qa" name="faq"><summary><span>How do I know if fiber reaches my home?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Call us with your address. We check which Frontier plans are serviceable at your address and quote the current price before you commit.</p></div></details>
          <details className="qa" name="faq"><summary><span>How much does Frontier fiber cost?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Frontier sets pricing by address and publishes a rate online for <strong>Fiber 1 Gig</strong> only. For every other tier we confirm the current price for your address on the call, before any order is placed.</p></div></details>
          <details className="qa" name="faq"><summary><span>Why order through a reseller instead of direct?</span><span className="qa__ico" aria-hidden="true"></span></summary><div className="qa__body"><p>Same Frontier network and service, plus one person to compare the tiers, read you the conditions and place the order. There is no extra cost to you.</p></div></details>
        </div>
      </div>
    </section>
  );
}
