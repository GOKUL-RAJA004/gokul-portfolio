// ============================================================
// 📝 SITE CONFIGURATION — Edit all your personal details here
// ============================================================
// This is the ONLY file you need to edit to customize the portfolio.
// All sections, links, projects, and metadata are controlled from here.

const siteConfig = {
  // ─── Personal Info ────────────────────────────────────────
  name: "GOKUL",
  firstName: "GOKUL",
  role: "Developer | Designer | Innovator.",
  subtitle: "B.Tech IT Graduate | MBA Candidate",
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
      role: "WordPress Website Operator & SEO Specialist (Freelance)",
      company: "Lofty Agrotech",
      period: "2024 – 2026",
      employmentType: "Freelance",
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
      title: "LYKA ONE — Integrated Business Management Platform",
      category: "Software Development & AI/ML Projects",
      description: "An integrated business management platform concept combining HRMS and SalesFlow CRM, with separate databases, REST API communication, and streamlined business workflows.",
      techStack: ["Python", "Flask", "SQLite", "REST APIs", "Docker", "Web UI"],
      image: "/projects/lykaone_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "Food Spoilage Detection System",
      category: "Software Development & AI/ML Projects",
      description: "An AI/ML-based system designed to identify potential food spoilage using image analysis and sensor data, supporting food safety and waste reduction.",
      techStack: ["Python", "OpenCV", "TensorFlow", "Flask", "Machine Learning", "SQL"],
      image: "/projects/food_spoilage_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "QuickPath — Smart Indoor Navigation System",
      category: "Software Development & AI/ML Projects",
      description: "A smart indoor navigation solution designed to help students and visitors find classrooms, departments, and facilities through indoor pathfinding and voice guidance.",
      techStack: ["Graph Algorithms", "Dijkstra’s Algorithm", "Pathfinding", "Web App", "Voice Interface"],
      image: "/projects/quickpath_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AI-Based IoT Flood Prediction and Real-Time Early Warning System",
      category: "IoT & Smart Technology Projects",
      description: "An IoT-based concept for monitoring rainfall and water levels, estimating flood risk, and providing early warnings through sensor data and live monitoring.",
      techStack: ["ESP32", "IoT Sensors", "MQTT/REST", "Python", "Flask", "PostgreSQL", "Machine Learning"],
      image: "/projects/flood_prediction_cover.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
    {
      title: "AgriLink — Smart Agriculture Platform",
      category: "IoT & Smart Technology Projects",
      description: "A digital agriculture platform concept connecting farmers with agricultural services, machinery rental, workforce resources, crop information, and multilingual assistance.",
      techStack: ["Web Development", "Service Marketplace", "AI-Assisted Access", "Multilingual Support"],
      image: "/projects/agrilink_cover.png",
      liveUrl: "#",
      githubUrl: "https://github.com/GOKUL-RAJA004",
    },
  ],

  // ─── Startup Section: VANEXA GROUP OF COMPANIES ───────────
  startup: {
    parent: "VANEXA GROUP OF COMPANIES",
    name: "VANEXA GROUP OF COMPANIES",
    role: "Founder",
    website: "https://vanexatechhub.com/",
    description:
      "VANEXA GROUP OF COMPANIES is dedicated to building innovative digital solutions and empowering students and professionals through specialized enterprise technology and career development divisions.",
    subcategories: [
      {
        title: "VANEXA TECH HUB PVT. LTD.",
        category: "Technology & Software",
        website: "https://vanexatechhub.com/",
        description:
          "Specialized division focused on software development, digital platforms, AI integration, and innovative web technology solutions.",
        icon: "Code2",
      },
      {
        title: "VANEXA CAREER SOLUTIONS",
        category: "Career & Education",
        website: "https://vanexatechhub.com/",
        description:
          "Dedicated division empowering students and professionals with career counseling, skills guidance, and educational support services.",
        icon: "GraduationCap",
      },
    ],
  },
  // Backward compatibility alias for components referencing siteConfig.elevate
  elevate: {
    name: "VANEXA GROUP OF COMPANIES",
    role: "Founder",
    website: "https://vanexatechhub.com/",
    description:
      "VANEXA GROUP OF COMPANIES is dedicated to building innovative digital solutions and empowering students and professionals through specialized enterprise technology and career development divisions.",
    services: [
      {
        title: "VANEXA TECH HUB PVT. LTD.",
        website: "https://vanexatechhub.com/",
        description:
          "Specialized division focused on software development, digital platforms, AI integration, and innovative web technology solutions.",
        icon: "Code2",
      },
      {
        title: "VANEXA CAREER SOLUTIONS",
        website: "https://vanexatechhub.com/",
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
