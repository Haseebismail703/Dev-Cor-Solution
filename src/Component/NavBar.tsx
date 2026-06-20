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
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 300, background: "rgba(6,11,20,.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
          <LogoSVG size={36} />
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.1 }}>
              <span style={{ color: "#fff" }}>Dev</span><span style={{ color: "#38bdf8" }}>Core</span>
            </div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,.4)", fontWeight: 700, letterSpacing: "2px" }}>TECH SOLUTIONS</div>
          </div>
        </div>

        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV_LINKS.map(n => (
              <button key={n} onClick={() => scrollTo(n.toLowerCase())} style={{ background: "none", border: "none", color: "rgba(255,255,255,.7)", padding: "8px 14px", borderRadius: 6, fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "color .2s" }}>
                {n}
              </button>
            ))}
            <span style={{ width: 1, height: 20, background: "rgba(255,255,255,.15)", margin: "0 12px" }} />
            <a href="mailto:devcorsolution@gmail.com" style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.65)", fontSize: 13, textDecoration: "none", marginRight: 4 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              devcorsolution@gmail.com
            </a>
            <a href="tel:+16467553497" style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.65)", fontSize: 13, textDecoration: "none", marginRight: 14 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +92 316 4593747
            </a>
            <button onClick={() => scrollTo("contact")} style={{ background: "#2563eb", border: "none", color: "#fff", padding: "9px 20px", borderRadius: 7, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
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
        <div style={{ background: "#060b14", borderTop: "1px solid rgba(255,255,255,.07)", padding: "12px 24px 20px" }}>
          {NAV_LINKS.map(n => (
            <button key={n} onClick={() => { scrollTo(n.toLowerCase()); setMenuOpen(false); }} style={{ display: "block", width: "100%", background: "none", border: "none", color: "rgba(255,255,255,.7)", padding: "13px 0", fontSize: 16, cursor: "pointer", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
              {n}
            </button>
          ))}
          <a href="mailto:devcorsolution@gmail.com" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            ✉ devcorsolution@gmail.com
          </a>
          <a href="tel:+16467553497" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
            📞 +92 316 4593747
          </a>
          <button onClick={() => { scrollTo("contact"); setMenuOpen(false); }} style={{ marginTop: 14, width: "100%", background: "#2563eb", border: "none", color: "#fff", padding: "13px", borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}
