import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'Cookies Policy | Frontier® Fiber',
  description: 'How Frontier® Fiber uses cookies and similar technologies, the categories we rely on, and how you can manage your cookie preferences.',
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>Cookies Policy</p>
          <h1>Cookies Policy</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#what">What are cookies</a></li><li><a href="#types">Types of cookies we use</a></li><li><a href="#thirdparty">Third-party cookies</a></li><li><a href="#manage">How to manage cookies</a></li><li><a href="#dnt">Do Not Track</a></li><li><a href="#changes">Changes</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>This Cookies Policy explains how {req('legalName')} uses cookies and similar technologies on our website, and how you can control them. It should be read alongside our <Link href="/privacy">Privacy &amp; Data Protection</Link> notice.</p>
          <h2 id="what">1. What are cookies?</h2>
          <p>Cookies are small text files placed on your device when you visit a website. They help the site work, remember your preferences, and understand how the site is used. We also use related technologies such as pixels, tags and local storage, which we refer to collectively as "cookies" here.</p>
          <h2 id="types">2. Types of cookies we use</h2>
          <ul>
            <li><strong>Strictly necessary</strong> — required for the site to function, such as security, load balancing and remembering your consent choices. These cannot be switched off in our systems.</li>
            <li><strong>Performance &amp; analytics</strong> — help us understand which pages are visited and how the site performs, so we can improve it. This data is aggregated and used for measurement.</li>
            <li><strong>Functional</strong> — remember choices you make (like a prefilled ZIP code) to give you a smoother experience.</li>
            <li><strong>Advertising &amp; targeting</strong> — used to measure the effectiveness of our campaigns and, where permitted, to show more relevant ads on other platforms. These are set only with your consent where required.</li>
          </ul>
          <h2 id="thirdparty">3. Third-party cookies</h2>
          <p>Some cookies are set by trusted third parties that provide analytics and advertising measurement on our behalf — for example, web analytics providers and advertising platforms such as Google. These providers may use cookies to measure ad performance and reach. Their use of information is governed by their own privacy and cookie policies.</p>
          <h2 id="manage">4. How to manage cookies</h2>
          <p>You can control cookies in several ways:</p>
          <ul>
            <li>Use our cookie preferences tool (where displayed) to accept or decline non-essential cookies.</li>
            <li>Adjust your browser settings to block or delete cookies. Most browsers let you refuse cookies or alert you when one is set.</li>
            <li>Opt out of interest-based advertising through industry tools such as the Digital Advertising Alliance (optout.aboutads.info) or your device's ad-settings controls.</li>
          </ul>
          <p>Blocking some cookies may affect how parts of the site work.</p>
          <h2 id="dnt">5. Do Not Track</h2>
          <p>Some browsers offer a "Do Not Track" (DNT) signal. Because there is no common industry standard for DNT, our site does not currently respond to DNT signals. We do honor recognized opt-out preference signals where required by applicable law.</p>
          <h2 id="changes">6. Changes</h2>
          <p>We may update this Cookies Policy as our practices or the law change. The "Last updated" date reflects the latest version.</p>
          <h2 id="contact">7. Contact us</h2>
          <p>Questions about cookies? Email <a href={`mailto:${req('privacyEmail')}`}>{req('privacyEmail')}</a> or call <a href={telHref()} data-call-cta>{phoneDisplay()}</a>.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
