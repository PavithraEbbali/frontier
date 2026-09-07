export default function Disclosure() {
  return (
    <div className="disclosure" role="note">
      <div className="wrap disclosure__row">
        <span className="disclosure__dot" aria-hidden="true"></span>
        <p>
          Independently owned and operated. This is <strong>not</strong> the official
          Frontier&nbsp;website.
        </p>
        <a className="disclosure__cta" href="#plans">See plans →</a>
      </div>
    </div>
  );
}
