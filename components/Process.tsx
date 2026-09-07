import Image, { type StaticImageData } from 'next/image';
import step1 from '@/public/assets/step-1-address.jpg';
import step2 from '@/public/assets/step-2-plan.jpg';
import step3 from '@/public/assets/step-3-install.jpg';

/* Exactly three steps, static. Replaces the pinned four-card stacking deck:
   no scroll-jacking, all steps visible at once, one entrance stagger. */
interface Step {
  n: string;
  img: StaticImageData;
  alt: string;
  title: string;
  copy: string;
  tag: string;
  icon: React.ReactElement;
}

const STEPS: Step[] = [
  {
    n: '01',
    img: step1,
    alt: 'Hands holding a smartphone at a kitchen table',
    title: 'Check your address',
    copy: 'Give us your address and we confirm which Frontier® fiber plans reach your home, and what they cost there.',
    tag: 'Takes about a minute',
    icon: (
      <svg viewBox="0 0 24 24">
        <path pathLength="1" d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11Z" />
        <circle pathLength="1" cx="12" cy="10" r="2.4" />
      </svg>
    ),
  },
  {
    n: '02',
    img: step2,
    alt: 'Person at a desk taking a phone call with a notebook open',
    title: 'Pick your plan',
    copy: 'Compare the speeds side by side and hear the conditions read out in plain English before anything is placed.',
    tag: 'Conditions read out before you order',
    icon: (
      <svg viewBox="0 0 24 24">
        <path pathLength="1" d="M4 8h16M4 16h16" />
        <circle pathLength="1" cx="9" cy="8" r="2.3" />
        <circle pathLength="1" cx="15" cy="16" r="2.3" />
      </svg>
    ),
  },
  {
    n: '03',
    img: step3,
    alt: 'Technician installing a small networking box on an interior wall',
    title: 'Book your install',
    copy: 'Pick a time that suits you. A Frontier technician handles the setup, and installation is free on qualifying plans.',
    tag: 'Frontier schedules and installs',
    icon: (
      <svg viewBox="0 0 24 24">
        <rect pathLength="1" x="4" y="5" width="16" height="16" rx="2.5" />
        <path pathLength="1" d="M8 3v4M16 3v4M4 10h16" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="processTitle">
      <div className="wrap">
        <header className="head head--split" data-reveal="up">
          <div>
            <p className="eyebrow-mono">How to order</p>
            <h2 className="head__title" id="processTitle">Ordering takes three&nbsp;steps</h2>
          </div>
          <p className="head__note">
            One call covers it. Compare the tiers, lock in your plan, and pick an install date.
          </p>
        </header>

        <ol className="steps" data-stagger>
          {STEPS.map((s) => (
            <li className="stepcard" key={s.n} data-reveal="up">
              <figure className="stepcard__figure">
                <Image
                  src={s.img}
                  alt={s.alt}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"
                />
              </figure>
              <div className="stepcard__meta">
                <span className="stepcard__icon" aria-hidden="true">{s.icon}</span>
                <span className="stepcard__n">
                  Step {s.n}<i>&nbsp;/ 03</i>
                </span>
              </div>
              <h3 className="stepcard__title">{s.title}</h3>
              <p className="stepcard__copy">{s.copy}</p>
              <span className="stepcard__tag">{s.tag}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
