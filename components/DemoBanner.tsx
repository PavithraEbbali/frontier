import { DEMO_MODE } from '@/lib/business';

/**
 * Persistent, non-dismissible notice shown only while DEMO_MODE is true.
 *
 * This site carries Frontier branding, so a public deploy with placeholder
 * company details could otherwise be mistaken for a real authorized retailer.
 * This banner, plus the noindex in app/layout.tsx and app/robots.ts, is what
 * keeps the demo honest. Do not remove it while DEMO_MODE is true.
 */
export default function DemoBanner() {
  if (!DEMO_MODE) return null;
  return (
    <div className="demobar" role="note">
      <div className="wrap demobar__row">
        <span className="demobar__tag">Demo</span>
        <p>
          Design demo only. This is <strong>not</strong> a live retailer and not
          affiliated with Frontier. The company name, address and phone number below
          are placeholders, and the number does not connect to anyone.
        </p>
      </div>
    </div>
  );
}
