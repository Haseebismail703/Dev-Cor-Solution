import { useState, useEffect } from "react";
import { NavBar } from "./Component/NavBar";
import { HeroSection } from "./Component/HeroSection";
import { Ticker } from "./Component/Ticker";
import { ServicesSection } from "./Component/ServicesSection";
import { ServiceDetailModal } from "./Component/ServiceDetailModal";
import { ProjectsSection } from "./Component/ProjectsSection";
import { ProcessSection } from "./Component/ProcessSection";
import { TechStackSection } from "./Component/TechStackSection";
import { IndustriesSection } from "./Component/IndustriesSection";
import { LogoSVG } from "./Component/LogoSVG";
import { PROJECTS, FAQS, SERVICES } from "./data";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [techTabs, setTechTabs] = useState([0, 0, 0, 0, 0, 0]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeService, setActiveService] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", budget: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const sendEmail = async () => {
    if (!form.name || !form.message) return;
    setFormStatus("sending");
    try {
      const response = await fetch("https://formsubmit.co/ajax/devcorsolution@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `New Inquiry from ${form.name}` }),
      });
      const data = await response.json();
      setFormStatus(data.success === "true" || data.success === true ? "sent" : "error");
    } catch {
      setFormStatus("error");
    }
  };

  const inputStyle = {
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: 8,
    padding: "13px 16px",
    color: "#fff",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    width: "100%",
    display: "block",
  };

  return (
    <div style={{ fontFamily: "'Inter','Segoe UI',system-ui,sans-serif", background: "#060b14", color: "#e2e8f0", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes ticker{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:#2563eb;border-radius:2px}
        input::placeholder,textarea::placeholder{color:rgba(255,255,255,.3)}
        select option{background:#0f172a;color:#fff}
        .hc{transition:transform .3s,border-color .3s,box-shadow .3s}
        .hc:hover{transform:translateY(-5px);border-color:rgba(37,99,235,.4)!important;box-shadow:0 16px 48px rgba(37,99,235,.15)!important}
        .srv-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.06)}
        .services-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
        .service-card img{transition:transform .4s ease}
        .service-card:hover img{transform:scale(1.08)}
        .prj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
        .prj-card{transition:transform .4s ease}
        .prj-card:hover{transform:translateY(-8px)}
        .prj-card:hover img{transform:scale(1.06)!important}
        .prj-desc{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
        .process-img-wrap:hover img{transform:scale(1.06)!important}
        .tech-chip:hover{border-color:rgba(37,99,235,.4)!important;background:rgba(37,99,235,.08)!important;transform:translateY(-2px)}
        .step-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .ind-card{transition:transform .4s ease}
        .ind-card:hover{transform:translateY(-6px)}
        .ind-card:hover img{transform:scale(1.08)!important}
        .ticker-wrap{overflow:hidden;white-space:nowrap;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);padding:16px 0;background:#0a1120}
        .ticker-inner{display:inline-flex;animation:ticker 20s linear infinite}
        .nav-link{background:none;border:none;color:rgba(255,255,255,.7);padding:8px 14px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s}
        .nav-link:hover{color:#fff}
        @media(max-width:900px){.srv-grid{grid-template-columns:repeat(2,1fr)!important}.services-grid{grid-template-columns:repeat(2,1fr)!important}.ind-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.srv-grid{grid-template-columns:1fr!important}.services-grid{grid-template-columns:1fr!important}.prj-grid{grid-template-columns:1fr!important}.step-grid{grid-template-columns:1fr!important}.ind-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      <NavBar isMobile={isMobile} menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <HeroSection scrollTo={scrollTo} isMobile={isMobile} />
      <Ticker />
      <ServicesSection isMobile={isMobile} onServiceClick={(i: number) => setActiveService(i)} />
      <ProjectsSection isMobile={isMobile} setHoveredProject={setHoveredProject} />
      <ProcessSection isMobile={isMobile} activeStep={activeStep} setActiveStep={setActiveStep} />
      <TechStackSection isMobile={isMobile} techTabs={techTabs} setTechTabs={setTechTabs} />
      <IndustriesSection isMobile={isMobile} />

      <section style={{ padding: "100px 24px", background: "#0a1120" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Frequently Asked Questions</h2>
          </div>
          {FAQS.map((faq, index) => (
            <div key={index} style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
              <button
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                style={{ width: "100%", background: activeFaq === index ? "rgba(37,99,235,.1)" : "#060b14", border: "none", color: "#fff", padding: "20px 24px", textAlign: "left", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "background .2s" }}
              >
                {faq.q}
                <span style={{ fontSize: 20, color: "#38bdf8", transform: activeFaq === index ? "rotate(45deg)" : "rotate(0)", transition: "transform .3s", flexShrink: 0, marginLeft: 12 }}>+</span>
              </button>
              {activeFaq === index && (
                <div style={{ background: "rgba(37,99,235,.06)", padding: "0 24px 20px", color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.8 }}>{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: "100px 24px", background: "#060b14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 16 }}>GET IN TOUCH</div>
            <h2 style={{ fontSize: isMobile ? 28 : 40, fontWeight: 900, color: "#fff", marginBottom: 20, lineHeight: 1.2 }}>Innovate. Transform. Thrive.</h2>
            <p style={{ color: "rgba(255,255,255,.5)", fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>We help businesses innovate with smart digital solutions that transform operations and enhance customer engagement. Partner with us to optimize processes, scale efficiently, and stay ahead in the digital era.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Email", val: "devcorsolution@gmail.com", href: "mailto:devcorsolution@gmail.com" },
                { label: "WhatsApp", val: "+92 316 4593747", href: "https://wa.me/923164593747" },
                { label: "Facebook", val: "DevCore Solutions", href: "https://www.facebook.com/people/DevCore-Solutions/61589507374073/" },
                { label: "TikTok", val: "@devcor.solutions", href: "https://www.tiktok.com/@devcor.solutions" },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,.6)", textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#38bdf8"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.6)"}
                >
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(37,99,235,.1)", border: "1px solid rgba(37,99,235,.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#38bdf8", letterSpacing: ".5px" }}>{contact.label.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontWeight: 600, marginBottom: 2 }}>{contact.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{contact.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div style={{ background: "#0a1120", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: isMobile ? "24px" : "36px" }}>
            {formStatus === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24, color: "#22c55e", fontWeight: 700 }}>?</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>Message Sent!</div>
                <div style={{ color: "rgba(255,255,255,.5)", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                <button onClick={() => { setFormStatus("idle"); setForm({ name: "", phone: "", budget: "", message: "" }); }} style={{ marginTop: 18, background: "none", border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.5)", padding: "8px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Send Another</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 6 }}>Submit Your Application</h3>
                <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 24 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your Name" style={{ ...inputStyle, marginBottom: 14 }} />
                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="Phone / Email" style={{ ...inputStyle, marginBottom: 14 }} />
                <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} style={{ ...inputStyle, marginBottom: 14, appearance: "none" }}>
                  <option value="">Select a budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 � $5,000</option>
                  <option>$5,000 � $10,000</option>
                  <option>$10,000+</option>
                </select>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Describe your project..." rows={4} style={{ ...inputStyle, marginBottom: 18, resize: "vertical" }} />
                <button onClick={sendEmail} disabled={formStatus === "sending"} style={{ width: "100%", background: formStatus === "sending" ? "#1e3a8a" : "#2563eb", border: "none", color: "#fff", padding: "15px", borderRadius: 9, fontWeight: 700, fontSize: 16, cursor: formStatus === "sending" ? "default" : "pointer", opacity: formStatus === "sending" ? .7 : 1, boxShadow: "0 0 30px rgba(37,99,235,.35)" }}>
                  {formStatus === "sending" ? "Sending..." : "Submit"}
                </button>
                {formStatus === "error" && <div style={{ marginTop: 12, color: "#f87171", fontSize: 13, textAlign: "center" }}>Something went wrong. Please email us directly.</div>}
              </>
            )}
          </div>
        </div>
      </section>

      {hoveredProject !== null && (() => {
        const project = PROJECTS[hoveredProject];
        return (
          <div onClick={() => setHoveredProject(null)} style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(0,0,0,.75)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, overflowY: "auto" }}>
            <div onClick={e => e.stopPropagation()} style={{ background: "#0d1a2e", border: `1px solid ${project.color}40`, borderRadius: 20, maxWidth: 680, width: "100%", overflow: "hidden", boxShadow: `0 32px 80px rgba(0,0,0,.7)`, maxHeight: "90vh", overflowY: "auto" }}>
              <div style={{ height: 5, background: `linear-gradient(90deg,${project.color},${project.color}60)` }} />
              <div style={{ padding: "24px 28px 0", background: `linear-gradient(135deg,${project.color}10,transparent)` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 3 }}>{project.title}</h2>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>{project.sub}</div>
                  </div>
                  <button onClick={() => setHoveredProject(null)} style={{ background: "rgba(255,255,255,.08)", border: "none", color: "rgba(255,255,255,.5)", width: 34, height: 34, borderRadius: 9, cursor: "pointer", fontSize: 16, flexShrink: 0 }}>?</button>
                </div>
                <div style={{ display: "flex", gap: 7, paddingBottom: 20, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: `${project.color}18`, color: project.color, padding: "3px 10px", borderRadius: 20, fontWeight: 700, border: `1px solid ${project.color}30` }}>{project.tag}</span>
                  <span style={{ fontSize: 11, background: "rgba(34,197,94,.08)", color: "#86efac", padding: "3px 10px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(34,197,94,.2)" }}>? {project.result}</span>
                </div>
              </div>
              <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 22 }}>
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 13.5, lineHeight: 1.85 }}>{project.details}</p>
                {project.features && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[{ label: "User Features", list: project.features.user }, { label: "Admin Features", list: project.features.admin }].map(section => (
                      <div key={section.label} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                        <div style={{ fontSize: 11, color: project.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>{section.label}</div>
                        {section.list.map(item => (
                          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                            <span style={{ color: project.color, fontSize: 11, marginTop: 2, flexShrink: 0 }}>?</span>
                            <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
                {project.payment && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: project.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Payment & Wallet System</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {project.payment.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: project.color, fontSize: 11, marginTop: 2, flexShrink: 0 }}>?</span>
                          <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {project.demoAdmin && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: project.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 14 }}>Demo Credentials</div>
                    <div style={{ display: "grid", gridTemplateColumns: project.demoTeacher ? "1fr 1fr 1fr" : "1fr 1fr", gap: 12 }}>
                      {[{ role: "Admin Panel", cred: project.demoAdmin }, ...(project.demoTeacher ? [{ role: "Teacher Panel", cred: project.demoTeacher }] : []), { role: "User Panel", cred: project.demoUser }].map(({ role, cred }) => (
                        <div key={role} style={{ background: "rgba(0,0,0,.3)", borderRadius: 10, padding: 14 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.85)", marginBottom: 10 }}>{role}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 5 }}>Email: <span style={{ color: "rgba(255,255,255,.8)" }}>{cred.email}</span></div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 12 }}>Password: <span style={{ color: "rgba(255,255,255,.8)" }}>{cred.pass}</span></div>
                          <a href={cred.url} target="_blank" rel="noreferrer" style={{ display: "inline-block", fontSize: 11, background: project.color, color: "#fff", padding: "7px 16px", borderRadius: 7, textDecoration: "none", fontWeight: 700 }}>Open Live Demo ?</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {project.highlights && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: project.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Project Highlights</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {project.highlights.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#22c55e", fontSize: 11, marginTop: 2, flexShrink: 0 }}>?</span>
                          <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {project.usecase && (
                  <div style={{ background: `${project.color}08`, border: `1px solid ${project.color}20`, borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: project.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 10 }}>Use Case</div>
                    <p style={{ color: "rgba(255,255,255,.55)", fontSize: 13, lineHeight: 1.8 }}>{project.usecase}</p>
                  </div>
                )}
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 10 }}>Technology Stack</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {project.tech.map(tech => (
                      <span key={tech} style={{ fontSize: 12, background: "rgba(255,255,255,.06)", color: "rgba(255,255,255,.75)", padding: "5px 12px", borderRadius: 20, border: "1px solid rgba(255,255,255,.1)", fontWeight: 600 }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {activeService !== null && (
        <ServiceDetailModal
          service={SERVICES[activeService]}
          onClose={() => setActiveService(null)}
          isMobile={isMobile}
          scrollToContact={() => scrollTo("contact")}
        />
      )}

      <footer style={{ background: "#040810", borderTop: "1px solid rgba(255,255,255,.06)", padding: "48px 24px 28px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <LogoSVG size={34} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 15, color: "#fff" }}><span>Dev</span><span style={{ color: "#38bdf8" }}>Core</span></div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,.3)", letterSpacing: "2px", fontWeight: 600 }}>TECH SOLUTIONS</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,.35)", fontSize: 13, lineHeight: 1.8, maxWidth: 260 }}>A digital solutions company delivering innovative web & mobile products that create real business value.</p>
            </div>
            {[
              { title: "Company", links: ["About Us", "Process", "Technologies", "Careers"] },
              { title: "Services", links: ["Web Development", "Mobile Apps", "AI Solutions", "API Development"] },
              { title: "Connect", links: ["devcorsolution@gmail.com", "+92 316 4593747", "Facebook", "TikTok"] },
            ].map((column, index) => (
              <div key={index}>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: "1px" }}>{column.title}</div>
                {column.links.map(link => (
                  <div key={link} style={{ color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color .2s" }} onMouseEnter={e => e.currentTarget.style.color = "#38bdf8"} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}>
                    {link}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>� 2025 DevCore Tech Solutions. All rights reserved.</div>
            <div style={{ display: "flex", gap: 8 }}>
              {[
                "Web Dev",
                "Mobile Apps",
                "AI Solutions",
              ].map(label => (
                <span key={label} style={{ fontSize: 11, background: "rgba(37,99,235,.08)", color: "rgba(56,189,248,.7)", padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(37,99,235,.15)", fontWeight: 600 }}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.open("https://wa.me/923164593747", "_blank")}
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,.5)", border: "none", cursor: "pointer", transition: "transform .2s" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm-5.6 10.4c.3 0 .6 0 .9.1.3 0 .7-.1 1 .8.4.9 1.3 3.1 1.4 3.3.1.2.2.5 0 .8-.1.3-.2.5-.5.7-.2.3-.5.6-.7.8-.2.2-.5.5-.2.9.3.5 1.2 1.9 2.5 3.1 1.7 1.5 3.2 2 3.6 2.2.4.2.7.2 1-.1.3-.3 1.1-1.3 1.4-1.8.3-.4.6-.4 1-.2.4.1 2.6 1.2 3 1.5.5.2.8.3.9.5.1.2.1 1.1-.3 2.1-.4 1-2.2 2-3 2.1-.8.1-1.6.4-5.4-1.1-4.5-1.8-7.3-6.4-7.5-6.7-.2-.3-1.8-2.4-1.8-4.6s1.1-3.3 1.5-3.7c.5-.4.9-.6 1.2-.6z" fill="white" />
        </svg>
      </button>
    </div>
  );
}
