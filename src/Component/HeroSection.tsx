import HeroVideo from "../assets/hero-video.mp4";

type HeroSectionProps = {
  scrollTo: (id: string) => void;
  isMobile: boolean;
};

export function HeroSection({ scrollTo, isMobile }: HeroSectionProps) {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>
      <video autoPlay muted loop playsInline style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}>
        <source src={HeroVideo} type="video/mp4" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(0,0,0,0.65)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "10%", left: "50%", transform: "translateX(-50%)", width: "80vw", height: "60vh", background: "radial-gradient(ellipse,rgba(37,99,235,.15) 0%,transparent 65%)", pointerEvents: "none", zIndex: 2 }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "44px 44px", pointerEvents: "none", zIndex: 2 }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", textAlign: "center", animation: "fadeUp .8s ease both", position: "relative", zIndex: 3 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,.1)", border: "1px solid rgba(37,99,235,.25)", borderRadius: 24, padding: "7px 18px", marginBottom: 28 }}>
          <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
          <span style={{ fontSize: 12, color: "#86efac", fontWeight: 600 }}>
            Currently Accepting New Projects
          </span>
        </div>
        <h1 style={{ fontSize: isMobile ? 32 : 60, fontWeight: 900, lineHeight: 1.1, marginBottom: 20, letterSpacing: "-1px", color: "#fff" }}>
          Digital Transformation<br />
          <span style={{ background: "linear-gradient(135deg,#3b82f6,#38bdf8,#6366f1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Company
          </span>
        </h1>
        <p style={{ fontSize: isMobile ? 15 : 18, color: "rgba(255,255,255,.65)", maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.8 }}>
          DevCore delivers end-to-end digital solutions customized to your business objectives. Our scalable apps are built on the latest technologies to drive innovation and accelerate growth.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 70 }}>
          <button onClick={() => scrollTo("projects")} style={{ background: "#2563eb", border: "none", color: "#fff", padding: "15px 32px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 0 40px rgba(37,99,235,.4)" }}>
            View Our Work
          </button>
          <button onClick={() => scrollTo("contact")} style={{ background: "transparent", border: "1px solid rgba(255,255,255,.2)", color: "#fff", padding: "15px 32px", borderRadius: 8, fontWeight: 700, fontSize: 16, cursor: "pointer" }}>
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
