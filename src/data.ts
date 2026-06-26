export const NAV_LINKS = ["Services", "Projects", "Process", "Contact"];

export const SERVICES = [
  {
    title: "Software Development",
    desc: "We deliver custom software solutions that streamline operations and drive business growth.",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=500&fit=crop",
    tags: ["React", "Next.js", "Node.js", "TypeScript"],
    color: "#2563eb",
    detail: {
      heroDesc: "We build robust, scalable software solutions tailored to your business needs. From web applications to enterprise systems, our team delivers high-quality code that drives real results.",
      stats: [
        { number: "100+", label: "Projects Delivered" },
        { number: "30+", label: "Happy Clients" },
        { number: "175+", label: "Technologies" },
        { number: "95%", label: "Client Satisfaction" },
      ],
      features: [
        { title: "Custom Web Applications", desc: "Tailored web apps built with modern frameworks for optimal performance." },
        { title: "Enterprise Software", desc: "Scalable enterprise solutions that handle complex business logic." },
        { title: "SaaS Products", desc: "Cloud-based software with subscription models and multi-tenancy." },
        { title: "Progressive Web Apps", desc: "Fast, reliable web apps that work offline and feel native." },
        { title: "Dashboard & Admin Panels", desc: "Powerful admin interfaces with real-time data visualization." },
        { title: "API Integration", desc: "Seamless third-party integrations to extend your capabilities." },
      ],
      technologies: ["React.js", "Next.js", "Node.js", "TypeScript", "MongoDB", "PostgreSQL", "AWS", "Docker"],
      faqs: [
        { q: "What is the typical timeline for a software project?", a: "Simple projects take 4-8 weeks, while complex enterprise solutions may take 3-6 months depending on scope and requirements." },
        { q: "Do you provide ongoing maintenance?", a: "Yes, we offer comprehensive maintenance plans including bug fixes, performance updates, and feature enhancements." },
        { q: "What technologies do you specialize in?", a: "We specialize in the MERN stack, Next.js, TypeScript, and cloud services like AWS and Docker." },
      ],
    },
  },
  {
    title: "Mobile App Development",
    desc: "We build intuitive mobile apps that engage users and accelerate business growth across all platforms.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop",
    tags: ["React Native", "Flutter", "Firebase", "iOS", "Android"],
    color: "#8b5cf6",
    detail: {
      heroDesc: "Transform your ideas into powerful mobile experiences. We develop cross-platform and native mobile applications that deliver exceptional performance and user engagement.",
      stats: [
        { number: "50+", label: "Apps Launched" },
        { number: "1M+", label: "App Downloads" },
        { number: "4.8", label: "Avg. Rating" },
        { number: "99%", label: "Crash-Free Rate" },
      ],
      features: [
        { title: "Cross-Platform Development", desc: "Build once, deploy everywhere with React Native and Flutter." },
        { title: "Native App Development", desc: "High-performance native apps using Kotlin and Swift." },
        { title: "App UI/UX Design", desc: "Beautiful interfaces designed for maximum user engagement." },
        { title: "App Store Optimization", desc: "Strategic ASO to improve visibility and downloads." },
        { title: "Push Notifications", desc: "Targeted push systems to keep users engaged and retained." },
        { title: "Offline Functionality", desc: "Apps that work seamlessly offline with smart data syncing." },
      ],
      technologies: ["React Native", "Flutter", "Firebase", "Kotlin", "Swift", "Redux", "GraphQL", "REST API"],
      faqs: [
        { q: "Should I choose React Native or Flutter?", a: "Both are excellent. React Native is ideal if you have a web team (JavaScript). Flutter offers better performance for animation-heavy apps." },
        { q: "How long does it take to build a mobile app?", a: "A basic app takes 6-10 weeks, while feature-rich apps with backend integration take 3-5 months." },
        { q: "Do you publish apps to the stores?", a: "Yes, we handle the entire process from development to App Store and Google Play submission and approval." },
      ],
    },
  },
  {
    title: "Game Development",
    desc: "We create immersive gaming experiences with stunning graphics, smooth gameplay, and cross-platform support.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=500&fit=crop",
    tags: ["Unity", "Unreal Engine", "C#", "3D/2D"],
    color: "#ef4444",
    detail: {
      heroDesc: "From casual mobile games to complex multiplayer experiences, we bring your gaming vision to life with cutting-edge technology and creative storytelling.",
      stats: [
        { number: "20+", label: "Games Developed" },
        { number: "500K+", label: "Total Players" },
        { number: "4.5", label: "Avg. Rating" },
        { number: "15+", label: "Platforms" },
      ],
      features: [
        { title: "2D & 3D Game Design", desc: "Stunning game worlds with detailed characters and environments." },
        { title: "Multiplayer Systems", desc: "Real-time multiplayer with matchmaking and leaderboards." },
        { title: "Mobile Games", desc: "Optimized mobile gaming for iOS and Android platforms." },
        { title: "Game UI/UX", desc: "Intuitive game interfaces that enhance the player experience." },
        { title: "Cross-Platform Gaming", desc: "Games that run seamlessly across mobile, PC, and console." },
        { title: "Game Analytics", desc: "Player behavior tracking to optimize engagement and revenue." },
      ],
      technologies: ["Unity", "Unreal Engine", "C#", "C++", "Blender", "Photon", "Firebase", "PlayFab"],
      faqs: [
        { q: "What game engines do you work with?", a: "We primarily work with Unity and Unreal Engine, choosing the best fit based on your project requirements." },
        { q: "Can you develop multiplayer games?", a: "Yes, we build real-time multiplayer games with robust networking, matchmaking, and anti-cheat systems." },
        { q: "Do you handle game monetization?", a: "We implement various monetization models including in-app purchases, ads, subscriptions, and battle passes." },
      ],
    },
  },
  {
    title: "AI Solutions",
    desc: "We develop intelligent AI systems that automate processes, enhance decisions, and unlock new opportunities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    tags: ["OpenAI", "Python", "TensorFlow", "NLP"],
    color: "#06b6d4",
    detail: {
      heroDesc: "Leverage the power of artificial intelligence to transform your business. We build custom AI solutions that automate workflows, provide insights, and create intelligent experiences.",
      stats: [
        { number: "30+", label: "AI Projects" },
        { number: "85%", label: "Automation Rate" },
        { number: "10x", label: "Efficiency Boost" },
        { number: "99%", label: "Accuracy Rate" },
      ],
      features: [
        { title: "AI Chatbots & Assistants", desc: "Intelligent conversational AI for customer support 24/7." },
        { title: "Machine Learning Models", desc: "Custom ML models for prediction, classification, and detection." },
        { title: "Natural Language Processing", desc: "Text analysis, sentiment detection, and content generation." },
        { title: "Computer Vision", desc: "Image recognition and visual inspection solutions." },
        { title: "AI Integration", desc: "Seamless AI capabilities into your existing applications." },
        { title: "Data Analytics & BI", desc: "AI-powered analytics dashboards for actionable insights." },
      ],
      technologies: ["Python", "TensorFlow", "OpenAI API", "LangChain", "PyTorch", "Hugging Face", "AWS SageMaker", "Node.js"],
      faqs: [
        { q: "What types of AI solutions do you build?", a: "We build chatbots, recommendation engines, prediction models, NLP tools, computer vision systems, and custom AI integrations." },
        { q: "Can you integrate AI into our existing app?", a: "Absolutely. We add AI capabilities through APIs and microservices without major restructuring of your existing software." },
        { q: "How do you ensure AI model accuracy?", a: "We use rigorous testing, validation datasets, and continuous monitoring to ensure our AI models maintain high accuracy." },
      ],
    },
  },
  {
    title: "eCommerce Development",
    desc: "We design feature-rich online stores that maximize sales, customer satisfaction, and business revenue.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop",
    tags: ["Stripe", "Shopify", "WooCommerce", "React"],
    color: "#f59e0b",
    detail: {
      heroDesc: "Build your online empire with our custom eCommerce solutions. From single-vendor shops to multi-vendor marketplaces, we create shopping experiences that convert visitors into customers.",
      stats: [
        { number: "40+", label: "Stores Built" },
        { number: "3x", label: "Avg. Sales Increase" },
        { number: "$2M+", label: "Revenue Generated" },
        { number: "99.9%", label: "Uptime" },
      ],
      features: [
        { title: "Custom Online Stores", desc: "Beautiful, fast, and secure stores tailored to your brand." },
        { title: "Multi-Vendor Marketplaces", desc: "Complete marketplace platforms with vendor management." },
        { title: "Payment Integration", desc: "Secure processing with Stripe, PayPal, and local gateways." },
        { title: "Inventory Management", desc: "Real-time tracking, low-stock alerts, and automated reordering." },
        { title: "Shopping Cart & Checkout", desc: "Optimized flows to minimize abandonment and maximize sales." },
        { title: "Order Management", desc: "Complete order lifecycle from placement to delivery tracking." },
      ],
      technologies: ["React.js", "Node.js", "Stripe", "MongoDB", "Shopify API", "WooCommerce", "Redis", "AWS"],
      faqs: [
        { q: "Which eCommerce platform do you recommend?", a: "For custom solutions we build with React + Node.js. For quick launches, Shopify or WooCommerce work great." },
        { q: "Can you migrate my existing store?", a: "Yes, we handle seamless migrations while preserving your data, SEO rankings, and customer history." },
        { q: "Do you handle payment gateway integration?", a: "We integrate all major payment gateways including Stripe, PayPal, and regional payment methods." },
      ],
    },
  },
  {
    title: "API Development",
    desc: "We provide secure and scalable REST & GraphQL APIs that power modern applications and integrations.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop",
    tags: ["Node.js", "Express", "GraphQL", "MongoDB"],
    color: "#10b981",
    detail: {
      heroDesc: "Build the backbone of your digital ecosystem with our robust API development services. We design, build, and maintain APIs that are fast, secure, and developer-friendly.",
      stats: [
        { number: "60+", label: "APIs Built" },
        { number: "99.9%", label: "Uptime" },
        { number: "<100ms", label: "Avg. Response" },
        { number: "50M+", label: "Requests/Month" },
      ],
      features: [
        { title: "RESTful API Design", desc: "Well-structured REST APIs following best practices." },
        { title: "GraphQL APIs", desc: "Flexible endpoints letting clients request exactly what they need." },
        { title: "API Authentication", desc: "Secure auth with JWT, OAuth 2.0, and API key management." },
        { title: "Third-Party Integration", desc: "Connect systems with external services and platforms." },
        { title: "API Documentation", desc: "Interactive docs with Swagger/OpenAPI specifications." },
        { title: "Rate Limiting & Caching", desc: "Performance optimization with intelligent caching strategies." },
      ],
      technologies: ["Node.js", "Express.js", "GraphQL", "MongoDB", "PostgreSQL", "Redis", "Docker", "AWS Lambda"],
      faqs: [
        { q: "Do you support both REST and GraphQL?", a: "Yes, we build both REST and GraphQL APIs based on your project requirements and client needs." },
        { q: "How do you ensure API security?", a: "We implement JWT authentication, rate limiting, input validation, CORS policies, and encryption for all APIs." },
        { q: "Can you integrate with existing systems?", a: "Absolutely. We specialize in creating APIs that bridge different systems and enable seamless data flow." },
      ],
    },
  },
];

export const PROJECTS = [
  { title: "ShopEase", sub: "E-Commerce Platform", desc: "Full-stack multi-vendor marketplace with real-time inventory, Stripe payments, and seller dashboard.", color: "#2563eb", tag: "Web + Mobile", result: "3x sales increase", tech: ["React", "Node.js", "MongoDB", "Stripe"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", details: "ShopEase is a full-featured multi-vendor e-commerce marketplace built for scale. Sellers can manage their own storefronts, inventory, and orders through a dedicated dashboard. Buyers enjoy a seamless shopping experience with real-time stock updates, secure Stripe payments, and order tracking. Admin panel provides complete oversight of all transactions and users." },
  { title: "SafarUmrah", sub: "Travel Agency Portal", desc: "Full Umrah travel portal with package management, online booking, hotel & flight tracking.", color: "#10b981", tag: "Web App", result: "800+ bookings", tech: ["React", "Node.js", "MongoDB"], image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop", details: "SafarUmrah is a comprehensive travel agency portal tailored for Umrah packages. It enables agencies to list, manage, and sell Umrah packages online. Features include hotel & flight tracking, booking management, customer CRM, and automated invoice generation. The platform has facilitated 800+ successful bookings since launch." },
  {
    title: "Quran Academy", sub: "Quran Academy Management System", desc: "Online Quran learning with Teacher, Admin & Student panels, live classes, and payment integration.", color: "#14b8a6", tag: "Web App", result: "500+ students",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
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
  { title: "FoodRush", sub: "Food Delivery App", desc: "Restaurant discovery & food ordering with live tracking, loyalty rewards, and multi-restaurant management.", color: "#ef4444", tag: "Web + Mobile", result: "50+ restaurants", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop", tech: ["React Native", "React", "Node.js", "Redis"], details: "FoodRush is a complete food ordering and delivery ecosystem. Customers discover restaurants, browse menus, place orders, and track delivery in real-time. Restaurants manage orders, menus, and availability through a dedicated dashboard. The platform supports loyalty rewards, promo codes, and multi-restaurant cart. Currently powers 50+ restaurants with thousands of monthly orders." },
  {
    title: "PayPerTask", sub: "Pay Per Task Advertising Network", desc: "A full-featured advertising network where users earn by completing tasks & offers, with a powerful admin panel for managing users, payments, and withdrawals.", color: "#8b5cf6", tag: "Web App", result: "Full MERN Stack",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
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
  { num: "01", title: "Discovery & Planning", desc: "We get to know your company well, the target audience and objectives. Only then, we design an efficient roadmap involving the integration of technology and your long term goals so that you have a sure-footed beginning to your project, minimizing surprises and maximizing your chances of success in the long run.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop" },
  { num: "02", title: "UI/UX Design", desc: "The designers of our team are mainly concerned with making stunning and user-friendly interfaces that can be easily navigated from the first tap. We consider both aspects of design equally, bringing to life thoughtful flows, simple layouts, and captivating visuals that add up to customer satisfaction.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop" },
  { num: "03", title: "Prototyping & Validation", desc: "We present interactive prototypes showcasing the main features and flows. We collect feedback, confirm ideas, and ensure the product aligns completely with your expectations before moving to development.", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop" },
  { num: "04", title: "Agile Development", desc: "Developers work in short agile sprints, advancing your product through iterative stages with tangible deliverables. Flexibility, transparency, and continuous alignment guaranteed at every step of the journey.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop" },
  { num: "05", title: "Quality Assurance", desc: "All features undergo thorough automated and manual testing to ensure flawless performance, security, and stability — across all platforms and devices before any release.", image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop" },
  { num: "06", title: "Deployment & Launch", desc: "We handle the total deployment process — your application will pass all platform requirements and work perfectly in the live environment, from app stores to web servers.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=500&fit=crop" },
  { num: "07", title: "Monitoring & Optimization", desc: "After launch, we monitor performance, user feedback, and analytics closely. These insights inform ongoing feature refinement, improvements, and issue resolution to keep your product at peak performance.", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop" },
];

export const INDUSTRIES = [
  { title: "eCommerce", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=700&fit=crop" },
  { title: "Healthcare", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=700&fit=crop" },
  { title: "Education", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=700&fit=crop" },
  { title: "Fintech", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=700&fit=crop" },
  { title: "Food & Delivery", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=700&fit=crop" },
  { title: "Real Estate", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=700&fit=crop" },
  { title: "Travel", image: "https://images.unsplash.com/photo-1436491865332-7a61a109db56?w=600&h=700&fit=crop" },
  { title: "Logistics", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=700&fit=crop" },
];

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
    cat: "Mobile Apps",
    tabs: [
      { label: "iOS", techs: ["Swift", "Combine", "CoreData", "UIKit", "MVVM", "RxSwift"] },
      { label: "Android", techs: ["Kotlin", "Java", "MVVM", "Retrofit", "RxJava", "Jetpack"] },
    ],
  },
  {
    cat: "Web Platforms",
    tabs: [
      { label: "Frontend", techs: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Vue.js"] },
      { label: "Backend", techs: ["Node.js", "Express.js", "NestJS", "REST API", "GraphQL", "Socket.io"] },
    ],
  },
  {
    cat: "Cross Platforms",
    tabs: [
      { label: "Frameworks", techs: ["React Native", "Flutter", "Ionic", "Expo", "Xamarin", "Capacitor"] },
    ],
  },
  {
    cat: "Games",
    tabs: [
      { label: "Engines", techs: ["Unity", "Unreal Engine", "Godot", "Cocos2d", "Phaser", "PlayCanvas"] },
    ],
  },
  {
    cat: "Database",
    tabs: [
      { label: "Storage", techs: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase", "DynamoDB"] },
    ],
  },
  {
    cat: "Cloud & DevOps",
    tabs: [
      { label: "Services", techs: ["AWS", "Docker", "Vercel", "Nginx", "GitHub Actions", "Cloudflare"] },
    ],
  },
];
