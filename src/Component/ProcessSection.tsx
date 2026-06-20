import { PROCESS } from "../data";

type ProcessSectionProps = {
  isMobile: boolean;
  activeStep: number;
  setActiveStep: (index: number) => void;
};

export function ProcessSection({ isMobile, activeStep, setActiveStep }: ProcessSectionProps) {
  return (
    <section id="process" style={{ padding: "100px 24px", background: "#060b14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>HOW WE WORK</div>
          <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Our Development Process</h2>
          <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>We follow a clear, transparent process to turn your ideas into functional, market-ready products.</p>
        </div>
        <div className="step-grid">
          {PROCESS.map((p, i) => (
            <div key={i} onMouseEnter={() => setActiveStep(i)} style={{ background: activeStep === i ? "rgba(37,99,235,.12)" : "#0a1120", border: `1px solid ${activeStep === i ? "rgba(37,99,235,.4)" : "rgba(255,255,255,.07)"}`, borderRadius: 14, padding: 24, cursor: "pointer", transition: "all .3s" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: activeStep === i ? 12 : 0 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: activeStep === i ? "rgba(37,99,235,.25)" : "rgba(255,255,255,.05)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: activeStep === i ? "#60a5fa" : "rgba(255,255,255,.3)", flexShrink: 0, transition: "all .3s" }}>{p.num}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: activeStep === i ? "#fff" : "rgba(255,255,255,.7)", transition: "color .3s" }}>{p.title}</h3>
              </div>
              <div style={{ maxHeight: activeStep === i ? "120px" : "0", overflow: "hidden", transition: "max-height .4s ease", paddingLeft: 58 }}>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
