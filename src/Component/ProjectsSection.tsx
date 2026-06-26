import { PROJECTS } from "../data";

type ProjectsSectionProps = {
  isMobile: boolean;
  setHoveredProject: (index: number) => void;
};

export function ProjectsSection({ isMobile, setHoveredProject }: ProjectsSectionProps) {
  const leftProjects = PROJECTS.filter((_, i) => i % 2 === 0);
  const rightProjects = PROJECTS.filter((_, i) => i % 2 !== 0);

  const renderCard = (p: (typeof PROJECTS)[0], originalIndex: number) => (
    <div
      key={originalIndex}
      className="prj-card"
      onClick={() => setHoveredProject(originalIndex)}
      style={{ cursor: "pointer" }}
    >
      <div style={{
        borderRadius: 20,
        overflow: "hidden",
        marginBottom: 20,
        boxShadow: "0 8px 40px rgba(0,0,0,.4)",
      }}>
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          style={{
            width: "100%",
            height: isMobile ? 220 : 340,
            objectFit: "cover",
            display: "block",
            transition: "transform .5s ease",
          }}
        />
      </div>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: 12,
        background: `linear-gradient(135deg, ${p.color}, ${p.color}90)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 14,
        boxShadow: `0 4px 16px ${p.color}40`,
      }}>
        <span style={{ color: "#fff", fontSize: 18, fontWeight: 800 }}>{p.title[0]}</span>
      </div>
      <h3 style={{
        fontSize: isMobile ? 20 : 24,
        fontWeight: 800,
        color: "#fff",
        marginBottom: 8,
      }}>{p.title}</h3>
      <p className="prj-desc" style={{
        color: "rgba(255,255,255,.45)",
        fontSize: 14,
        lineHeight: 1.7,
      }}>{p.desc}</p>
    </div>
  );

  return (
    <section id="projects" style={{ padding: isMobile ? "80px 20px" : "100px 24px", background: "#0a1120" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "flex-start" : "flex-end",
          marginBottom: isMobile ? 40 : 60,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 0,
        }}>
          <div>
            <h2 style={{ fontSize: isMobile ? 32 : 48, fontWeight: 900, lineHeight: 1.1 }}>
              <span style={{ color: "#fff" }}>Our </span>
              <span style={{ color: "#2563eb" }}>Success Stories</span>
            </h2>
            <p style={{
              color: "rgba(255,255,255,.5)",
              fontSize: isMobile ? 14 : 15,
              marginTop: 16,
              maxWidth: 560,
              lineHeight: 1.7,
              fontStyle: "italic",
            }}>
              From award-winning mobile apps to top-notch web platforms, we've helped brands innovate and grow. Explore how DevCore transforms ideas into impactful digital success.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "none",
              border: "1px solid rgba(255,255,255,.25)",
              color: "#fff",
              padding: "10px 24px",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "all .3s",
              flexShrink: 0,
              fontFamily: "inherit",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = "#2563eb";
              e.currentTarget.style.background = "rgba(37,99,235,.1)";
              e.currentTarget.style.color = "#38bdf8";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,.25)";
              e.currentTarget.style.background = "none";
              e.currentTarget.style.color = "#fff";
            }}
          >
            View More &rarr;
          </button>
        </div>

        {isMobile ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {PROJECTS.map((p, i) => renderCard(p, i))}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>
              {leftProjects.map((p, colIdx) => renderCard(p, colIdx * 2))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 56, paddingTop: 100 }}>
              {rightProjects.map((p, colIdx) => renderCard(p, colIdx * 2 + 1))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
