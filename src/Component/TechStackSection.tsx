import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { TECH_SECTIONS } from "../data";

type TechStackSectionProps = {
  isMobile: boolean;
  techTabs: number[];
  setTechTabs: Dispatch<SetStateAction<number[]>>;
};

export function TechStackSection({ isMobile }: TechStackSectionProps) {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = TECH_SECTIONS[activeCategory];

  return (
    <section style={{ padding: isMobile ? "80px 20px" : "100px 24px", background: "#0a1120" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: isMobile ? 40 : 60 }}>
          <h2 style={{ fontSize: isMobile ? 28 : 48, fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ color: "#2563eb" }}>Technologies</span>
            <span style={{ color: "#fff" }}> We Use</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,.5)",
            fontSize: 15,
            marginTop: 16,
            maxWidth: 560,
            lineHeight: 1.7,
          }}>
            We're not wedded to any single stack — we're problem solvers who choose the right tools for your goals. Our core strengths span:
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "280px 1fr",
          gap: isMobile ? 24 : 48,
          alignItems: "start",
        }}>
          {/* Sidebar Navigation */}
          {isMobile ? (
            <div style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 8,
              scrollbarWidth: "none",
            }}>
              {TECH_SECTIONS.map((section, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    background: activeCategory === i ? "#2563eb" : "rgba(255,255,255,.05)",
                    border: activeCategory === i ? "none" : "1px solid rgba(255,255,255,.1)",
                    color: "#fff",
                    padding: "10px 20px",
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    transition: "all .2s",
                    fontFamily: "inherit",
                  }}
                >
                  {section.cat}
                </button>
              ))}
            </div>
          ) : (
            <div style={{
              background: "#060b14",
              borderRadius: 16,
              padding: "12px",
              border: "1px solid rgba(255,255,255,.07)",
            }}>
              {TECH_SECTIONS.map((section, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: activeCategory === i ? "#2563eb" : "transparent",
                    border: "none",
                    color: activeCategory === i ? "#fff" : "rgba(255,255,255,.6)",
                    padding: "14px 20px",
                    borderRadius: 10,
                    fontSize: 15,
                    fontWeight: activeCategory === i ? 700 : 500,
                    cursor: "pointer",
                    transition: "all .25s",
                    fontFamily: "inherit",
                    marginBottom: i < TECH_SECTIONS.length - 1 ? 4 : 0,
                  }}
                  onMouseEnter={e => {
                    if (activeCategory !== i) {
                      e.currentTarget.style.background = "rgba(255,255,255,.05)";
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={e => {
                    if (activeCategory !== i) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,.6)";
                    }
                  }}
                >
                  {section.cat}
                </button>
              ))}
            </div>
          )}

          {/* Tech Content */}
          <div>
            {current.tabs.map((tab, ti) => (
              <div key={ti} style={{ marginBottom: ti < current.tabs.length - 1 ? 36 : 0 }}>
                <h3 style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 800,
                  color: "#fff",
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}>
                  {tab.label}
                </h3>
                <div style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
                  gap: 12,
                }}>
                  {tab.techs.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="tech-chip"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        background: "#060b14",
                        border: "1px solid rgba(255,255,255,.08)",
                        borderRadius: 12,
                        padding: "14px 18px",
                        transition: "all .25s",
                        cursor: "default",
                      }}
                    >
                      <div style={{
                        width: 32,
                        height: 32,
                        borderRadius: 8,
                        background: "rgba(37,99,235,.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <span style={{ fontSize: 13, fontWeight: 800, color: "#60a5fa" }}>
                          {tech.slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
