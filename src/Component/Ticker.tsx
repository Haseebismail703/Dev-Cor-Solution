import { TICKER } from "../data";

export function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-inner">
        {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, margin: "0 28px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "2px" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2563eb", display: "inline-block" }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
