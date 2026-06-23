import { useState, useEffect } from "react";

const STEPS = [
  {
    question: "What Type Of Software Do You Need?",
    type: "single" as const,
    options: ["Web Application", "Mobile Application", "Both Web & Mobile", "E-Commerce Platform", "Custom Software"],
  },
  {
    question: "Should Your Software Be Customized To A Specific Industry?",
    type: "single" as const,
    options: ["Yes", "No", "Not Sure"],
  },
  {
    question: "What Is The Primary Industry Your Software Will Serve?",
    type: "multi" as const,
    options: [
      "Healthcare and life sciences", "Transportation and logistics",
      "Pharmaceuticals and biotech", "Hospitality and travel",
      "Financial services", "Agriculture and food production",
      "Public sector and government", "Professional services",
      "Energy, utilities and environment", "Entertainment and gaming",
      "Manufacturing and industrial", "Automotive and mobility",
      "Retail, consumer and ecommerce", "Consumer services",
      "Technology, media and telecommunications", "Research, education and nonprofits",
      "Real estate, construction and infrastructure",
    ],
  },
  {
    question: "What Core Features Does Your Software Need?",
    type: "multi" as const,
    options: [
      "User Authentication & Roles", "Dashboard & Analytics",
      "Payment Integration", "Real-time Chat / Messaging",
      "Content Management System", "Third-party API Integration",
      "File Upload & Management", "Notifications System",
      "Search & Filtering", "Social Media Integration",
      "Admin Panel", "Reporting & Export",
    ],
  },
  {
    question: "Do You Need Professional UI/UX Design?",
    type: "single" as const,
    options: ["Yes, Full Design", "Just Basic UI", "I Have My Own Design", "Not Sure"],
  },
  {
    question: "What Is Your Expected Project Timeline?",
    type: "single" as const,
    options: ["1 - 2 Months", "3 - 4 Months", "5 - 6 Months", "6+ Months", "Flexible"],
  },
  {
    question: "What Is Your Estimated Budget Range?",
    type: "single" as const,
    options: ["Under $2,000", "$2,000 - $5,000", "$5,000 - $10,000", "$10,000 - $25,000", "$25,000+"],
  },
];

const STATS = [
  { number: "1250+", label: "Projects Calculated" },
  { number: "75000+", label: "Development Hours Analyzed" },
  { number: "$5000+", label: "Average Savings Per Project" },
  { number: "850+", label: "Clients Trusted Our Data" },
];

type Props = {
  onClose: () => void;
  onContactClick: () => void;
  isMobile: boolean;
  serviceName: string;
};

export function CostCalculator({ onClose, onContactClick, isMobile, serviceName }: Props) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string[]>>({});
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const current = STEPS[step];

  const selectSingle = (option: string) => {
    setAnswers(a => ({ ...a, [step]: [option] }));
  };

  const toggleMulti = (option: string) => {
    setAnswers(a => {
      const prev = a[step] || [];
      return { ...a, [step]: prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option] };
    });
  };

  const canNext = (answers[step] || []).length > 0;

  const handleNext = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

  const handleBack = () => {
    if (showResult) { setShowResult(false); return; }
    if (step > 0) setStep(step - 1);
  };

  const calculateCost = () => {
    let base = 2000;
    const type = answers[0]?.[0] || "";
    if (type === "Web Application") base += 1000;
    else if (type === "Mobile Application") base += 2500;
    else if (type === "Both Web & Mobile") base += 4000;
    else if (type === "E-Commerce Platform") base += 3000;
    else if (type === "Custom Software") base += 3500;
    const features = answers[3] || [];
    base += features.length * 600;
    const design = answers[4]?.[0] || "";
    if (design === "Yes, Full Design") base += 2000;
    else if (design === "Just Basic UI") base += 800;
    const timeline = answers[5]?.[0] || "";
    if (timeline === "1 - 2 Months") base = Math.round(base * 1.3);
    else if (timeline === "3 - 4 Months") base = Math.round(base * 1.1);
    const min = Math.round(base / 100) * 100;
    const max = Math.round((base * 1.6) / 100) * 100;
    return { min, max };
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 800,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: isMobile ? 12 : 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 860,
          width: "100%",
          maxHeight: "92vh",
          background: "#fff",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          padding: isMobile ? "20px 20px 16px" : "24px 32px 20px",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{ position: "absolute", top: -60, right: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(37,99,235,0.08)" }} />
          <div style={{ position: "absolute", bottom: -40, left: "30%", width: 120, height: 120, borderRadius: "50%", background: "rgba(37,99,235,0.05)" }} />

          <button onClick={onClose} style={{
            position: "absolute", top: 14, right: 14,
            background: "rgba(255,255,255,0.1)", border: "none", borderRadius: "50%",
            width: 32, height: 32, fontSize: 18, cursor: "pointer", color: "rgba(255,255,255,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
          }}>&times;</button>

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: isMobile ? 18 : 22, fontWeight: 900, color: "#fff", marginBottom: 4 }}>
              {serviceName} Cost Calculator
            </h2>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: 0 }}>Estimate the cost of your project with precision</p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 10 : 0,
            marginTop: 16,
            position: "relative", zIndex: 1,
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{ textAlign: "center", padding: "4px 0", borderRight: !isMobile && i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div style={{ fontSize: isMobile ? 18 : 22, fontWeight: 900, color: "#60a5fa" }}>{s.number}</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ overflowY: "auto", flex: 1, padding: isMobile ? "20px 20px 28px" : "28px 36px 36px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24 }}>
            {STEPS.map((_, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center" }}>
                <div style={{
                  width: isMobile ? 28 : 34, height: isMobile ? 28 : 34, borderRadius: "50%",
                  background: showResult || i <= step ? "#2563eb" : "#e5e7eb",
                  color: showResult || i <= step ? "#fff" : "#9ca3af",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: isMobile ? 11 : 13, fontWeight: 700, transition: "all 0.3s",
                }}>{i + 1}</div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: isMobile ? 14 : 32, height: 2, background: showResult || i < step ? "#2563eb" : "#e5e7eb", transition: "all 0.3s" }} />
                )}
              </div>
            ))}
          </div>

          {showResult ? (
            <div style={{ textAlign: "center" }}>
              <h2 style={{ fontSize: isMobile ? 22 : 28, fontWeight: 900, color: "#111", marginBottom: 4 }}>Estimated Project Cost</h2>
              <p style={{ color: "#6b7280", fontSize: 13, marginBottom: 24 }}>Based on your requirements for {serviceName}</p>
              <div style={{ background: "linear-gradient(135deg, #2563eb, #1d4ed8)", borderRadius: 14, padding: isMobile ? "24px 16px" : "32px", marginBottom: 24, color: "#fff" }}>
                <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>Estimated Range</div>
                <div style={{ fontSize: isMobile ? 30 : 42, fontWeight: 900, marginBottom: 2 }}>
                  ${calculateCost().min.toLocaleString()} &ndash; ${calculateCost().max.toLocaleString()}
                </div>
                <div style={{ fontSize: 11, opacity: 0.6 }}>Final cost depends on detailed scope analysis</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8, textAlign: "left", marginBottom: 24 }}>
                {STEPS.map((q, i) => (
                  <div key={i} style={{ background: "#f8fafc", borderRadius: 8, padding: 12, border: "1px solid #f1f5f9" }}>
                    <div style={{ fontSize: 10, color: "#9ca3af", fontWeight: 700, marginBottom: 2 }}>Q{i + 1}</div>
                    <div style={{ fontSize: 11, color: "#374151", fontWeight: 600, marginBottom: 3 }}>{q.question}</div>
                    <div style={{ fontSize: 11, color: "#2563eb" }}>{(answers[i] || []).join(", ") || "—"}</div>
                  </div>
                ))}
              </div>
              <p style={{ color: "#6b7280", fontSize: 12, marginBottom: 14 }}>Want a detailed quote? Get in touch with our team.</p>
              <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
                <button onClick={handleBack} style={{ background: "#f3f4f6", color: "#374151", border: "none", padding: "12px 24px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>&#8592; Recalculate</button>
                <button onClick={onContactClick} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "12px 28px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>
                  Contact Us &#8594;
                </button>
              </div>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: 4 }}>
                <span style={{ color: "#2563eb", fontSize: 13, fontWeight: 600 }}>Question {step + 1} / {STEPS.length}</span>
              </div>
              <h2 style={{ fontSize: isMobile ? 20 : 26, fontWeight: 900, color: "#111", marginBottom: 24, lineHeight: 1.3 }}>
                {current.question}
              </h2>

              {current.type === "single" ? (
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
                  {current.options.map(opt => {
                    const selected = (answers[step] || []).includes(opt);
                    return (
                      <button key={opt} onClick={() => selectSingle(opt)} style={{
                        padding: "11px 22px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                        background: selected ? "#2563eb" : "#fff",
                        color: selected ? "#fff" : "#374151",
                        border: `2px solid ${selected ? "#2563eb" : "#e5e7eb"}`,
                        transition: "all 0.2s",
                      }}>{opt}</button>
                    );
                  })}
                </div>
              ) : (
                <>
                  <p style={{ color: "#9ca3af", fontSize: 11, marginBottom: 12, fontWeight: 500 }}>(Multiple Choice)</p>
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 8, marginBottom: 32 }}>
                    {current.options.map(opt => {
                      const selected = (answers[step] || []).includes(opt);
                      return (
                        <button key={opt} onClick={() => toggleMulti(opt)} style={{
                          padding: "12px 14px", borderRadius: 10, fontSize: 12, fontWeight: 500, cursor: "pointer", fontFamily: "inherit",
                          background: selected ? "#eff6ff" : "#fff",
                          color: selected ? "#2563eb" : "#374151",
                          border: `2px solid ${selected ? "#2563eb" : "#e5e7eb"}`,
                          textAlign: "left", display: "flex", alignItems: "center", gap: 10, transition: "all 0.2s",
                        }}>
                          <div style={{
                            width: 18, height: 18, borderRadius: "50%", flexShrink: 0,
                            border: `2px solid ${selected ? "#2563eb" : "#d1d5db"}`,
                            background: selected ? "#2563eb" : "#fff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                          }}>
                            {selected && <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#fff" }} />}
                          </div>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}

              <div style={{ display: "flex", justifyContent: "space-between" }}>
                {step > 0 ? (
                  <button onClick={handleBack} style={{ background: "#f3f4f6", color: "#374151", border: "none", padding: "11px 22px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>&#8592; Previous</button>
                ) : <div />}
                <button onClick={handleNext} disabled={!canNext} style={{
                  background: canNext ? "#2563eb" : "#93c5fd",
                  color: "#fff", border: "none", padding: "11px 26px", borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: canNext ? "pointer" : "default", fontFamily: "inherit",
                }}>
                  {step === STEPS.length - 1 ? "See Estimate" : "Next →"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
