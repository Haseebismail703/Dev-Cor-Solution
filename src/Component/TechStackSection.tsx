import type { Dispatch, SetStateAction } from "react";
import { TECH_SECTIONS } from "../data";

type TechStackSectionProps = {
  isMobile: boolean;
  techTabs: number[];
  setTechTabs: Dispatch<SetStateAction<number[]>>;
};

export function TechStackSection({ isMobile, techTabs, setTechTabs }: TechStackSectionProps) {
  return (
    <section style={{ padding: "100px 24px", background: "#0a1120" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>TECH STACK</div>
          <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Technologies We Use</h2>
          <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>We choose the right tools for your goals. Our core strengths span mobile and web platforms.</p>
        </div>
        {TECH_SECTIONS.map((section, si) => (
          <div key={si} style={{ marginBottom: si === 0 ? 48 : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", minWidth: 140 }}>{section.cat}</h3>
              <div style={{ display: "flex", gap: 8 }}>
                {section.tabs.map((t, ti) => (
                  <button key={ti} onClick={() => setTechTabs((prev: any) => { const next = [...prev]; next[si] = ti; return next; })} style={{ background: techTabs[si] === ti ? "#2563eb" : "rgba(255,255,255,.05)", border: techTabs[si] === ti ? "none" : "1px solid rgba(255,255,255,.1)", color: techTabs[si] === ti ? "#fff" : "rgba(255,255,255,.5)", padding: "7px 18px", borderRadius: 20, fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .2s" }}>{t.label}</button>
                ))}
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 12 }}>
              {section.tabs[techTabs[si]].techs.map((tech, ti) => (
                <div key={ti} style={{ background: "#060b14", border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, padding: "20px 14px", textAlign: "center", transition: "all .25s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,.4)"; e.currentTarget.style.background = "rgba(37,99,235,.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.background = "#060b14"; }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{tech}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
