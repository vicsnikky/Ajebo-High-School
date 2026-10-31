import { 
  AlumniProfile, 
  AdminLeader, 
  BuildingSubProject, 
  DonorRecord, 
  HistoryEvent, 
  SchoolEvent, 
  GalleryItem, 
  ForumPost, 
  ExcoMember,
  RemodellingFacility,
  EducationalProgram,
  MemberWelfareItem,
  CompletedProject,
  AlumniAmbassador,
  BoardOfTrusteesMember,
  EldersForumMember,
  AdviserMember,
  GrandPatronMember,
  AlumniRegistration
} from '../types';

export const SCHOOL_ANTHEM = {
  title: "Ajebo Community High School Anthem",
  structure: "Verse One • Chorus • Verse Two • Chorus",
  verse1Title: "Verse One",
  verse1: [
    "Ajebo Heights",
    "I'm proud of you",
    "For your progress and ideal",
    "Ajebo Heights",
    "I'm proud of you",
    "I enjoy your blessings."
  ],
  chorusTitle: "Chorus",
  chorus: [
    "My school (2ce)",
    "I will never forget you",
    "My school (2ce)",
    "I will never disobey"
  ],
  verse2Title: "Verse Two",
  verse2: [
    "You teach me to be child of hope",
    "And to obey my parents",
    "You provide useful and loyal teachers",
    "And dedicated friends."
  ],
  chorusRepriseTitle: "Chorus",
  chorusReprise: [
    "My school (2ce)",
    "I will never forget you",
    "My school (2ce)",
    "I will never disobey"
  ]
};

export const ACHSOSA_COMPLETED_PROJECTS: CompletedProject[] = [
  {
    id: "proj-principal-office-reno",
    title: "Renovation of Senior Principal's Office",
    category: "Administrative Infrastructure",
    dateCompleted: "2026",
    description: "We have renovated Senior Principal's office and provided book shelves to properly arrange old and new students documents.",
    imageUrls: [
      "https://i.ibb.co/fd62ggW0/Whats-App-Image-2026-08-06-at-8-36-59-AM-1.jpg",
      "https://i.ibb.co/wZJGBbbJ/Whats-App-Image-2026-08-06-at-8-36-59-AM-2.jpg",
      "https://i.ibb.co/yFbQbQSp/Whats-App-Image-2026-08-06-at-11-54-04-AM.jpg",
      "https://i.ibb.co/JFFn58cx/Whats-App-Image-2026-08-06-at-11-54-03-AM-1.jpg",
      "https://i.ibb.co/F44xXqRL/Whats-App-Image-2026-08-06-at-11-54-03-AM.jpg"
    ]
  },
  {
    id: "proj-electrification-water",
    title: "Electrification & Water Restoration",
    category: "Power & Water Utilities",
    dateCompleted: "2026",
    description: "Electrification of school premises and electricity connection to reactivated borehole, NYSC and Principal's quarters.",
    imageUrls: [
      "https://i.ibb.co/3YzwYfyx/Whats-App-Image-2026-08-06-at-8-36-59-AM-3.jpg",
      "https://i.ibb.co/ymQkpqjy/Whats-App-Image-2026-08-06-at-8-36-59-AM.jpg"
    ]
  },
  {
    id: "proj-career-counselling-2026",
    title: "Career Counselling & Development for Outgoing Students",
    category: "Student Development & Mentorship",
    dateCompleted: "Second Term 2026",
    description: "As part of the project, we organised career counselling, career development and goal setting program for outgoing students SSS3 during second term academic session year 2026. Guiding students on future pathways, subject choices and life goals.",
    imageUrls: [
      "https://i.ibb.co/dwy1YLMD/Whats-App-Image-2026-08-06-at-8-37-00-AM.jpg",
      "https://i.ibb.co/qM9tSWTM/Whats-App-Image-2026-08-06-at-10-25-28-AM.jpg",
      "https://i.ibb.co/Kx81LL7B/Whats-App-Image-2026-08-06-at-10-25-26-AM.jpg",
      "https://i.ibb.co/Pz4T5J8n/Whats-App-Image-2026-08-06-at-10-25-16-AM-1.jpg",
      "https://i.ibb.co/7xQtgvdD/Whats-App-Image-2026-08-06-at-10-25-16-AM.jpg"
    ]
  }
];

export const COMPLETED_PROJECTS_GALLERY = [
  {
    imageUrl: "https://i.ibb.co/fd62ggW0/Whats-App-Image-2026-08-06-at-8-36-59-AM-1.jpg",
    linkUrl: "https://ibb.co/RTr9FFKH",
    title: "Renovated Senior Principal's Office & Archive Shelving",
    project: "Renovation of Senior Principal's Office"
  },
  {
    imageUrl: "https://i.ibb.co/wZJGBbbJ/Whats-App-Image-2026-08-06-at-8-36-59-AM-2.jpg",
    linkUrl: "https://ibb.co/1Ysy7pps",
    title: "Executive Office Furnishing & Documentation Storage",
    project: "Renovation of Senior Principal's Office"
  },
  {
    imageUrl: "https://i.ibb.co/yFbQbQSp/Whats-App-Image-2026-08-06-at-11-54-04-AM.jpg",
    linkUrl: "https://ibb.co/whxzxzs7",
    title: "Senior Principal Office Refurbishment & Consultation Desk",
    project: "Renovation of Senior Principal's Office"
  },
  {
    imageUrl: "https://i.ibb.co/JFFn58cx/Whats-App-Image-2026-08-06-at-11-54-03-AM-1.jpg",
    linkUrl: "https://ibb.co/844M6Gmz",
    title: "Administrative Office Interior & Storage Units",
    project: "Renovation of Senior Principal's Office"
  },
  {
    imageUrl: "https://i.ibb.co/F44xXqRL/Whats-App-Image-2026-08-06-at-11-54-03-AM.jpg",
    linkUrl: "https://ibb.co/5hhMkxbg",
    title: "Renovated Principal Office Entry & Documentation Facilities",
    project: "Renovation of Senior Principal's Office"
  },
  {
    imageUrl: "https://i.ibb.co/3YzwYfyx/Whats-App-Image-2026-08-06-at-8-36-59-AM-3.jpg",
    linkUrl: "https://ibb.co/JFQNFxRY",
    title: "Electrification Grid Connection & Power Wiring",
    project: "Electrification & Water Restoration"
  },
  {
    imageUrl: "https://i.ibb.co/ymQkpqjy/Whats-App-Image-2026-08-06-at-8-36-59-AM.jpg",
    linkUrl: "https://ibb.co/Gf5M9RS2",
    title: "Borehole Water Reactivation & Quarters Supply",
    project: "Electrification & Water Restoration"
  },
  {
    imageUrl: "https://i.ibb.co/dwy1YLMD/Whats-App-Image-2026-08-06-at-8-37-00-AM.jpg",
    linkUrl: "https://ibb.co/5gVtHn4L",
    title: "SSS3 Career Counselling & Goal Setting Workshop",
    project: "Career Counselling & Development for Outgoing Students"
  },
  {
    imageUrl: "https://i.ibb.co/qM9tSWTM/Whats-App-Image-2026-08-06-at-10-25-28-AM.jpg",
    linkUrl: "https://ibb.co/vxm7FQ0x",
    title: "Career Mentorship Interactive Session with SSS3 Students",
    project: "Career Counselling & Development for Outgoing Students"
  },
  {
    imageUrl: "https://i.ibb.co/Kx81LL7B/Whats-App-Image-2026-08-06-at-10-25-26-AM.jpg",
    linkUrl: "https://ibb.co/m5PxXXtd",
    title: "Student Career Guidance & Future Pathways Presentation",
    project: "Career Counselling & Development for Outgoing Students"
  },
  {
    imageUrl: "https://i.ibb.co/Pz4T5J8n/Whats-App-Image-2026-08-06-at-10-25-16-AM-1.jpg",
    linkUrl: "https://ibb.co/qF90Rhwf",
    title: "SSS3 Career Development & Subject Choices Assembly",
    project: "Career Counselling & Development for Outgoing Students"
  },
  {
    imageUrl: "https://i.ibb.co/7xQtgvdD/Whats-App-Image-2026-08-06-at-10-25-16-AM.jpg",
    linkUrl: "https://ibb.co/Y4XBD2FS",
    title: "Outgoing Students Mentorship & Goal Setting Facilitation",
    project: "Career Counselling & Development for Outgoing Students"
  }
];

export const ACHSOSA_AMBASSADORS: AlumniAmbassador[] = [
  {
    id: "amb-1",
    no: "1",
    name: "Bajegbo Segun",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-2",
    no: "2",
    name: "Dr Joseph Alawode",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-3",
    no: "3",
    name: "Sheu Adebowale",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-4",
    no: "4",
    name: "Alaba Raji",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-5",
    no: "5",
    name: "Dr Tunde Anifowose-Kilani",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-6",
    no: "6",
    name: "Sotayo Olatayo Johnson",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-7",
    no: "7",
    name: "Barr Sina Soyinka",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-8",
    no: "8",
    name: "Dr Joseph Kayode Ogunwede",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-9",
    no: "9",
    name: "Engr Taiwo Oludotun",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-10",
    no: "10",
    name: "Engr Shadrach Ogunseye",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-11",
    no: "11",
    name: "Dolamu Akindele",
    role: "Member Ambassador, ACHSOSA",
    gradSet: "Member Ambassador"
  },
  {
    id: "amb-12",
    no: "12",
    name: "Hon. (Dr.) Tella O. Babatunde",
    role: "Grand Patron & Legislative Liaison (OGHA Lawmaker)",
    gradSet: "Class of 1984"
  },
  {
    id: "amb-13",
    no: "13",
    name: "Dr. Gbenga Adeoye",
    role: "Chairman, Legal & Rebuilding Advisory Committee",
    gradSet: "1995 Set"
  },
  {
    id: "amb-14",
    no: "14",
    name: "Eunice Akinwande",
    role: "Director, Agric Science Demo Farm Revamp (Former Asst. Director, Ministry of Agric)",
    gradSet: "Class of 1985"
  },
  {
    id: "amb-15",
    no: "15",
    name: "Engr. Olumide Ogundipe",
    role: "Head of Structural & Solar Engineering Committee",
    gradSet: "Class of 1992"
  },
  {
    id: "amb-16",
    no: "16",
    name: "Mrs. Folake Aderibigbe",
    role: "Academic Mentorship & Scholarship Lead (Principal Lecturer)",
    gradSet: "Class of 1988"
  },
  {
    id: "amb-17",
    no: "17",
    name: "ACHSOSA Secretariat Ambassador",
    role: "Community & Institutional Engagement Coordinator",
    gradSet: "Ajebo Town, Obafemi Owode LGA",
    contact: "info@ajebocommunityhighschool.com"
  }
];

export const GREENWALL_DESIGN_CREDITS = {
  projectTitle: "PROPOSED REMODELLING OF BLOCKS OF CLASS ROOMS FOR AJEBO COMMUNITY HIGH SCHOOL",
  firmName: "GREENWALL DESIGN AND CONSTRUCT",
  address: "5, IBULANRAGBA COMMUNITY OKE ATA ABEOKUTA OGUN STATE",
  phoneNumbers: ["09057146054", "09047846779"],
  phoneFormatted: "0905 714 6054 / 0904 784 6779"
};

export const PEG_MISSION = {
  title: "OUR MISSION (PEG)",
  subtitle: "Project, Educational & Health Programs, and General Members Welfare",
  project: "Renovate classrooms in ACHS and Initiate plan and build School Main Gate, 100 Seater CBT/ICT Center and 500 Seater Hall.",
  educationalAndHealth: "Organize 3 educational and health programs per term for students. (Empowering Students for Brighter Future)",
  welfare: "Support welfare and Empowerment initiatives for Ajebite members."
};

export const REMODELLING_FACILITIES: RemodellingFacility[] = [
  {
    id: "rem-gatehouse",
    title: "Proposed School Gate House",
    category: "New Capital Project",
    proposedModelDesc: "Modern entrance arch and gated security house featuring the ACHS school emblem (Open Book, Cutlass & Hoe), perimeter security wall, pedestrian access, and security guard post.",
    asBuiltRealityDesc: "Previous open entrance without security gate, vulnerable to unauthorized trespass and lack of institutional identity branding.",
    status: "Proposed 3D Render Ready",
    iconName: "Shield",
    proposedImageUrl: "https://i.ibb.co/21x83Z60/proposedgate.png",
    asBuiltImageUrl: "https://i.ibb.co/GQXnLtTK/Whats-App-Image-2026-08-02-at-9-06-31-PM.jpg"
  },
  {
    id: "rem-classrooms",
    title: "Remodelling of Classroom Blocks (SS1, SS2, SS3)",
    category: "Classroom Block",
    proposedModelDesc: "3D architectural remodel featuring modern yellow-accented corrugated roofing, plastered and painted walls, tiled floors, secure steel casement windows, and ergonomic student desks.",
    asBuiltRealityDesc: "As-built SS1 & SS3 blocks suffered severe roof leakages, cracked earth floors, broken wooden window shutters, and missing furniture.",
    status: "As-Built Analysis",
    iconName: "Building2",
    proposedImageUrl: "https://i.ibb.co/SDT9CGC9/Picture6.png",
    proposedImageUrls: [
      "https://i.ibb.co/SDT9CGC9/Picture6.png",
      "https://i.ibb.co/39zYfLj4/ss3.png",
      "https://i.ibb.co/wNBn7gH6/proposed-classroom-layout.png"
    ],
    asBuiltImageUrl: "https://i.ibb.co/7d8L9B7Z/ss1.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/7d8L9B7Z/ss1.jpg",
      "https://i.ibb.co/hFXDk7r9/oldss31.jpg",
      "https://i.ibb.co/mrgsnrcd/oldss322.jpg",
      "https://i.ibb.co/F43RVCKN/ss3old.jpg",
      "https://i.ibb.co/SwhqYF4x/Whats-App-Image-2026-08-02-at-9-06-25-PM.jpg",
      "https://i.ibb.co/B55VRWfR/Whats-App-Image-2026-08-02-at-9-06-28-PM-1.jpg"
    ]
  },
  {
    id: "rem-science-lab",
    title: "Science Laboratory Remodelling",
    category: "Specialist Facility",
    proposedModelDesc: "3D model of Block D Science Lab with full laboratory benches, gas and water supply lines, safety equipment, and secure storage for chemistry, physics, and biology equipment.",
    asBuiltRealityDesc: "As-built science lab had completely collapsed timber roof trusses, rotting laboratory benches, missing window panes, and dilapidated walls.",
    status: "As-Built Analysis",
    iconName: "Microscope",
    proposedImageUrl: "https://i.ibb.co/TDPt4jTH/labratory.png",
    asBuiltImageUrl: "https://i.ibb.co/rRvhZJht/Picture4.png",
    asBuiltImageUrls: [
      "https://i.ibb.co/rRvhZJht/Picture4.png",
      "https://i.ibb.co/jPbmkYNB/Picture5.png"
    ]
  },
  {
    id: "rem-technical-workshop",
    title: "Technical Building & Workshop Remodelling",
    category: "Specialist Facility",
    proposedModelDesc: "3D model of Block A Technical Workshop with specialized practical equipment benches, safety partitioning, and adequate lighting for technical drawing and vocational crafts.",
    asBuiltRealityDesc: "As-built technical workshop was an unrendered hollow red-brick structure with broken corrugated sheets and incomplete doors.",
    status: "Proposed 3D Render Ready",
    iconName: "Wrench",
    proposedImageUrl: "https://i.ibb.co/7JBZhbcw/Screenshot-20260807-211805-WPS-Office.jpg",
    proposedImageUrls: [
      "https://i.ibb.co/7JBZhbcw/Screenshot-20260807-211805-WPS-Office.jpg"
    ],
    asBuiltImageUrl: "https://i.ibb.co/CKH34KsQ/old-tech.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/CKH34KsQ/old-tech.jpg"
    ]
  },
  {
    id: "rem-auditorium",
    title: "School Auditorium Remodelling",
    category: "Classroom Block",
    proposedModelDesc: "3D model of proposed remodelled main school auditorium featuring elevated stage, acoustic ceiling, dual double-door emergency exits, and high-capacity assembly seating.",
    asBuiltRealityDesc: "As-built auditorium roof had caved in entirely due to weather exposure, leaving structural beams exposed and walls severely degraded.",
    status: "As-Built Analysis",
    iconName: "Users",
    proposedImageUrl: "https://i.ibb.co/4ZFMcXXL/prop-aud.png",
    proposedImageUrls: [
      "https://i.ibb.co/4ZFMcXXL/prop-aud.png"
    ],
    asBuiltImageUrl: "https://i.ibb.co/Xk3dzTtP/old-aud.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/Xk3dzTtP/old-aud.jpg"
    ]
  },
  {
    id: "rem-principal-ict-staff",
    title: "Principal Office, ICT Lab & Staff Room Block",
    category: "Specialist Facility",
    proposedModelDesc: "3D model combining executive principal office suite, staff common room, and 40-desktop computer lab under one modern administrative wing.",
    asBuiltRealityDesc: "As-built ICT and staff room were unplastered block structures with rusting security bars and leaking roof sheets.",
    status: "As-Built Analysis",
    iconName: "Laptop",
    proposedImageUrl: "https://i.ibb.co/k2dRD8n4/ict.png",
    proposedImageUrls: [
      "https://i.ibb.co/k2dRD8n4/ict.png"
    ],
    asBuiltImageUrl: "https://i.ibb.co/ccSnqnpD/oldict.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/ccSnqnpD/oldict.jpg"
    ]
  },
  {
    id: "rem-principal-lodge",
    title: "Principal's Official Lodge Remodelling",
    category: "Staff Lodge",
    proposedModelDesc: "Proposed remodelled residential lodge with modern green architectural wall accents, ensuite facilities, security fencing, and water supply for resident principals.",
    asBuiltRealityDesc: "As-built principal lodge suffered water damage, stained walls, missing plumbing fixtures, and degraded roofing.",
    status: "As-Built Analysis",
    iconName: "Home",
    proposedImageUrl: "https://i.ibb.co/prBbC32g/principal.png",
    proposedImageUrls: [
      "https://i.ibb.co/prBbC32g/principal.png"
    ],
    asBuiltImageUrl: "https://i.ibb.co/8Lx6ddF5/oldprincipal.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/8Lx6ddF5/oldprincipal.jpg"
    ]
  },
  {
    id: "rem-corpers-lodge",
    title: "Corper's Lodge (NYSC Residential Quarters)",
    category: "Staff Lodge",
    proposedModelDesc: "Proposed remodelling to provide comfortable, safe residential quarters for National Youth Service Corps (NYSC) teachers serving at ACHS.",
    asBuiltRealityDesc: "As-built corper's lodge had deteriorating plaster, weather-beaten wooden doors, and no internal sanitary facilities.",
    status: "As-Built Analysis",
    iconName: "GraduationCap",
    proposedImageUrl: "https://i.ibb.co/Mkmqn3vc/corps.png",
    proposedImageUrls: [
      "https://i.ibb.co/Mkmqn3vc/corps.png"
    ],
    asBuiltImageUrl: "https://i.ibb.co/Xrg8s3Xt/oldcorps.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/Xrg8s3Xt/oldcorps.jpg"
    ]
  },
  {
    id: "rem-hall-500",
    title: "New Project: 500-Seater Multipurpose Hall",
    category: "New Capital Project",
    proposedModelDesc: "Brand-new architectural proposal for a 500-seater grand hall for school assemblies, WAEC/NECO examination halls, alumni conventions, and community events.",
    asBuiltRealityDesc: "New capital initiative designed by Greenwall Design and Construct to replace makeshift gathering spaces.",
    status: "Proposed 3D Render Ready",
    iconName: "Building",
    proposedImageUrl: "https://i.ibb.co/Y7Pp3Wvk/500-seater.png",
    proposedImageUrls: [
      "https://i.ibb.co/Y7Pp3Wvk/500-seater.png",
      "https://i.ibb.co/FLbqZPMk/5002.png"
    ]
  },
  {
    id: "rem-cbt-100",
    title: "New Project: 100-Seater CBT / ICT Center",
    category: "New Capital Project",
    proposedModelDesc: "Standalone modern Computer-Based Test (CBT) center with 100 networked computer terminals, server room, solar backup, and JAMB accreditation setup.",
    asBuiltRealityDesc: "New capital project to enable ACHS students take JAMB UTME & SSCE CBT exams locally without traveling long distances.",
    status: "Proposed 3D Render Ready",
    iconName: "Monitor",
    proposedImageUrl: "https://i.ibb.co/PZh6NLhp/100seater.png",
    proposedImageUrls: [
      "https://i.ibb.co/PZh6NLhp/100seater.png",
      "https://i.ibb.co/FLtJNyhD/100seater1.png"
    ]
  },
  {
    id: "rem-toilets",
    title: "Front & Back Toilet Facilities Modernization",
    category: "Sanitation & Utilities",
    proposedModelDesc: "Complete sanitation overhaul converting uncompleted pit toilet structures into modern water-waterborne toilet blocks for male and female students and staff.",
    asBuiltRealityDesc: "As-built front and back toilet buildings were uncompleted shells with no WC equipment, tiles, running water, or roofs.",
    status: "As-Built Analysis",
    asBuiltImageUrl: "https://i.ibb.co/HkjpXMq/toilet.jpg",
    asBuiltImageUrls: [
      "https://i.ibb.co/HkjpXMq/toilet.jpg",
      "https://i.ibb.co/ynXbKKJq/toilet1.jpg",
      "https://i.ibb.co/nMKhT8Sc/toilet2.jpg"
    ],
    requirements: [
      "Borehole Water Drilling & Submersible Pump",
      "Overhead Water Storage Tanks & Piping",
      "Soakaway & Septic Tank Construction",
      "Toilet Roof Repair & Ceilings",
      "Non-slip Floor Tiles & Easy-Clean Wall Tiles",
      "8 Complete WC Toilet Equipment Sets",
      "Exterior & Interior Wall Painting",
      "Paved Pedestrian Walkway to Toilet Buildings"
    ],
    iconName: "Droplets"
  }
];

export const EDUCATIONAL_HEALTH_PROGRAMS: EducationalProgram[] = [
  {
    id: "prog-educational-career",
    title: "1. Educational and Career Guidance",
    presenters: "Motivational Speakers, Successful Entrepreneurs, and Certified Career Counselors",
    outline: [
      "Presentation on the importance of quality education, goal setting, and academic discipline.",
      "Interactive workshop exploring diverse career paths in engineering, law, medicine, technology, agriculture, and public service.",
      "Open Q&A session with distinguished ACHSOSA alumni mentors."
    ]
  },
  {
    id: "prog-health-hygiene",
    title: "2. Personal Health & Hygiene Awareness",
    presenters: "Qualified Healthcare Professionals (Doctors and Registered Nurses)",
    outline: [
      "Comprehensive presentation on personal hygiene, sanitation habits, and disease prevention.",
      "In-depth discussion on common health issues, nutritional health, and wellness affecting teenagers.",
      "Interactive Q&A session providing medical guidance and practical health tips."
    ]
  },
  {
    id: "prog-sex-education",
    title: "3. Sex Education & Adolescent Health",
    presenters: "Trained Adolescent Counselors and Healthcare Specialists",
    outline: [
      "Age-appropriate presentation on sex education, reproductive health, and bodily awareness.",
      "Interactive session on developing healthy relationships, peer pressure management, and positive decision-making.",
      "Confidential and open Q&A session addressing student questions respectfully."
    ]
  }
];

export const AJEBITE_WELFARE_INITIATIVES: MemberWelfareItem[] = [
  {
    id: "welf-vocational",
    title: "Vocational & Skill Acquisition Training",
    description: "Hands-on technical training to empower alumni and community members with marketable skills.",
    examples: "Fashion Design & Sewing, Carpentry & Woodwork, Digital & IT Skills"
  },
  {
    id: "welf-microfinance",
    title: "Microfinance & Business Loan Schemes",
    description: "Seed grants and soft micro-loans to support small businesses and entrepreneurial ventures owned by Ajebite members.",
    examples: "Revolving micro-credit loans, business plan advisory, trader support grants"
  },
  {
    id: "welf-jobs",
    title: "Job Placement & Career Fairs",
    description: "Connecting young graduates and job seekers with employment opportunities through the alumni corporate network.",
    examples: "CV writing clinics, job listings, alumni internship referrals"
  },
  {
    id: "welf-vulnerable",
    title: "Support for Vulnerable Members",
    description: "Dedicated welfare fund providing direct assistance to widows, elderly alumni, and Persons with Disabilities (PWDs).",
    examples: "Emergency medical funds, compassionate grants, assistive care support"
  },
  {
    id: "welf-savings",
    title: "Community Savings & Cooperative Societies",
    description: "Establishing cooperative societies to foster financial discipline, mutual savings, and investment pools.",
    examples: "ACHSOSA Cooperative Society, low-interest member loans"
  },
  {
    id: "welf-leadership",
    title: "Leadership & Personal Development",
    description: "Workshops and seminars focused on leadership, public speaking, financial literacy, and career growth.",
    examples: "Annual leadership retreats, financial literacy masterclasses"
  },
  {
    id: "welf-food-drives",
    title: "Food Drives & Essential Distribution",
    description: "Periodic community outreach programs distributing food packages and essential household supplies to families in need.",
    examples: "Festive food outreach packages, back-to-school student supply drives"
  }
];


export const SCHOOL_INFO = {
  name: "Ajebo Community High School",
  acronym: "ACHS",
  associationName: "Ajebo Community High School Old Students Association (ACHSOSA)",
  motto: "“Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé.”",
  mottoYoruba: "“Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé.”",
  mottoEnglish: "“Education without farming is incomplete.”",
  mottoMeaning: "Education without farming is incomplete.",
  mottoSymbolism: "Here, ọ̀kọ̀ àti àdá (the hoe and cutlass) symbolise agriculture, practical work, and self-reliance.",
  mottoPhilosophy: "The philosophy behind the school’s educational foundation can be captured in the Yoruba saying, “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé”—meaning that education without agriculture is incomplete. This reflects the traditional belief that academic knowledge should be complemented by practical skills, particularly agriculture, to prepare young people for productive and self-reliant.",
  location: "Ajebo Town, Obafemi Owode Local Government Area, Ogun State, Nigeria",
  lga: "Obafemi Owode LGA",
  state: "Ogun State",
  establishedYear: "October 1977",
  waecAccreditationYear: "1983–1984",
  logoUrl: "https://i.ibb.co/5XyPmfPd/Whats-App-Image-2026-08-01-at-2-45-25-PM.jpg",
  contactEmail: "info@ajebocommunityhighschool.com",
  contactPhone: "0708 710 6906 (President: Engr. Adebayo Joseph Joda)",
  rebuildingDriveStatus: "Phase 1 Construction & Infrastructure Modernization",
  badgeDetails: {
    book: "The Open Book at the top stands for Knowledge, academic scholarship, and intellectual development.",
    cutlassHoe: "The Crossed Cutlass (Ada) and Hoe (Oko) symbolise agriculture, practical work, hard work, and self-reliance — fulfilling our motto: “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé.”",
    shield: "The Shield stands for the protection, resilience, and unity of the entire Ajebo community."
  }
};

export const HISTORICAL_BACKGROUND = {
  title: "Historical Background of Ajebo Community High School",
  mottoYoruba: "“Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé.”",
  mottoEnglish: "“Education without farming is incomplete.”",
  mottoPhilosophy: "The philosophy behind the school’s educational foundation can be captured in the Yoruba saying, “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé”—meaning that education without agriculture is incomplete. This reflects the traditional belief that academic knowledge should be complemented by practical skills, particularly agriculture, to prepare young people for productive and self-reliant.",
  mottoSymbolism: "Here, ọ̀kọ̀ àti àdá (the hoe and cutlass) symbolise agriculture, practical work, and self-reliance.",
  paragraphs: [
    "Ajebo Community High School (ACHS) was founded in 1977 through a communal self-help initiative by the people of Ajebo and the surrounding villages. The establishment of the school was driven by the community’s desire to provide accessible secondary education for its children and to promote the educational development of the area.",
    "Historically, Ajebo served as a major market and gathering centre for people from neighbouring villages and communities. This strategic position made it a natural centre for social, economic and educational activities. The earlier establishment of the Anglican Central School also reflected the importance of Ajebo as an educational centre serving the surrounding communities.",
    "The founding of ACHS through communal self-help demonstrated the commitment, unity and determination of the people to take responsibility for the education and future of their children. The school was established not merely as a place of academic learning, but as an institution intended to contribute to the overall development of the community.",
    "This vision is captured in the Yoruba saying: “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé” (“Education without agriculture is incomplete”). The saying reflects the traditional belief that academic education should be complemented by practical skills, agriculture, hard work and self-reliance.",
    "Since its establishment in 1977, Ajebo Community High School has remained an important part of the history and educational development of Ajebo and its neighbouring communities, producing generations of students who have gone on to contribute meaningfully to their families, communities and society.",
    "Hence, alumni of the school are trained to become entrepreneurs and excellent professionals in their respective fields.",
    "This hardworking culture reflected in the participation and success of the School in the 1990's during the National JET competition in Nigeria.",
    "Agriculture that has now become a major focus of government in Nigeria in order to grow our food and export excess to other countries have been the anthem of the school wherein students are trained that education without Agriculture is incomplete.",
    "The impact of the school can be seen all over the country and around the world with the quality of Professionals that has emerged from the School since it was established in 1977.",
    "The School has produced Professors, PhD holders in various fields, Engineers, Nurses, Medical Doctors, Surveyors, Passionate Teachers, Accountants, Lawyers, Politicians, Sport Men and women, Traders, Manufacturers and various Captains of industries among others."
  ],
  producedProfessions: [
    "Professors & Academic Scholars",
    "PhD Holders in Diverse Disciplines",
    "Civil, Electrical & Structural Engineers",
    "Registered Nurses & Healthcare Leaders",
    "Medical Doctors & Specialists",
    "Licensed Surveyors & Estate Planners",
    "Passionate Teachers & Principals",
    "Chartered Accountants & Financial Auditors",
    "Legal Practitioners & Corporate Lawyers",
    "Politicians & Honourable Lawmakers",
    "Sports Men & Women Champions",
    "Agricultural Producers & Agribusiness CEOs",
    "Traders, Manufacturers & Industrialists",
    "Captains of Industries Worldwide"
  ]
};

export const NOTABLE_ALUMNI: AlumniProfile[] = [
  {
    id: "tella-babatunde",
    name: "Hon. (Dr.) Tella O. Babatunde",
    title: "Honorable Lawmaker, Ogun State House of Assembly (OGHA)",
    gradYear: "1984",
    occupation: "Public Servant & Legislator",
    companyOrOrg: "Ogun State House of Assembly",
    location: "Abeokuta / Ajebo, Ogun State",
    category: "politics",
    bio: "Hon. Dr. Tella O. Babatunde completed his secondary education and earned his GCE O-Level Certificate from Ajebo Community High School in 1984. He went on to achieve academic excellence and holds a key legislative role representing his constituency at the Ogun State House of Assembly. He remains a steadfast patron of the ACHSOSA rebuilding movement.",
    quote: "Ajebo Community High School gave us the resilience and values that define our public service today. Giving back to rebuild our alma mater is a sacred duty.",
    achievements: [
      "Completed GCE O-Level at ACHS in 1984",
      "Member of Ogun State House of Assembly (OGHA)",
      "Advocate for rural education infrastructure & youth empowerment",
      "Key Facilitator for ACHSOSA State Government Partnerships"
    ],
    isVerified: true,
    featured: true
  },
  {
    id: "gbenga-adeoye",
    name: "Dr. Gbenga Adeoye",
    title: "Senior Legal Practitioner & Corporate Affairs Specialist",
    gradYear: "1995",
    occupation: "Corporate Lawyer & Tax Consultant",
    companyOrOrg: "Adeoye & Associates Legal Consult",
    location: "Lagos & Abuja, Nigeria",
    category: "law",
    bio: "Dr. Gbenga Adeoye is a highly accomplished Nigerian lawyer and corporate expert who completed his secondary education at Ajebo Community High School. With decades of distinguished practice in corporate law, tax advisory, and commercial dispute resolution, Dr. Adeoye advises top multinational corporations and serves on various advisory boards.",
    quote: "The solid academic foundation laid in our classrooms at Ajebo prepared us to compete seamlessly at the highest legal and corporate tables.",
    achievements: [
      "Distinguished ACHS Alumni Awardee",
      "Fellow of the Chartered Institute of Taxation of Nigeria (CITN)",
      "Published Author in Corporate Governance & Commercial Law",
      "Chairman, ACHSOSA Legal & Building Project Advisory Committee"
    ],
    isVerified: true,
    featured: true
  },
  {
    id: "eunice-akinwande",
    name: "Eunice Akinwande",
    title: "Agricultural Pioneer & Former Assistant Director",
    gradYear: "1985",
    occupation: "Agronomist & Agribusiness Specialist",
    companyOrOrg: "Lagos State Ministry of Agriculture (Ret.)",
    location: "Ikeja, Lagos / Abeokuta, Ogun State",
    category: "agriculture",
    bio: "Eunice Akinwande is an award-winning agricultural pioneer and former Assistant Director of the Lagos State Ministry of Agriculture. She credits her deep-seated passion for agribusiness to her early schooling at Ajebo Community High School, where practical agricultural science and poultry farming were central to student development under dedicated educators.",
    quote: "The practical farming and poultry lessons under our Ghanaian agricultural teachers at Ajebo planted the seed for my lifelong career in agricultural development.",
    achievements: [
      "Former Assistant Director, Lagos State Ministry of Agriculture",
      "Recipient of National Agricultural Innovation Award",
      "Pioneer of Youth Agribusiness Incubation Models in South-West Nigeria",
      "Patron of the ACHS Demonstration Farm & Green Revamp Initiative"
    ],
    isVerified: true,
    featured: true
  },
  {
    id: "olumide-ogundipe",
    name: "Engr. Olumide Ogundipe",
    title: "Structural Engineer & Project Director",
    gradYear: "1992",
    occupation: "Civil & Structural Engineer",
    companyOrOrg: "Apex Infra Projects Ltd",
    location: "Ibadan, Oyo State",
    category: "tech",
    bio: "Engr. Olumide Ogundipe leads the structural engineering sub-committee for the new Ajebo Community High School building expansion project. He brings 25+ years of infrastructure design expertise.",
    quote: "Designing modern, safe, eco-friendly learning spaces for our home school is the highlight of my career.",
    achievements: [
      "COREN Registered Structural Engineer",
      "Lead Consultant for ACHS Rebuilding Architecture Blueprint",
      "Pioneered Green Solar Integration for Rural Schools"
    ],
    isVerified: true,
    featured: false
  },
  {
    id: "folake-aderibigbe",
    name: "Mrs. Folake Aderibigbe (Née Sowemimo)",
    title: "Education Specialist & Principal Lecturer",
    gradYear: "1988",
    occupation: "Educational Administrator",
    companyOrOrg: "Federal College of Education",
    location: "Abeokuta, Ogun State",
    category: "education",
    bio: "Mrs. Folake Aderibigbe has dedicated over 30 years to teacher education and secondary school curriculum development across South-West Nigeria.",
    quote: "Quality education in rural towns like Ajebo changes generations.",
    achievements: [
      "Excellence in Pedagogy Award",
      "ACHSOSA Academic Mentorship Program Coordinator"
    ],
    isVerified: true,
    featured: false
  }
];

export const ADMIN_LEADERS: AdminLeader[] = [
  {
    id: "mrs-karunwi-taiwo-omodunke",
    name: "Mrs. Karunwi Taiwo Omodunke",
    role: "Principal, Senior School",
    period: "Current Principal (Senior School)",
    arm: "Ajebo Community High School, Senior Arm (ACHS SNR)",
    phone: "0803 046 3277",
    bio: "Serving as the Principal for the Senior School of Ajebo Community High School, overseeing Senior Secondary education, WAEC/NECO academic preparedness, student career guidance, and collaborating with ACHSOSA on school facility modernization.",
    notableAchievement: "Partnering with ACHSOSA alumni on office renovation, student career counselling, and senior school academic excellence.",
    status: "active"
  },
  {
    id: "mrs-dawodu-omowonuola",
    name: "Mrs. Dawodu Omowonuola",
    role: "Principal, Junior School",
    period: "Current Principal (Junior School)",
    arm: "Ajebo Community High School, Junior Arm (ACHS JNR)",
    phone: "0803 258 2065",
    bio: "Serving as the Principal for the Junior School of Ajebo Community High School, directing academic foundation, moral discipline, and foundational secondary school learning in Obafemi Owode LGA.",
    notableAchievement: "Directing junior curriculum standards, character formation, and institutional development across JSS1–JSS3 cohorts.",
    status: "active"
  },
  {
    id: "mrs-abosede-elegbede",
    name: "Mrs. Abosede Aderemi Elegbede",
    role: "Former Principal (Junior Arm - ACHS JNR)",
    period: "2016 – August 2024",
    arm: "Ajebo Community High School, JNR",
    bio: "Mrs. Abosede Aderemi Elegbede served with distinction as the Principal for the Junior arm of the school until she officially stepped down and retired from active teaching service in August 2024. Her tenure was marked by academic discipline, moral leadership, and active collaboration with the Old Students Association to maintain school facilities.",
    notableAchievement: "Steered the Junior Arm to top performance in Obafemi-Owode LGA examinations and championed structural upkeep before her retirement in August 2024.",
    status: "retired"
  },
  {
    id: "mr-okusi",
    name: "Mr. Okusi",
    role: "Principal (Obafemi-Owode LGA Administrative Era)",
    period: "2010s Administrative Era",
    arm: "Ajebo Community High School",
    bio: "Mr. Okusi is a documented veteran principal of the institution within the Obafemi-Owode Local Government Area. Known for strict academic oversight and fostering community engagement, he helped consolidate the school's secondary curriculum during a critical transitional phase.",
    notableAchievement: "Expanded science and agricultural laboratory equipment and strengthened alumni-school collaboration during regional educational reforms.",
    status: "historical"
  },
  {
    id: "mr-a-o-folarin",
    name: "Chief A. O. Folarin (Late)",
    role: "Pioneer Principal / Headmaster",
    period: "Late 1970s – Early 1980s",
    arm: "Ajebo Community High School",
    bio: "One of the founding administrative pillars who established order, morning assemblies, and community trust when the school was first opened to rural students.",
    notableAchievement: "Laid the initial administrative framework and welcomed the first set of expatriate agricultural educators.",
    status: "historical"
  }
];

export const HISTORY_EVENTS: HistoryEvent[] = [
  {
    year: "October 1977",
    title: "Founding via Communal Self-Help",
    subtitle: "Communal Initiative of Ajebo & Surrounding Villages",
    description: "Ajebo Community High School (ACHS) was founded in 1977 through a communal self-help initiative by the people of Ajebo and the surrounding villages. Historically, Ajebo served as a major market and gathering centre for people from neighbouring villages, making it a natural hub for social, economic and educational development, reinforced by the earlier Anglican Central School.",
    category: "founding"
  },
  {
    year: "1977–1982",
    title: "Pioneer Era & Agricultural Philosophy",
    subtitle: "Education Combined with Farming & Self-Reliance",
    description: "The founding demonstrated the commitment and unity of the community. Guided by the Yoruba vision “Ìwé kíkó láìsí ọ̀kọ̀ àti àdá kò pé” (“Education without agriculture is incomplete”), students received strong academic instruction combined with practical farming, hard work, and self-reliance under dedicated educators.",
    category: "founding"
  },
  {
    year: "1982",
    title: "Graduation of the Foundation Set",
    subtitle: "First Set Graduation Milestone",
    description: "In 1982, the first set (foundation set) graduated. The inaugural graduating class proved the success of the communal self-help effort and set a high standard of academic excellence and enterprise for generations of students to follow.",
    category: "accreditation"
  },
  {
    year: "1983–1984",
    title: "WAEC & GCE O-Level Accreditation",
    subtitle: "National Examination Milestone",
    description: "Archived records confirm full accreditation to present candidates for the West African Examinations Council (WAEC) and GCE O-Levels. Early cohorts went on to become prominent public servants, legal minds, and entrepreneurs.",
    category: "accreditation"
  },
  {
    year: "1990s",
    title: "National JET Competition Success",
    subtitle: "Excellence in Science, Tech & Innovation",
    description: "The hardworking and innovative culture of ACHS reflected in the active participation and outstanding success of the school in the 1990s during the National JET (Junior Engineers, Technicians and Scientists) competition in Nigeria.",
    category: "leadership"
  },
  {
    year: "2000s–2024",
    title: "Junior & Senior Secondary Integration",
    subtitle: "Leadership & Administration",
    description: "The school expanded into distinct Junior and Senior secondary arms under the Ogun State Ministry of Education, guided by dedicated administrators and principals including Chief A. O. Folarin, Mr. Okusi, and Mrs. Abosede Aderemi Elegbede.",
    category: "leadership"
  },
  {
    year: "Today",
    title: "Global Impact & ACHSOSA Rebuilding Movement",
    subtitle: "Captains of Industries & Modern Campus Transformation",
    description: "The impact of ACHS is felt all over Nigeria and worldwide. The school has produced Professors, PhD holders in various fields, Engineers, Nurses, Medical Doctors, Surveyors, Passionate Teachers, Accountants, Lawyers, Politicians, Sport Men and Women, Traders, Manufacturers and Captains of industries. ACHSOSA is actively transforming the campus with modern classroom blocks, solar power, and revitalized agriculture.",
    category: "rebuilding"
  }
];

export const SUB_PROJECTS: BuildingSubProject[] = [
  {
    id: "proj-classrooms",
    title: "16-Classroom Modern Academic Block",
    description: "Construction of a modern 2-storey block with ergonomic furniture, whiteboards, ventilation, and teacher offices for the school.",
    scope: "16 Standard Classrooms & 4 Staff Offices",
    progressPercent: 65,
    iconName: "Building2",
    status: "In Progress",
    timeline: "Phase 1 completion targeted Q4 2026"
  },
  {
    id: "proj-science-ict",
    title: "STEM & Digital ICT Innovation Hub",
    description: "Fully equipped computer laboratory with 40 desktop units, high-speed internet, and science laboratory stations.",
    scope: "40 Workstations, Digital Lab & Physics/Chemistry Equipment",
    progressPercent: 50,
    iconName: "Laptop",
    status: "In Progress",
    timeline: "Equipment procurement ongoing"
  },
  {
    id: "proj-agric-farm",
    title: "Agric Tech & Poultry Demo Farm Upgrade",
    description: "Revamping the school's agricultural heritage with automated poultry cages, drip-irrigation beds, and processing tools.",
    scope: "Poultry Units, Vegetable Drip Irrigation & Processing Hub",
    progressPercent: 40,
    iconName: "Sprout",
    status: "Procurement Stage",
    timeline: "Land clearing & cage setup Q1 2027"
  },
  {
    id: "proj-solar-fence",
    title: "Perimeter Security & Solar Power Grid",
    description: "Off-grid solar inverter system for 24/7 power across classrooms, plus concrete perimeter walling for student safety.",
    scope: "15kW Off-Grid Solar Grid & Concrete Perimeter Security",
    progressPercent: 30,
    iconName: "Sun",
    status: "Planned",
    timeline: "Fencing design & solar specifications finalized"
  },
  {
    id: "proj-library",
    title: "Resource Library & Multipurpose Hall",
    description: "A 250-seater community & study hall equipped with e-books, physical reference texts, and assembly staging.",
    scope: "250-Seater Hall, Physical & Digital Book Collections",
    progressPercent: 15,
    iconName: "BookOpen",
    status: "Planned",
    timeline: "Architectural drawings ready"
  }
];

export const INITIAL_DONORS: DonorRecord[] = [
  {
    id: "don-1",
    name: "Hon. (Dr.) Tella O. Babatunde",
    gradSet: "1984 Set",
    contributionArea: "Classroom Block Structural Foundation & Framing",
    tier: "Lead Sponsor",
    date: "2026-06-15",
    subProjectTarget: "16-Classroom Modern Academic Block",
    message: "Supporting our school's future and honoring the founding teachers of 1984."
  },
  {
    id: "don-2",
    name: "Dr. Gbenga Adeoye",
    gradSet: "1986 Set",
    contributionArea: "ICT Innovation Hub Workstations & Tech Hardware",
    tier: "Lead Sponsor",
    date: "2026-06-20",
    subProjectTarget: "STEM & Digital ICT Innovation Hub",
    message: "Investing in the future legal, academic, and technological leaders of Ogun State."
  },
  {
    id: "don-3",
    name: "Eunice Akinwande",
    gradSet: "1985 Set",
    contributionArea: "Agric Demo Farm Irrigation & Poultry Cages",
    tier: "Key Building Partner",
    date: "2026-07-02",
    subProjectTarget: "Agric Tech & Poultry Demo Farm Upgrade",
    message: "Preserving and upgrading our school's historic agricultural excellence."
  },
  {
    id: "don-4",
    name: "ACHSOSA 1988 Set Association",
    gradSet: "1988 Set",
    contributionArea: "Classrooms Roofing & Window Modules",
    tier: "Patron Set",
    date: "2026-07-10",
    subProjectTarget: "16-Classroom Modern Academic Block",
    message: "Joint set pledge from the 1988 Set Members for the school building."
  },
  {
    id: "don-5",
    name: "Engr. Olumide Ogundipe",
    gradSet: "1992 Set",
    contributionArea: "Pro-Bono Structural Engineering & Solar Inverter Setup",
    tier: "Key Building Partner",
    date: "2026-07-18",
    subProjectTarget: "Perimeter Security & Solar Power Grid",
    message: "Providing structural engineering expertise and solar power equipment."
  },
  {
    id: "don-6",
    name: "Anonymous Old Student",
    gradSet: "1995 Set",
    contributionArea: "Library Furniture & Study Desks",
    tier: "Project Supporter",
    date: "2026-07-25",
    isAnonymous: true,
    message: "Long live Ajebo Community High School!"
  }
];

export const SCHOOL_EVENTS: SchoolEvent[] = [
  {
    id: "evt-retirement-adigbo",
    title: "Retirement Celebration & Honor Ceremony for Mrs. Bola Adigbo",
    date: "",
    time: "",
    location: "Ajebo Community High School & Reception Hall",
    description: "Special milestone honor ceremony celebrating the meritorious service and retirement of esteemed former Principal Mrs. Bola Adigbo, featuring ACHSOSA executive presentation of congratulatory retirement gifts and tokens of appreciation.",
    type: "Honorary & Retirement Ceremony",
    status: "concluded",
    isPassed: true,
    honouree: "Mrs. Bola Adigbo (Retired Principal)",
    featuredImage: "https://i.ibb.co/hJWdFwry/Whats-App-Image-2026-08-06-at-10-33-59-AM.jpg",
    featuredImageCaption: "Mrs. Bola Adigbo, Celebrated Retired Principal of Ajebo Community High School",
    giftImages: [
      {
        url: "https://i.ibb.co/WRsLGTX/Whats-App-Image-2026-08-06-at-10-33-00-AM.jpg",
        caption: "ACHSOSA Executive Presentation of Retirement Commemorative Gift to Mrs. Bola Adigbo",
        linkUrl: "https://ibb.co/zH9D6d82"
      },
      {
        url: "https://i.ibb.co/8LS6pbJC/Whats-App-Image-2026-08-06-at-8-09-54-PM-2.jpg",
        caption: "Gift Presentation & Felicitation by Association Representatives",
        linkUrl: "https://ibb.co/bgs148C4"
      },
      {
        url: "https://i.ibb.co/3YdMb5Z2/Whats-App-Image-2026-08-06-at-8-09-54-PM-1.jpg",
        caption: "Honorary Gift Package Delivered on Behalf of ACHSOSA Worldwide",
        linkUrl: "https://ibb.co/7dCqG9hC"
      },
      {
        url: "https://i.ibb.co/nqFwT6wr/Whats-App-Image-2026-08-06-at-8-09-54-PM.jpg",
        caption: "Retirement Celebration Reception with Alumni and School Staff",
        linkUrl: "https://ibb.co/8L4482g7"
      }
    ]
  },
  {
    id: "evt-1",
    title: "ACHSOSA Grand Building Project Foundation Laying & Homecoming",
    date: "Saturday, November 14, 2026",
    time: "10:00 AM WAT",
    location: "Ajebo Community High School Premises, Ajebo, Obafemi Owode LGA",
    description: "Join fellow alumni, traditional rulers, Ogun State Ministry of Education representatives, and current students as we break ground for the new 16-classroom block and ICT center.",
    type: "Reunion"
  },
  {
    id: "evt-2",
    title: "Global Diaspora Virtual Fundraiser & Gala",
    date: "Sunday, December 20, 2026",
    time: "5:00 PM WAT / 12:00 PM EST",
    location: "Online via Zoom & YouTube Live",
    description: "A virtual gathering of ACHSOSA members across North America, Europe, Asia, and Nigeria to review building progress and raise pledges for Phase 2.",
    type: "Fundraiser",
    isVirtual: true
  },
  {
    id: "evt-3",
    title: "Career & Agribusiness Mentorship Day for Current Students",
    date: "Friday, January 22, 2027",
    time: "9:00 AM WAT",
    location: "School Assembly Hall, ACHS Ajebo",
    description: "Distinguished alumni including Eunice Akinwande and Dr. Gbenga Adeoye present career guidance sessions in law, agriculture, medicine, and tech to SS2 & SS3 students.",
    type: "Mentorship"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "exco-inaug-1",
    title: "EXCO Inauguration Assembly",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/nNVWFRP2/Whats-App-Image-2026-08-03-at-7-36-13-PM.jpg",
    linkUrl: "https://ibb.co/dw3hR7m9",
    caption: "ACHSOSA Executive Officers during the official inauguration ceremony on Feb 14, 2026."
  },
  {
    id: "exco-inaug-2",
    title: "Oath of Office & Swearing-In",
    year: "Feb 14, 2026",
    category: "swearing-in",
    imageUrl: "https://i.ibb.co/7tFCW727/Whats-App-Image-2026-08-03-at-7-36-10-PM-1.jpg",
    linkUrl: "https://ibb.co/CKF87xhx",
    caption: "Newly elected ACHSOSA executive members taking their oath of office during proceedings."
  },
  {
    id: "exco-inaug-3",
    title: "Presidential Inaugural Address",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/1GgzHjyM/Whats-App-Image-2026-08-03-at-7-36-10-PM.jpg",
    linkUrl: "https://ibb.co/YBC0vwnX",
    caption: "Engr. Adebayo Joseph Joda delivering the inaugural address to assembly members."
  },
  {
    id: "exco-inaug-4",
    title: "Secretariat Proceedings & Documentation",
    year: "Feb 14, 2026",
    category: "swearing-in",
    imageUrl: "https://i.ibb.co/zThs7XqM/Whats-App-Image-2026-08-03-at-7-36-08-PM.jpg",
    linkUrl: "https://ibb.co/hJRsZB36",
    caption: "General Secretary Awojobi Babatunde Saheed and secretariat team recording proceedings."
  },
  {
    id: "exco-inaug-5",
    title: "Alumni Dignitaries & Set Leaders",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/rGqC8YvM/Whats-App-Image-2026-08-03-at-7-36-06-PM.jpg",
    linkUrl: "https://ibb.co/HDRWw6XY",
    caption: "Distinguished old students and set representatives gathered at the inauguration."
  },
  {
    id: "exco-inaug-6",
    title: "EXCO Executive Group Portrait",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/gx48bGp/Whats-App-Image-2026-08-03-at-7-36-03-PM-2.jpg",
    linkUrl: "https://ibb.co/RqjKG1m",
    caption: "Group portrait of the 17 executive officers following official swearing-in."
  },
  {
    id: "exco-inaug-7",
    title: "Inauguration Ceremony Assembly",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/Gv8PCCpP/Whats-App-Image-2026-08-03-at-7-36-05-PM.jpg",
    linkUrl: "https://ibb.co/fYy0rrF0",
    caption: "Alumni assembly gathered at Ajebo Community High School grounds."
  },
  {
    id: "exco-inaug-8",
    title: "EXCO Inauguration Milestone Photo",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/gx48bGp/Whats-App-Image-2026-08-03-at-7-36-03-PM-2.jpg",
    linkUrl: "https://ibb.co/RqjKG1m",
    caption: "Executive council officers celebrating the historic inauguration milestone."
  },
  {
    id: "exco-inaug-9",
    title: "Executive Officers Presentation",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/QvhZ2vFD/Whats-App-Image-2026-08-03-at-7-36-03-PM.jpg",
    linkUrl: "https://ibb.co/5hCdNhWK",
    caption: "Official presentation of executive committee members."
  },
  {
    id: "exco-inaug-10",
    title: "Handover & Swearing-In Moment",
    year: "Feb 14, 2026",
    category: "swearing-in",
    imageUrl: "https://i.ibb.co/23tWm8yh/Whats-App-Image-2026-08-03-at-7-36-02-PM.jpg",
    linkUrl: "https://ibb.co/Swn5WQPy",
    caption: "Handover ceremony and presentation of official duties to incoming EXCO."
  },
  {
    id: "exco-inaug-11",
    title: "Alumni Fellowship & Gathering",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/whSXHdVw/Whats-App-Image-2026-08-03-at-7-34-56-PM.jpg",
    linkUrl: "https://ibb.co/0yCSNnTF",
    caption: "Old students connecting in celebration during the inauguration ceremony."
  },
  {
    id: "exco-inaug-12",
    title: "Executive Council Leadership Session",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/zVwFH5hd/Whats-App-Image-2026-08-03-at-7-34-55-PM-5.jpg",
    linkUrl: "https://ibb.co/fd79GSYJ",
    caption: "ACHSOSA executive council officers sharing a light moment during inauguration."
  },
  {
    id: "exco-inaug-13",
    title: "Swearing-In Ceremony Highlights",
    year: "Feb 14, 2026",
    category: "swearing-in",
    imageUrl: "https://i.ibb.co/ZpRP1C3R/Whats-App-Image-2026-08-03-at-7-34-55-PM-4.jpg",
    linkUrl: "https://ibb.co/67cxJ52c",
    caption: "Key moments captured during the swearing-in of the 17 officers."
  },
  {
    id: "exco-inaug-14",
    title: "Congratulatory Session",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/KxSCwXbk/Whats-App-Image-2026-08-03-at-7-34-55-PM-3.jpg",
    linkUrl: "https://ibb.co/fdLmv2q5",
    caption: "Old students extending congratulations to newly inaugurated leaders."
  },
  {
    id: "exco-inaug-15",
    title: "ACHS Rebuilding Commitment",
    year: "Feb 14, 2026",
    category: "inauguration",
    imageUrl: "https://i.ibb.co/QFMvfZTs/Whats-App-Image-2026-08-03-at-7-34-55-PM-2.jpg",
    linkUrl: "https://ibb.co/d0D4rSVn",
    caption: "Alumni leaders committing to the physical rebuilding of Ajebo High School."
  },
  {
    id: "exco-inaug-16",
    title: "Executive Officers Portrait Session",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/JWJxPL8R/Whats-App-Image-2026-08-03-at-7-34-55-PM-1.jpg",
    linkUrl: "https://ibb.co/V04H8ybW",
    caption: "Official inauguration portrait of ACHSOSA executive members."
  },
  {
    id: "exco-inaug-17",
    title: "Commemorative Inauguration Group Photo",
    year: "Feb 14, 2026",
    category: "portraits",
    imageUrl: "https://i.ibb.co/kg80Cgsr/Whats-App-Image-2026-08-03-at-7-34-55-PM.jpg",
    linkUrl: "https://ibb.co/Z68KD6pw",
    caption: "Commemorative group photograph marking the conclusion of the EXCO inauguration."
  },
  {
    id: "gallery-campus-1",
    title: "School Compound & Grounds View I",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/DfqJrQXV/Whats-App-Image-2026-08-06-at-8-26-05-AM-1.jpg",
    linkUrl: "https://ibb.co/WvThVf9x",
    caption: "Perspective of the school grounds and administrative compound at Ajebo Community High School."
  },
  {
    id: "gallery-campus-2",
    title: "School Compound & Grounds View II",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/219YLGXn/Whats-App-Image-2026-08-06-at-8-26-05-AM-2.jpg",
    linkUrl: "https://ibb.co/67MJpj6n",
    caption: "Open school grounds and serene natural landscape of the Ajebo campus."
  },
  {
    id: "gallery-campus-3",
    title: "Academic Facilities & Walkways",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/rGGpY3nQ/Whats-App-Image-2026-08-06-at-8-26-05-AM.jpg",
    linkUrl: "https://ibb.co/KjjsdDC5",
    caption: "Connecting pathways and surrounding trees across the secondary school environment."
  },
  {
    id: "gallery-campus-4",
    title: "Classroom Block Structure & Facade",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/3YNR1Xt3/Whats-App-Image-2026-08-06-at-8-26-06-AM-1.jpg",
    linkUrl: "https://ibb.co/KzqK6ZCP",
    caption: "Classroom block architecture and veranda layout at Ajebo Community High School."
  },
  {
    id: "gallery-campus-5",
    title: "School Building Perspective",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/n8mLNcwX/Whats-App-Image-2026-08-06-at-8-26-06-AM-2.jpg",
    linkUrl: "https://ibb.co/prwLBz1H",
    caption: "Exterior view of classroom facilities and structural blocks."
  },
  {
    id: "gallery-campus-6",
    title: "Classroom Corridor & Access Way",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/jkrRY6Gv/Whats-App-Image-2026-08-06-at-8-26-06-AM-3.jpg",
    linkUrl: "https://ibb.co/yFQSCf5n",
    caption: "Covered hallway and access corridor leading to student classrooms."
  },
  {
    id: "gallery-campus-7",
    title: "ACHS School Compound Landscape",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/JFB7tvBJ/Whats-App-Image-2026-08-06-at-8-26-06-AM.jpg",
    linkUrl: "https://ibb.co/6JnPwHnC",
    caption: "Expansive greenery and compound perimeter at the school."
  },
  {
    id: "gallery-campus-8",
    title: "Senior School Administration Wing",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/yBk4WRdV/Whats-App-Image-2026-08-06-at-8-26-07-AM-1.jpg",
    linkUrl: "https://ibb.co/FqYHgWmn",
    caption: "Senior school academic wing and administrative office entrance."
  },
  {
    id: "gallery-campus-9",
    title: "Educational Campus Overview",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/Wvf2xTTM/Whats-App-Image-2026-08-06-at-8-26-07-AM-2.jpg",
    linkUrl: "https://ibb.co/zVZ4nkkB",
    caption: "Broad landscape view across the Ajebo Community High School compound."
  },
  {
    id: "gallery-campus-10",
    title: "Campus Infrastructure View",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/rRt1nC4S/Whats-App-Image-2026-08-06-at-8-26-07-AM.jpg",
    linkUrl: "https://ibb.co/ycRbLwW1",
    caption: "School environment and utility quarters across the school premises."
  },
  {
    id: "gallery-campus-11",
    title: "Assembly & Classrooms Grounds",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/fYxvN9xm/Whats-App-Image-2026-08-06-at-8-26-08-AM-1.jpg",
    linkUrl: "https://ibb.co/6RWBt8W6",
    caption: "Morning assembly area and surrounding classroom blocks."
  },
  {
    id: "gallery-campus-12",
    title: "Campus Exterior Architecture",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/5hLH7c1J/Whats-App-Image-2026-08-06-at-8-26-08-AM-2.jpg",
    linkUrl: "https://ibb.co/d4DYhKfH",
    caption: "External masonry and architecture of the secondary school buildings."
  },
  {
    id: "gallery-campus-13",
    title: "School Field & Green Grounds",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/67k5SFh2/Whats-App-Image-2026-08-06-at-8-26-08-AM-3.jpg",
    linkUrl: "https://ibb.co/ycrJCqTD",
    caption: "Sports field and surrounding natural vegetation of Ajebo town."
  },
  {
    id: "gallery-campus-14",
    title: "Campus Environment & Blocks",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/fd59gPZ8/Whats-App-Image-2026-08-06-at-8-26-08-AM-4.jpg",
    linkUrl: "https://ibb.co/9HLhDCBw",
    caption: "Front lawn and access route into the central school area."
  },
  {
    id: "gallery-campus-15",
    title: "School Facilities & Structure",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/BKG8r3Qg/Whats-App-Image-2026-08-06-at-8-26-08-AM.jpg",
    linkUrl: "https://ibb.co/tPzyxKvb",
    caption: "Architectural outline of the learning blocks at ACHS."
  },
  {
    id: "gallery-campus-16",
    title: "Classroom Exterior & Roofing Detail",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/yrVrGp9/Whats-App-Image-2026-08-06-at-8-26-09-AM-1.jpg",
    linkUrl: "https://ibb.co/L3v3brF",
    caption: "Roof line and masonry structure of the classroom wing."
  },
  {
    id: "gallery-campus-17",
    title: "School Compound Pathways",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/hx39D2bj/Whats-App-Image-2026-08-06-at-8-26-09-AM-2.jpg",
    linkUrl: "https://ibb.co/rKD045YS",
    caption: "Central walkway connecting different sections of the school."
  },
  {
    id: "gallery-campus-18",
    title: "Academic Block Frontage",
    year: "2026",
    category: "classrooms",
    imageUrl: "https://i.ibb.co/SXLXzQQy/Whats-App-Image-2026-08-06-at-8-26-09-AM-3.jpg",
    linkUrl: "https://ibb.co/hRqRSXX9",
    caption: "Front perspective of the educational blocks at Ajebo Community High School."
  },
  {
    id: "gallery-campus-19",
    title: "ACHS Grounds & Environment",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/bgfBj2yF/Whats-App-Image-2026-08-06-at-8-26-09-AM-4.jpg",
    linkUrl: "https://ibb.co/XZwsf3dD",
    caption: "Open school perimeter and tranquil countryside setting of Ajebo."
  },
  {
    id: "gallery-campus-20",
    title: "Campus Architecture & Perimeter",
    year: "2026",
    category: "school-grounds",
    imageUrl: "https://i.ibb.co/k2r0sH5d/Whats-App-Image-2026-08-06-at-8-26-09-AM.jpg",
    linkUrl: "https://ibb.co/9Hf2k8cM",
    caption: "School architectural perimeter and educational ground views."
  }
];

export const INITIAL_FORUM_POSTS: ForumPost[] = [
  {
    id: "post-1",
    authorName: "Hon. (Dr.) Tella O. Babatunde",
    authorSet: "Class of 1984",
    title: "A Call to All ACHSOSA Sets: Let Us Legacy-Proof Our Alma Mater",
    content: "Greetings fellow alumni! Looking back at our GCE O-Level days in 1984, Ajebo Community High School gave us the foundation to serve Ogun State and Nigeria. The current school rebuilding project is our chance to give back. I urge all set executives to mobilize their sets for the November groundbreaking!",
    date: "2026-07-20",
    likes: 34,
    replies: [
      {
        id: "rep-1",
        authorName: "Dr. Gbenga Adeoye",
        authorSet: "Class of 1995",
        content: "Well said, Honorable! The 1995 set is fully aligned. We have already pooled our initial pledge for the ICT center.",
        date: "2026-07-21"
      },
      {
        id: "rep-2",
        authorName: "Eunice Akinwande",
        authorSet: "Class of 1985",
        content: "Count the 1985 set in! We are specifically supporting the agricultural demonstration farm revamp.",
        date: "2026-07-22"
      }
    ]
  },
  {
    id: "post-2",
    authorName: "Mrs. Abosede Elegbede",
    authorSet: "Former Principal (Retired Aug 2024)",
    title: "Warm Wishes and Gratitude to the Alumni Association",
    content: "I want to express my deepest appreciation to ACHSOSA for the overwhelming love shown during my retirement in August 2024. Seeing the alumni step up to build modern facilities for our children fills my heart with joy. May God bless Ajebo Community High School!",
    date: "2026-07-15",
    likes: 52,
    replies: [
      {
        id: "rep-3",
        authorName: "Engr. Olumide Ogundipe",
        authorSet: "Class of 1992",
        content: "Thank you ma for your selfless service to ACHS Junior. Enjoy a peaceful and blessed retirement!",
        date: "2026-07-16"
      }
    ]
  }
];

export const EXCO_MEMBERS: ExcoMember[] = [
  {
    no: "01",
    pos: "President",
    name: "Engr. Adebayo Joseph Joda",
    raw: "07087106906",
    formatted: "0708 710 6906",
    wa: "2347087106906",
    showContact: true
  },
  {
    no: "02",
    pos: "Vice President",
    name: "Racheal Ike",
    showContact: false
  },
  {
    no: "03",
    pos: "General Secretary",
    name: "Awojobi Babatunde Saheed",
    raw: "08025047821",
    formatted: "0802 504 7821",
    wa: "2348025047821",
    showContact: true
  },
  {
    no: "04",
    pos: "Assistant General Secretary",
    name: "Alhaja Ajewanle",
    showContact: false
  },
  {
    no: "05",
    pos: "Treasurer",
    name: "Owolabi Adesanya",
    showContact: false
  },
  {
    no: "06",
    pos: "Financial Secretary",
    name: "Raji Adeola Tafi",
    showContact: false
  },
  {
    no: "07",
    pos: "Auditor",
    name: "Sodipo Akeem",
    showContact: false
  },
  {
    no: "08",
    pos: "Social Secretary",
    name: "Hazzan Aminat",
    showContact: false
  },
  {
    no: "09",
    pos: "Assistant Social Secretary",
    name: "Sobola Aina",
    showContact: false
  },
  {
    no: "10",
    pos: "PRO",
    name: "Olasunkanmi",
    showContact: false
  },
  {
    no: "11",
    pos: "Assistant PRO",
    name: "Ogundiran Sunday",
    showContact: false
  },
  {
    no: "12",
    pos: "Project Coordinator",
    name: "Engr. Enisemo Solomon",
    showContact: false
  },
  {
    no: "13",
    pos: "Welfare",
    name: "Oyelade Motunrayo",
    showContact: false
  },
  {
    no: "14",
    pos: "Asst Welfare",
    name: "Ogundare Oyewunmi Omolara",
    showContact: false
  },
  {
    no: "15",
    pos: "Chief Whip",
    name: "Quadry Rasaq",
    showContact: false
  },
  {
    no: "16",
    pos: "Asst Chief Whip",
    name: "Alhaji Yekinni Jamiu",
    showContact: false
  },
  {
    no: "17",
    pos: "Legal Adviser",
    name: "Odamo Adewale",
    showContact: false
  }
];

// School established in October 1977. Sets range from 1977 Set to 2025 Set.
export const GRADUATING_SETS: string[] = Array.from(
  { length: 2025 - 1977 + 1 },
  (_, i) => `${1977 + i} Set`
);

export const ACHSOSA_BOARD_OF_TRUSTEES: BoardOfTrusteesMember[] = [
  { id: "bot-1", no: "1", name: "Engr Shadrach Ogunseye", role: "Member, Board of Trustees" },
  { id: "bot-2", no: "2", name: "Barr Sina Soyinka", role: "Member, Board of Trustees" },
  { id: "bot-3", no: "3", name: "Dr. Tunde Anifowose-Kelani", role: "Member, Board of Trustees" },
  { id: "bot-4", no: "4", name: "Dr Joseph Kayode Ogunwede", role: "Member, Board of Trustees" },
  { id: "bot-5", no: "5", name: "Chief Ade Adeniji", role: "Member, Board of Trustees" },
  { id: "bot-6", no: "6", name: "Mr Dolamu Akindele", role: "Member, Board of Trustees" },
  { id: "bot-7", no: "7", name: "Sola Ogungbade", role: "Member, Board of Trustees" }
];

export const ACHSOSA_ELDERS_FORUM: EldersForumMember[] = [
  { id: "ef-1", no: "1", name: "Adegboyega Amos Adekunle", role: "Member, Elders Forum" },
  { id: "ef-2", no: "2", name: "Bajegbo Segun", role: "Member, Elders Forum" },
  { id: "ef-3", no: "3", name: "Dr Joseph Alawode", role: "Member, Elders Forum" },
  { id: "ef-4", no: "4", name: "Dr Omoyayi Jubril", role: "Member, Elders Forum" },
  { id: "ef-5", no: "5", name: "Dr Gbenga Adeoye", role: "Member, Elders Forum" },
  { id: "ef-6", no: "6", name: "Elijah Adewusi", role: "Member, Elders Forum" },
  { id: "ef-7", no: "7", name: "Funmilayo Obe", role: "Member, Elders Forum" },
  { id: "ef-8", no: "8", name: "Folashade Olowu", role: "Member, Elders Forum" },
  { id: "ef-9", no: "9", name: "Gbolahan Olufemi Akanji", role: "Member, Elders Forum" },
  { id: "ef-10", no: "10", name: "Kuburat Omolara Olowokokere", role: "Member, Elders Forum" },
  { id: "ef-11", no: "11", name: "Monilola Enuice Akinwale", role: "Member, Elders Forum" },
  { id: "ef-12", no: "12", name: "Ojubanire Sina", role: "Member, Elders Forum" },
  { id: "ef-13", no: "13", name: "Olusesan Idowu", role: "Member, Elders Forum" },
  { id: "ef-14", no: "14", name: "Omotunde Ogunkoya", role: "Member, Elders Forum" },
  { id: "ef-15", no: "15", name: "Sheu Adebowale", role: "Member, Elders Forum" }
];

export const ACHSOSA_ADVISERS: AdviserMember[] = [
  { id: "adv-1", no: "1", name: "Adebisi Oyemade", role: "Adviser, ACHSOSA" },
  { id: "adv-2", no: "2", name: "Adelaja Lukuman", role: "Adviser, ACHSOSA" },
  { id: "adv-3", no: "3", name: "Oluwakemi Ojubanire", role: "Adviser, ACHSOSA" },
  { id: "adv-4", no: "4", name: "Aspire Temitope", role: "Adviser, ACHSOSA" },
  { id: "adv-5", no: "5", name: "Johnson Sotayo", role: "Adviser, ACHSOSA" },
  { id: "adv-6", no: "6", name: "Olawale Afuape", role: "Adviser, ACHSOSA" }
];

export const ACHSOSA_GRAND_PATRONS: GrandPatronMember[] = [
  { id: "gp-1", no: "1", name: "Chief Adebayo Abiodun Victor", role: "Grand Patron, ACHSOSA" }
];

export const INITIAL_DIRECTORY_ALUMNI: AlumniRegistration[] = [
  {
    id: "dir-1",
    fullName: "Hon. (Dr.) Tella O. Babatunde",
    gradSet: "1984 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 803 111 2233",
    occupation: "Honorable Lawmaker, Ogun State House of Assembly (OGHA)",
    city: "Abeokuta",
    country: "Nigeria",
    bio: "Completed GCE O-Level Certificate at ACHS in 1984. Distinguished legislator representing his constituency.",
    registeredAt: "2026-06-01"
  },
  {
    id: "dir-2",
    fullName: "Dr. Gbenga Adeoye",
    gradSet: "1995 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 802 333 4455",
    occupation: "Corporate Lawyer & Tax Specialist • Senior Legal Practitioner",
    city: "Lagos",
    country: "Nigeria",
    bio: "Senior legal consultant and Chairman of ACHSOSA Legal & Rebuilding Advisory Committee.",
    registeredAt: "2026-06-05"
  },
  {
    id: "dir-3",
    fullName: "Eunice Akinwande",
    gradSet: "1985 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 805 666 7788",
    occupation: "Agronomist & Former Assistant Director, Lagos State Ministry of Agriculture",
    city: "Ikeja / Lagos",
    country: "Nigeria",
    bio: "Agricultural pioneer, agribusiness innovator, and patron of ACHS demonstration farm.",
    registeredAt: "2026-06-10"
  },
  {
    id: "dir-4",
    fullName: "Engr. Olumide Ogundipe",
    gradSet: "1992 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 803 999 0011",
    occupation: "Civil & Structural Engineer • Project Director",
    city: "Ibadan",
    country: "Nigeria",
    bio: "COREN registered structural engineer and technical advisor for new school buildings.",
    registeredAt: "2026-06-15"
  },
  {
    id: "dir-5",
    fullName: "Mrs. Folake Aderibigbe",
    gradSet: "1988 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 806 222 3344",
    occupation: "Education Specialist & Principal Lecturer",
    city: "Abeokuta",
    country: "Nigeria",
    bio: "Veteran pedagogue dedicated to teacher education and student mentoring across South-West Nigeria.",
    registeredAt: "2026-06-20"
  },
  {
    id: "dir-6",
    fullName: "Dr. Tunde Anifowose-Kelani PHF JCI Senator",
    gradSet: "1982 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 803 555 7711",
    occupation: "International Education Consultant",
    city: "Abuja",
    country: "Nigeria",
    bio: "International Education Consultant, PHF JCI Senator, Member Board of Trustees ACHSOSA.",
    registeredAt: "2026-06-25"
  },
  {
    id: "dir-7",
    fullName: "Engr Ogunseye Shadrach (PAST PRESIDENT ACHSOSA)",
    gradSet: "1982 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 802 777 9900",
    occupation: "Civil Engineering",
    city: "Lagos",
    country: "Nigeria",
    bio: "Civil Engineering Specialist, Past President ACHSOSA, Member Board of Trustees.",
    registeredAt: "2026-06-28"
  },
  {
    id: "dir-8",
    fullName: "Engr Taiwo Oludotun",
    gradSet: "1997 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 803 888 1234",
    occupation: "Commissioner for Forestry, Ogun State • Politician",
    city: "Ogun",
    country: "Nigeria",
    bio: "Honorable Commissioner for Forestry, Ogun State Government, Politician and Engineer.",
    registeredAt: "2026-07-02"
  },
  {
    id: "dir-9",
    fullName: "Mr Segun Bajegbo",
    gradSet: "1984 Set",
    email: "info@ajebocommunityhighschool.com",
    phone: "+234 803 444 8899",
    occupation: "CEO, Samaab Global Agricultural Processing Ltd • Vice President, Ogun State Chamber of Commerce Industry Mines and Agriculture",
    city: "Ogun",
    country: "Nigeria",
    bio: "Former Supervisory Counsellor for Works & Infrastructure - OJO LG, Senior Special Adviser to the Deputy Governor - Relaunched of uniform voluntary Organizations in Lagos State Government. CEO, Samaab Global Agricultural Processing Ltd; Vice President, Ogun state Chamber of Commerce Industry Mines and Agriculture.",
    registeredAt: "2026-07-05"
  }
];



