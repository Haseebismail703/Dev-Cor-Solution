import { INDUSTRIES } from "../data";

export function IndustriesSection() {
  return (
    <section style={{ padding: "100px 24px", background: "#060b14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>INDUSTRIES</div>
          <h2 style={{ fontSize: 42, fontWeight: 900, color: "#fff" }}>Industries We Serve</h2>
        </div>
        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="hc" style={{ background: "#0a1120", border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, padding: "22px 16px", textAlign: "center", cursor: "pointer" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>{ind}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
