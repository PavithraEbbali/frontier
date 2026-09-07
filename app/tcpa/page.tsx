import type { Metadata } from 'next';
import Link from 'next/link';
import PolicyChrome from '@/components/PolicyChrome';
import { phoneDisplay, req, telHref } from '@/lib/business';

export const metadata: Metadata = {
  title: 'TCPA Policy | Frontier® Fiber',
  description: "Frontier® Fiber's Telephone Consumer Protection Act (TCPA) policy — how we obtain consent for calls and texts and how you can opt out at any time.",
};

export default function Page() {
  return (
    <PolicyChrome>
      <section className="legal-hero">
        <div className="wrap legal-hero__inner">
          <p className="breadcrumb"><Link href="/#top">Home</Link><span aria-hidden="true">/</span>TCPA Policy</p>
          <h1>TCPA Policy</h1>
          <p className="legal-hero__meta">Last updated: July 7, 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="wrap">
          <nav className="legal-toc" aria-label="On this page"><h2>On this page</h2><ol><li><a href="#overview">Overview</a></li><li><a href="#consent">Your consent</a></li><li><a href="#notcondition">Consent is not a condition of purchase</a></li><li><a href="#optout">How to opt out</a></li><li><a href="#frequency">Message frequency &amp; rates</a></li><li><a href="#dnc">Do-Not-Call lists</a></li><li><a href="#recording">Call monitoring</a></li><li><a href="#contact">Contact us</a></li></ol></nav>
          <p>{req('legalName')} is committed to responsible communications and to complying with the Telephone Consumer Protection Act (TCPA), related FCC rules, and applicable state laws. This policy explains how we contact you and the choices you have.</p>
          <h2 id="overview">1. Overview</h2>
          <p>When you ask us to check availability or request a quote, we may contact you by phone, text message (SMS) and email to help with your request and, with your permission, to share relevant Frontier® offers.</p>
          <h2 id="consent">2. Your consent</h2>
          <p>By providing your phone number and checking the consent box on our forms, you give your prior express written consent for {req('legalName')} and its authorized partners to contact you at that number — including through automatic telephone dialing systems, prerecorded or artificial voice messages, and text messages — regarding Frontier services and related offers. You represent that you are the subscriber or customary user of the number provided.</p>
          <h2 id="notcondition">3. Consent is not a condition of purchase</h2>
          <p>You are not required to agree to receive automated marketing calls or texts as a condition of buying any goods or services. You can still reach us and order service by calling us directly.</p>
          <h2 id="optout">4. How to opt out</h2>
          <ul>
            <li><strong>Text messages:</strong> reply <strong>STOP</strong> to any message to unsubscribe, or <strong>HELP</strong> for assistance.</li>
            <li><strong>Phone calls:</strong> ask any representative to place you on our internal do-not-call list.</li>
            <li><strong>Email:</strong> use the unsubscribe link, or email <a href={`mailto:${req('privacyEmail')}`}>{req('privacyEmail')}</a>.</li>
          </ul>
          <p>We will honor opt-out requests promptly as required by law. You may continue to receive non-marketing messages related to a pending order.</p>
          <h2 id="frequency">5. Message frequency &amp; rates</h2>
          <p>Message frequency varies based on your interactions with us. Message and data rates may apply depending on your mobile plan. {req('legalName')} does not charge for the messages themselves.</p>
          <h2 id="dnc">6. Do-Not-Call lists</h2>
          <p>We maintain an internal do-not-call list and honor the National Do-Not-Call Registry. If you have opted out but continue to receive messages, please contact us so we can resolve it quickly.</p>
          <h2 id="recording">7. Call monitoring</h2>
          <p>Some calls may be monitored or recorded for quality, training and compliance purposes, consistent with applicable law. Where required, we will notify you at the start of the call.</p>
          <h2 id="contact">8. Contact us</h2>
          <p>Questions about this TCPA Policy? Email <a href={`mailto:${req('email')}`}>{req('email')}</a>, call <a href={telHref()}>{phoneDisplay()}</a>, or write to {req('legalName')}, {req('street')}, {req('cityStateZip')}.</p>
        </div>
      </section>
    </PolicyChrome>
  );
}
