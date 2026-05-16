import { useState, useEffect } from "react";

const services = [
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
  ), title: "Web Development", desc: "Modern, responsive websites & web apps built with cutting-edge technologies.", tags: ["React", "Next.js", "Node.js"] },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
  ), title: "Mobile App Development", desc: "Cross-platform Android apps that deliver seamless user experiences.", tags: ["React Native", "Flutter", "Firebase"] },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M21.17 8H12V2.83"/><circle cx="12" cy="12" r="3"/></svg>
  ), title: "AI-Based Web Apps", desc: "Smart applications powered by AI — chatbots, automation, recommendations & more.", tags: ["OpenAI", "Python", "Node.js"] },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
  ), title: "Web to App Conversion", desc: "Convert your website into a fully functional Android mobile app.", tags: ["React Native", "Flutter", "API Integration"] },
  { icon: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
  ), title: "API Development", desc: "Scalable REST & GraphQL APIs that power your digital products reliably.", tags: ["Node.js", "Python", "MongoDB"] },
];

const projects = [
  { title: "ShopEase — E-Commerce", category: "Web + Mobile", desc: "Full-stack multi-vendor marketplace with real-time inventory, Stripe payments, and a seller dashboard.", tech: ["React", "Node.js", "MongoDB", "Stripe"], color: "#2563eb", icon: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
  ), results: "3x sales increase" },
  { title: "SafarUmrah — Agency Portal", category: "Web App", desc: "Full Umrah travel portal with package management, online booking, hotel & flight tracking.", tech: ["React", "Node.js", "MongoDB"], color: "#10b981", icon: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  ), results: "800+ bookings" },
  { title: "Quran Academy", category: "Web App", desc: "Online Quran learning platform with Teacher, Admin & Student panels, live classes, and payments.", tech: ["React", "Node.js", "MongoDB"], color: "#14b8a6", icon: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
  ), results: "500+ students" },
  { title: "FoodRush — Food Delivery", category: "Web + Mobile", desc: "Restaurant discovery & food ordering with live tracking, loyalty rewards, and multi-restaurant management.", tech: ["React Native", "React", "Node.js", "Redis"], color: "#ef4444", icon: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
  ), results: "50+ restaurants" },
];

const stats = [
  { value: "4+", label: "Projects" },
  { value: "4+", label: "Clients" },
  { value: "2+", label: "Years" },
  { value: "100%", label: "On-Time" },
];

const filters = ["All", "Web App", "Mobile App"];

const LogoSVG = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: "drop-shadow(0 0 8px rgba(37,99,235,0.4))" }}>
    <defs><linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#38bdf8"/><stop offset="100%" stopColor="#2563eb"/></linearGradient></defs>
    <path d="M18 20 L18 80 L42 80 C58 80 70 68 70 50 C70 32 58 20 42 20 Z M30 32 L40 32 C50 32 57 40 57 50 C57 60 50 68 40 68 L30 68 Z" fill="white"/>
    <path d="M88 35 C82 27 73 22 63 22 C47 22 38 34 38 50 C38 66 47 78 63 78 C73 78 82 73 88 65 L78 60 C75 65 69 68 63 68 C53 68 50 60 50 50 C50 40 53 32 63 32 C69 32 75 35 78 40 Z" fill="url(#cg1)"/>
  </svg>
);

export default function DevCorePortfolio() {
  const [filter, setFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", project: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");

  const sendEmail = async () => {
    if (!form.name || !form.message) return;
    setFormStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/devcorsolution@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: form.name, contact: form.contact, project: form.project, message: form.message, _subject: `New Project Inquiry from ${form.name}` }),
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
        .prj-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:16px; }
        .stat-row { display:flex; justify-content:center; border-top:1px solid #161b22; padding-top:44px; }
        .hero-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; margin-bottom:56px; }
        .contact-info { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:24px; }
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
          .contact-info { grid-template-columns:1fr 1fr !important; }
          .form-row { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:200, background:"rgba(13,17,23,0.95)", backdropFilter:"blur(20px)", borderBottom:"1px solid #161b22" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", padding:"0 20px", display:"flex", alignItems:"center", justifyContent:"space-between", height:62 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={() => scrollTo("home")}>
            <LogoSVG size={40} />
            <div>
              <div style={{ fontWeight:800, fontSize:15, lineHeight:1.1 }}><span style={{ color:"#e6edf3" }}>Dev</span><span style={{ color:"#38bdf8" }}>Core</span></div>
              <div style={{ fontSize:9, color:"#6e7681", fontWeight:700, letterSpacing:"2px" }}>— SOLUTIONS —</div>
            </div>
          </div>
          {!isMobile && (
            <div style={{ display:"flex", alignItems:"center", gap:2 }}>
              {navLinks.map(n => (
                <button key={n.id} onClick={() => scrollTo(n.id)} style={{ background:"none", border:"none", color:"#8b949e", padding:"8px 14px", borderRadius:8, fontSize:14, fontWeight:500, cursor:"pointer", transition:"all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.color="#e6edf3"; e.currentTarget.style.background="rgba(255,255,255,0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color="#8b949e"; e.currentTarget.style.background="none"; }}>
                  {n.label}
                </button>
              ))}
              <button onClick={() => scrollTo("contact")} style={{ marginLeft:8, background:"linear-gradient(135deg,#1d4ed8,#2563eb)", border:"none", color:"#fff", padding:"9px 20px", borderRadius:9, fontWeight:700, fontSize:14, cursor:"pointer" }}>
                Get a Quote
              </button>
            </div>
          )}
          {isMobile && (
            <button onClick={() => setMenuOpen(o => !o)} style={{ background:"none", border:"none", color:"#e6edf3", fontSize:24, cursor:"pointer", padding:4, lineHeight:1 }}>
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
        {isMobile && menuOpen && (
          <div style={{ background:"#0d1117", borderTop:"1px solid #161b22", padding:"12px 20px 20px" }}>
            {navLinks.map(n => (
              <button key={n.id} onClick={() => scrollTo(n.id)} style={{ display:"block", width:"100%", background:"none", border:"none", color:"#8b949e", padding:"13px 0", fontSize:16, fontWeight:500, cursor:"pointer", textAlign:"left", borderBottom:"1px solid #161b22" }}>
                {n.label}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{ marginTop:14, width:"100%", background:"linear-gradient(135deg,#1d4ed8,#2563eb)", border:"none", color:"#fff", padding:"13px", borderRadius:10, fontWeight:700, fontSize:15, cursor:"pointer" }}>
              Get a Quote
            </button>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"110px 20px 70px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"15%", left:"-5%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle,rgba(37,99,235,0.12),transparent 65%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"5%", right:"-5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle,rgba(14,165,233,0.09),transparent 65%)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize:"40px 40px", pointerEvents:"none" }} />
        <div style={{ maxWidth:1140, margin:"0 auto", width:"100%", textAlign:"center", animation:"fadeUp 0.8s ease both" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(37,99,235,0.1)", border:"1px solid rgba(37,99,235,0.3)", borderRadius:24, padding:"7px 18px", marginBottom:28 }}>
            <div style={{ width:8, height:8, borderRadius:"50%", background:"#22c55e", animation:"pulse 2s infinite" }} />
            <span style={{ fontSize:12, color:"#22c55e", fontWeight:600 }}>Currently Accepting New Projects</span>
          </div>
          <h1 style={{ fontSize:isMobile ? 34 : 54, fontWeight:900, lineHeight:1.15, marginBottom:18, letterSpacing:"-0.5px" }}>
            We Build Digital Products<br />
            <span style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8,#818cf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundSize:"200%", animation:"shimmer 3s linear infinite" }}>That Actually Work</span>
          </h1>
          <p style={{ fontSize:isMobile ? 15 : 17, color:"#8b949e", maxWidth:560, margin:"0 auto 36px", lineHeight:1.8 }}>
            <strong style={{ color:"#58a6ff" }}>DevCore Tech Solutions</strong> crafts custom websites and mobile apps that drive real business growth. Modern tech, clean code, on-time delivery — guaranteed.
          </p>
          <div className="hero-btns">
            <button onClick={() => scrollTo("projects")} style={{ background:"linear-gradient(135deg,#1d4ed8,#2563eb)", border:"none", color:"#fff", padding:"14px 30px", borderRadius:12, fontWeight:700, fontSize:16, cursor:"pointer", boxShadow:"0 0 36px rgba(37,99,235,0.4)", width:isMobile ? "100%" : "auto" }}>
              View Our Work
            </button>
            <button onClick={() => scrollTo("contact")} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.12)", color:"#e6edf3", padding:"14px 30px", borderRadius:12, fontWeight:700, fontSize:16, cursor:"pointer", width:isMobile ? "100%" : "auto" }}>
              Let's Talk
            </button>
          </div>
          <div className="stat-row">
            {stats.map((s, i) => (
              <div key={i} style={{ flex:"1 1 80px", padding:isMobile ? "14px 12px" : "0 24px", borderRight:i < stats.length - 1 ? "1px solid #161b22" : "none" }}>
                <div style={{ fontSize:isMobile ? 28 : 36, fontWeight:900, color:"#58a6ff" }}>{s.value}</div>
                <div style={{ fontSize:12, color:"#6e7681", marginTop:5, fontWeight:500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ padding:"80px 20px", background:"#010409" }}>
        <div style={{ maxWidth:1140, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ fontSize:11, color:"#2563eb", fontWeight:800, letterSpacing:"3px", textTransform:"uppercase", marginBottom:10 }}>WHAT WE DO</div>
            <h2 style={{ fontSize:isMobile ? 30 : 38, fontWeight:800 }}>Our <span style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Services</span></h2>
            <p style={{ color:"#6e7681", marginTop:12, fontSize:14, maxWidth:480, margin:"12px auto 0" }}>End-to-end digital solutions that turn your vision into a competitive advantage.</p>
          </div>
          <div className="srv-grid">
            {services.map((s, i) => (
              <div key={i} style={{ ...card, background:"#0d1117", border:"1px solid #21262d", borderRadius:16, padding:24 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor="#2563eb50"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(37,99,235,0.14)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor="#21262d"; e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ width:52, height:52, borderRadius:14, background:"rgba(56,189,248,0.08)", border:"1px solid rgba(56,189,248,0.15)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:16 }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize:16, fontWeight:700, marginBottom:9 }}>{s.title}</h3>
                <p style={{ color:"#6e7681", fontSize:13, lineHeight:1.7, marginBottom:16 }}>{s.desc}</p>
                <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
                  {s.tags.map(t => <span key={t} style={{ fontSize:11, background:"rgba(37,99,235,0.1)", color:"#60a5fa", padding:"3px 9px", borderRadius:20, fontWeight:600, border:"1px solid rgba(37,99,235,0.2)" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding:"80px 20px", background:"#0d1117" }}>
        <div style={{ maxWidth:1140, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ fontSize:11, color:"#2563eb", fontWeight:800, letterSpacing:"3px", textTransform:"uppercase", marginBottom:10 }}>OUR WORK</div>
            <h2 style={{ fontSize:isMobile ? 30 : 38, fontWeight:800 }}>Recent <span style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Projects</span></h2>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:36, flexWrap:"wrap" }}>
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} style={{ background:filter===f ? "linear-gradient(135deg,#1d4ed8,#2563eb)" : "rgba(255,255,255,0.04)", border:filter===f ? "none" : "1px solid #21262d", color:filter===f ? "#fff" : "#8b949e", padding:"9px 20px", borderRadius:24, fontWeight:600, fontSize:14, cursor:"pointer", transition:"all 0.2s" }}>
                {f}
              </button>
            ))}
          </div>
          <div className="prj-grid">
            {filtered.map((p, i) => (
              <div key={i} style={{ ...card, background:"#161b22", border:"1px solid #21262d", borderRadius:16, overflow:"hidden" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.borderColor=p.color+"60"; e.currentTarget.style.boxShadow=`0 14px 40px ${p.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.borderColor="#21262d"; e.currentTarget.style.boxShadow="none"; }}>
                <div style={{ height:4, background:`linear-gradient(90deg,${p.color},${p.color}70)` }} />
                <div style={{ height:110, background:`linear-gradient(135deg,${p.color}18,${p.color}08)`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <div style={{ width:64, height:64, borderRadius:18, background:`${p.color}20`, border:`1.5px solid ${p.color}40`, display:"flex", alignItems:"center", justifyContent:"center", color:p.color }}>
                    {p.icon}
                  </div>
                </div>
                <div style={{ padding:20 }}>
                  <h3 style={{ fontSize:15, fontWeight:700, lineHeight:1.3, marginBottom:9 }}>{p.title}</h3>
                  <div style={{ display:"flex", alignItems:"center", gap:7, marginBottom:11, flexWrap:"wrap" }}>
                    <span style={{ fontSize:11, background:`${p.color}18`, color:p.color, padding:"3px 9px", borderRadius:20, fontWeight:700, border:`1px solid ${p.color}30` }}>{p.category}</span>
                    <span style={{ fontSize:11, background:"rgba(34,197,94,0.08)", color:"#22c55e", padding:"3px 9px", borderRadius:20, fontWeight:600, border:"1px solid rgba(34,197,94,0.2)" }}>✓ {p.results}</span>
                  </div>
                  <p style={{ color:"#6e7681", fontSize:13, lineHeight:1.65, marginBottom:14 }}>{p.desc}</p>
                  <div style={{ display:"flex", gap:5, flexWrap:"wrap" }}>
                    {p.tech.map(t => <span key={t} style={{ fontSize:11, background:"#0d1117", border:"1px solid #30363d", color:"#8b949e", padding:"3px 9px", borderRadius:20 }}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding:"64px 20px", background:"#010409" }}>
        <div style={{ maxWidth:760, margin:"0 auto", textAlign:"center", background:"linear-gradient(135deg,rgba(37,99,235,0.12),rgba(14,165,233,0.08))", border:"1px solid rgba(37,99,235,0.2)", borderRadius:22, padding:isMobile ? "40px 24px" : "52px 48px" }}>
          <div style={{ width:56, height:56, borderRadius:16, background:"rgba(37,99,235,0.15)", border:"1px solid rgba(37,99,235,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 18px" }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>
          </div>
          <h2 style={{ fontSize:isMobile ? 24 : 32, fontWeight:800, marginBottom:12 }}>Ready to Start Your Project?</h2>
          <p style={{ color:"#8b949e", fontSize:isMobile ? 14 : 16, marginBottom:28, lineHeight:1.7 }}>Partner with DevCore to build your next digital product. Free consultation — no commitment required.</p>
          <button onClick={() => scrollTo("contact")} style={{ background:"linear-gradient(135deg,#1d4ed8,#2563eb)", border:"none", color:"#fff", padding:"15px 36px", borderRadius:12, fontWeight:700, fontSize:16, cursor:"pointer", boxShadow:"0 0 36px rgba(37,99,235,0.4)", width:isMobile ? "100%" : "auto" }}>
            Get Free Consultation →
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding:"80px 20px", background:"#0d1117" }}>
        <div style={{ maxWidth:680, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:40 }}>
            <div style={{ fontSize:11, color:"#2563eb", fontWeight:800, letterSpacing:"3px", textTransform:"uppercase", marginBottom:10 }}>CONTACT US</div>
            <h2 style={{ fontSize:isMobile ? 30 : 38, fontWeight:800 }}>Let's <span style={{ background:"linear-gradient(135deg,#2563eb,#38bdf8)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Build Together</span></h2>
            <p style={{ color:"#6e7681", marginTop:10, fontSize:14 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>
          <div className="contact-info">
            {[
              { icon: (<svg width="22" height="22" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="24" fill="#25D366"/><path fillRule="evenodd" clipRule="evenodd" d="M24 10C16.268 10 10 16.268 10 24c0 2.493.676 4.83 1.856 6.84L10 38l7.373-1.83A13.94 13.94 0 0024 38c7.732 0 14-6.268 14-14S31.732 10 24 10zm-5.557 8.43c.28 0 .584.006.84.012.27.007.633-.102.99.757.373.886 1.265 3.088 1.376 3.31.112.222.186.48.037.773-.149.293-.224.474-.447.73-.224.256-.47.572-.672.768-.224.218-.457.455-.196.892.26.437 1.157 1.908 2.485 3.09 1.706 1.522 3.146 1.993 3.583 2.215.437.223.693.186.952-.112.26-.298 1.116-1.302 1.413-1.75.298-.447.596-.372 1.005-.223.41.149 2.6 1.228 3.047 1.451.447.223.745.335.856.52.112.186.112 1.079-.26 2.121-.373 1.042-2.189 1.993-3.009 2.084-.82.09-1.59.418-5.348-1.116-4.487-1.806-7.32-6.384-7.542-6.681-.223-.298-1.82-2.42-1.82-4.617s1.15-3.272 1.56-3.72c.41-.447.894-.559 1.19-.559z" fill="white"/></svg>), label:"WhatsApp", val:"+92 316 4593747", href:"https://wa.me/923164593747", color:"#25D366" },
              { icon: (<svg width="22" height="22" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#1877F2"/><path d="M21 16h-3v-2c0-.8.4-1 1-1h2V10h-3c-2.8 0-4 1.9-4 4v2h-2v3h2v8h4v-8h2.6L21 16z" fill="white"/></svg>), label:"Facebook", val:"DevCore Solutions", href:"https://www.facebook.com/people/DevCore-Solutions/61589507374073/", color:"#1877F2" },
              { icon: (<svg width="22" height="22" viewBox="0 0 32 32" fill="none"><rect width="32" height="32" rx="16" fill="black"/><path d="M19.5 7h2.9l-6.3 7.2L23.5 25h-5.8l-4.5-5.9L7.8 25H4.9l6.7-7.7L4.5 7h5.9l4.1 5.3L19.5 7zm-1 16.2h1.6L9.6 8.6H7.9l10.6 14.6z" fill="white"/></svg>), label:"X (Twitter)", val:"@DevCore", href:"#", color:"#e6edf3" },
              { icon: (<svg width="22" height="22" viewBox="0 0 32 32" fill="none"><defs><linearGradient id="ttbg" x1="0" y1="1" x2="1" y2="0"><stop offset="0%" stopColor="#ff0050"/><stop offset="50%" stopColor="#ff0050"/><stop offset="100%" stopColor="#00f2ea"/></linearGradient></defs><rect width="32" height="32" rx="16" fill="black"/><path d="M22 9.5c-1.2-.8-2-2-2.2-3.5H17v13.8c0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7 1.2-2.7 2.7-2.7c.3 0 .5 0 .7.1V14c-.2 0-.5-.1-.7-.1-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7 5.7-2.5 5.7-5.7V12.8c1.2.8 2.5 1.2 4 1.2V11c-.8 0-1.6-.5-2-.6-.2-.3-.4-.6-.7-.9z" fill="url(#ttbg)"/></svg>), label:"TikTok", val:"@devcor.solutions", href:"https://www.tiktok.com/@devcor.solutions", color:"#ee1d52" },
            ].map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ ...card, display:"flex", flexDirection:"column", alignItems:"center", gap:7, background:"#161b22", border:`1px solid ${c.color}25`, borderRadius:14, padding:"18px 12px", textDecoration:"none" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor=c.color+"60"; e.currentTarget.style.transform="translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor=c.color+"25"; e.currentTarget.style.transform="translateY(0)"; }}>
                <span style={{ display:"flex", alignItems:"center", justifyContent:"center" }}>{c.icon}</span>
                <span style={{ fontSize:11, color:"#6e7681", fontWeight:600 }}>{c.label}</span>
                <span style={{ fontSize:12, color:c.color, fontWeight:700, textAlign:"center" }}>{c.val}</span>
              </a>
            ))}
          </div>
          <div style={{ background:"#161b22", border:"1px solid #21262d", borderRadius:18, padding:isMobile ? 22 : 32 }}>
            <h3 style={{ fontWeight:700, fontSize:17, marginBottom:20 }}>Send Us a Message</h3>
            {formStatus === "sent" ? (
              <div style={{ textAlign:"center", padding:"40px 20px", background:"rgba(34,197,94,0.08)", borderRadius:12, border:"1px solid rgba(34,197,94,0.2)" }}>
                <div style={{ width:56, height:56, borderRadius:"50%", background:"rgba(34,197,94,0.15)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontWeight:700, fontSize:18, color:"#22c55e", marginBottom:8 }}>Message Sent!</div>
                <div style={{ color:"#6e7681", fontSize:14 }}>We'll get back to you within 24 hours.</div>
                <button onClick={() => { setFormStatus("idle"); setForm({ name:"", contact:"", project:"", message:"" }); }} style={{ marginTop:18, background:"none", border:"1px solid #30363d", color:"#8b949e", padding:"8px 20px", borderRadius:8, cursor:"pointer", fontSize:13 }}>Send Another</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <input value={form.name} onChange={e => setForm(f => ({ ...f, name:e.target.value }))} placeholder="Your Name" style={inp} />
                  <input value={form.contact} onChange={e => setForm(f => ({ ...f, contact:e.target.value }))} placeholder="Email or Phone" style={inp} />
                </div>
                <input value={form.project} onChange={e => setForm(f => ({ ...f, project:e.target.value }))} placeholder="Project Type (e.g. E-Commerce, Mobile App...)" style={{ ...inp, marginBottom:14 }} />
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message:e.target.value }))} placeholder="Tell us about your project — requirements, timeline, budget..." rows={5} style={{ ...inp, marginBottom:18, resize:"vertical" }} />
                <button onClick={sendEmail} disabled={formStatus==="sending"} style={{ width:"100%", background:formStatus==="sending" ? "#1e3a8a" : "linear-gradient(135deg,#1d4ed8,#2563eb)", border:"none", color:"#fff", padding:"15px", borderRadius:11, fontWeight:700, fontSize:16, cursor:formStatus==="sending" ? "default" : "pointer", boxShadow:"0 0 28px rgba(37,99,235,0.35)", opacity:formStatus==="sending" ? 0.7 : 1 }}>
                  {formStatus === "sending" ? "Sending..." : "Send Message"}
                </button>
                {formStatus === "error" && <div style={{ marginTop:12, color:"#f87171", fontSize:13, textAlign:"center" }}>Something went wrong. Please email us directly at devcorsolution@gmail.com</div>}
              </>
            )}
          </div>
        </div>
      </section>

      {/* WHATSAPP FLOAT */}
      <button onClick={() => window.open("https://wa.me/923164593747", "_blank")}
        style={{ position:"fixed", bottom:28, right:28, zIndex:999, width:58, height:58, borderRadius:"50%", background:"#25D366", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 20px rgba(37,211,102,0.5)", transition:"transform 0.2s, box-shadow 0.2s", cursor:"pointer", border:"none" }}
        onMouseEnter={e => { e.currentTarget.style.transform="scale(1.12)"; e.currentTarget.style.boxShadow="0 6px 28px rgba(37,211,102,0.7)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform="scale(1)"; e.currentTarget.style.boxShadow="0 4px 20px rgba(37,211,102,0.5)"; }}>
        <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm-5.6 10.4c.3 0 .6 0 .9.1.3 0 .7-.1 1 .8.4.9 1.3 3.1 1.4 3.3.1.2.2.5 0 .8-.1.3-.2.5-.5.7-.2.3-.5.6-.7.8-.2.2-.5.5-.2.9.3.5 1.2 1.9 2.5 3.1 1.7 1.5 3.2 2 3.6 2.2.4.2.7.2 1-.1.3-.3 1.1-1.3 1.4-1.8.3-.4.6-.4 1-.2.4.1 2.6 1.2 3 1.5.5.2.8.3.9.5.1.2.1 1.1-.3 2.1-.4 1-2.2 2-3 2.1-.8.1-1.6.4-5.4-1.1-4.5-1.8-7.3-6.4-7.5-6.7-.2-.3-1.8-2.4-1.8-4.6s1.1-3.3 1.5-3.7c.5-.4.9-.6 1.2-.6z" fill="white"/>
        </svg>
      </button>

      {/* FOOTER */}
      <footer style={{ background:"#010409", borderTop:"1px solid #161b22", padding:"28px 20px" }}>
        <div style={{ maxWidth:1140, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
          <div style={{ display:"flex", alignItems:"center", gap:10 }}>
            <LogoSVG size={34} />
            <div>
              <div style={{ fontWeight:800, fontSize:14 }}><span style={{ color:"#e6edf3" }}>Dev</span><span style={{ color:"#38bdf8" }}>Core</span></div>
              <div style={{ fontSize:9, color:"#6e7681", letterSpacing:"2px", fontWeight:600 }}>— SOLUTIONS —</div>
            </div>
          </div>
          <div style={{ fontSize:12, color:"#6e7681", textAlign:"center" }}>© 2025 DevCore Tech Solutions. All rights reserved.</div>
          <div style={{ display:"flex", gap:6, flexWrap:"wrap" }}>
            {["Web Dev", "Mobile Apps"].map(s => (
              <span key={s} style={{ fontSize:11, background:"rgba(37,99,235,0.08)", color:"#60a5fa", padding:"4px 11px", borderRadius:20, border:"1px solid rgba(37,99,235,0.2)", fontWeight:600 }}>{s}</span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
