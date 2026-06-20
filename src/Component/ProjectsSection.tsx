import { PROJECTS } from "../data";

type ProjectsSectionProps = {
  isMobile: boolean;
  setHoveredProject: (index: number) => void;
};

export function ProjectsSection({ isMobile, setHoveredProject }: ProjectsSectionProps) {
  return (
    <section id="projects" style={{ padding: "100px 24px", background: "#0a1120" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>OUR WORK</div>
          <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Our Success Stories</h2>
        </div>
        <div className="prj-grid">
          {PROJECTS.map((p, i) => (
            <div key={i} className="hc" onClick={() => setHoveredProject(i)} style={{ background: "#060b14", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
              <div style={{ height: 6, background: `linear-gradient(90deg,${p.color},${p.color}50)` }} />
              <div style={{ height: 100, background: `linear-gradient(135deg,${p.color}18,${p.color}06)`, display: "flex", alignItems: "center", paddingLeft: 28 }}>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", marginTop: 2 }}>{p.sub}</div>
                </div>
              </div>
              <div style={{ padding: 24 }}>
                <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: `${p.color}15`, color: p.color, padding: "3px 10px", borderRadius: 20, fontWeight: 700, border: `1px solid ${p.color}30` }}>{p.tag}</span>
                  <span style={{ fontSize: 11, background: "rgba(34,197,94,.08)", color: "#86efac", padding: "3px 10px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(34,197,94,.2)" }}>✓ {p.result}</span>
                </div>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ fontSize: 11, color: `${p.color}`, fontWeight: 600, letterSpacing: ".5px" }}>Click to view details →</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
