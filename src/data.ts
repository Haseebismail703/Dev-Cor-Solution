export const NAV_LINKS = ["Services", "Projects", "Process", "Contact"];

export const SERVICES = [
  { title: "Web Development", desc: "We deliver custom websites & web apps that streamline operations and drive growth.", tags: ["React", "Next.js", "Node.js"] },
  { title: "Mobile App Development", desc: "We build intuitive mobile apps that engage users and accelerate business growth.", tags: ["React Native", "Flutter", "Firebase"] },
  { title: "AI-Based Web Apps", desc: "We develop intelligent AI systems that automate processes and enhance decisions.", tags: ["OpenAI", "Python", "Node.js"] },
  { title: "Web to App Conversion", desc: "We convert your existing website into a fully functional Android mobile app.", tags: ["React Native", "Flutter", "API Integration"] },
  { title: "API Development", desc: "We provide secure and scalable REST & GraphQL APIs for modern businesses.", tags: ["Node.js", "Express", "MongoDB"] },
  { title: "eCommerce Development", desc: "We design feature-rich stores that maximize sales and customer satisfaction.", tags: ["Stripe", "WooCommerce", "React"] },
];

export const PROJECTS = [
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

export const PROCESS = [
  { num: "01", title: "Discovery & Planning", desc: "We get to know your company, target audience, and objectives. We design an efficient roadmap integrating technology with your long-term goals — minimizing surprises and maximizing success." },
  { num: "02", title: "UI/UX Design", desc: "Our designers create stunning, user-friendly interfaces easily navigated from the first tap. We bring thoughtful flows, simple layouts, and captivating visuals to boost customer satisfaction." },
  { num: "03", title: "Prototyping & Validation", desc: "We present interactive prototypes showcasing the main features and flows. We collect feedback, confirm ideas, and ensure the product aligns completely with your expectations." },
  { num: "04", title: "Agile Development", desc: "Developers work in short agile sprints, advancing your product through iterative stages with tangible deliverables. Flexibility, transparency, and continuous alignment guaranteed." },
  { num: "05", title: "Quality Assurance", desc: "All features undergo thorough automated and manual testing to ensure flawless performance, security, and stability — across all platforms and devices." },
  { num: "06", title: "Deployment & Launch", desc: "We handle the total deployment process — your application will pass all platform requirements and work perfectly in the live environment, from app stores to web servers." },
  { num: "07", title: "Monitoring & Optimization", desc: "After launch, we monitor performance, user feedback, and analytics closely. These insights inform ongoing feature refinement, improvements, and issue resolution." },
];

export const INDUSTRIES = ["eCommerce", "Healthcare", "Education", "Fintech", "Food & Delivery", "Real Estate", "Travel", "Logistics"];

export const FAQS = [
  { q: "What mobile app development services do you offer?", a: "DevCore offers iOS, Android, cross-platform, and enterprise-level app development. We build high-performance, scalable applications customized to your business requirements from design to deployment." },
  { q: "What is the average cost and timeline for a project?", a: "Costs and timelines depend on project complexity, features, and tech stack. On average, projects range from 1–4 months with budgets starting from $2,000 depending on scope." },
  { q: "Do you provide maintenance and support after launch?", a: "Yes, DevCore offers continuous post-launch support including performance monitoring, security updates, and feature additions to keep your product running at its best." },
  { q: "Do you develop both mobile and web solutions?", a: "Absolutely. DevCore creates both mobile and web-based solutions with seamless functionality and a unified user experience across all devices." },
  { q: "How do you ensure security and quality?", a: "We follow strict security measures and quality controls — code reviews, testing, and compliance checks to meet industry security and performance standards." },
];

export const TICKER = ["Web Development", "Mobile Apps", "AI Solutions", "eCommerce", "API Development", "UI/UX Design"];

export const TECH_SECTIONS = [
  {
    cat: "Mobile Apps", tabs: [
      { label: "Android", techs: ["React Native", "Kotlin", "Java", "Flutter", "Firebase", "Jetpack"] },
    ],
  },
  {
    cat: "Web Platforms", tabs: [
      { label: "Frontend", techs: ["React.js", "Next.js", "TypeScript", "Tailwind", "Redux"] },
      { label: "Backend", techs: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"] },
    ],
  },
];
