// Portfolio Data Structure

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  architecture?: string;
  technologies: string[];
  role: string;
  challenges: string[];
  outcome: string;
  images: string[];
  github?: string;
  demo?: string;
  isPrivate?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
  posterImage: string;
  isPrivate: boolean;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  color: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  date: string;
  doi: string;
  image: string;
  description?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const stats = {
  gpa: "3.76",
  projects: "5",
  awards: "3",
  publications: "1",
};

export const profile = {
  name: "Putra Indika Malik Hakim",
  role: "Computer Engineering Student & Full Stack Developer",
  about:
    "Computer Engineering student at UPI. I solve real-world problems through scalable web and mobile solutions, focusing on backend architecture and clean code.",
  email: "dikamalik358@gmail.com",
  github: "https://github.com/PutraIndikaMH",
  linkedin: "https://www.linkedin.com/in/putra-indika-malik-hakim/",
  image: "/images/profile.png",
};

export const services: Service[] = [
  {
    id: "web-development",
    name: "Web Development",
    description:
      "High-quality development of sites at the professional level. Responsive design and modern technologies.",
    icon: "Code",
  },
  {
    id: "mobile-apps",
    name: "Mobile Applications",
    description:
      "Native mobile apps with seamless user experience. iOS and Android development with Flutter.",
    icon: "Smartphone",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Putra Indika Malik Hakim",
    role: "Full Stack Developer",
    image: "/images/teammember/putra.jpeg",
    linkedin: "https://www.linkedin.com/in/putra-indika-malik-hakim/",
    github: "https://github.com/PutraIndikaMH",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    name: "Fajar Ramdani",
    role: "Front End Developer",
    image: "/images/teammember/fajar.jpeg",
    linkedin: "https://www.linkedin.com/in/fajar-ramdani-96b74432b/",
    github: "https://github.com/ajay0896",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    name: "Ayunda Cinta Dinanti",
    role: "UI/UX Designer",
    image: "/images/teammember/ayunda.jpg",
    github: "https://github.com/ayundaacnt",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "4",
    name: "Reyhan Mochammad Fabian",
    role: "AI Engineer & Team Lead",
    image: "/images/teammember/reyhan.jpeg",
    linkedin: "https://www.linkedin.com/in/reyhan-mf/",
    github: "https://github.com/reyhan-mf",
    color: "from-green-500 to-emerald-500",
  },
];

export const publications: Publication[] = [
  {
    id: "pancasila-ethics",
    title:
      "Implementasi Nilai-Nilai Pancasila dalam Moral dan Etika Pelajar/Mahasiswa: Analisis Komparatif",
    authors: "Putra Indika Malik Hakim, et al.",
    journal: "International Multidisciplinary Education and Islamic Journal",
    date: "2024",
    doi: "https://doi.org/10.54373/imeij.v5i3.1095",
    image: "/images/publications/pancasila-journal.jpg",
    description:
      "A comparative analysis of Pancasila values implementation in the moral and ethical development of students and young professionals.",
  },
];

export const experiences: Experience[] = [
  {
    id: "crescentrating",
    title: "Backend Developer (Industry Project)",
    company: "CrescentRating",
    duration: "Oct 2025 - Dec 2025",
    description:
      "Developed a Progressive Web Application (PWA) for the Halal Trip Gastronomy Awards evaluation system, automating restaurant evaluation workflows with real-time data synchronization.",
    technologies: [
      "Typescript",
      "PWA",
      "Firebase Realtime Database",
      "Firebase Cloud Messaging",
      "RESTful API",
      "Postman",
      "DocuSign",
      "Zoho Forms",
      "Next.js",
    ],
    posterImage: "/images/CrescentRating.png",
    isPrivate: true,
  },
];

export const projects: Project[] = [
  {
    slug: "velora",
    title: "VELORA",
    tagline: "Intelligent Skincare Assistant",
    description:
      "AI-powered skincare assistant with real-time skin analysis and personalized product recommendations.",
    overview:
      "VELORA is an intelligent web-based application that analyzes skin conditions through photo uploads or real-time camera scanning. Using AI algorithms, it detects skin types, acne, blackheads, and redness, then provides personalized skincare product recommendations.",
    problem:
      "Many people struggle to identify their skin type and find suitable skincare products. Traditional consultations are expensive and time-consuming, leaving users overwhelmed by countless product choices without personalized guidance.",
    solution:
      "VELORA provides instant, AI-powered skin analysis through photo uploads or live camera scanning. The system detects skin conditions and delivers personalized product recommendations along with an interactive chatbot for skincare consultations.",
    technologies: [
      "Laravel",
      "MySQL",
      "AI/ML",
      "Computer Vision",
      "RESTful API",
      "PHP",
      "Web Development",
    ],
    role: "Backend development with Laravel and MySQL for user authentication, product data management, and API integration. Contributed to AI model integration for skin analysis.",
    challenges: [
      "Integrating real-time camera scanning with AI models while maintaining performance",
      "Designing a scalable database schema for diverse product catalogs and user data",
      "Ensuring accurate skin condition detection across varying image qualities",
    ],
    outcome:
      "Won 1st place Best Software Engineering Project & 2nd place Best Web Programming Project. Successfully developed with positive user feedback on accuracy and ease of use.",
    images: [
      "/images/projects/velora/velora_thumbnail.jpeg",
      "/images/projects/velora/About Page Velora.jpg",
      "/images/projects/velora/hasil deteksi.jpeg",
    ],
    github: "https://github.com/PutraIndikaMH/velora_laravel.git",
  },
  {
    slug: "certiverify",
    title: "CertiVerify",
    tagline: "Secure Digital Certificate Verification",
    description:
      "Flutter mobile app for secure digital certificate verification using QR code scanning and SHA-256 hash validation.",
    overview:
      "CertiVerify is a Flutter-based mobile application designed to verify the authenticity of digital certificates through QR code scanning and SHA-256 hash validation. The app provides a secure certificate wallet with ownership validation and scan history tracking.",
    problem:
      "Digital certificates are easily forged, leading to credential fraud. Organizations struggle to verify certificate authenticity, and individuals lack a secure way to store and share their verified credentials.",
    solution:
      "CertiVerify uses QR code scanning combined with SHA-256 hash validation to instantly verify certificate authenticity. The app provides a secure wallet for storing verified certificates and maintains a complete scan history for audit purposes.",
    technologies: [
      "Flutter",
      "PHP",
      "MySQL",
      "QR Code Scanning",
      "SHA-256 Hash Validation",
      "RESTful API",
      "Mobile App Development",
    ],
    role: "Full Stack Mobile Developer - Developed the complete Flutter mobile app with QR scanning, hash validation logic, and secure storage. Built the PHP backend API for certificate validation and user management.",
    challenges: [
      "Implementing secure SHA-256 hash validation without compromising performance",
      "Designing isolated multi-user accounts with proper data separation",
      "Ensuring real-time certificate verification with offline capability",
    ],
    outcome:
      "Successfully developed and will launch with higher trust  in the verification process and reduced certificate fraud incidents.",

    images: [
      "/images/projects/certiverify/login.png",
      "/images/projects/certiverify/certify_thumbnail.png",
      "/images/projects/certiverify/Profil.png",
      "/images/projects/certiverify/Scann cam.png",
      "/images/projects/certiverify/Dompet Sertif.png",
    ],
    github: "https://github.com/ajay0896/verify-app.git",
  },
  {
    slug: "ngekos",
    title: "NgeKos",
    tagline: "Modern Boarding House Booking Platform",
    description:
      "Full-stack web application for boarding house booking with integrated payment gateway and automated notifications.",
    overview:
      "NgeKos is a comprehensive web application built with Laravel 11 that modernizes the boarding house booking process in Indonesia. Users can search, book, and pay for rental rooms seamlessly through integrated payment gateway.",
    problem:
      "Finding and booking boarding houses in Indonesia is fragmented across multiple platforms. Manual payment validation and communication gaps between owners and tenants create friction and delays.",
    solution:
      "NgeKos provides a unified platform for searching, booking, and paying for boarding houses. Integrated Midtrans payment gateway automates payment validation, while Twilio API sends instant WhatsApp notifications for booking confirmations.",
    technologies: [
      "Laravel 11",
      "Blade",
      "Tailwind CSS",
      "MySQL",
      "Filament",
      "Midtrans Payment Gateway",
      "Twilio API",
      "WhatsApp Integration",
      "RESTful API",
    ],
    role: "Full Stack Developer - Architected the entire system using Laravel 11 with service layer and repository pattern. Integrated Midtrans payment gateway and Twilio API for WhatsApp notifications. Built Filament admin dashboard for property management.",
    challenges: [
      "Integrating multiple third-party APIs (Midtrans, Twilio) with proper error handling",
      "Implementing real-time booking availability with race condition handling",
      "Building scalable architecture using service and repository patterns",
    ],
    outcome:
      " Successfully developed with streamlined booking process. Reduced booking time by 70% and eliminated manual payment validation errors.",
    images: [],
    github: "https://github.com/PutraIndikaMH/ngekos",
  },
  {
    slug: "basmi",
    title: "BASMI Innovation",
    tagline: "AI-Powered Anti-Corruption Platform",
    description:
      "AI-powered citizen reporting platform that combats illegal levies and corruption through machine learning spam detection and geographic visualization.",
    overview:
      "BASMI (Bersih Aksi Suap Musnahkeun Indisiplin) is an intelligent web-based platform designed to combat illegal levies (pungli) and corruption in Bandung Regency through citizen-driven reporting enhanced by Machine Learning. The system provides real-time spam detection, automatic report classification, and geographic visualization of corruption hotspots.",
    problem:
      "Illegal levies (pungli) plague public services in Indonesia, occurring at terminals, markets, government offices, and educational facilities. Citizens lack safe channels to report corruption without fear of retaliation, and authorities struggle to identify hotspots and validate authentic reports from spam.",
    solution:
      "BASMI provides an anonymous reporting system with photo/video evidence submission, powered by AI spam detection with 90%+ accuracy. Geographic mapping visualizes report distribution in real-time, while multi-level status tracking ensures transparency. The Filament-based admin dashboard streamlines report management for authorities.",
    technologies: [
      "Laravel 11",
      "PHP",
      "FastAPI",
      "Python",
      "Machine Learning",
      "Logistic Regression",
      "TF-IDF",
      "MySQL",
      "Filament",
      "Tailwind CSS",
      "Guzzle HTTP",
    ],
    role: "Full Stack Developer & ML Engineer - Architected the complete system integrating Laravel backend with FastAPI ML service. Trained and deployed Logistic Regression model with TF-IDF vectorization for spam detection. Built Filament admin panel for report management and implemented geographic visualization for hotspot analysis.",
    challenges: [
      "Integrating ML service with Laravel while maintaining 150ms average response time",
      "Achieving 92% spam detection accuracy with limited training data",
      "Designing anonymous reporting system with adequate validation to prevent abuse",
      "Building real-time geographic visualization for corruption hotspot tracking",
      "Implementing dual-layer validation (Laravel + ML Pydantic) for data integrity",
    ],
    outcome:
      "Won Top 10 Finalist in Kompetisi Inovasi Bandung Bedas (KIBB) 2025 Student Category. System achieved 92% spam filtering accuracy, 99.5% uptime, and 70% reduction in report submission time. Empowered citizens with safe, anonymous reporting channel while providing authorities with data-driven insights for anti-corruption policy.",
    images: [
      "/images/projects/basmi/beranda_dekstop.png",
      "/images/projects/basmi/aduanku_dekstop.png",
      "/images/projects/basmi/jelajah_aduan_dekstop.png",
      "/images/projects/basmi/Home_mobile.png",
    ],
    github: "https://github.com/PutraIndikaMH/basmi",
  },
];

export const awards: Award[] = [
  {
    id: "basmi-innovation",
    title: "Top 10 Finalist - KIBB 2025",
    issuer: "Pemerintah Kabupaten Bandung",
    date: "Oct 2025",
    description:
      'Top 10 Finalist in Student Category for "BASMI" innovation - fostering regional innovation and clean governance.',
    image: "/images/awards/Dengan Rahmat Tuhan Yang Maha Esa -1.png",
  },
  {
    id: "best-project-rpl",
    title: "1st Place - Best Software Engineering Project",
    issuer: "Universitas Pendidikan Indonesia",
    date: "Jun 2025",
    description:
      "1st Best Project for Software Engineering course - Velora Skincare Analysis Application.",
    image: "/images/awards/Proyek Terbaik Pertama Mata Kuliah RPL (1)-1.png",
  },
  {
    id: "best-project-web",
    title: "2nd Place - Best Web Programming Project",
    issuer: "Universitas Pendidikan Indonesia",
    date: "Jun 2025",
    description:
      "2nd Best Project for Web Programming course - Velora Skincare Analysis Application.",
    image:
      "/images/awards/Proyek Terbaik Kedua Mata Kuliah Pemrograman web (1)-1.png",
  },
];

export const certificates: Certificate[] = [
  {
    id: "laravel-filament",
    title: "Laravel 11 & Filament - Modern Web Booking",
    issuer: "BuildWithAngga",
    date: "Sep 2025",
    image: "/images/certificates/BuildWithAnggaCourse.jpg",
    description:
      "Built a boarding house booking platform using Laravel 11 with modern, clean, scalable, and maintainable architecture. Implemented service layer, repository pattern, Filament admin panel, payment gateway integration, and real-time notifications.",
  },
  {
    id: "backend-dicoding",
    title: "Belajar Back-End Pemula dengan JavaScript",
    issuer: "Dicoding Indonesia",
    date: "Dec 2025",
    image: "/images/certificates/backend_dicoding_putra.png",
    description:
      "Learned RESTful API development using Node.js and JavaScript. Gained hands-on experience building scalable backend services with Hapi.js and implementing HTTP methods",
  },
  {
    id: "rest-api",
    title: "Rest API (Intermediate)",
    issuer: "HackerRank",
    date: "Dec 2025",
    image: "/images/certificates/rest_api_intermediate certificate.png",
    description:
      "Demonstrated proficiency in RESTful API principles through HackerRank's technical assessment. Showcased expertise in HTTP methods (GET, POST, PUT, DELETE), and request/response handling",
  },
  {
    id: "hima",
    title: "Staff Education Interest & Talent Department",
    issuer: "Himpunan Mahasiswa Teknik Komputer UPI",
    date: "2023-2024",
    image: "/images/certificates/SERTIFIKAT HIMA.jpg",
    description:
      "As a staff member of the Education Interest and Talent Department, I managed seminars related to interests and talents in collaboration with other departments, developing organizational management and cross-functional teamwork skills.",
  },
  {
    id: "web-fundamentals",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/certificates/belajar_dasar_pemweb.png",
    description:
      "Established strong foundation in web development fundamentals including HTML5 semantic markup, CSS3 styling and layouts, responsive design principles, and vanilla JavaScript DOM manipulation for creating interactive user interfaces.",
  },
  {
    id: "javascript-basics",
    title: "Belajar Dasar JavaScript",
    issuer: "Dicoding Indonesia",
    date: "2024",
    image: "/images/certificates/sertifikat_javascript_dasar.png",
    description:
      "Gained comprehensive understanding of JavaScript fundamentals including ES6+ syntax, arrow functions, destructuring, template literals, array methods, asynchronous programming, and modern JavaScript development practices.",
  },
];
