// ============================================================
// 📝 SITE CONFIGURATION — Edit all your personal details here
// ============================================================
// This is the ONLY file you need to edit to customize the portfolio.
// All sections, links, projects, and metadata are controlled from here.

const siteConfig = {
  // ─── Personal Info ────────────────────────────────────────
  name: "GOKUL RAJA G",
  firstName: "GOKUL",
  role: "Software Engineer | UI/UX Designer | WordPress Developer | Python Developer",
  tagline: "Building digital experiences that matter.",

  // ─── About ────────────────────────────────────────────────
  about: [
    "I am a B.Tech Information Technology graduate (CGPA: 8.0, 2026) from Nehru Institute of Technology, Coimbatore, with practical experience in Python, MySQL, Flask, REST API development, and UI/UX Design using Figma.",
    "Skilled in WordPress CMS, on-page SEO, and digital content production. Demonstrated ability to lead creative teams, manage end-to-end design workflows, and deliver peer-reviewed research at national academic conferences.",
    "Targeting Full Stack Developer, Backend Developer, or Software Engineer positions in product-based companies, MNCs, and high-growth startups."
  ],

  // ─── Education ────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech — Information Technology",
      institution: "Nehru Institute of Technology, Coimbatore",
      year: "2022 – 2026",
      score: "CGPA: 8.0 / 10.0",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "K.V.S Hr. Sec. School, Virudhunagar",
      year: "2021 – 2022",
      score: "67%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "K.V.S Hr. Sec. School, Virudhunagar",
      year: "2019 – 2020",
      score: "72%",
    }
  ],

  // ─── Career Objective ─────────────────────────────────────
  careerObjective:
    "To leverage my skills in Python development, UI/UX design, and full-stack web development to build innovative, impactful digital solutions, while contributing to organizational growth and advancing my career as a Software Engineer.",

  // ─── Skills ───────────────────────────────────────────────
  skills: {
    programming: ["Python", "SQL", "Java"],
    web: ["HTML", "WordPress", "On-Page SEO"],
    databases: ["MySQL", "PostgreSQL", "MongoDB"],
    cloud: ["AWS (DevOps on AWS)", "Git", "GitHub"],
    design: ["Figma", "Poster Design", "Photo Editing"],
    tools: ["VS Code", "MS Office Suite", "Antigravity"]
  },

  // ─── Experience ───────────────────────────────────────────
  experience: [
    {
      role: "Media Team Lead & Graphic Designer",
      company: "Lofty Agrotech, Coimbatore",
      period: "2024 – 2025",
      responsibilities: [
        "Led a multi-member creative team, enforcing brand standards and consistently delivering all design assets on schedule.",
        "Produced high-impact marketing collateral — event posters, brochures, and digital graphics — elevating brand identity and driving measurable improvements in audience engagement.",
        "Mentored junior designers and implemented structured creative workflows, improving team output quality and delivery consistency.",
        "Collaborated cross-functionally with marketing and operations to ensure visual content aligned with business objectives and campaign KPIs."
      ]
    },
    {
      role: "WordPress Website Operator & SEO Specialist",
      company: "Lofty Agrotech, Coimbatore",
      period: "2024 – Present",
      responsibilities: [
        "Managed and maintained company website, ensuring editorial accuracy and structural consistency across all web properties.",
        "Executed comprehensive on-page SEO strategies — meta tag optimization, alt-text management, and strategic keyword integration — improving organic search visibility.",
        "Analyzed website analytics and applied data-driven optimizations that enhanced user experience and increased average session retention."
      ]
    }
  ],

  // ─── Projects ─────────────────────────────────────────────
  projects: [
    {
      title: "QuickPath — AI-Powered Indoor Navigation System",
      category: "AI / ML",
      description: "Architected an AI-powered indoor navigation system using Computer Vision and QR code detection to deliver real-time, turn-by-turn directional guidance inside large buildings. Implemented Dijkstra's Algorithm for optimal path computation, dynamically calculating the shortest navigable route between any two indoor nodes. Built a Flask-based REST API backend integrated with a responsive frontend, enabling seamless cross-platform access.",
      techStack: ["Python", "Flask", "Computer Vision", "OpenCV", "QR Codes", "Dijkstra's Algorithm", "REST API"],
      image: "/projects/quickpath_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "Fake News Detection — ML & NLP Web Application",
      category: "AI / ML",
      description: "Developed an ML and NLP-powered web application classifying news articles as real or fake using TF-IDF vectorization and supervised classification models. Integrated a Flask REST API with an intuitive frontend interface enabling real-time news authenticity predictions. Achieved model accuracy improvements through iterative feature engineering and hyperparameter tuning.",
      techStack: ["Python", "Scikit-learn", "NLP", "Flask", "TF-IDF", "Machine Learning", "REST API"],
      image: "/projects/fakenews_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AgriLink — Smart Agriculture Platform",
      category: "Full-Stack",
      description: "Designed and developed a full stack smart agriculture marketplace connecting farmers, buyers, and suppliers on a unified digital platform. Built RESTful API endpoints for product listing, order management, and real-time stakeholder communication. Implemented a MySQL relational database schema supporting multi-role user management and transactional data integrity.",
      techStack: ["Python", "Flask", "MySQL", "REST API", "HTML5", "CSS3", "JavaScript"],
      image: "/projects/agrilink_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
  ],

  // ─── ELEVATE Career Solutions ─────────────────────────────
  elevate: {
    name: "ELEVATE Career Solutions",
    role: "Co-Founder and CEO",
    description:
      "Founded and lead ELEVATE Career Solutions, empowering students and professionals with comprehensive career support services.",
    services: [
      {
        title: "College Admission Guidance",
        description: "Expert counseling for university selection and application strategy.",
        icon: "GraduationCap",
      },
      {
        title: "Digital Marketing",
        description: "Brand building, social media strategy, and online presence development.",
        icon: "TrendingUp",
      },
      {
        title: "Web Development",
        description: "Custom websites and web applications tailored to business needs.",
        icon: "Code2",
      },
      {
        title: "Internship Support",
        description: "Connecting students with valuable internship opportunities.",
        icon: "Briefcase",
      },
      {
        title: "Resume Building",
        description: "Professional resume crafting that stands out to recruiters.",
        icon: "FileText",
      },
      {
        title: "LinkedIn & GitHub Guidance",
        description: "Profile optimization for maximum professional visibility.",
        icon: "Users",
      },
      {
        title: "Project Support",
        description: "End-to-end guidance on academic and professional projects.",
        icon: "Layers",
      },
    ],
  },

  // ─── Certifications & Achievements ────────────────────────
  certifications: [
    "IIT Bombay – Spoken Tutorial Python 3.4.3 Training",
    "IIT Bombay – Spoken Tutorial JavaScript Training",
    "IIT Bombay – Spoken Tutorial RDBMS PostgreSQL Training",
    "Amazon Web Services DevOps on AWS",
    "Coursera Fundamentals of Network Communication",
    "Coursera Fundamentals of Management"
  ],
  achievements: [
    {
      title: "Website Development Competition",
      organization: "Rathinam College",
      description: "Awarded 2nd Prize for applied web development skills under competitive conditions."
    },
    {
      title: "Photo Editing Competition",
      organization: "Nehru Institute of Engineering & Technology",
      description: "Awarded 1st Prize for design excellence and creative execution."
    },
    {
      title: "Student Coordinator",
      organization: "Department of Information Technology, NIT Coimbatore",
      description: "Led academic events and department-wide student engagement initiatives."
    },
    {
      title: "Student Coordinator",
      organization: "Entrepreneurship Development Cell (EDC), NIT Coimbatore",
      description: "Organized entrepreneurial events and promoted startup culture."
    },
    {
      title: "Technical & Executive Coordinator",
      organization: "Innovation & Incubation Center, NIT Coimbatore",
      description: "Managed technical operations and supported innovation project teams."
    },
    {
      title: "District-Level Athlete",
      organization: "Virudhunagar District",
      description: "Represented Virudhunagar District as an Under-17 Football Player; demonstrated teamwork, discipline, and competitive leadership."
    }
  ],
  research: [
    {
      title: "Data Visualization of the Observable Universe",
      date: "August 2024",
      conference: "National Level Academic Conference · Nehru Institute of Engineering & Technology",
      description: "Presented original research demonstrating applied proficiency in Python scientific computing and data storytelling, recognized for technical innovation among a multi-institutional audience."
    },
    {
      title: "Energy Consumption in Quantum Computing",
      date: "March 2025",
      conference: "National Level Academic Conference · Nehru Institute of Engineering & Technology",
      description: "Conducted a rigorous analytical study on energy efficiency challenges in quantum computing architectures; synthesized academic literature and primary data into a peer-reviewed presentation."
    }
  ],

  // ─── Contact & Social Links ───────────────────────────────
  contact: {
    email: "hello.gokulraja@gmail.com",
    phone: "+91-7092260100",
    location: "Virudhunagar, Tamil Nadu",
  },

  social: {
    linkedin: "https://linkedin.com/in/gokul-raja-g-218242314",
    github: "https://github.com/GOKUL-RAJA004",
    whatsapp: "https://wa.me/917092260100",
  },

  // ─── Resume & Profile Photo ───────────────────────────────
  resumePath: "/resume.pdf",
  profilePhoto: "/profile.png",

  // ─── SEO & Metadata ───────────────────────────────────────
  seo: {
    title: "GOKUL RAJA G — Software Engineer & Python Developer",
    description:
      "Portfolio of GOKUL RAJA G — Software Engineer, Python Developer, UI/UX Designer, and WordPress Developer.",
    url: "https://gokulrajag.vercel.app", 
    ogImage: "/og-image.png",
    twitterHandle: "@gokulrajag", 
  },
};

export default siteConfig;
