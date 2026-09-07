import { callLabel, telHref } from '@/lib/business';

/**
 * Persistent bottom call bar, mobile only (<760px).
 *
 * Rendered server-side and unconditionally — it is deliberately NOT scroll-gated,
 * so it is present on first paint rather than appearing after a scroll threshold.
 * Visibility is CSS-only (`.callbar` is display:none from 760px up), which keeps
 * it out of the desktop layout without a client-side media query and without a
 * hydration flash.
 *
 * The matching bottom padding that stops this covering the footer disclaimers
 * lives on `body` in globals.css, so every route gets it, not just the home page.
 */
export default function CallBar() {
  return (
    <div className="callbar" role="region" aria-label="Call to order">
      <a className="callbar__link" href={telHref()} data-call-cta>
        <svg className="callbar__ico" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.4 11.4 0 0 0 3.6.58 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.4 11.4 0 0 0 .58 3.6 1 1 0 0 1-.24 1z"
            fill="currentColor"
          />
        </svg>
        <span className="callbar__label">{callLabel('Call')}</span>
      </a>
    </div>
  );
}
