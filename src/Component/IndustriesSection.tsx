import { INDUSTRIES } from "../data";

type IndustriesSectionProps = {
  isMobile: boolean;
};

export function IndustriesSection({ isMobile }: IndustriesSectionProps) {
  return (
    <section style={{ padding: isMobile ? "80px 20px" : "100px 24px", background: "#060b14" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: isMobile ? 40 : 60 }}>
          <h2 style={{ fontSize: isMobile ? 28 : 48, fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ color: "#2563eb" }}>Industries</span>
            <span style={{ color: "#fff" }}> We Serve</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,.5)",
            fontSize: 15,
            marginTop: 16,
            maxWidth: 560,
            lineHeight: 1.7,
          }}>
            As a leading digital transformation company, we build tailored solutions across many sectors to help you meet industry demands.
          </p>
        </div>

        <div className="ind-grid">
          {INDUSTRIES.map((ind, i) => (
            <div
              key={i}
              className="ind-card"
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                cursor: "pointer",
                height: isMobile ? 220 : 280,
              }}
            >
              <img
                src={ind.image}
                alt={ind.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform .5s ease",
                }}
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,.75) 0%, rgba(0,0,0,.15) 50%, rgba(0,0,0,.05) 100%)",
              }} />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: isMobile ? "16px" : "20px 24px",
              }}>
                <h3 style={{
                  fontSize: isMobile ? 16 : 18,
                  fontWeight: 800,
                  color: "#fff",
                }}>{ind.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
