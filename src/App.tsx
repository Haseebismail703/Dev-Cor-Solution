import { useState, useEffect } from "react";
import HeroVideo from "./assets/hero-video.mp4";


const NAV_LINKS = ["Services", "Projects", "Process", "Contact"];

const SERVICES = [
  { title: "Web Development", desc: "We deliver custom websites & web apps that streamline operations and drive growth.", tags: ["React", "Next.js", "Node.js"] },
  { title: "Mobile App Development", desc: "We build intuitive mobile apps that engage users and accelerate business growth.", tags: ["React Native", "Flutter", "Firebase"] },
  { title: "AI-Based Web Apps", desc: "We develop intelligent AI systems that automate processes and enhance decisions.", tags: ["OpenAI", "Python", "Node.js"] },
  { title: "Web to App Conversion", desc: "We convert your existing website into a fully functional Android mobile app.", tags: ["React Native", "Flutter", "API Integration"] },
  { title: "API Development", desc: "We provide secure and scalable REST & GraphQL APIs for modern businesses.", tags: ["Node.js", "Express", "MongoDB"] },
  { title: "eCommerce Development", desc: "We design feature-rich stores that maximize sales and customer satisfaction.", tags: ["Stripe", "WooCommerce", "React"] },
];

const PROJECTS = [
  { title: "ShopEase", sub: "E-Commerce Platform", desc: "Full-stack multi-vendor marketplace with real-time inventory, Stripe payments, and seller dashboard.", color: "#2563eb", tag: "Web + Mobile", result: "3x sales increase", tech: ["React", "Node.js", "MongoDB", "Stripe"], details: "ShopEase is a full-featured multi-vendor e-commerce marketplace built for scale. Sellers can manage their own storefronts, inventory, and orders through a dedicated dashboard. Buyers enjoy a seamless shopping experience with real-time stock updates, secure Stripe payments, and order tracking. Admin panel provides complete oversight of all transactions and users." },
  { title: "SafarUmrah", sub: "Travel Agency Portal", desc: "Full Umrah travel portal with package management, online booking, hotel & flight tracking.", color: "#10b981", tag: "Web App", result: "800+ bookings", tech: ["React", "Node.js", "MongoDB"], details: "SafarUmrah is a comprehensive travel agency portal tailored for Umrah packages. It enables agencies to list, manage, and sell Umrah packages online. Features include hotel & flight tracking, booking management, customer CRM, and automated invoice generation. The platform has facilitated 800+ successful bookings since launch." },
  {
    title: "Quran Academy", sub: "Quran Academy Management System", desc: "Online Quran learning with Teacher, Admin & Student panels, live classes, and payment integration.", color: "#14b8a6", tag: "Web App", result: "500+ students",
    tech: ["React.js", "Ant Design", "React Router", "Axios", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    details: "A complete Quran Academy Management System developed using the MERN Stack. The platform is designed for online Quran academies to manage students, teachers, classes, fee vouchers, attendance, and academic activities through dedicated role-based dashboards.",
    demoAdmin: { email: "admin@gmail.com", pass: "123456", url: "https://quran-academy-kappa-blush.vercel.app/login" },
    demoUser: { email: "student@gmail.com", pass: "123456", url: "https://quran-academy-kappa-blush.vercel.app/login" },
    demoTeacher: { email: "teacher@gmail.com", pass: "123456", url: "https://quran-academy-kappa-blush.vercel.app/login" },
    features: {
      user: ["Student Registration & Login", "View Enrolled Courses", "Live Classes Access", "Attendance Tracking", "Fee Voucher Management", "Assignment Submission", "Profile Management", "Course Progress Monitoring"],
      admin: ["Complete Academy Management", "Student Management", "Teacher Management", "Course Management", "Fee Voucher Generation", "Attendance Monitoring", "Reports & Analytics", "System Configuration"],
    },
    teacherFeatures: ["Teacher Dashboard", "Student Management", "Attendance Management", "Assignment Management", "Live Class Scheduling", "Performance Tracking", "Student Progress Reports"],
    payment: ["Role-Based Authentication", "Student Dashboard", "Teacher Dashboard", "Admin Dashboard", "Live Classes Management", "Fee Voucher System", "Attendance Tracking", "Assignment Management"],
    highlights: ["Multi-Role Authentication System", "Secure Login & Authorization", "Modern Responsive UI", "Real-Time Data Management", "Academy Administration Tools", "Student & Teacher Portals", "Fee Voucher Management", "Scalable MERN Stack Architecture"],
    usecase: "This system was developed for a Quran Academy to streamline the management of students, teachers, courses, attendance, assignments, and fee records through a centralized digital platform.",
  },
  { title: "FoodRush", sub: "Food Delivery App", desc: "Restaurant discovery & food ordering with live tracking, loyalty rewards, and multi-restaurant management.", color: "#ef4444", tag: "Web + Mobile", result: "50+ restaurants", tech: ["React Native", "React", "Node.js", "Redis"], details: "FoodRush is a complete food ordering and delivery ecosystem. Customers discover restaurants, browse menus, place orders, and track delivery in real-time. Restaurants manage orders, menus, and availability through a dedicated dashboard. The platform supports loyalty rewards, promo codes, and multi-restaurant cart. Currently powers 50+ restaurants with thousands of monthly orders." },
  {
    title: "PayPerTask", sub: "Pay Per Task Advertising Network", desc: "A full-featured advertising network where users earn by completing tasks & offers, with a powerful admin panel for managing users, payments, and withdrawals.", color: "#8b5cf6", tag: "Web App", result: "Full MERN Stack",
    tech: ["React.js", "Ant Design", "Axios", "React Router", "Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    details: "A full-featured Pay Per Task Advertising Network developed using the MERN Stack. The platform enables users to earn money by completing advertising offers and tasks while providing administrators with powerful tools to manage users, payments, withdrawals, and platform operations.",
    demoAdmin: { email: "admin@gmail.com", pass: "123456", url: "https://pay-per-task-front.vercel.app/admin/login" },
    demoUser: { email: "dummy@gmail.com", pass: "dummy123", url: "https://pay-per-task-front.vercel.app/login" },
    features: {
      user: ["User Registration & Authentication", "Task Completion System", "Offer Wall Integration", "Wallet Management", "Earnings Dashboard", "Deposit Funds", "Withdraw Earnings", "Transaction History", "Profile Management", "Responsive User Interface"],
      admin: ["Secure Admin Panel", "User Management", "Task & Offer Management", "Deposit Verification", "Withdrawal Approval System", "Transaction Monitoring", "Revenue Analytics", "Dashboard Statistics", "Platform Configuration"],
    },
    payment: ["User Deposits", "Withdrawal Requests", "Wallet Balance Tracking", "Deposit History", "Withdrawal History", "Transaction Management", "Payment Verification Workflow"],
    highlights: ["Modern Responsive Design", "Secure Authentication System", "Complete Wallet Management", "Deposit & Withdrawal Processing", "Real-Time Dashboard Statistics", "Admin Management System", "Scalable MERN Stack Architecture", "Clean and User-Friendly Interface"],
    usecase: "The platform is designed for advertising networks where users earn rewards by completing tasks, offers, surveys, and promotional activities. Administrators can efficiently manage users, payments, withdrawals, and platform performance through a centralized dashboard.",
  },
];

const PROCESS = [
  { num: "01", title: "Discovery & Planning", desc: "We get to know your company, target audience, and objectives. We design an efficient roadmap integrating technology with your long-term goals — minimizing surprises and maximizing success." },
  { num: "02", title: "UI/UX Design", desc: "Our designers create stunning, user-friendly interfaces easily navigated from the first tap. We bring thoughtful flows, simple layouts, and captivating visuals to boost customer satisfaction." },
  { num: "03", title: "Prototyping & Validation", desc: "We present interactive prototypes showcasing the main features and flows. We collect feedback, confirm ideas, and ensure the product aligns completely with your expectations." },
  { num: "04", title: "Agile Development", desc: "Developers work in short agile sprints, advancing your product through iterative stages with tangible deliverables. Flexibility, transparency, and continuous alignment guaranteed." },
  { num: "05", title: "Quality Assurance", desc: "All features undergo thorough automated and manual testing to ensure flawless performance, security, and stability — across all platforms and devices." },
  { num: "06", title: "Deployment & Launch", desc: "We handle the total deployment process — your application will pass all platform requirements and work perfectly in the live environment, from app stores to web servers." },
  { num: "07", title: "Monitoring & Optimization", desc: "After launch, we monitor performance, user feedback, and analytics closely. These insights inform ongoing feature refinement, improvements, and issue resolution." },
];

const INDUSTRIES = ["eCommerce", "Healthcare", "Education", "Fintech", "Food & Delivery", "Real Estate", "Travel", "Logistics"];

const FAQS = [
  { q: "What mobile app development services do you offer?", a: "DevCore offers iOS, Android, cross-platform, and enterprise-level app development. We build high-performance, scalable applications customized to your business requirements from design to deployment." },
  { q: "What is the average cost and timeline for a project?", a: "Costs and timelines depend on project complexity, features, and tech stack. On average, projects range from 1–4 months with budgets starting from $2,000 depending on scope." },
  { q: "Do you provide maintenance and support after launch?", a: "Yes, DevCore offers continuous post-launch support including performance monitoring, security updates, and feature additions to keep your product running at its best." },
  { q: "Do you develop both mobile and web solutions?", a: "Absolutely. DevCore creates both mobile and web-based solutions with seamless functionality and a unified user experience across all devices." },
  { q: "How do you ensure security and quality?", a: "We follow strict security measures and quality controls — code reviews, testing, and compliance checks to meet industry security and performance standards." },
];

const TICKER = ["Web Development", "Mobile Apps", "AI Solutions", "eCommerce", "API Development", "UI/UX Design"];

const TECH_SECTIONS = [
  {
    cat: "Mobile Apps", tabs: [
      { label: "Android", techs: ["React Native", "Kotlin", "Java", "Flutter", "Firebase", "Jetpack"] },
    ]
  },
  {
    cat: "Web Platforms", tabs: [
      { label: "Frontend", techs: ["React.js", "Next.js", "TypeScript", "Tailwind", "Redux"] },
      { label: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"] },
    ]
  },
];

const LogoSVG = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <path d="M18 20L18 80L42 80C58 80 70 68 70 50C70 32 58 20 42 20Z M30 32L40 32C50 32 57 40 57 50C57 60 50 68 40 68L30 68Z" fill="white" />
    <path d="M88 35C82 27 73 22 63 22C47 22 38 34 38 50C38 66 47 78 63 78C73 78 82 73 88 65L78 60C75 65 69 68 63 68C53 68 50 60 50 50C50 40 53 32 63 32C69 32 75 35 78 40Z" fill="#38bdf8" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [techTabs, setTechTabs] = useState([0, 0]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", budget: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const c = () => setIsMobile(window.innerWidth < 768); c();
    window.addEventListener("resize", c); return () => window.removeEventListener("resize", c);
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const sendEmail = async () => {
    if (!form.name || !form.message) return;
    setFormStatus("sending");
    try {
      const r = await fetch("https://formsubmit.co/ajax/devcorsolution@gmail.com", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...form, _subject: `New Inquiry from ${form.name}` }) });
      const d = await r.json();
      setFormStatus(d.success === "true" || d.success === true ? "sent" : "error");
    } catch { setFormStatus("error"); }
  };

  const inp = { background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8, padding: "13px 16px", color: "#fff", fontSize: 15, outline: "none", fontFamily: "inherit", width: "100%", display: "block" };

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif", background: "#060b14", color: "#e2e8f0", overflowX: "hidden", minHeight: "100vh" }}>
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
        .prj-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
        .step-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .ind-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .ticker-wrap{overflow:hidden;white-space:nowrap;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08);padding:16px 0;background:#0a1120}
        .ticker-inner{display:inline-flex;animation:ticker 20s linear infinite}
        .nav-link{background:none;border:none;color:rgba(255,255,255,.7);padding:8px 14px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:color .2s}
        .nav-link:hover{color:#fff}
        @media(max-width:900px){.srv-grid{grid-template-columns:repeat(2,1fr)!important}.ind-grid{grid-template-columns:repeat(2,1fr)!important}}
        @media(max-width:600px){.srv-grid{grid-template-columns:1fr!important}.prj-grid{grid-template-columns:1fr!important}.step-grid{grid-template-columns:1fr!important}.ind-grid{grid-template-columns:repeat(2,1fr)!important}}
      `}</style>

      {/* NAV */}
<nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 300, background: "rgba(6,11,20,.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,.07)" }}>
  <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 66 }}>
    
    {/* Logo */}
    <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }} onClick={() => scrollTo("home")}>
      <LogoSVG size={36} />
      <div>
        <div style={{ fontWeight: 800, fontSize: 16, lineHeight: 1.1 }}>
          <span style={{ color: "#fff" }}>Dev</span><span style={{ color: "#38bdf8" }}>Core</span>
        </div>
        <div style={{ fontSize: 9, color: "rgba(255,255,255,.4)", fontWeight: 700, letterSpacing: "2px" }}>TECH SOLUTIONS</div>
      </div>
    </div>

    {/* Desktop Nav */}
    {!isMobile && (
      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        
        {/* Nav Links */}
        {NAV_LINKS.map(n => (
          <button key={n} className="nav-link" onClick={() => scrollTo(n.toLowerCase())}>{n}</button>
        ))}

        {/* Divider */}
        <span style={{ width: 1, height: 20, background: "rgba(255,255,255,.15)", margin: "0 12px" }} />

        {/* Email */}
        
         <a href="mailto:devcorsolution@gmail.com"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.65)", fontSize: 13, textDecoration: "none", marginRight: 4 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          devcorsolution@gmail.com
        </a>

        {/* Phone */}
        
         <a href="tel:+16467553497"
          style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,.65)", fontSize: 13, textDecoration: "none", marginRight: 14 }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.92a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          (646) 755-3497
        </a>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("contact")}
          style={{ background: "#2563eb", border: "none", color: "#fff", padding: "9px 20px", borderRadius: 7, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
        >
          Get In Touch
        </button>
      </div>
    )}

    {/* Mobile Hamburger */}
    {isMobile && (
      <button onClick={() => setMenuOpen(o => !o)} style={{ background: "none", border: "none", color: "#fff", fontSize: 22, cursor: "pointer" }}>
        {menuOpen ? "✕" : "☰"}
      </button>
    )}
  </div>

  {/* Mobile Menu */}
  {isMobile && menuOpen && (
    <div style={{ background: "#060b14", borderTop: "1px solid rgba(255,255,255,.07)", padding: "12px 24px 20px" }}>
      {NAV_LINKS.map(n => (
        <button
          key={n}
          onClick={() => scrollTo(n.toLowerCase())}
          style={{ display: "block", width: "100%", background: "none", border: "none", color: "rgba(255,255,255,.7)", padding: "13px 0", fontSize: 16, cursor: "pointer", textAlign: "left", borderBottom: "1px solid rgba(255,255,255,.06)" }}
        >
          {n}
        </button>
      ))}
      <a href="mailto:devcorsolution@gmail.com" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        ✉ devcorsolution@gmail.com
      </a>
      <a href="tel:+16467553497" style={{ display: "block", color: "rgba(255,255,255,.5)", fontSize: 14, textDecoration: "none", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,.06)" }}>
        📞 (646) 755-3497
      </a>
      <button
        onClick={() => scrollTo("contact")}
        style={{ marginTop: 14, width: "100%", background: "#2563eb", border: "none", color: "#fff", padding: "13px", borderRadius: 8, fontWeight: 700, fontSize: 15, cursor: "pointer" }}
      >
        Get In Touch
      </button>
    </div>
  )}
</nav>

      {/* HERO */}
      <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "120px 24px 80px", position: "relative", overflow: "hidden" }}>

        {/* BACKGROUND VIDEO */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0
          }}
        >
          <source src={HeroVideo} type="video/mp4" />
          {/* <source src="/hero-video.webm" type="video/webm" /> */}
        </video>

        {/* DARK OVERLAY — video ke upar, text ke neeche */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(0,0,0,0.65)",
          zIndex: 1
        }} />

        {/* RADIAL GLOW */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80vw",
          height: "60vh",
          background: "radial-gradient(ellipse,rgba(37,99,235,.15) 0%,transparent 65%)",
          pointerEvents: "none",
          zIndex: 2
        }} />

        {/* DOT GRID */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(255,255,255,.03) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
          pointerEvents: "none",
          zIndex: 2
        }} />

        {/* MAIN CONTENT — sabse upar zIndex:3 */}
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          textAlign: "center",
          animation: "fadeUp .8s ease both",
          position: "relative",
          zIndex: 3
        }}>
          {/* BADGE */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(37,99,235,.1)",
            border: "1px solid rgba(37,99,235,.25)",
            borderRadius: 24,
            padding: "7px 18px",
            marginBottom: 28
          }}>
            <div style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#22c55e",
              animation: "pulse 2s infinite"
            }} />
            <span style={{ fontSize: 12, color: "#86efac", fontWeight: 600 }}>
              Currently Accepting New Projects
            </span>
          </div>

          {/* HEADING */}
          <h1 style={{
            fontSize: isMobile ? 32 : 60,
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 20,
            letterSpacing: "-1px",
            color: "#fff"
          }}>
            Digital Transformation<br />
            <span style={{
              background: "linear-gradient(135deg,#3b82f6,#38bdf8,#6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Company
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p style={{
            fontSize: isMobile ? 15 : 18,
            color: "rgba(255,255,255,.65)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.8
          }}>
            DevCore delivers end-to-end digital solutions customized to your business
            objectives. Our scalable apps are built on the latest technologies to drive
            innovation and accelerate growth.
          </p>

          {/* BUTTONS */}
          <div style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 70
          }}>
            <button
              onClick={() => scrollTo("projects")}
              style={{
                background: "#2563eb",
                border: "none",
                color: "#fff",
                padding: "15px 32px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 0 40px rgba(37,99,235,.4)"
              }}
            >
              View Our Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,.2)",
                color: "#fff",
                padding: "15px 32px",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer"
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 12, margin: "0 28px", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.5)", textTransform: "uppercase", letterSpacing: "2px" }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2563eb", display: "inline-block" }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" style={{ padding: "100px 24px", background: "#060b14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>WHAT WE DO</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Services We Offer</h2>
            <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>As a leading digital solutions company, we design innovative products that drive growth across multiple industries.</p>
          </div>
          <div className="srv-grid" style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,.06)" }}>
            {SERVICES.map((s, i) => (
              <div key={i} className="hc" style={{ background: "#0a1120", padding: 32, cursor: "pointer", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: i % 2 === 0 ? "linear-gradient(90deg,#2563eb,transparent)" : "linear-gradient(90deg,#38bdf8,transparent)", opacity: .5 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,.45)", fontSize: 13, lineHeight: 1.75, marginBottom: 18 }}>{s.desc}</p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.tags.map(t => <span key={t} style={{ fontSize: 11, background: "rgba(37,99,235,.1)", color: "#60a5fa", padding: "3px 9px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(37,99,235,.2)" }}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "100px 24px", background: "#0a1120" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>OUR WORK</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Our Success Stories</h2>
          </div>
          <div className="prj-grid">
            {PROJECTS.map((p, i) => (
              <div key={i} className="hc" onClick={() => setHoveredProject(i)} style={{ background: "#060b14", border: "1px solid rgba(255,255,255,.07)", borderRadius: 16, overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: 6, background: `linear-gradient(90deg,${p.color},${p.color}50)` }} />
                <div style={{ height: 100, background: `linear-gradient(135deg,${p.color}18,${p.color}06)`, display: "flex", alignItems: "center", paddingLeft: 28 }}>
                  <div>
                    <div style={{ fontSize: 22, fontWeight: 900, color: "#fff" }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.4)", marginTop: 2 }}>{p.sub}</div>
                  </div>
                </div>
                <div style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 11, background: `${p.color}15`, color: p.color, padding: "3px 10px", borderRadius: 20, fontWeight: 700, border: `1px solid ${p.color}30` }}>{p.tag}</span>
                    <span style={{ fontSize: 11, background: "rgba(34,197,94,.08)", color: "#86efac", padding: "3px 10px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(34,197,94,.2)" }}>✓ {p.result}</span>
                  </div>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                  <div style={{ fontSize: 11, color: `${p.color}`, fontWeight: 600, letterSpacing: ".5px" }}>Click to view details →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "100px 24px", background: "#060b14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>HOW WE WORK</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Our Development Process</h2>
            <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>We follow a clear, transparent process to turn your ideas into functional, market-ready products.</p>
          </div>
          <div className="step-grid">
            {PROCESS.map((p, i) => (
              <div key={i} onMouseEnter={() => setActiveStep(i)}
                style={{ background: activeStep === i ? "rgba(37,99,235,.12)" : "#0a1120", border: `1px solid ${activeStep === i ? "rgba(37,99,235,.4)" : "rgba(255,255,255,.07)"}`, borderRadius: 14, padding: 24, cursor: "pointer", transition: "all .3s" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: activeStep === i ? 12 : 0 }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: activeStep === i ? "rgba(37,99,235,.25)" : "rgba(255,255,255,.05)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 16, color: activeStep === i ? "#60a5fa" : "rgba(255,255,255,.3)", flexShrink: 0, transition: "all .3s" }}>{p.num}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: activeStep === i ? "#fff" : "rgba(255,255,255,.7)", transition: "color .3s" }}>{p.title}</h3>
                </div>
                <div style={{ maxHeight: activeStep === i ? "120px" : "0", overflow: "hidden", transition: "max-height .4s ease", paddingLeft: 58 }}>
                  <p style={{ color: "rgba(255,255,255,.5)", fontSize: 13, lineHeight: 1.75 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section style={{ padding: "100px 24px", background: "#0a1120" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>TECH STACK</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Technologies We Use</h2>
            <p style={{ color: "rgba(255,255,255,.45)", marginTop: 14, fontSize: 15, maxWidth: 500, margin: "14px auto 0", lineHeight: 1.7 }}>We choose the right tools for your goals. Our core strengths span mobile and web platforms.</p>
          </div>
          {TECH_SECTIONS.map((section, si) => (
            <div key={si} style={{ marginBottom: si === 0 ? 48 : 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, flexWrap: "wrap" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#fff", minWidth: 140 }}>{section.cat}</h3>
                <div style={{ display: "flex", gap: 8 }}>
                  {section.tabs.map((t, ti) => (
                    <button key={ti} onClick={() => setTechTabs(prev => { const n = [...prev]; n[si] = ti; return n; })} style={{ background: techTabs[si] === ti ? "#2563eb" : "rgba(255,255,255,.05)", border: techTabs[si] === ti ? "none" : "1px solid rgba(255,255,255,.1)", color: techTabs[si] === ti ? "#fff" : "rgba(255,255,255,.5)", padding: "7px 18px", borderRadius: 20, fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all .2s" }}>{t.label}</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(130px,1fr))", gap: 12 }}>
                {section.tabs[techTabs[si]].techs.map((tech, ti) => (
                  <div key={ti} style={{ background: "#060b14", border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, padding: "20px 14px", textAlign: "center", transition: "all .25s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(37,99,235,.4)"; e.currentTarget.style.background = "rgba(37,99,235,.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,.07)"; e.currentTarget.style.background = "#060b14"; }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,.8)" }}>{tech}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "100px 24px", background: "#060b14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>INDUSTRIES</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Industries We Serve</h2>
          </div>
          <div className="ind-grid">
            {INDUSTRIES.map((ind, i) => (
              <div key={i} className="hc" style={{ background: "#0a1120", border: "1px solid rgba(255,255,255,.07)", borderRadius: 14, padding: "22px 16px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,.8)" }}>{ind}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 24px", background: "#0a1120" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: "#38bdf8", fontWeight: 800, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>FAQ</div>
            <h2 style={{ fontSize: isMobile ? 28 : 42, fontWeight: 900, color: "#fff" }}>Frequently Asked Questions</h2>
          </div>
          {FAQS.map((f, i) => (
            <div key={i} style={{ border: "1px solid rgba(255,255,255,.07)", borderRadius: 12, marginBottom: 12, overflow: "hidden" }}>
              <button onClick={() => setActiveFaq(activeFaq === i ? null : i)} style={{ width: "100%", background: activeFaq === i ? "rgba(37,99,235,.1)" : "#060b14", border: "none", color: "#fff", padding: "20px 24px", textAlign: "left", fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", transition: "background .2s" }}>
                {f.q}
                <span style={{ fontSize: 20, color: "#38bdf8", transform: activeFaq === i ? "rotate(45deg)" : "rotate(0)", transition: "transform .3s", flexShrink: 0, marginLeft: 12 }}>+</span>
              </button>
              {activeFaq === i && <div style={{ background: "rgba(37,99,235,.06)", padding: "0 24px 20px", color: "rgba(255,255,255,.55)", fontSize: 14, lineHeight: 1.8 }}>{f.a}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
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
              ].map((c, i) => (
                <a key={i} href={c.href} target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", gap: 14, color: "rgba(255,255,255,.6)", textDecoration: "none", transition: "color .2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "#38bdf8"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.6)"}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: "rgba(37,99,235,.1)", border: "1px solid rgba(37,99,235,.2)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#38bdf8", letterSpacing: ".5px" }}>{c.label.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", fontWeight: 600, marginBottom: 2 }}>{c.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div style={{ background: "#0a1120", border: "1px solid rgba(255,255,255,.07)", borderRadius: 20, padding: isMobile ? "24px" : "36px" }}>
            {formStatus === "sent" ? (
              <div style={{ textAlign: "center", padding: "40px 20px" }}>
                <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(34,197,94,.1)", border: "1px solid rgba(34,197,94,.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontSize: 24, color: "#22c55e", fontWeight: 700 }}>✓</div>
                <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>Message Sent!</div>
                <div style={{ color: "rgba(255,255,255,.5)", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                <button onClick={() => { setFormStatus("idle"); setForm({ name: "", phone: "", budget: "", message: "" }); }} style={{ marginTop: 18, background: "none", border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.5)", padding: "8px 20px", borderRadius: 8, cursor: "pointer", fontSize: 13 }}>Send Another</button>
              </div>
            ) : (
              <>
                <h3 style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 6 }}>Submit Your Application</h3>
                <p style={{ color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 24 }}>Tell us about your project and we'll get back to you within 24 hours.</p>
                <input value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} placeholder="Your Name" style={{ ...inp, marginBottom: 14 }} />
                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="Phone / Email" style={{ ...inp, marginBottom: 14 }} />
                <select value={form.budget} onChange={e => setForm(f => ({ ...f, budget: e.target.value }))} style={{ ...inp, marginBottom: 14, appearance: "none" }}>
                  <option value="">Select a budget</option>
                  <option>Under $1,000</option>
                  <option>$1,000 – $5,000</option>
                  <option>$5,000 – $10,000</option>
                  <option>$10,000+</option>
                </select>
                <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} placeholder="Describe your project..." rows={4} style={{ ...inp, marginBottom: 18, resize: "vertical" }} />
                <button onClick={sendEmail} disabled={formStatus === "sending"} style={{ width: "100%", background: formStatus === "sending" ? "#1e3a8a" : "#2563eb", border: "none", color: "#fff", padding: "15px", borderRadius: 9, fontWeight: 700, fontSize: 16, cursor: formStatus === "sending" ? "default" : "pointer", opacity: formStatus === "sending" ? .7 : 1, boxShadow: "0 0 30px rgba(37,99,235,.35)" }}>
                  {formStatus === "sending" ? "Sending..." : "Submit"}
                </button>
                {formStatus === "error" && <div style={{ marginTop: 12, color: "#f87171", fontSize: 13, textAlign: "center" }}>Something went wrong. Please email us directly.</div>}
              </>
            )}
          </div>
        </div>
      </section>

      {/* PROJECT DIALOG OVERLAY */}
      {hoveredProject !== null && (() => {
        const p = PROJECTS[hoveredProject];
        return (
          <div onClick={() => setHoveredProject(null)} style={{ position: "fixed", inset: 0, zIndex: 500, background: "rgba(0,0,0,.75)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20, overflowY: "auto" }}>
            <div onClick={e => e.stopPropagation()} style={{ background: "#0d1a2e", border: `1px solid ${p.color}40`, borderRadius: 20, maxWidth: 680, width: "100%", overflow: "hidden", boxShadow: `0 32px 80px rgba(0,0,0,.7)`, maxHeight: "90vh", overflowY: "auto" }}>
              <div style={{ height: 5, background: `linear-gradient(90deg,${p.color},${p.color}60)` }} />
              {/* Header */}
              <div style={{ padding: "24px 28px 0", background: `linear-gradient(135deg,${p.color}10,transparent)` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 900, color: "#fff", marginBottom: 3 }}>{p.title}</h2>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,.45)" }}>{p.sub}</div>
                  </div>
                  <button onClick={() => setHoveredProject(null)} style={{ background: "rgba(255,255,255,.08)", border: "none", color: "rgba(255,255,255,.5)", width: 34, height: 34, borderRadius: 9, cursor: "pointer", fontSize: 16, flexShrink: 0 }}>✕</button>
                </div>
                <div style={{ display: "flex", gap: 7, paddingBottom: 20, flexWrap: "wrap" }}>
                  <span style={{ fontSize: 11, background: `${p.color}18`, color: p.color, padding: "3px 10px", borderRadius: 20, fontWeight: 700, border: `1px solid ${p.color}30` }}>{p.tag}</span>
                  <span style={{ fontSize: 11, background: "rgba(34,197,94,.08)", color: "#86efac", padding: "3px 10px", borderRadius: 20, fontWeight: 600, border: "1px solid rgba(34,197,94,.2)" }}>✓ {p.result}</span>
                </div>
              </div>

              <div style={{ padding: "20px 28px 28px", display: "flex", flexDirection: "column", gap: 22 }}>
                {/* Description */}
                <p style={{ color: "rgba(255,255,255,.6)", fontSize: 13.5, lineHeight: 1.85 }}>{p.details}</p>

                {/* User + Admin Features */}
                {p.features && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    {[{ label: "User Features", list: p.features.user }, { label: "Admin Features", list: p.features.admin }].map(({ label, list }) => (
                      <div key={label} style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                        <div style={{ fontSize: 11, color: p.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>{label}</div>
                        {list.map(item => (
                          <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 7 }}>
                            <span style={{ color: p.color, fontSize: 11, marginTop: 2, flexShrink: 0 }}>▸</span>
                            <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Payment & Wallet System */}
                {p.payment && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Payment & Wallet System</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {p.payment.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: p.color, fontSize: 11, marginTop: 2, flexShrink: 0 }}>▸</span>
                          <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Demo Credentials */}
                {p.demoAdmin && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 14 }}>Demo Credentials</div>
                    <div style={{ display: "grid", gridTemplateColumns: p.demoTeacher ? "1fr 1fr 1fr" : "1fr 1fr", gap: 12 }}>
                      {[
                        { role: "Admin Panel", cred: p.demoAdmin },
                        ...(p.demoTeacher ? [{ role: "Teacher Panel", cred: p.demoTeacher }] : []),
                        { role: "User Panel", cred: p.demoUser },
                      ].map(({ role, cred }) => (
                        <div key={role} style={{ background: "rgba(0,0,0,.3)", borderRadius: 10, padding: 14 }}>
                          <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,.85)", marginBottom: 10 }}>{role}</div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 5 }}>Email: <span style={{ color: "rgba(255,255,255,.8)" }}>{cred.email}</span></div>
                          <div style={{ fontSize: 12, color: "rgba(255,255,255,.5)", marginBottom: 12 }}>Password: <span style={{ color: "rgba(255,255,255,.8)" }}>{cred.pass}</span></div>
                          <a href={cred.url} target="_blank" rel="noreferrer" style={{ display: "inline-block", fontSize: 11, background: p.color, color: "#fff", padding: "7px 16px", borderRadius: 7, textDecoration: "none", fontWeight: 700 }}>Open Live Demo →</a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Project Highlights */}
                {p.highlights && (
                  <div style={{ background: "rgba(255,255,255,.03)", border: "1px solid rgba(255,255,255,.08)", borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 12 }}>Project Highlights</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
                      {p.highlights.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                          <span style={{ color: "#22c55e", fontSize: 11, marginTop: 2, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: 12.5, color: "rgba(255,255,255,.6)", lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Use Case */}
                {p.usecase && (
                  <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}20`, borderRadius: 12, padding: 16 }}>
                    <div style={{ fontSize: 11, color: p.color, fontWeight: 800, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 10 }}>Use Case</div>
                    <p style={{ color: "rgba(255,255,255,.55)", fontSize: 13, lineHeight: 1.8 }}>{p.usecase}</p>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 10 }}>Technology Stack</div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {p.tech.map(t => (
                      <span key={t} style={{ fontSize: 12, background: "rgba(255,255,255,.06)", color: "rgba(255,255,255,.75)", padding: "5px 12px", borderRadius: 20, border: "1px solid rgba(255,255,255,.1)", fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* FOOTER */}
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
            ].map((col, i) => (
              <div key={i}>
                <div style={{ fontWeight: 700, color: "#fff", fontSize: 13, marginBottom: 16, textTransform: "uppercase", letterSpacing: "1px" }}>{col.title}</div>
                {col.links.map(l => (
                  <div key={l} style={{ color: "rgba(255,255,255,.4)", fontSize: 13, marginBottom: 10, cursor: "pointer", transition: "color .2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#38bdf8"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,.4)"}>
                    {l}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.3)" }}>© 2025 DevCore Tech Solutions. All rights reserved.</div>
            <div style={{ display: "flex", gap: 8 }}>
              {["Web Dev", "Mobile Apps", "AI Solutions"].map(s => (
                <span key={s} style={{ fontSize: 11, background: "rgba(37,99,235,.08)", color: "rgba(56,189,248,.7)", padding: "4px 12px", borderRadius: 20, border: "1px solid rgba(37,99,235,.15)", fontWeight: 600 }}>{s}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* WHATSAPP FLOAT */}
      <button onClick={() => window.open("https://wa.me/923164593747", "_blank")}
        style={{ position: "fixed", bottom: 28, right: 28, zIndex: 999, width: 56, height: 56, borderRadius: "50%", background: "#25D366", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 20px rgba(37,211,102,.5)", border: "none", cursor: "pointer", transition: "transform .2s" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.12)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm-5.6 10.4c.3 0 .6 0 .9.1.3 0 .7-.1 1 .8.4.9 1.3 3.1 1.4 3.3.1.2.2.5 0 .8-.1.3-.2.5-.5.7-.2.3-.5.6-.7.8-.2.2-.5.5-.2.9.3.5 1.2 1.9 2.5 3.1 1.7 1.5 3.2 2 3.6 2.2.4.2.7.2 1-.1.3-.3 1.1-1.3 1.4-1.8.3-.4.6-.4 1-.2.4.1 2.6 1.2 3 1.5.5.2.8.3.9.5.1.2.1 1.1-.3 2.1-.4 1-2.2 2-3 2.1-.8.1-1.6.4-5.4-1.1-4.5-1.8-7.3-6.4-7.5-6.7-.2-.3-1.8-2.4-1.8-4.6s1.1-3.3 1.5-3.7c.5-.4.9-.6 1.2-.6z" fill="white" />
        </svg>
      </button>
    </div>
  );
}