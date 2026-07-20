// ============================================================
// portfolioData.js — All portfolio content lives here.
// Update your details below; the components read from this file.
// ============================================================

export const personal = {
  name: "Bipul Shakya",
  tagline: "Educator & Full Stack Developer",
  bio: `Passionate educator and full-stack developer with a unique blend of classroom expertise and software engineering skills. I design engaging curricula that make complex topics accessible, and I build robust, scalable web applications that solve real-world problems. With experience spanning both traditional teaching environments and modern tech teams, I bring empathy-driven communication, analytical thinking, and a commitment to lifelong learning to every role I take on.`,
  location: "Kathmandu, Nepal",
  email: "bipulshakya47@gmail.com",
  phone: "+977 9860691487",
  linkedin: "https://www.linkedin.com/in/bipul-shakya-5a299a286/",
  github: "https://github.com/bipulshakya",
  resumeFile: "/resume.pdf",
};

export const stats = [
  { label: "Years Teaching", value: "4+" },
  { label: "Projects Built", value: "15+" },
  { label: "Students Mentored", value: "500+" },
  { label: "Technologies", value: "20+" },
];

export const education = [
  {
    degree: "Bachelor of Education (B.Ed)",
    institution: "Tribhuvan University",
    years: "2020 – 2024",
    gpa: "",
    honors: "Major in Computer Science Education",
    description:
      "Focused on pedagogy, curriculum design, and instructional technology for secondary and higher-secondary level computer science.",
  },
  {
    degree: "Bachelor of Science in Computer Science (BSc. CSIT)",
    institution: "Tribhuvan University",
    years: "2018 – 2022",
    gpa: "",
    honors: "",
    description:
      "Core coursework in data structures, algorithms, database systems, software engineering, and networking.",
  },
];

export const certifications = [
  "Teaching License — Nepal Government (Secondary Level)",
  "Google Classroom Certified Educator",
  "React — The Complete Guide (Udemy)",
  "Python for Everybody (Coursera)",
  "AWS Cloud Practitioner Essentials",
];

export const teachingSkills = [
  { name: "Curriculum Design", icon: "📝" },
  { name: "Classroom Management", icon: "🏫" },
  { name: "Lesson Planning", icon: "📋" },
  { name: "Google Classroom", icon: "📚" },
  { name: "Moodle LMS", icon: "🖥️" },
  { name: "Assessment Design", icon: "✅" },
  { name: "Student Mentoring", icon: "🤝" },
  { name: "Interactive Teaching", icon: "🎯" },
  { name: "E-Learning Content", icon: "🎬" },
  { name: "Languages: English & Nepali", icon: "🌐" },
  { name: "Project-Based Learning", icon: "🔬" },
  { name: "Educational Technology", icon: "💡" },
];

export const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 70 },
      { name: "C++", level: 65 },
      { name: "TypeScript", level: 75 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "Django", level: 70 },
      { name: "Next.js", level: 65 },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 75 },
      { name: "Firebase", level: 70 },
      { name: "AWS", level: 60 },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Docker", level: 65 },
      { name: "VS Code", level: 95 },
      { name: "Linux CLI", level: 75 },
      { name: "Figma", level: 60 },
    ],
  },
];

export const projects = [
  {
    title: "EduTrack LMS",
    description:
      "A full-featured learning management system for schools — course creation, assignments, grading, and student progress tracking.",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    role: "Full Stack Developer",
    category: "education",
    github: "https://github.com/bipulshakya",
    live: "",
    image: null,
  },
  {
    title: "DevConnect",
    description:
      "A social networking platform for developers to share projects, collaborate, and find job opportunities in the tech community.",
    techStack: ["React", "Express.js", "PostgreSQL", "JWT"],
    role: "Full Stack Developer",
    category: "web",
    github: "https://github.com/bipulshakya",
    live: "",
    image: null,
  },
  {
    title: "QuizMaster Pro",
    description:
      "An interactive quiz and assessment platform for teachers — auto-grading, analytics dashboard, and question bank management.",
    techStack: ["React", "Django", "PostgreSQL", "Chart.js"],
    role: "Lead Developer",
    category: "education",
    github: "https://github.com/bipulshakya",
    live: "",
    image: null,
  },
  {
    title: "TaskFlow",
    description:
      "A project management tool with Kanban boards, real-time collaboration, and team analytics — inspired by Trello.",
    techStack: ["Next.js", "Firebase", "Tailwind CSS"],
    role: "Frontend Developer",
    category: "web",
    github: "https://github.com/bipulshakya",
    live: "",
    image: null,
  },
];

export const experience = [
  {
    role: "Computer Science Teacher",
    type: "teaching",
    institution: "XYZ Higher Secondary School",
    dates: "2022 – Present",
    bullets: [
      "Designed and delivered the full computer science curriculum for grades 11–12, covering programming, data structures, and web development.",
      "Introduced project-based learning that increased student engagement by 40% and improved exam pass rates.",
      "Mentored 50+ students in competitive programming and science fairs, with multiple district-level winners.",
    ],
  },
  {
    role: "Full Stack Developer (Freelance)",
    type: "tech",
    institution: "Self-Employed",
    dates: "2021 – Present",
    bullets: [
      "Built and deployed 10+ web applications for clients across education, e-commerce, and community sectors.",
      "Developed a school management system used by 3 institutions, handling 2,000+ student records.",
      "Maintained 98% client satisfaction rate through clear communication and iterative development.",
    ],
  },
  {
    role: "Teaching Assistant",
    type: "teaching",
    institution: "Tribhuvan University — Dept. of Computer Science",
    dates: "2020 – 2022",
    bullets: [
      "Assisted professors in lab sessions for C programming and Database Management courses.",
      "Created supplementary learning materials and tutorials used by 200+ undergraduate students.",
    ],
  },
  {
    role: "Web Developer Intern",
    type: "tech",
    institution: "ABC Tech Solutions, Kathmandu",
    dates: "2020 – 2021",
    bullets: [
      "Collaborated on the frontend of a SaaS product serving 500+ business clients using React and Redux.",
      "Optimized page load times by 35% through code splitting and lazy loading techniques.",
    ],
  },
];

export const achievements = [
  {
    title: "Best Teacher Award",
    description: "Recognized for innovative teaching methods — XYZ School, 2023",
    icon: "🏆",
  },
  {
    title: "Hackathon Finalist",
    description: "Top 5 at Nepal Engineering College Hackathon, 2022",
    icon: "💻",
  },
  {
    title: "Workshop Conductor",
    description:
      "Led workshops on 'Web Development for Beginners' at 3 community colleges",
    icon: "🎤",
  },
  {
    title: "Open Source Contributor",
    description:
      "Active contributor to educational open-source projects on GitHub",
    icon: "🌟",
  },
  {
    title: "Community Volunteer",
    description:
      "Taught basic computer literacy to 100+ underprivileged students through NGO programs",
    icon: "❤️",
  },
  {
    title: "Technical Blog Author",
    description:
      "Published articles on React patterns, Python tips, and CS education pedagogy",
    icon: "✍️",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
