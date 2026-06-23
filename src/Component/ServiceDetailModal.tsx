import { useState, useEffect } from "react";
import { ConsultModal } from "./ConsultModal";
import { CostCalculator } from "./CostCalculator";

type ServiceDetailModalProps = {
  service: {
    title: string;
    image: string;
    tags: string[];
    color: string;
    detail: {
      heroDesc: string;
      stats: { number: string; label: string }[];
      features: { title: string; desc: string }[];
      technologies: string[];
      faqs: { q: string; a: string }[];
    };
  };
  onClose: () => void;
  isMobile: boolean;
  scrollToContact: () => void;
};

export function ServiceDetailModal({ service, onClose, isMobile, scrollToContact }: ServiceDetailModalProps) {
  const { detail, color } = service;
  const [showConsult, setShowConsult] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 600,
      background: "#060b14",
      overflowY: "auto",
      overflowX: "hidden",
    }}>
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 650,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.15)",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: 10,
          cursor: "pointer",
          fontSize: 14,
          fontWeight: 600,
          fontFamily: "inherit",
        }}
      >
        &#8592; Back
      </button>

      <div style={{
        width: "100%",
        height: isMobile ? "45vh" : "55vh",
        position: "relative",
        overflow: "hidden",
      }}>
        <img
          src={service.image}
          alt={service.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #060b14 0%, rgba(6,11,20,0.6) 50%, rgba(6,11,20,0.3) 100%)",
        }} />
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: isMobile ? "0 20px 32px" : "0 60px 48px",
          maxWidth: 900,
        }}>
          <div style={{ fontSize: 11, color: color, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>OUR SERVICE</div>
          <h1 style={{ fontSize: isMobile ? 30 : 48, fontWeight: 900, color: "#fff", marginBottom: 14, lineHeight: 1.1 }}>{service.title}</h1>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: isMobile ? 14 : 16, lineHeight: 1.7, maxWidth: 600, margin: "0 0 20px" }}>{detail.heroDesc}</p>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {service.tags.map(tag => (
              <span key={tag} style={{ fontSize: 12, background: "rgba(255,255,255,0.12)", color: "#fff", padding: "5px 14px", borderRadius: 20, fontWeight: 600, backdropFilter: "blur(4px)" }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        background: "#0a1120",
        padding: isMobile ? "28px 20px" : "36px 60px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{
          maxWidth: 1000,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
          gap: isMobile ? 20 : 0,
          textAlign: "center",
        }}>
          {detail.stats.map((stat, i) => (
            <div key={i} style={{ borderRight: !isMobile && i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none", padding: "8px 0" }}>
              <div style={{ fontSize: isMobile ? 26 : 32, fontWeight: 900, color: color }}>{stat.number}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", fontWeight: 500, marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: isMobile ? "50px 20px" : "70px 60px", background: "#060b14" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? 22 : 30, fontWeight: 900, color: "#fff", marginBottom: 32, textAlign: "center" }}>What We Offer</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: 16,
          }}>
            {detail.features.map((f, i) => (
              <div key={i} className="hc" style={{
                background: "#0a1120",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: 12,
                padding: isMobile ? 20 : 24,
              }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${color}15`, border: `1px solid ${color}25`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontSize: 13, color: color, fontWeight: 800 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: isMobile ? "40px 20px 50px" : "50px 60px 70px",
        background: "#0a1120",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontSize: isMobile ? 22 : 30, fontWeight: 900, color: "#fff", marginBottom: 10 }}>
            Ready to Get Started?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14, marginBottom: 28 }}>
            Let's discuss your project and build something amazing together.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button
              onClick={() => setShowConsult(true)}
              style={{
                background: color,
                color: "#fff",
                border: "none",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                boxShadow: `0 0 24px ${color}30`,
                transition: "transform 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              Consult Your Idea
            </button>
            <button
              onClick={() => setShowCalculator(true)}
              style={{
                background: "transparent",
                color: "#fff",
                border: "2px solid rgba(255,255,255,0.2)",
                padding: "14px 32px",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 700,
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = color; e.currentTarget.style.color = color; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Calculate Your Software Cost
            </button>
          </div>
        </div>
      </div>

      {showConsult && <ConsultModal onClose={() => setShowConsult(false)} isMobile={isMobile} />}
      {showCalculator && (
        <CostCalculator
          onClose={() => setShowCalculator(false)}
          onContactClick={() => { setShowCalculator(false); onClose(); setTimeout(scrollToContact, 300); }}
          isMobile={isMobile}
          serviceName={service.title}
        />
      )}
    </div>
  );
}
