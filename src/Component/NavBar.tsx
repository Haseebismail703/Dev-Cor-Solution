import { LogoSVG } from "./LogoSVG";
import { NAV_LINKS } from "../data";

type NavBarProps = {
  isMobile: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
};

export function NavBar({ isMobile, menuOpen, setMenuOpen, scrollTo }: NavBarProps) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 300, background: "rgba(6,11,20,.95)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", flexShrink: 0 }} onClick={() => scrollTo("home")}>
          <LogoSVG size={34} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, lineHeight: 1.1, letterSpacing: "-0.3px" }}>
              <span style={{ color: "#fff" }}>Dev</span><span style={{ color: "#38bdf8" }}>Core</span>
            </div>
            <div style={{ fontSize: 8.5, color: "rgba(255,255,255,.35)", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase" }}>TECH SOLUTIONS</div>
          </div>
        </div>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {NAV_LINKS.map(n => (
                <button
                  key={n}
                  onClick={() => scrollTo(n.toLowerCase())}
                  className="nav-link"
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,.7)",
                    padding: "8px 18px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "color .2s",
                    fontFamily: "inherit",
                    letterSpacing: "0.2px",
                  }}
                >
                  {n}
                </button>
              ))}
            </div>

            <span style={{ width: 1, height: 24, background: "rgba(255,255,255,.1)", margin: "0 18px" }} />

            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <a
                href="mailto:devcorsolution@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  color: "rgba(255,255,255,.6)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.6)"}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                devcorsolution@gmail.com
              </a>

              <a
                href="tel:+923164593747"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 7,
                  color: "rgba(255,255,255,.6)",
                  fontSize: 13,
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color .2s",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.6)"}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +92 316 4593747
              </a>
            </div>

            <span style={{ width: 1, height: 24, background: "rgba(255,255,255,.1)", margin: "0 18px" }} />

            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "#2563eb",
                border: "none",
                color: "#fff",
                padding: "10px 24px",
                borderRadius: 50,
                fontWeight: 700,
                fontSize: 13.5,
                cursor: "pointer",
                fontFamily: "inherit",
                letterSpacing: "0.2px",
                transition: "background .2s, box-shadow .2s",
                boxShadow: "0 0 20px rgba(37,99,235,.3)",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#3b82f6";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(37,99,235,.5)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#2563eb";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(37,99,235,.3)";
              }}
            >
              Get In Touch
            </button>
          </div>
        )}

        {isMobile && (
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div style={{ background: "rgba(6,11,20,.98)", borderTop: "1px solid rgba(255,255,255,.06)", padding: "16px 24px 24px" }}>
          {NAV_LINKS.map(n => (
            <button key={n} onClick={() => { scrollTo(n.toLowerCase()); setMenuOpen(false); }} style={{ display: "block", width: "100%", background: "none", border: "none", color: "rgba(255,255,255,.7)", padding: "14px 0", fontSize: 15, fontWeight: 500, cursor: "pointer", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.06)", fontFamily: "inherit" }}>
              {n}
            </button>
          ))}
          <a href="mailto:devcorsolution@gmail.com" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            devcorsolution@gmail.com
          </a>
          <a href="tel:+923164593747" style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "14px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +92 316 4593747
          </a>
          <button onClick={() => { scrollTo("contact"); setMenuOpen(false); }} style={{ marginTop: 16, width: "100%", background: "#2563eb", border: "none", color: "#fff", padding: "14px", borderRadius: 50, fontWeight: 700, fontSize: 15, cursor: "pointer", fontFamily: "inherit" }}>
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
