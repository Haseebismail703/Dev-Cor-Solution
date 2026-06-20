import { SERVICES } from "../data";

type ServicesSectionProps = {
  isMobile: boolean;
};

export function ServicesSection({ isMobile }: ServicesSectionProps) {
  return (
    <section id="services" style={{ padding: "100px 24px", background: "#060b14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>WHAT WE DO</div>
          <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Services We Offer</h2>
          <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>As a leading digital solutions company, we design innovative products that drive growth across multiple industries.</p>
        </div>
        <div className="srv-grid" style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="hc" style={{ background: "#0a1120", padding: 32, cursor: "pointer", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: i % 2 === 0 ? "linear-gradient(90deg,#2563eb,transparent)" : "linear-gradient(90deg,#38bdf8,transparent)", opacity: .5 }} />
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
              <p style={{ color: "rgba(255,255,255,.45)", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{s.desc}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {s.tags.map(t => <span key={t} style={{ fontSize: 11, background: "rgba(37,99,235,.1)", color: "#60a5fa", padding: "3px 9px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(37,99,235,.2)" }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
