import {
  PersonalInfo,
  EducationItem,
  SkillCategory,
  Project,
  JourneyMilestone,
  BeyondCodeInterest
} from '../types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "ARYAN KUMAR",
  role: "Software Engineer",
  badge: "Available for Opportunities",
  tagline: "Computer Science student passionate about building useful software, solving problems, and turning ideas into real-world applications.",
  shortBio: "I am an enthusiastic Computer Science undergraduate with a deep curiosity for software engineering, web architectures, and algorithms. Driven by the thrill of turning logic into scalable applications, I build practical tools designed for real-world utility.",
  fullBio: "As a 2nd-year Computer Science and Engineering student at Lovely Professional University, I focus on core software fundamentals — from Data Structures and Algorithms to modern web development. I believe in clean code, pragmatic design, and consistent learning through building real-world projects.",
  college: "Lovely Professional University, Kapurthala, Punjab",
  degree: "Bachelor of Technology (B.Tech)",
  branch: "Computer Science and Engineering",
  currentYear: "2nd Year",
  gradYear: "2029",
  location: "Punjab, India",
  email: "aryanramgarh41@gmail.com",
  github: "https://github.com/aryan-kr02",
  linkedin: "https://www.linkedin.com/in/aryannnkumar",
  resumeUrl: "https://drive.google.com/file/d/13bM31HcKvG3TMUCH34wlXfivq0fGzcbp/view?usp=sharing",
  profilePhoto: "https://lh3.googleusercontent.com/d/1XmgKyHb9y04pp2h6HuC2Pc5rdM8BxOXA",
  careerGoal: "My goal is to build simple, reliable, and user-friendly software that solves real-world problems while continually growing as a developer."
};

export const educationHistory: EducationItem[] = [
  {
    id: "grad-btech",
    level: "Graduation — B.Tech",
    institution: "Lovely Professional University",
    boardOrUniversity: "Kapurthala, Punjab",
    field: "Computer Science & Engineering",
    duration: "2024 – 2028 (Expected)",
    score: "7.44 CGPA",
    scoreLabel: "1st Year CGPA",
    scoreDetails: {
      semesters: [
        { term: "1st Semester", score: "7.78", type: "TGPA" },
        { term: "2nd Semester", score: "7.22", type: "TGPA" }
      ],
      overallCgpa: "7.44 (1st Year)"
    },
    highlight: true
  },
  {
    id: "class-12",
    level: "Class XII (Senior Secondary)",
    institution: "Pitts Modern School, Gomia",
    boardOrUniversity: "Senior Secondary Education",
    field: "Science Stream",
    duration: "Secondary Higher Studies",
    score: "75%",
    scoreLabel: "Board Result",
    highlight: false
  },
  {
    id: "class-10",
    level: "Class X (Secondary)",
    institution: "D.A.V Public School, Ara Kuju",
    boardOrUniversity: "Secondary School Certificate",
    duration: "Foundation & Secondary Studies",
    score: "86%",
    scoreLabel: "Board Result",
    highlight: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    description: "Core syntax, strongly-typed languages, and scripting fundamentals",
    skills: [
      { name: "C++", highlight: true },
      { name: "Python", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "HTML" },
      { name: "CSS" }
    ]
  },
  {
    id: "cs-fundamentals",
    title: "Computer Science Core",
    description: "Foundational theory, system design, and algorithmic problem solving",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true },
      { name: "Object-Oriented Programming (OOP)", highlight: true },
      { name: "Database Systems (DBMS)", highlight: true },
      { name: "Computer Networks", highlight: false },
      { name: "Operating Systems", highlight: false },
      { name: "Software Engineering Principles", highlight: false }
    ]
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    description: "Daily developer workflows, interface design, and AI-accelerated tooling",
    skills: [
      { name: "VS Code", highlight: true },
      { name: "Git", highlight: true },
      { name: "GitHub", highlight: true },
      { name: "Figma", highlight: true },
      { name: "AI Development Tools", highlight: true }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "attendance-tracker",
    title: "Attendance Tracker",
    category: "Full-Stack",
    tagline: "Smart student attendance analytics & threshold planner",
    description: "A student-focused attendance management website that helps students calculate their attendance percentage, track subjects, calculate required attendance, and determine how many classes they can safely miss while maintaining minimum criteria.",
    longDescription: "Attendance Tracker was built to solve a common student dilemma: balancing rigorous academic schedules while maintaining mandatory attendance criteria (e.g. 75%). It calculates required class streaks and safe bunk allowances in real-time.",
    problemSolved: "Eliminates guesswork in student attendance tracking by giving real-time predictive calculations on future required attendances.",
    keyFeatures: [
      "Real-time subject-wise percentage and safe margin calculations",
      "Dynamic streak calculator ('How many more classes needed to reach 75%?')",
      "Safe miss allowance estimator with color-coded safety indicators",
      "Local storage persistence for offline readiness"
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    githubUrl: "https://github.com/aryan-kr02/Attendance-Tracker",
    liveUrl: "https://aryan-kr02.github.io/Attendance-Tracker/",
    featured: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=900&auto=format&fit=crop"
  },
  {
    id: "pg-finder",
    title: "PG Finder",
    category: "Full-Stack",
    tagline: "Student accommodation & PG discovery platform",
    description: "An accommodation finder tailored for university students to search, compare, and filter verified PGs, hostels, and rental stays with authentic amenities, pricing, and distance metrics.",
    longDescription: "Currently being built to streamline the search for nearby student accommodations, verified PGs, and room rentals with real-time filters for budget, food availability, security, and proximity to campus.",
    problemSolved: "Simplifies the difficult process of finding reliable, affordable, and verified student housing near universities.",
    keyFeatures: [
      "Search and filter PGs by location, budget, room sharing, and amenities",
      "Detailed property profiles with verified owner contacts and room images",
      "Proximity calculator measuring distance to university campus",
      "Student review and rating system for transparent feedback"
    ],
    technologies: ["React", "Node.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/aryan-kr02",
    featured: true,
    inProgress: true,
    statusText: "in Progress",
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=900&auto=format&fit=crop"
  }
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "Class 12",
    title: "First Steps into Programming",
    subtitle: "Discovering Logic & Python Fundamentals",
    description: "Started my coding journey in Class 12 with Python. Discovered a genuine fascination for logical thinking, writing automated scripts, and solving mathematical and computational problems through code.",
    tags: ["Python Basics", "Logic Building", "First Programs", "Problem Solving"]
  },
  {
    year: "1st Semester",
    title: "Python Deep Dive & Web Foundations",
    subtitle: "Mastering Core Syntax & Building for the Web",
    description: "During my first university semester, dove deeply into Python's advanced syntax, libraries, and modular structure. Simultaneously learned the pillars of web development—HTML5, CSS3, and JavaScript—building responsive browser interfaces.",
    tags: ["Deep Python", "HTML5 & CSS3", "JavaScript", "Web Fundamentals"]
  },
  {
    year: "2nd Semester",
    title: "Deep C Language & PostgreSQL Databases",
    subtitle: "Low-Level Memory, Structured Queries & Problem Solving",
    description: "In the second semester, mastered the C programming language to understand memory management and low-level execution. Explored relational database design with PostgreSQL, SQL queries, and focused on sharpening structured problem-solving skills.",
    tags: ["Deep C Programming", "PostgreSQL", "Database Design", "Analytical Logic"]
  },
  {
    year: "Present",
    title: "DSA Mastery, C++ & OOP Architecture",
    subtitle: "Algorithmic Rigor & Object-Oriented Principles",
    description: "Currently dedicating focused effort to Data Structures & Algorithms (DSA)—the most critical pillar of my software engineering foundation. Deepening mastery of C++ and Object-Oriented Programming (OOP) to design efficient, scalable solutions.",
    tags: ["Data Structures & Algorithms", "C++", "OOP Principles", "Optimization"],
    isCurrent: true
  },
  {
    year: "Engineering Craft",
    title: "Practical Tooling & Modern Developer Skills",
    subtitle: "Version Control, AI Acceleration & Full-Stack Projects",
    description: "Alongside core coursework, cultivated essential industry practices: Git & GitHub version control, modern UI/UX design with Figma, AI-assisted development workflows, and developing full-stack projects like Attendance Tracker and PG Finder.",
    tags: ["Git & GitHub", "Project Building", "Figma UI", "AI Developer Tools", "Clean Code"],
    isFuture: false
  }
];

export const beyondCodeInterests: BeyondCodeInterest[] = [
  {
    id: "gaming",
    title: "Playing Video Games",
    tagline: "Strategy, reflex, and immersive storytelling",
    description: "Enjoy tactical strategy games and immersive interactive storylines that exercise quick problem-solving and focus under pressure.",
    icon: "Gamepad2"
  },
  {
    id: "learning",
    title: "Continuous Learning",
    tagline: "Exploring emerging technology trends",
    description: "Eager to understand how new developer tools, frameworks, and AI paradigms are evolving modern computing.",
    icon: "GraduationCap"
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    tagline: "Puzzles, logic, and chess",
    description: "Enjoy breaking down complex riddles, strategic chess positions, and algorithmic puzzles into simple components.",
    icon: "Brain"
  },
  {
    id: "fitness",
    title: "Fitness & Discipline",
    tagline: "Physical well-being and daily consistency",
    description: "Believing that a sharp analytical mind requires physical vitality, discipline, and regular workouts.",
    icon: "Dumbbell"
  },
  {
    id: "music",
    title: "Music & Focus",
    tagline: "Soundscapes for deep coding sessions",
    description: "Lo-fi beats, instrumental soundtracks, and synthwave that create the ideal flow state for debugging and building.",
    icon: "Headphones"
  },
  {
    id: "reading",
    title: "Reading & Tech Books",
    tagline: "Books on engineering craft and psychology",
    description: "Diving into classic programming literature, system thinking, and autobiographies of visionary technologists.",
    icon: "BookOpen"
  },
  {
    id: "exploring",
    title: "Exploring New Ideas",
    tagline: "Collaborative talks & hackathons",
    description: "Engaging in discussions with peers, brainstorming side project concepts, and participating in tech hackathons.",
    icon: "Compass"
  }
];

export const personalStatement = "Technology is a big part of what I do, but there is more to me than code. I enjoy continuously learning, exploring new ideas, working with people, and finding ways to improve myself.";
