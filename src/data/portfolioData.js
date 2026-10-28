export const portfolioData = {
  personal: {
    name: "Rudra Dubey",
    title: "Full Stack Developer & DevOps Engineer",
    location: "Gurugram, India",
    phone: "+91 9557072325",
    phoneUrl: "tel:+919557072325",
    email: "sujaldubey35@gmail.com",
    emailUrl: "mailto:sujaldubey35@gmail.com",
    github: "https://github.com/sujaldubey35",
    linkedin: "https://www.linkedin.com/in/rudra-dubey-477b68280/",
    portfolioUrl: "https://rudraportfolio-rouge.vercel.app/",
    resumeUrl: "/resume.pdf",
    experienceYears: "2+",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Core Projects", value: "3+" },
      { label: "Tech & Cloud Tools", value: "15+" },
    ],
    typingRoles: [
      "Full Stack Developer (2+ Yrs)",
      "DevOps & AWS EC2 Engineer",
      "Published ML Researcher (IJSREM)",
      "FastAPI & React Specialist",
      "Building Scalable Cloud Apps 🚀",
    ],
  },

  summary: {
    headline:
      "Results-driven Full Stack Developer & DevOps Engineer with 2 years of hands-on experience building scalable web applications, microservices, and automated cloud pipelines.",
    paragraphs: [
      "With a strong foundation in full-stack web architecture using React.js, JavaScript (ES6+), FastAPI, Node.js, and MongoDB/MySQL, I engineer responsive single-page interfaces and robust backend microservices.",
      "My engineering practice extends into DevOps—architecting continuous integration and continuous deployment (CI/CD) pipelines with GitHub Actions, containerizing services with Docker, and managing reliable cloud hosting on AWS EC2.",
      "Completed my Master of Computer Applications (MCA) at Galgotias University while building AI-powered SaaS platforms and published peer-reviewed NLP research in IJSREM.",
    ],
  },

  skills: [
    {
      category: "Frontend & Web",
      items: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Bootstrap", "PWA"],
    },
    {
      category: "Backend & Languages",
      items: ["Python", "FastAPI", "Node.js", "Express.js", "JavaScript", "REST APIs"],
    },
    {
      category: "Cloud, DevOps & CI/CD",
      items: [
        "AWS EC2",
        "GitHub Actions (CI/CD)",
        "Docker",
        "Vercel",
        "Git",
        "GitHub",
      ],
    },
    {
      category: "Databases & Storage",
      items: ["MongoDB", "MySQL", "Database Schema Design", "CRUD Optimization"],
    },
    {
      category: "Architecture & Tools",
      items: [
        "Microservices Architecture",
        "REST API Architecture",
        "Postman",
        "VS Code",
      ],
    },
  ],

  experiences: [
    {
      role: "Full Stack Developer & DevOps",
      company: "Eureka Geeks Technology",
      location: "Gr. Noida, India",
      period: "AUG 2025 – Present",
      type: "Full-Time",
      highlight: "Full Stack Development & Cloud DevOps Engineering",
      bullets: [
        "Architecting and developing an AI-powered SaaS Job Portal platform targeting freshers, startups, and universities.",
        "Engineered end-to-end CI/CD automation pipelines with GitHub Actions for automated testing and deployment onto AWS EC2 instances.",
        "Configured and managed AWS EC2 cloud hosting, security groups, and reverse proxies for microservices.",
        "Building responsive single-page web interfaces using React.js, Bootstrap, CSS3, and modern JavaScript.",
        "Engineering backend microservices and RESTful APIs in Express.js and Node.js with high-throughput application logic.",
        "Designing relational MySQL databases to manage user authentication, candidate tracking, and job postings.",
        "Developing Progressive Web App (PWA) capabilities for enhanced mobile responsiveness and offline caching.",
        "Collaborating in team workflows utilizing Git and GitHub for version control, code reviews, and sprint planning.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Eureka Geeks Technology",
      location: "Gr. Noida, India",
      period: "NOV 2024 – MAY 2025",
      type: "Internship",
      highlight: "Full-Stack Web Engineering & Microservices",
      bullets: [
        "Developed and maintained responsive web applications using React.js, JavaScript, Bootstrap, HTML5, and CSS3.",
        "Built and integrated RESTful APIs using FastAPI and Node.js to power dynamic frontend workflows.",
        "Implemented user authentication, form handling, schema data validation, and dynamic UI components.",
        "Worked with MongoDB and MySQL for database schema design, CRUD operations, and query optimization.",
        "Integrated frontend client apps with backend APIs, handling network state, errors, and edge cases.",
        "Utilized Git and GitHub for branch management, collaborative development, and release workflows.",
        "Debugged application issues and enhanced existing modules to optimize overall performance and UX.",
      ],
    },
    {
      role: "Project Intern — GoMedicos",
      company: "Creative Frenzy Private Limited",
      location: "Noida, India",
      period: "FEB 2023",
      type: "Internship",
      highlight: "Healthcare E-Commerce Taxonomy & Platform Category Architecture",
      bullets: [
        "Conducted data collection, analysis, and taxonomy structuring for category building on the GoMedicos healthcare platform.",
        "Curated, standardized, and refined medical and healthcare product catalogs to enhance search filtering, categorization, and user navigation.",
        "Demonstrated strong initiative, high-accuracy dataset validation, and timely project delivery exceeding organizational expectations.",
      ],
    },
  ],

  projects: [
    {
      title: "AI SaaS Job Portal Platform",
      subtitle: "First Job Portal | Fresher Jobs, Entry-Level Jobs & Skilled Freshers",
      desc: "Full-scale recruitment SaaS platform featuring applicant tracking, job listings, and AI-driven candidate recommendation logic.",
      tech: ["React.js", "FastAPI", "MongoDB", "AWS EC2", "GitHub Actions", "PWA"],
      bullets: [
        "Designed an end-to-end recruitment platform with applicant tracking systems, job postings, and AI recommendation logic.",
        "Built modular backend microservices in FastAPI and Node.js for clean separation of concerns.",
        "Automated build and deployment workflows using GitHub Actions CI/CD to maintain continuous deployment on AWS EC2.",
        "Integrated PWA features for mobile-friendly, app-like usability and offline-ready responsiveness.",
      ],
      github: "https://github.com/eurekageeks/First_Job_Job_Potal_Project.git",
      live: "https://firstjob.a1training.in/",
      liveBadge: "Production / AWS EC2",
    },
    {
      title: "Product Review & Sentiment Analysis Web App",
      subtitle: "Published Research Paper & ML App",
      desc: "Interactive sentiment analysis platform (RSR Analyze) evaluating customer product reviews in real-time across English, Hindi, and Hinglish.",
      tech: ["React.js", "Python", "FastAPI", "LinearSVC", "TF-IDF", "Node.js", "MySQL"],
      bullets: [
        "Published research paper in IJSREM Journal (Volume 10, Issue 06, June 2026 | Impact Factor: 8.659 | ISSN: 2582-3930).",
        "Trained on Amazon review datasets with Hinglish normalization, achieving 88% accuracy with sub-5ms low-latency inference.",
        "Engineered full-stack microservices architecture with React frontend, Node.js API gateway, and Python/FastAPI ML inference engine.",
      ],
      github: "https://github.com/sujaldubey35/Sentiment_Analysis.git",
      live: null,
      liveBadge: "IJSREM Published (IF: 8.659)",
      paperUrl: "https://ijsrem.com/download/product-review-sentiment-analysis-using-natural-language-processing-rsr-analyze",
      certificateUrl: "/publication-certificate.pdf",
      pdfUrl: "/research-paper.pdf",
    },
    {
      title: "Full Stack Authentication System",
      subtitle: "Production-Ready Secure Auth & Dashboard",
      desc: "Complete authentication and authorization system with secure JWT tokens, protected routes, and user profile management.",
      tech: ["React.js", "FastAPI", "MongoDB", "JWT", "Tailwind CSS"],
      bullets: [
        "Implemented robust JWT token lifecycle with refresh/access tokens, secure password hashing, and role-based access.",
        "Designed clean, responsive frontend dashboard and forms with real-time field validation.",
        "Structured modular FastAPI backend with clean router architecture and MongoDB database persistence.",
      ],
      github: "https://github.com/sujaldubey35/Full-Stack-Authentication-System.git",
      live: null,
      liveBadge: "Open Source",
    },
  ],

  publications: [
    {
      title: "Product Review & Sentiment Analysis Using Natural Language Processing: RSR ANALYZE",
      journal: "International Journal of Scientific Research in Engineering and Management (IJSREM)",
      issn: "2582-3930",
      impactFactor: "8.659",
      volume: "Volume 10, Issue 06, June 2026",
      authors: "Rishabh Sharma, Rudra Dubey, Swatik Maurya",
      mentor: "Dr. Ankit Kumar (Galgotias University)",
      description:
        "Peer-reviewed research presenting RSR Analyze: a lightweight, real-time sentiment analysis microservice handling noisy, code-mixed Hinglish and English e-commerce reviews. Demonstrates 88% accuracy with sub-5ms inference using LinearSVC with TF-IDF, outperforming transformer deployment overhead.",
      paperUrl: "https://ijsrem.com/download/product-review-sentiment-analysis-using-natural-language-processing-rsr-analyze",
      certificateUrl: "/publication-certificate.pdf",
      pdfUrl: "/research-paper.pdf",
    },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Galgotias University",
      period: "2024 – 2026",
      status: "Completed",
      highlight: "Specialized in Cloud Computing, Software Architecture & Full Stack Systems",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Galgotias University",
      period: "2021 – 2024",
      status: "Completed",
      highlight: "Strong foundation in Data Structures, Algorithms, DBMS, and Web Technologies",
    },
    {
      degree: "12th CBSE (Senior Secondary)",
      institution: "Suditi Global Academy",
      period: "2021",
      status: "Completed",
    },
    {
      degree: "10th CBSE (Secondary School)",
      institution: "Suditi Global Academy",
      period: "2019",
      status: "Completed",
    },
  ],

  certifications: [
    {
      title: "Certificate of Publication (IJSREM)",
      issuer: "International Journal of Scientific Research in Engineering and Management",
      description: "Awarded to Rudra Dubey for scholarly publication: 'Product Review & Sentiment Analysis Using Natural Language Processing: RSR ANALYZE' (ISSN: 2582-3930 | Impact Factor: 8.659 | Vol 10, Issue 6).",
      certificateUrl: "/publication-certificate.pdf",
      paperUrl: "https://ijsrem.com/download/product-review-sentiment-analysis-using-natural-language-processing-rsr-analyze",
      pdfUrl: "/research-paper.pdf",
    },
    {
      title: "MERN Stack Development",
      issuer: "A1TI, Greater Noida",
      description: "Comprehensive hands-on training in MongoDB, Express.js, React.js, and Node.js application engineering.",
    },
  ],

  strengths: [
    "AWS EC2 Cloud Hosting",
    "GitHub Actions CI/CD",
    "Docker Containerization",
    "REST API Architecture",
    "Microservices Design",
  ],

  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
  ],
};
