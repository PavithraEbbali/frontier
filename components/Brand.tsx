import { agreementNoun } from "@/lib/business";

/* Shared brand lockup: the Frontier mark plus the wordmark.
   The "Authorized <noun>" line is not decoration — it is what keeps a retailer
   site using the brand's own mark distinguishable from the brand's official
   site. Do not remove it. */
export function BrandMark({ size = 34 }: { size?: number }) {
  return (
    <span className="brand__mark" aria-hidden="true">
      <svg viewBox="0 0 100 100" width={size} height={size}>
        <rect width="100" height="100" rx="6" fill="var(--brand)" />
        <rect x="10" y="21" width="42" height="15" fill="#fff" />
        <rect x="10" y="43" width="30" height="15" fill="#fff" />
        <path d="M50 14 a36 36 0 0 1 0 72 h-8 V71 h8 a21 21 0 0 0 0-42 h-8 V14 Z" fill="#fff" />
      </svg>
    </span>
  );
}

export default function Brand({
  size = 34,
  withQualifier = true,
}: {
  size?: number;
  withQualifier?: boolean;
}) {
  return (
    <>
      <BrandMark size={size} />
      <span className="brand__id">
        <span className="brand__name">Frontier</span>
        {withQualifier ? (
          <span className="brand__dealer">Authorized {agreementNoun()}</span>
        ) : null}
      </span>
    </>
  );
}
