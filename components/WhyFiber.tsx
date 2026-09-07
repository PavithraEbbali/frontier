/* Static benefit grid. Replaces the pinned, scroll-scrubbed "signal module"
   that split open and dropped cards. Removed with it: the fabricated latency
   figure, the fabricated uptime percentage and the support-location claim,
   none of which Frontier publishes. */
const CARDS = [
  {
    t: 'Symmetrical speeds',
    d: 'Your upload matches your download on every fiber tier, so backups and video calls are not the bottleneck.',
    s: 'Up to 7 Gig ↑↓',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 9l4-4 4 4M4 15l4 4 4-4M8 5v14" />
        <path d="M20 9l-4-4-4 4M20 15l-4 4-4-4M16 5v14" />
      </svg>
    ),
  },
  {
    t: 'No data caps',
    d: 'Frontier fiber plans include unlimited data with no overage charges.',
    s: '∞ data',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l8 3v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" />
        <path d="M8.5 12l2.5 2.5L16 9" />
      </svg>
    ),
  },
  {
    t: 'Wi-Fi 7 equipment',
    d: 'Every tier includes an eero router — Pro 7 on the lower tiers, Max 7 on 5 Gig and above.',
    s: 'eero included',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 17a5 5 0 0 1 5-5M12 17a5 5 0 0 0-5-5M12 17v3" />
        <path d="M4 10a11 11 0 0 1 16 0M7 13a7 7 0 0 1 10 0" />
      </svg>
    ),
  },
  {
    t: 'No annual contract',
    d: 'Frontier advertises its fiber deals with no contract, and states any term before you order.',
    s: 'No contract',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 6h16M4 6v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6" />
        <path d="M9 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    t: 'Price guarantee',
    d: 'Fiber 1 Gig carries a 5-year price guarantee; Fiber 500 carries 4 years. The guarantee excludes installation and add-on fees.',
    s: 'Up to 5 years',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="4" y="10" width="16" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </svg>
    ),
  },
  {
    t: 'One point of contact',
    d: 'We compare the tiers, place the order and stay reachable afterwards. Frontier owns the network, install and billing.',
    s: 'Ordering help',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5 20a7 7 0 0 1 14 0" />
      </svg>
    ),
  },
];

export default function WhyFiber() {
  return (
    <section className="section section--soft why" id="why" aria-labelledby="whyTitle">
      <div className="wrap">
        <header className="head head--center" data-reveal="up">
          <p className="eyebrow-mono">Why fiber</p>
          <h2 className="head__title" id="whyTitle">What you get with&nbsp;fiber</h2>
        </header>

        <ul className="whygrid" data-stagger>
          {CARDS.map((c) => (
            <li className="ccard" key={c.t} data-reveal="up">
              <span className="ccard__ic" aria-hidden="true">{c.icon}</span>
              <b className="ccard__t">{c.t}</b>
              <span className="ccard__d">{c.d}</span>
              <span className="ccard__s">{c.s}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
