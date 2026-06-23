import { SERVICES } from "../data";

type ServicesSectionProps = {
  isMobile: boolean;
  onServiceClick: (index: number) => void;
};

export function ServicesSection({ isMobile, onServiceClick }: ServicesSectionProps) {
  return (
    <section id="services" style={{ padding: isMobile ? "60px 16px" : "100px 40px", background: "#fff" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "center",
          flexDirection: isMobile ? "column" : "row",
          marginBottom: isMobile ? 36 : 50,
          gap: 20,
        }}>
          <h2 style={{ fontSize: isMobile ? 32 : 48, fontWeight: 900, color: "#0a0a0a", lineHeight: 1.1 }}>
            Services <span style={{ color: "#2563eb" }}>We Offer</span>
          </h2>
          <p style={{ color: "#444", fontSize: 16, maxWidth: 420, lineHeight: 1.8, margin: 0, fontWeight: 400, letterSpacing: "0.2px" }}>
            As a leading digital transformation company, we design innovative solutions that drive growth and efficiency across multiple industries.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              onClick={() => onServiceClick(i)}
              className="service-card"
              style={{
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
                cursor: "pointer",
                height: isMobile ? 260 : 340,
              }}
            >
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "80px 24px 24px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
              }}>
                <h3 style={{ fontSize: isMobile ? 18 : 24, fontWeight: 800, color: "#fff", margin: 0 }}>{s.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
