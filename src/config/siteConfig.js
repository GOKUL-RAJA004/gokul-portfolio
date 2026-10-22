// ============================================================
// 📝 SITE CONFIGURATION — Edit all your personal details here
// ============================================================
// This is the ONLY file you need to edit to customize the portfolio.
// All sections, links, projects, and metadata are controlled from here.

const siteConfig = {
  // ─── Personal Info ────────────────────────────────────────
  name: "GOKUL",
  firstName: "GOKUL",
  role: "Developer. Designer. Innovator.",
  tagline: "Building meaningful digital solutions where technology meets creativity.",

  // ─── About ────────────────────────────────────────────────
  about: [
    "I’m an Information Technology graduate currently pursuing an MBA, passionate about building innovative digital solutions that combine technology, functionality, and user-focused design.",
    "My expertise spans Python development, full-stack applications, machine learning, UI/UX design, and web technologies. I also bring experience in WordPress website management, SEO, graphic design, and creative team coordination at Lofty Agrotech, along with a strong interest in research and innovation.",
    "I aim to develop impactful, scalable, and user-centric solutions while continuously expanding my technical and professional capabilities. I’m seeking opportunities as a Software Engineer, Python Developer, or Full Stack Developer where I can contribute to meaningful projects, collaborate with talented teams, and grow within product-based companies, MNCs, and innovative startups."
  ],

  // ─── Education ────────────────────────────────────────────
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Nehru Institute of Technology, Coimbatore",
      year: "2022 – 2026",
      score: "CGPA: 8.0 / 10.0",
    },
    {
      degree: "Master of Business Administration (MBA) — Currently Pursuing",
      institution: "Narayanaguru College of Engineering",
      year: "Currently Pursuing",
      score: "In Progress",
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
    "To leverage my skills in Python development, full-stack web applications, machine learning, and UI/UX design to build innovative, impactful digital solutions, while contributing to organizational growth and advancing my career as a Software Engineer.",

  // ─── Skills ───────────────────────────────────────────────
  skills: {
    programming: ["Python", "SQL", "Java", "JavaScript"],
    web: ["Full-Stack Web Development", "Flask", "REST APIs", "WordPress", "SEO", "HTML", "CSS"],
    databases: ["MySQL", "SQL", "PostgreSQL", "MongoDB"],
    cloud: ["Git and GitHub", "AWS (DevOps on AWS)"],
    design: ["UI/UX Design", "Figma", "Poster Design", "Photo Editing"],
    tools: ["Machine Learning", "AI/ML", "Scikit-learn", "OpenCV", "VS Code", "MS Office Suite"]
  },

  // ─── Experience ───────────────────────────────────────────
  experience: [
    {
      role: "WordPress Website Operator & SEO Specialist",
      company: "Lofty Agrotech",
      period: "2024 – Present",
      responsibilities: [
        "Managed and maintained the company website using WordPress.",
        "Worked on website content, on-page SEO, meta tags, image alt text, and keywords.",
        "Reviewed website analytics and website usability."
      ]
    },
    {
      role: "Media Team Lead & Graphic Designer",
      company: "Lofty Agrotech",
      period: "2024 – 2025",
      responsibilities: [
        "Created posters, brochures, and digital graphics.",
        "Maintained visual brand consistency.",
        "Coordinated creative work and collaborated with marketing and operations."
      ]
    }
  ],

  // ─── Projects ─────────────────────────────────────────────
  projects: [
    {
      title: "LYKA ONE: Integrated Business Management Platform",
      category: "Software Development & AI/ML Projects",
      description: "An enterprise application concept combining two independent systems: HRMS (Employee and HR management using Flask) and SalesFlow CRM (Sales and customer relationship management). Separate databases and REST API communication, featuring business workflow validation, employee creation, and idempotent processing.",
      techStack: ["Python", "Flask", "SQLite", "REST APIs", "Docker", "Web UI"],
      image: "/projects/lykaone_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AI-Based Customer Intelligence and Business Decision Support System",
      category: "Software Development & AI/ML Projects",
      description: "An AI/ML platform for understanding customer behavior and supporting business decisions. Features customer segmentation, customer churn prediction, interactive business analytics dashboards, and data-driven decision support.",
      techStack: ["Python", "Pandas", "scikit-learn", "XGBoost", "SQL", "React", "Flask"],
      image: "/projects/customer_intelligence_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "QuickPath: Smart Indoor Navigation System",
      category: "Software Development & AI/ML Projects",
      description: "A university indoor navigation concept designed to help students and visitors locate departments, classrooms, and facilities. Graph-based navigation using Dijkstra's algorithm, multi-floor route planning, Tamil-first interface and voice guidance, designed to work without GPS or an internet connection.",
      techStack: ["Graph Algorithms", "Dijkstra's Algorithm", "Pathfinding", "Mobile-Friendly Web App", "Voice Interface"],
      image: "/projects/quickpath_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "Fake News Detection — Machine Learning Web Application",
      category: "Software Development & AI/ML Projects",
      description: "Developed an ML and NLP-powered web application classifying news articles as real or fake using TF-IDF vectorization and supervised classification models. Integrated a Flask REST API with an intuitive frontend interface enabling real-time news authenticity predictions.",
      techStack: ["Python", "Scikit-learn", "NLP", "TF-IDF", "Flask"],
      image: "/projects/fakenews_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AI-Based IoT Flood Prediction and Real-Time Early Warning System",
      category: "IoT & Smart Technology Projects",
      description: "A proposed system to monitor rainfall and water levels, estimate flood risk, and send early warnings. Features ESP32-based sensor monitoring, machine-learning-based flood risk prediction, live monitoring dashboard, and alerts through notifications, siren, or communication modules.",
      techStack: ["ESP32", "Sensors", "MQTT / REST", "Python", "Flask", "PostgreSQL", "ML", "React"],
      image: "/projects/flood_prediction_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AgriLink: Smart Agriculture Platform",
      category: "IoT & Smart Technology Projects",
      description: "A digital agriculture platform concept connecting farmers with agricultural services and resources. Farm machinery rental and booking, agricultural workers and service listings, crop-related services and information, with multilingual access and voice-assisted AI.",
      techStack: ["Python", "Flask", "MySQL", "REST APIs", "HTML", "CSS", "JavaScript", "AI-Assisted Access"],
      image: "/projects/agrilink_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
  ],

  // ─── Startup Section: VENEXA GROUP OF COMPANIES ───────────
  startup: {
    parent: "VENEXA GROUP OF COMPANIES",
    name: "VENEXA GROUP OF COMPANIES",
    role: "Founder",
    description:
      "VENEXA GROUP OF COMPANIES is dedicated to building innovative digital solutions and empowering students and professionals through specialized enterprise technology and career development divisions.",
    subcategories: [
      {
        title: "VENEXA TECH HUB PVT. LTD.",
        category: "Technology & Software",
        description:
          "Specialized division focused on software development, digital platforms, AI integration, and innovative web technology solutions.",
        icon: "Code2",
      },
      {
        title: "VENEXA CAREER SOLUTIONS",
        category: "Career & Education",
        description:
          "Dedicated division empowering students and professionals with career counseling, skills guidance, and educational support services.",
        icon: "GraduationCap",
      },
    ],
  },
  // Backward compatibility alias for components referencing siteConfig.elevate
  elevate: {
    name: "VENEXA GROUP OF COMPANIES",
    role: "Founder",
    description:
      "VENEXA GROUP OF COMPANIES is dedicated to building innovative digital solutions and empowering students and professionals through specialized enterprise technology and career development divisions.",
    services: [
      {
        title: "VENEXA TECH HUB PVT. LTD.",
        description:
          "Specialized division focused on software development, digital platforms, AI integration, and innovative web technology solutions.",
        icon: "Code2",
      },
      {
        title: "VENEXA CAREER SOLUTIONS",
        description:
          "Dedicated division empowering students and professionals with career counseling, skills guidance, and educational support services.",
        icon: "GraduationCap",
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
    currentLocation: "Coimbatore, Tamil Nadu, India",
    nativePlace: "Virudhunagar, Tamil Nadu, India",
    location: "Coimbatore, Tamil Nadu, India (Native: Virudhunagar)",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/gokul-raja-g-218242314/",
    github: "https://github.com/GOKUL-RAJA004",
    whatsapp: "https://wa.me/917092260100",
  },

  // ─── Resume & Profile Photo ───────────────────────────────
  resumePath: "/resume.pdf",
  profilePhoto: "/profile.png",

  // ─── SEO & Metadata ───────────────────────────────────────
  seo: {
    title: "Gokul Raja G — Software Engineer | Python Developer | Full Stack Developer",
    description:
      "Portfolio of Gokul Raja G — Software Engineer, Python Developer, and Full Stack Developer based in Coimbatore, Tamil Nadu, India.",
    url: "https://gokul-portfolio-rho.vercel.app", 
    ogImage: "/og-image.png",
    twitterHandle: "@gokulrajag", 
  },
};

export default siteConfig;
