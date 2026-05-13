import { useState, useEffect } from "react";

const services = [
  { icon: "🌐", title: "Web Development", desc: "Modern, responsive websites & web apps built with cutting-edge technologies.", tags: ["React", "Next.js", "Node.js"] },
  { icon: "📱", title: "Mobile App Development", desc: "Cross-platform Android apps that deliver seamless user experiences.", tags: ["React Native", "Flutter", "Firebase"] },
  { icon: "🤖", title: "AI-Based Web Apps", desc: "Smart applications powered by AI — chatbots, automation, recommendations & more.", tags: ["OpenAI", "Python", "Node.js"] },
  { icon: "🔄", title: "Web to App Conversion", desc: "Convert your website into a fully functional Android mobile app.", tags: ["React Native", "Flutter", "API Integration"] },
  { icon: "🔧", title: "API Development", desc: "Scalable REST & GraphQL APIs that power your digital products reliably.", tags: ["Node.js", "Python", "MongoDB"] },
];


const projects = [
  { title: "ShopEase — E-Commerce", category: "Web + Mobile", desc: "Full-stack multi-vendor marketplace with real-time inventory, Stripe payments, and a seller dashboard.", tech: ["React", "Node.js", "MongoDB", "Stripe"], color: "#2563eb", emoji: "🛒", results: "3x sales increase" },
  { title: "MediTrack — Healthcare", category: "Mobile App", desc: "Patient management & appointment booking app with doctor dashboards and push notifications.", tech: ["React Native", "Firebase", "Node.js"], color: "#0ea5e9", emoji: "🏥", results: "10k+ downloads" },
  { title: "SafarUmrah — Agency Portal", category: "Web App", desc: "Full Umrah travel portal with package management, online booking, hotel & flight tracking.", tech: ["React", "Node.js", "MongoDB"], color: "#10b981", emoji: "🕌", results: "800+ bookings" },
  { title: "RideNow — Ride Booking", category: "Mobile App", desc: "On-demand ride app with live GPS, driver ratings, wallet system, and admin analytics.", tech: ["React Native", "Google Maps", "Node.js"], color: "#f59e0b", emoji: "🚗", results: "4.8★ App Store" },
  { title: "Quran Academy", category: "Web App", desc: "Online Quran learning platform with Teacher, Admin & Student panels, live classes, and payments.", tech: ["React", "Node.js", "MongoDB"], color: "#14b8a6", emoji: "📖", results: "500+ students" },
  { title: "FoodRush — Food Delivery", category: "Web + Mobile", desc: "Restaurant discovery & food ordering with live tracking, loyalty rewards, and multi-restaurant management.", tech: ["React Native", "React", "Node.js", "Redis"], color: "#ef4444", emoji: "🍔", results: "50+ restaurants" },
];

const stats = [
  { value: "4", label: "Projects" },
  { value: "4", label: "Clients" },
  { value: "2", label: "Years" },
  { value: "100%", label: "On-Time" },
];

const filters = ["All", "Web App"];

const LogoSVG = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.4))" }}>
    <defs><linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#2563eb"/></linearGradient></defs>
    <path d="M18 20 L18 80 L42 80 C58 80 70 68 70 50 C70 32 58 20 42 20 Z M30 32 L40 32 C50 32 57 40 57 50 C57 60 50 68 40 68 L30 68 Z" fill="white"/>
    <path d="M88 35 C82 27 73 22 63 22 C47 22 38 34 38 50 C38 66 47 78 63 78 C73 78 82 73 88 65 L78 60 C75 65 69 68 63 68 C53 68 50 60 50 50 C50 40 53 32 63 32 C69 32 75 35 78 40 Z" fill="url(#cg1)"/>
    <rect x="10" y="10" width="5" height="5" rx="1" fill="#38bdf8" opacity="0.9"/>
    <rect x="17" y="7" width="4" height="4" rx="1" fill="#38bdf8" opacity="0.6"/>
  </svg>
);

export default function DevCorePortfolio() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", project: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = async () => {
    if (!form.name || !form.message) return;
    setFormStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/devcorsolution@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          project: form.project,
          message: form.message,
          _subject: `New Project Inquiry from ${form.name}`,
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) setFormStatus("sent");
      else setFormStatus("error");
    } catch { setFormStatus("error"); }
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter || p.category.includes(filter.replace(" App", "")));

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const navLinks = [{ label: "Home", id: "home" }, { label: "Services", id: "services" }, { label: "Projects", id: "projects" }, { label: "Contact", id: "contact" }];

  const card = { transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" };

  const inp = { background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, padding: "13px 16px", color: "#e6edf3", fontSize: 15, outline: "none", fontFamily: "inherit", width: "100%", display: "block" };

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0d1117", color: "#e6edf3", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        * { box-sizing:border-box; margin:0; padding:0; }
        ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-track{background:#0d1117} ::-webkit-scrollbar-thumb{background:#2563eb;border-radius:3px}
        input::placeholder,textarea::placeholder{color:#4b5563}
        .srv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .prj-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        .stat-row { display:flex; justify-content:center; border-top:1px solid #161b22; padding-top:44px; }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:56px; }
        .contact-info { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin-bottom:24px; }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px; }
        @media(max-width:900px){
          .srv-grid { grid-template-columns:repeat(2,1fr) !important; }
          .prj-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media(max-width:600px){
          .srv-grid { grid-template-columns:1fr !important; }
          .prj-grid { grid-template-columns:1fr !important; }
          .stat-row { flex-wrap:wrap; gap:0; }
          .hero-btns { flex-direction:column; align-items:center; }
          .contact-info { grid-template-columns:1fr !important; }
          .form-row { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: "rgba(13,17,23,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid #161b22" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 20px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
            <LogoSVG size={40} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 15, lineHeight: 1.1 }}><span style={{ color: "#e6edf3" }}>Dev</span><span style={{ color: "#38bdf8" }}>Core</span></div>
              <div style={{ fontSize: 9, color: "#6e7681", fontWeight: 700, letterSpacing: "2px" }}>— SOLUTIONS —</div>
            </div>
          </div>

          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
              {navLinks.map(n => (
                <button key={n.id} onClick={() => scrollTo(n.id)} style={{ background: "none", border: "none", color: "#8b949e", padding: "8px 14px", borderRadius: 8, fontSize: 14, fontWeight: 500, cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#e6edf3"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "#8b949e"; e.currentTarget.style.background = "none"; }}>
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} style={{ marginLeft: 8, background: "linear-gradient(135deg,#1d4ed8,#2563eb)", border: "none", color: "#fff", padding: "9px 20px", borderRadius: 9, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                Get a Quote
              </button>
            </div>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", color: "#e6edf3", fontSize: 24, cursor: "pointer", padding: 4, lineHeight: 1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>

        {/* Mobile menu */}
        {isMobile && menuOpen && (
          <div style={{ background: "#0d1117", borderTop: "1px solid #161b22", padding: "12px 20px 20px" }}>
            {navLinks.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)} style={{ display: "block", width: "100%", background: "none", border: "none", color: "#8b949e", padding: "13px 0", fontSize: 16, fontWeight: 500, cursor: "pointer", textAlign: "left", borderBottom: "1px solid #161b22" }}>
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{ marginTop: 14, width: "100%", background: "linear-gradient(135deg,#1d4ed8,#2563eb)", border: "none", color: "#fff", padding: "13px", borderRadius: 10, fontWeight: 700, fontSize: 15, cursor: "pointer" }}>
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "110px 20px 70px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "15%", left: "-5%", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(37,99,235,0.12),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "5%", right: "-5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,165,233,0.09),transparent 65%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1140, margin: "0 auto", width: "100%", textAlign: "center", animation: "fadeUp 0.8s ease both" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(37,99,235,0.1)", border: "1px solid rgba(37,99,235,0.3)", borderRadius: 24, padding: "7px 18px", marginBottom: 28 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, color: "#22c55e", fontWeight: 600 }}>Currently Accepting New Projects</span>
          </div>
          <h1 style={{ fontSize: isMobile ? 34 : 54, fontWeight: 900, lineHeight: 1.15, marginBottom: 18, letterSpacing: "-0.5px" }}>
            We Build Digital Products<br />
            <span style={{ background: "linear-gradient(135deg,#2563eb,#38bdf8,#818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200%", animation: "shimmer 3s linear infinite" }}>That Actually Work</span>
          </h1>
          <p style={{ fontSize: isMobile ? 15 : 17, color: "#8b949e", maxWidth: 560, margin: "0 auto 36px", lineHeight: 1.8 }}>
            <strong style={{ color: "#58a6ff" }}>DevCore Tech Solutions</strong> crafts custom websites and mobile apps that drive real business growth. Modern tech, clean code, on-time delivery — guaranteed.
          </p>
          <div className="hero-btns">
            <button onClick={() => scrollTo("projects")} style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", border: "none", color: "#fff", padding: "14px 30px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 0 36px rgba(37,99,235,0.4)", width: isMobile ? "100%" : "auto" }}>
              🚀 View Our Work
            </button>
            <button onClick={() => scrollTo("contact")} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#e6edf3", padding: "14px 30px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", width: isMobile ? "100%" : "auto" }}>
              💬 Let's Talk
            </button>
          </div>
          <div className="stat-row">
            {stats.map((s, i) => (
              <div key={i} style={{ flex: "1 1 80px", padding: isMobile ? "14px 12px" : "0 24px", borderRight: i < stats.length - 1 ? "1px solid #161b22" : "none" }}>
                <div style={{ fontSize: isMobile ? 28 : 36, fontWeight: 900, color: "#58a6ff" }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#6e7681", marginTop: 5, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding: "80px 20px", background: "#010409" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: isMobile ? 30 : 38, fontWeight: 800 }}>Our <span style={{ background: "linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Services</span></h2>
            <p style={{ color: "#6e7681", marginTop: 12, fontSize: 14, maxWidth: 480, margin: "12px auto 0" }}>End-to-end digital solutions that turn your vision into a competitive advantage.</p>
          </div>
          <div className="srv-grid">
            {services.map((s, i) => (
              <div key={i} style={{ ...card, background: "#0d1117", border: "1px solid #21262d", borderRadius: 16, padding: 24 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#2563eb50"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,99,235,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#21262d"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 9 }}>{s.title}</h3>
                <p style={{ color: "#6e7681", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map(t => <span key={t} style={{ fontSize: 11, background: "rgba(37,99,235,0.1)", color: "#60a5fa", padding: "3px 9px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(37,99,235,0.2)" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "80px 20px", background: "#0d1117" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>OUR WORK</div>
            <h2 style={{ fontSize: isMobile ? 30 : 38, fontWeight: 800 }}>Recent <span style={{ background: "linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Projects</span></h2>
          </div>
          <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ background: filter === f ? "linear-gradient(135deg,#1d4ed8,#2563eb)" : "rgba(255,255,255,0.04)", border: filter === f ? "none" : "1px solid #21262d", color: filter === f ? "#fff" : "#8b949e", padding: "9px 20px", borderRadius: 24, fontWeight: 600, fontSize: 14, cursor: "pointer", transition: "all 0.2s" }}>
                {f}
              </button>
            ))}
          </div>
          <div className="prj-grid">
            {filtered.map((p, i) => (
              <div key={i} style={{ ...card, background: "#161b22", border: "1px solid #21262d", borderRadius: 16, overflow: "hidden" }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.borderColor = p.color + "60"; e.currentTarget.style.boxShadow = `0 14px 40px ${p.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "#21262d"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ height: 4, background: `linear-gradient(90deg,${p.color},${p.color}70)` }} />
                <div style={{ height: 110, background: `linear-gradient(135deg,${p.color}18,${p.color}08)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 46 }}>{p.emoji}</div>
                <div style={{ padding: 20 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3, marginBottom: 9 }}>{p.title}</h3>
                  <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 11, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, background: `${p.color}18`, color: p.color, padding: "3px 9px", borderRadius: 20, fontWeight: 700, border: `1px solid ${p.color}30` }}>{p.category}</span>
                    <span style={{ fontSize: 11, background: "rgba(34,197,94,0.08)", color: "#22c55e", padding: "3px 9px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(34,197,94,0.2)" }}>✓ {p.results}</span>
                  </div>
                  <p style={{ color: "#6e7681", fontSize: 13, lineHeight: 1.65, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                    {p.tech.map(t => <span key={t} style={{ fontSize: 11, background: "#0d1117", border: "1px solid #30363d", color: "#8b949e", padding: "3px 9px", borderRadius: 20 }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 20px", background: "#010409" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center", background: "linear-gradient(135deg,rgba(37,99,235,0.12),rgba(14,165,233,0.08))", border: "1px solid rgba(37,99,235,0.2)", borderRadius: 22, padding: isMobile ? "40px 24px" : "52px 48px" }}>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🚀</div>
          <h2 style={{ fontSize: isMobile ? 24 : 32, fontWeight: 800, marginBottom: 12 }}>Ready to Start Your Project?</h2>
          <p style={{ color: "#8b949e", fontSize: isMobile ? 14 : 16, marginBottom: 28, lineHeight: 1.7 }}>Partner with DevCore to build your next digital product. Free consultation — no commitment required.</p>
          <button onClick={() => scrollTo("contact")} style={{ background: "linear-gradient(135deg,#1d4ed8,#2563eb)", border: "none", color: "#fff", padding: "15px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16, cursor: "pointer", boxShadow: "0 0 36px rgba(37,99,235,0.4)", width: isMobile ? "100%" : "auto" }}>
            Get Free Consultation →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 20px", background: "#0d1117" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <div style={{ fontSize: 11, color: "#2563eb", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 10 }}>CONTACT US</div>
            <h2 style={{ fontSize: isMobile ? 30 : 38, fontWeight: 800 }}>Let's <span style={{ background: "linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Build Together</span></h2>
            <p style={{ color: "#6e7681", marginTop: 10, fontSize: 14 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>
          <div className="contact-info">
            {[
              { icon: "📧", label: "Email", val: "devcorsolution@gmail.com", href: "mailto:devcorsolution@gmail.com", color: "#2563eb" },
              { icon: "📱", label: "WhatsApp", val: "+92 316 4593747", href: "https://wa.me/923164593747", color: "#22c55e" },
              { icon: "💼", label: "LinkedIn", val: "DevCore Tech", href: "#", color: "#0ea5e9" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ ...card, display: "flex", flexDirection: "column", alignItems: "center", gap: 7, background: "#161b22", border: `1px solid ${c.color}25`, borderRadius: 14, padding: "18px 12px", textDecoration: "none" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = c.color + "60"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = c.color + "25"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <span style={{ fontSize: 24 }}>{c.icon}</span>
                <span style={{ fontSize: 11, color: "#6e7681", fontWeight: 600 }}>{c.label}</span>
                <span style={{ fontSize: 13, color: c.color, fontWeight: 700, textAlign: "center" }}>{c.val}</span>
              </a>
            ))}
          </div>
          <div style={{ background: "#161b22", border: "1px solid #21262d", borderRadius: 18, padding: isMobile ? 22 : 32 }}>
            <h3 style={{ fontWeight: 700, fontSize: 17, marginBottom: 20 }}>📩 Send Us a Message</h3>
            {formStatus === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 20px", background: "rgba(34,197,94,0.08)", borderRadius: 12, border: "1px solid rgba(34,197,94,0.2)" }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>✅</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#22c55e", marginBottom: 8 }}>Message Sent!</div>
                <div style={{ color: "#6e7681", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                <button onClick={() => { setFormStatus("idle"); setForm({ name:"", contact:"", project:"", message:"" }); }} style={{ marginTop: 18, background: "none", border: "1px solid #30363d", color: "#8b949e", padding: "8px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Send Another</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your Name" style={inp} />
                  <input value={form.contact} onChange={e => setForm(f => ({ ...f, contact: e.target.value }))} placeholder="Email or Phone" style={inp} />
                </div>
                <input value={form.project} onChange={e => setForm(f => ({ ...f, project: e.target.value }))} placeholder="Project Type (e.g. E-Commerce, Mobile App...)" style={{ ...inp, marginBottom: 14 }} />
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Tell us about your project — requirements, timeline, budget..." rows={5} style={{ ...inp, marginBottom: 18, resize: "vertical" }} />
                <button onClick={sendEmail} disabled={formStatus === "sending"} style={{ width: "100%", background: formStatus === "sending" ? "#1e3a8a" : "linear-gradient(135deg,#1d4ed8,#2563eb)", border: "none", color: "#fff", padding: "15px", borderRadius: 11, fontWeight: 700, fontSize: 16, cursor: formStatus === "sending" ? "default" : "pointer", boxShadow: "0 0 28px rgba(37,99,235,0.35)", opacity: formStatus === "sending" ? 0.7 : 1 }}>
                  {formStatus === "sending" ? "Sending... ⏳" : "Send Message 🚀"}
                </button>
                {formStatus === "error" && <div style={{ marginTop: 12, color: "#f87171", fontSize: 13, textAlign: "center" }}>Something went wrong. Please email us directly at devcorsolution@gmail.com</div>}
              </>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#010409", borderTop: "1px solid #161b22", padding: "28px 20px" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoSVG size={34} />
            <div>
              <div style={{ fontWeight: 800, fontSize: 14 }}><span style={{ color: "#e6edf3" }}>Dev</span><span style={{ color: "#38bdf8" }}>Core</span></div>
              <div style={{ fontSize: 9, color: "#6e7681", letterSpacing: "2px", fontWeight: 600 }}>— SOLUTIONS —</div>
            </div>
          </div>
          <div style={{ fontSize: 12, color: "#6e7681", textAlign: "center" }}>© 2025 DevCore Tech Solutions. All rights reserved.</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {["🌐 Web Dev", "📱 Mobile Apps"].map(s => (
              <span key={s} style={{ fontSize: 11, background: "rgba(37,99,235,0.08)", color: "#60a5fa", padding: "4px 11px", borderRadius: 20, border: "1px solid rgba(37,99,235,0.2)", fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
