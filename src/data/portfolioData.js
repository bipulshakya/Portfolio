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
    degree: "NEB +2 in Computer Science",
    institution: "National Examination Board (NEB)",
    years: "2021 – 2023",
    gpa: "",
    honors: "",
    description:
      "Completed higher secondary education with a focus on computer science fundamentals.",
  },
  {
    degree: "BSc. CSIT",
    institution: "Tribhuvan University",
    years: "2023 – Present",
    gpa: "",
    honors: "",
    description:
      "Studying core coursework in software engineering, databases, networking, and computer systems.",
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
      { name: "C", level: 70 },
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
      { name: ".NET", level: 70 },
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
      { name: "Azure", level: 60 },
      { name: "Figma", level: 60 },
    ],
  },
];

export const projects = [
  {
    title: "Summit School Website",
    description:
      "A modern school website built to showcase programs, admissions, and institutional information with a polished, responsive experience.",
    techStack: ["React", "CSS", "Vite"],
    role: "Frontend Developer",
    category: "web",
    github: "",
    live: "https://bipulshakya.github.io/summit-school-website/",
    image: null,
  },
  {
    title: "TODO App",
    description:
      "A simple and efficient task management app focused on daily planning, reminders, and a clean user experience.",
    techStack: ["HTML", "CSS", "JavaScript"],
    role: "Frontend Developer",
    category: "web",
    github: "",
    live: "https://bipulshakya.github.io/TODO-App/",
    image: null,
  },
  {
    title: "Jewellery Management System",
    description:
      "A business-focused inventory and management solution for tracking jewellery products, stock, and customer records.",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    role: "Full Stack Developer",
    category: "web",
    github: "",
    live: "https://bipulshakya.github.io/Jewellery-Management-System/",
    image: null,
  },
  {
    title: "AI Powered Learning Assistant App",
    description:
      "An intelligent learning companion that helps users explore concepts, organize study materials, and enhance their learning journey.",
    techStack: ["React", "Tailwind CSS", "AI APIs"],
    role: "Full Stack Developer",
    category: "web",
    github: "",
    live: "https://bipulshakya.github.io/Ai-Powered-Learning-Assistant-App/",
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
