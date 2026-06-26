import { useEffect, useRef } from "react";
import { PROCESS } from "../data";

type ProcessSectionProps = {
  isMobile: boolean;
  activeStep: number;
  setActiveStep: (index: number) => void;
};

export function ProcessSection({ isMobile }: ProcessSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = sectionRef.current?.querySelectorAll(".process-animate");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" style={{ padding: isMobile ? "80px 20px" : "100px 24px", background: "#060b14" }}>
      <div ref={sectionRef} style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 70 }}>
          <h2 style={{ fontSize: isMobile ? 28 : 44, fontWeight: 900, lineHeight: 1.15 }}>
            <span style={{ color: "#fff" }}>Our Development </span>
            <span style={{ color: "#2563eb" }}>Process</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,.5)",
            marginTop: 16,
            fontSize: 15,
            maxWidth: 620,
            margin: "16px auto 0",
            lineHeight: 1.7,
          }}>
            As a leading digital transformation company, we follow a clear process to turn your ideas into functional, market-ready products.
          </p>
        </div>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {PROCESS.map((step, i) => (
              <div
                key={i}
                className="process-animate"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all .6s ease ${i * 0.05}s`,
                }}
              >
                <div style={{ borderRadius: 16, overflow: "hidden", marginBottom: 20, boxShadow: "0 6px 24px rgba(0,0,0,.3)" }}>
                  <img src={step.image} alt={step.title} loading="lazy" style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: i % 2 === 0 ? "#2563eb" : "#1e293b",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: 800,
                    flexShrink: 0,
                    boxShadow: i % 2 === 0 ? "0 0 16px rgba(37,99,235,.35)" : "none",
                    border: i % 2 === 0 ? "none" : "2px solid rgba(255,255,255,.1)",
                  }}>
                    {step.num}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{step.title}</h3>
                </div>
                <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.8 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "50%",
              top: 0,
              bottom: 0,
              width: 2,
              background: "repeating-linear-gradient(to bottom, rgba(255,255,255,.12) 0px, rgba(255,255,255,.12) 8px, transparent 8px, transparent 18px)",
              transform: "translateX(-50%)",
            }} />
            <div style={{
              position: "absolute",
              left: "50%",
              top: -6,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: "#2563eb",
              transform: "translateX(-50%)",
              boxShadow: "0 0 14px rgba(37,99,235,.6)",
              zIndex: 3,
            }} />

            {PROCESS.map((step, i) => {
              const isTextLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 80px 1fr",
                    alignItems: "center",
                    marginBottom: i < PROCESS.length - 1 ? 64 : 0,
                    minHeight: 260,
                  }}
                >
                  <div
                    className="process-animate"
                    style={{
                      opacity: 0,
                      transform: `translateX(${isTextLeft ? "-50px" : "50px"})`,
                      transition: `all .7s cubic-bezier(.25,.46,.45,.94) ${i * 0.08}s`,
                      paddingRight: isTextLeft ? 40 : 20,
                      paddingLeft: isTextLeft ? 0 : 0,
                    }}
                  >
                    {isTextLeft ? (
                      <div style={{ textAlign: "right" }}>
                        <h3 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 14 }}>{step.title}</h3>
                        <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.85 }}>{step.desc}</p>
                      </div>
                    ) : (
                      <div className="process-img-wrap" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,.35)" }}>
                        <img src={step.image} alt={step.title} loading="lazy" style={{ width: "100%", height: 250, objectFit: "cover", display: "block", transition: "transform .5s ease" }} />
                      </div>
                    )}
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
                    <div
                      className="process-animate"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        background: i % 2 === 0 ? "#2563eb" : "#1e293b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontSize: 18,
                        fontWeight: 800,
                        boxShadow: i % 2 === 0 ? "0 0 24px rgba(37,99,235,.4)" : "0 4px 16px rgba(0,0,0,.4)",
                        border: i % 2 === 0 ? "3px solid rgba(96,165,250,.3)" : "3px solid rgba(255,255,255,.08)",
                        opacity: 0,
                        transform: "scale(0.4)",
                        transition: `all .5s cubic-bezier(.25,.46,.45,.94) ${i * 0.08 + 0.15}s`,
                      }}
                    >
                      {step.num}
                    </div>
                  </div>

                  <div
                    className="process-animate"
                    style={{
                      opacity: 0,
                      transform: `translateX(${isTextLeft ? "50px" : "-50px"})`,
                      transition: `all .7s cubic-bezier(.25,.46,.45,.94) ${i * 0.08}s`,
                      paddingLeft: isTextLeft ? 20 : 40,
                    }}
                  >
                    {isTextLeft ? (
                      <div className="process-img-wrap" style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,.35)" }}>
                        <img src={step.image} alt={step.title} loading="lazy" style={{ width: "100%", height: 250, objectFit: "cover", display: "block", transition: "transform .5s ease" }} />
                      </div>
                    ) : (
                      <div>
                        <h3 style={{ fontSize: 28, fontWeight: 800, color: "#fff", marginBottom: 14 }}>{step.title}</h3>
                        <p style={{ color: "rgba(255,255,255,.5)", fontSize: 14, lineHeight: 1.85 }}>{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
