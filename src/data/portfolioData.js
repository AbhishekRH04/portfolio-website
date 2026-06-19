// ============================================================
// PORTFOLIO DATA — derived from Abhishek Ramesh Halagatti resume
// ============================================================

export const personalInfo = {
  name: "Abhishek Halagatti",
  fullName: "Abhishek Ramesh Halagatti",
  title: "Java Backend Developer",
  roles: [
    "Java Backend Developer",
    "Spring Boot Engineer",
    "Software Engineer",
    "Full Stack Java Developer",
    "Backend Architect",
  ],
  email: "abhishekhalagatti270@gmail.com",
  phone: "+91-7899908843",
  linkedin: "https://www.linkedin.com/in/abhishek-ramesh-halagatti-8453682a1/",
  github: "https://github.com/AbhishekRH04",
  location: "Hubli, Karnataka, India",
  availability: "Available June 2026",
  resumeUrl: "/resume.pdf",
};

export const summary = `Final-year Information Science Engineering student (graduating 2026) with a strong command of Java, OOP, Data Structures & Algorithms, and backend development with Spring Boot. I architect and deliver RESTful web applications end-to-end — from layered Controller–Service–Repository design and GoF Design Patterns to JUnit 5 TDD and Docker containerization. I thrive at building scalable, maintainable systems and am eager to contribute to engineering teams that care about code quality and thoughtful architecture.`;

export const skills = {
  backend: [
    { name: "Java", level: 92, icon: "java" },
    { name: "Spring Boot", level: 88, icon: "spring" },
    { name: "Spring MVC", level: 85, icon: "spring" },
    { name: "Spring Data JPA", level: 84, icon: "spring" },
    { name: "Hibernate / JPA", level: 82, icon: "java" },
    { name: "REST APIs", level: 90, icon: "api" },
  ],
  database: [
    { name: "MySQL", level: 85, icon: "mysql" },
    { name: "PostgreSQL", level: 78, icon: "postgres" },
    { name: "JDBC", level: 80, icon: "java" },
  ],
  fundamentals: [
    { name: "Data Structures & Algorithms", level: 88, icon: "dsa" },
    { name: "OOP & Design Patterns (GoF)", level: 87, icon: "patterns" },
    { name: "MVC Architecture", level: 86, icon: "arch" },
    { name: "Multithreading Concepts", level: 75, icon: "thread" },
    { name: "SDLC / TDD", level: 82, icon: "sdlc" },
  ],
  tools: [
    { name: "Git & GitHub", level: 88, icon: "git" },
    { name: "Docker", level: 74, icon: "docker" },
    { name: "JUnit 5 / Mockito", level: 82, icon: "test" },
    { name: "Postman", level: 85, icon: "postman" },
    { name: "GitHub Actions (CI/CD)", level: 72, icon: "actions" },
    { name: "Swagger / OpenAPI", level: 80, icon: "swagger" },
  ],
  frontend: [
    { name: "HTML5 / CSS3", level: 78, icon: "html" },
    { name: "JavaScript", level: 70, icon: "js" },
    { name: "React", level: 62, icon: "react" },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Inventory Management System",
    subtitle: "Full-Stack Enterprise Web Application",
    description:
      "End-to-end inventory platform for product, stock, supplier, and order management with role-based workflows. Built with a clean Controller–Service–Repository layered architecture, Factory & Strategy Design Patterns, and >80% test coverage via JUnit 5 + Mockito TDD.",
    highlights: [
      "Designed and exposed 15+ RESTful API endpoints covering all CRUD operations",
      "Enforced data integrity via Hibernate/JPA with MySQL; applied Factory & Strategy Design Patterns for order creation and discount logic",
      "Achieved >80% Service-layer code coverage using JUnit 5 + Mockito (TDD approach)",
      "Containerized the application and MySQL with Docker Compose for reproducible deployments",
      "Documented all APIs with Swagger/OpenAPI following SDLC best practices",
    ],
    tech: ["Java", "Spring Boot", "MySQL", "REST APIs", "JUnit 5", "Mockito", "Docker", "Swagger"],
    github: "https://github.com/AbhishekRH04",
    live: null,
    year: "2026",
    status: "Completed",
    featured: true,
  },
  {
    id: 2,
    title: "Student Management System",
    subtitle: "Secure RESTful Backend Service",
    description:
      "Production-grade student-record management backend with JWT authentication, role-based access control (Admin / Teacher / Student), and automated CI via GitHub Actions. Demonstrates security-aware API design, clean entity–DTO separation, and full TDD discipline.",
    highlights: [
      "Built RESTful CRUD endpoints using Spring Boot and Spring Data JPA (Repository Pattern) with proper HTTP status codes and global exception handling",
      "Implemented JWT-based authentication with role-based access control across Admin, Teacher, and Student roles",
      "Wrote JUnit 5 integration tests for all REST endpoints; set up GitHub Actions CI to run tests on every push",
      "Applied clean MVC architecture with entity–DTO separation for long-term maintainability and scalability",
    ],
    tech: ["Spring Boot", "Spring Data JPA", "MySQL", "JWT", "JUnit 5", "GitHub Actions", "REST APIs"],
    github: "https://github.com/AbhishekRH04",
    live: null,
    year: "2025",
    status: "Completed",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Information Science Engineering",
    institution: "Jawaharlal Nehru New College of Engineering",
    location: "Shimoga, Karnataka",
    period: "2022 – 2026",
    score: "9.0 / 10.0",
    scoreLabel: "CGPA",
    status: "Final Year",
    highlights: [
      "Consistent academic excellence across all semesters",
      "Strong focus on core CS fundamentals, algorithms, and system design",
      "Built production-grade Spring Boot projects as part of curriculum and personal learning",
    ],
  },
  {
    id: 2,
    degree: "Pre-University Certificate (PCMB)",
    field: "Physics, Chemistry, Mathematics, Biology",
    institution: "Government PU College",
    location: "Gadag, Karnataka",
    period: "2020 – 2022",
    score: "94.6%",
    scoreLabel: "Score",
    status: "Completed",
    highlights: [],
  },
  {
    id: 3,
    degree: "SSLC",
    field: "Karnataka State Board",
    institution: "Smt. Ningamma S. Hugar High School",
    location: "Annigeri, Dharwad",
    period: "2019 – 2020",
    score: "93.04%",
    scoreLabel: "Score",
    status: "Completed",
    highlights: [],
  },
];

export const certifications = [
  {
    id: 1,
    title: "Data Structures and Algorithms Using Java",
    issuer: "NPTEL",
    year: "2025",
    credentialUrl: "#",
    icon: "nptel",
  },
  {
    id: 2,
    title: "The Complete SQL Bootcamp",
    issuer: "Udemy",
    year: "2025",
    credentialUrl: "#",
    icon: "udemy",
  },
  {
    id: 3,
    title: "Programming in Java",
    issuer: "NPTEL",
    year: "2024",
    credentialUrl: "#",
    icon: "nptel",
  },
];

export const achievements = [
  {
    id: 1,
    metric: "9.0",
    unit: "CGPA",
    label: "Academic Excellence",
    description: "Consistent top performer throughout B.E. in Information Science Engineering",
    icon: "academic",
  },
  {
    id: 2,
    metric: "15+",
    unit: "APIs",
    label: "REST Endpoints Built",
    description: "Designed and exposed production-grade RESTful API endpoints across projects",
    icon: "api",
  },
  {
    id: 3,
    metric: ">80%",
    unit: "Coverage",
    label: "Test Code Coverage",
    description: "Achieved >80% Service-layer code coverage via JUnit 5 + Mockito TDD",
    icon: "test",
  },
  {
    id: 4,
    metric: "3",
    unit: "Certs",
    label: "NPTEL & Udemy Certified",
    description: "Certified in Java, DSA, and SQL from NPTEL and Udemy",
    icon: "cert",
  },
];

export const strengths = [
  "Deep command of Data Structures, Algorithms, OOP, and GoF Design Patterns applied in real projects",
  "Solid grasp of the full SDLC — requirements → design → implementation → TDD → Docker deployment",
  "Security-aware API design: JWT authentication, role-based access control, global exception handling",
  "CI/CD discipline via GitHub Actions; Docker Compose for consistent, reproducible environments",
  "Self-driven learner pursuing NPTEL and Udemy certifications and applying concepts immediately in code",
  "Clear communicator across technical and non-technical audiences; comfortable in agile teams",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
