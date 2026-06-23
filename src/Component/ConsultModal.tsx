import { useState, useEffect } from "react";

type Props = {
  onClose: () => void;
  isMobile: boolean;
};

export function ConsultModal({ onClose, isMobile }: Props) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/devcorsolution@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Consultation Request from ${form.name}` }),
      });
      const data = await res.json();
      setStatus(data.success === "true" || data.success === true ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 800,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: isMobile ? 16 : 24,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 920,
          width: "100%",
          maxHeight: "90vh",
          borderRadius: 16,
          overflow: "hidden",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          boxShadow: "0 24px 60px rgba(0,0,0,0.4)",
        }}
      >
        <div style={{
          flex: isMobile ? "none" : "0 0 42%",
          background: "linear-gradient(135deg, #1a4fd4 0%, #2563eb 50%, #3b82f6 100%)",
          padding: isMobile ? "36px 28px" : "48px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          minHeight: isMobile ? 180 : "auto",
        }}>
          <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "18px 18px" }} />
          <div style={{ position: "absolute", top: -40, right: -40, width: 150, height: 150, borderRadius: "50%", background: "rgba(255,255,255,0.06)" }} />
          <div style={{ position: "absolute", bottom: -30, left: -30, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 12 }}>
              Shape Your Idea<br />With Us
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
              We'll reach out shortly to arrange a conversation about your goals and how we can support them.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: isMobile ? 16 : 28 }}>
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 14px", fontSize: 12, color: "#fff", fontWeight: 600 }}>Free Consultation</div>
              <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "8px 14px", fontSize: 12, color: "#fff", fontWeight: 600 }}>24hr Response</div>
            </div>
          </div>
        </div>

        <div style={{
          flex: 1,
          background: "#fff",
          padding: isMobile ? "28px 24px" : "40px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflowY: "auto",
          position: "relative",
        }}>
          <button onClick={onClose} style={{
            position: "absolute", top: 14, right: 14,
            background: "none", border: "1px solid #e5e7eb", borderRadius: "50%",
            width: 32, height: 32, fontSize: 18, cursor: "pointer", color: "#999",
            display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
          }}>&times;</button>

          {status === "sent" ? (
            <div style={{ textAlign: "center", padding: "20px 0" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 22, color: "#16a34a" }}>&#10003;</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#111", marginBottom: 6 }}>Message Sent!</h3>
              <p style={{ color: "#666", fontSize: 13, marginBottom: 18 }}>We'll get back to you within 24 hours.</p>
              <button onClick={onClose} style={{ background: "#2563eb", color: "#fff", border: "none", padding: "10px 28px", borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>Close</button>
            </div>
          ) : (
            <>
              {(["Full Name", "Email", "+92 Phone Number", "Message"] as const).map((label, idx) => {
                const key = (["name", "email", "phone", "message"] as const)[idx];
                const isTextarea = key === "message";
                const Component = isTextarea ? "textarea" : "input";
                return (
                  <div key={label} style={{ marginBottom: 20 }}>
                    <label style={{ fontSize: 12, color: "#9ca3af", fontWeight: 500, display: "block", marginBottom: 6 }}>{label}</label>
                    <Component
                      value={form[key]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      placeholder={label}
                      {...(isTextarea ? { rows: 3 } : {})}
                      style={{
                        width: "100%", border: "none", borderBottom: "2px solid #e5e7eb",
                        padding: "8px 0", fontSize: 14, outline: "none", color: "#111",
                        background: "transparent", fontFamily: "inherit", boxSizing: "border-box",
                        ...(isTextarea ? { resize: "none" as const } : {}),
                      }}
                    />
                  </div>
                );
              })}
              <button
                onClick={handleSubmit}
                disabled={status === "sending"}
                style={{
                  width: "100%", background: "#2563eb", color: "#fff", border: "none",
                  padding: "14px", borderRadius: 10, fontSize: 15, fontWeight: 700,
                  cursor: status === "sending" ? "default" : "pointer",
                  fontFamily: "inherit", opacity: status === "sending" ? 0.7 : 1,
                  marginTop: 4,
                }}
              >
                {status === "sending" ? "Sending..." : "Get In Touch"}
              </button>
              {status === "error" && <p style={{ color: "#ef4444", fontSize: 12, textAlign: "center", marginTop: 10 }}>Something went wrong. Please try again.</p>}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
