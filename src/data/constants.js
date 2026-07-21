/* ============================================================
 *  PERSONAL DATA — Edit this file to update your portfolio
 *  All personal details, projects, social links, and contact
 *  information are stored here for easy maintenance.
 * ============================================================ */

// ── Social & Contact Links ──────────────────────────────────
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/gokul-raja-g-218242314",
  github: "https://github.com/GOKUL-RAJA004",
  email: "nitstdgokulraja@gmail.com",
  whatsapp: "https://wa.me/917092260100", // format: https://wa.me/<countrycode><number>
  phone: "+91-7092260100",
  location: "Virudhunagar, Tamil Nadu",
  resumeUrl: "/resume.pdf", // place your resume.pdf in the /public folder
};

// ── Hero / Home Section ─────────────────────────────────────
export const HERO = {
  greeting: "Hello, I'm",
  name: "Gokul Raja G",
  titles: [
    "Software Engineer",
    "Python Developer",
    "UI/UX Designer",
    "Full Stack Developer",
    "WordPress Developer",
  ],
  subtitle:
    "B.Tech IT Graduate | Building intelligent web applications with Python, React & modern cloud technologies",
};

// ── About Section ───────────────────────────────────────────
export const ABOUT = {
  paragraphs: [
    "I'm a 2026 B.Tech Information Technology graduate from Nehru Institute of Technology, Coimbatore, with a CGPA of 8.23. I'm passionate about building scalable, user-centric software solutions that solve real-world problems.",
    "With practical experience in Python, MySQL, Flask, REST API development, and UI/UX Design using Figma, I bring a unique blend of technical depth and design thinking to every project. I'm skilled in WordPress CMS, on-page SEO, and digital content production.",
    "I've demonstrated leadership as a Media Team Lead at Lofty Agrotech, where I manage creative teams and deliver high-impact marketing collateral. I've also presented peer-reviewed research at national academic conferences.",
    "Beyond my technical pursuits, I founded ELEVATE Career Solutions, providing college admission guidance, digital marketing, web development, and career support services — reflecting my entrepreneurial drive and commitment to empowering others.",
  ],
  highlights: [
    { label: "CGPA", value: "8.23" },
    { label: "Projects", value: "5+" },
    { label: "Certifications", value: "6+" },
    { label: "Experience", value: "2+ yrs" },
  ],
};

// ── Skills Section ──────────────────────────────────────────
export const SKILLS = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Web & Backend",
    items: [
      { name: "HTML / CSS", level: 90 },
      { name: "Flask", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "On-Page SEO", level: 75 },
    ],
  },
  {
    category: "Databases",
    items: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 70 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS (DevOps)", level: 65 },
      { name: "Git / GitHub", level: 85 },
    ],
  },
  {
    category: "UI/UX & Design",
    items: [
      { name: "Figma", level: 85 },
      { name: "Poster Design", level: 90 },
      { name: "Photo Editing", level: 80 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "VS Code", level: 90 },
      { name: "MS Office Suite", level: 85 },
    ],
  },
];

// ── Projects Section ────────────────────────────────────────
export const PROJECTS = [
  {
    title: "QuickPath — AI Indoor Navigation",
    description:
      "AI-powered indoor navigation system using Computer Vision and QR code detection to deliver real-time, turn-by-turn directional guidance. Uses Dijkstra's Algorithm for optimal path computation.",
    tech: ["Python", "Flask", "OpenCV", "QR Codes", "Dijkstra's", "REST API"],
    highlights: [
      "Real-time QR code detection for indoor positioning",
      "Dijkstra's Algorithm for shortest path computation",
      "Flask REST API with responsive frontend",
    ],
    type: "Final Year Project",
    github: "https://github.com/GOKUL-RAJA004", // update with actual repo link
    // live: "https://quickpath-demo.vercel.app", // uncomment if you have a live demo
  },
  {
    title: "Fake News Detection — ML & NLP",
    description:
      "ML and NLP-powered web application classifying news articles as real or fake using TF-IDF vectorization and supervised classification models with real-time predictions.",
    tech: ["Python", "Scikit-learn", "NLP", "Flask", "TF-IDF", "ML"],
    highlights: [
      "TF-IDF vectorization for text feature extraction",
      "Real-time news authenticity predictions",
      "Iterative feature engineering for accuracy improvement",
    ],
    type: "ML Project",
    github: "https://github.com/GOKUL-RAJA004",
  },
  {
    title: "AgriLink — Smart Agriculture Platform",
    description:
      "Full-stack smart agriculture marketplace connecting farmers, buyers, and suppliers on a unified digital platform with RESTful APIs and MySQL database.",
    tech: ["Python", "Flask", "MySQL", "REST API", "HTML5", "CSS3", "JavaScript"],
    highlights: [
      "Multi-role user management system",
      "RESTful API for product listing & order management",
      "MySQL schema with transactional data integrity",
    ],
    type: "Full Stack Project",
    github: "https://github.com/GOKUL-RAJA004",
  },
];

// ── Experience Section ──────────────────────────────────────
export const EXPERIENCE = [
  {
    role: "Media Team Lead & Graphic Designer",
    company: "Lofty Agrotech",
    location: "Virudhunagar",
    period: "2024 – Present",
    points: [
      "Led a multi-member creative team, enforcing brand standards and delivering all design assets on schedule.",
      "Produced high-impact marketing collateral — event posters, brochures, and digital graphics — elevating brand identity.",
      "Mentored junior designers and implemented structured creative workflows, improving team output quality.",
      "Collaborated cross-functionally with marketing and operations to align visual content with business objectives.",
    ],
  },
  {
    role: "WordPress Website Operator & SEO Specialist",
    company: "Lofty Agrotech",
    location: "Virudhunagar",
    period: "2024 – Present",
    points: [
      "Managed and maintained company website, ensuring editorial accuracy and structural consistency.",
      "Executed on-page SEO strategies — meta tags, alt-text, strategic keyword integration — improving organic search visibility.",
      "Analyzed website analytics and applied data-driven optimizations enhancing user experience and session retention.",
    ],
  },
];

// ── ELEVATE Career Solutions Section ────────────────────────
export const ELEVATE = {
  tagline: "Empowering Students. Elevating Careers.",
  description:
    "Founded by Gokul Raja G, ELEVATE Career Solutions is a student-centric initiative dedicated to bridging the gap between academic life and professional readiness.",
  services: [
    {
      title: "College Admission Guidance",
      description: "Personalized counseling to help students choose the right institution and program.",
      icon: "🎓",
    },
    {
      title: "Digital Marketing",
      description: "Social media strategy, content creation, and brand building for student ventures.",
      icon: "📱",
    },
    {
      title: "Web Development",
      description: "Custom website design and development for personal branding and businesses.",
      icon: "💻",
    },
    {
      title: "Internship Support",
      description: "Connecting students with relevant industry internship opportunities.",
      icon: "🤝",
    },
    {
      title: "Resume Building",
      description: "Professional resume writing and optimization for job applications.",
      icon: "📄",
    },
    {
      title: "LinkedIn & GitHub Guidance",
      description: "Profile optimization and portfolio building for professional networking.",
      icon: "🔗",
    },
    {
      title: "Project Support",
      description: "Technical guidance and mentoring for academic and personal projects.",
      icon: "🚀",
    },
  ],
};

// ── Education Section ───────────────────────────────────────
export const EDUCATION = [
  {
    degree: "B.Tech — Information Technology",
    institution: "Nehru Institute of Technology, Coimbatore",
    period: "2022 – 2026",
    grade: "CGPA: 8.23 / 10.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "K.V.S Hr. Sec. School, Virudhunagar",
    period: "2021 – 2022",
    grade: "67%",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "K.V.S Hr. Sec. School, Virudhunagar",
    period: "2019 – 2020",
    grade: "72%",
  },
];

// ── Certifications ──────────────────────────────────────────
export const CERTIFICATIONS = [
  "IIT Bombay – Spoken Tutorial: Python 3.4.3 Training",
  "IIT Bombay – Spoken Tutorial: JavaScript Training",
  "IIT Bombay – Spoken Tutorial: RDBMS PostgreSQL Training",
  "Amazon Web Services: DevOps on AWS",
  "Coursera: Fundamentals of Network Communication",
  "Coursera: Fundamentals of Management",
];

// ── Research & Conferences ──────────────────────────────────
export const RESEARCH = [
  {
    title: "Data Visualization of the Observable Universe",
    venue: "National Level Academic Conference, Nehru Institute of Engineering & Technology",
    date: "August 2024",
    description:
      "Presented original research demonstrating applied proficiency in Python scientific computing and data storytelling, recognized for technical innovation among a multi-institutional audience.",
  },
  {
    title: "Energy Consumption in Quantum Computing",
    venue: "National Level Academic Conference, Nehru Institute of Engineering & Technology",
    date: "March 2025",
    description:
      "Conducted a rigorous analytical study on energy efficiency challenges in quantum computing architectures; synthesized academic literature into a peer-reviewed presentation.",
  },
];

// ── Achievements ────────────────────────────────────────────
export const ACHIEVEMENTS = [
  "🏆 2nd Prize — Website Development Competition, Rathinam College",
  "🥇 1st Prize — Photo Editing Competition, NIT Coimbatore",
  "📋 Student Coordinator — Department of IT, NIT Coimbatore",
  "🎯 Student Coordinator — Entrepreneurship Development Cell (EDC), NIT Coimbatore",
  "⚙️ Technical & Executive Coordinator — Innovation & Incubation Center, NIT",
  "⚽ District-Level Under-17 Football Player — Virudhunagar District",
];

// ── Career Objective Section ────────────────────────────────
export const CAREER_OBJECTIVE =
  "Targeting Full Stack Developer, Backend Developer, or Software Engineer positions in product-based companies, MNCs, and high-growth startups. Seeking an opportunity to leverage my technical expertise in Python, full-stack development, and design thinking to build impactful software products while continuously learning and growing in a collaborative engineering culture.";

// ── Contact Form Configuration ──────────────────────────────
// Choose either Formspree OR EmailJS (not both)
export const CONTACT_CONFIG = {
  // ── Option 1: Formspree ──
  // 1. Go to https://formspree.io and create a free account
  // 2. Create a new form and copy your form ID (e.g., "xrgvalwq")
  // 3. Paste the form ID below
  formspreeId: "YOUR_FORMSPREE_ID", // e.g., "xrgvalwq"

  // ── Option 2: EmailJS ──
  // 1. Go to https://www.emailjs.com and create a free account
  // 2. Add an email service and create an email template
  // 3. Copy your Service ID, Template ID, and Public Key
  // 4. Set useEmailJS to true and fill in the values below
  useEmailJS: false,
  emailjsServiceId: "YOUR_SERVICE_ID",
  emailjsTemplateId: "YOUR_TEMPLATE_ID",
  emailjsPublicKey: "YOUR_PUBLIC_KEY",
};

// ── Navigation Links ────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "ELEVATE", href: "#elevate" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];
