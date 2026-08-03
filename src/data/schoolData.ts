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
  MemberWelfareItem
} from '../types';

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
    iconName: "Shield"
  },
  {
    id: "rem-classrooms",
    title: "Remodelling of Classroom Blocks (SS1, SS2, SS3)",
    category: "Classroom Block",
    proposedModelDesc: "3D architectural remodel featuring modern yellow-accented corrugated roofing, plastered and painted walls, tiled floors, secure steel casement windows, and ergonomic student desks.",
    asBuiltRealityDesc: "As-built SS1 & SS3 blocks suffered severe roof leakages, cracked earth floors, broken wooden window shutters, and missing furniture.",
    status: "As-Built Analysis",
    iconName: "Building2"
  },
  {
    id: "rem-science-lab",
    title: "Science Laboratory Remodelling",
    category: "Specialist Facility",
    proposedModelDesc: "3D model of Block D Science Lab with full laboratory benches, gas and water supply lines, safety equipment, and secure storage for chemistry, physics, and biology equipment.",
    asBuiltRealityDesc: "As-built science lab had completely collapsed timber roof trusses, rotting laboratory benches, missing window panes, and dilapidated walls.",
    status: "As-Built Analysis",
    iconName: "Microscope"
  },
  {
    id: "rem-technical-workshop",
    title: "Technical Building & Workshop Remodelling",
    category: "Specialist Facility",
    proposedModelDesc: "3D model of Block A Technical Workshop with specialized practical equipment benches, safety partitioning, and adequate lighting for technical drawing and vocational crafts.",
    asBuiltRealityDesc: "As-built technical workshop was an unrendered hollow red-brick structure with broken corrugated sheets and incomplete doors.",
    status: "As-Built Analysis",
    iconName: "Wrench"
  },
  {
    id: "rem-auditorium",
    title: "School Auditorium Remodelling",
    category: "Classroom Block",
    proposedModelDesc: "3D model of proposed remodelled main school auditorium featuring elevated stage, acoustic ceiling, dual double-door emergency exits, and high-capacity assembly seating.",
    asBuiltRealityDesc: "As-built auditorium roof had caved in entirely due to weather exposure, leaving structural beams exposed and walls severely degraded.",
    status: "As-Built Analysis",
    iconName: "Users"
  },
  {
    id: "rem-principal-ict-staff",
    title: "Principal Office, ICT Lab & Staff Room Block",
    category: "Specialist Facility",
    proposedModelDesc: "3D model combining executive principal office suite, staff common room, and 40-desktop computer lab under one modern administrative wing.",
    asBuiltRealityDesc: "As-built ICT and staff room were unplastered block structures with rusting security bars and leaking roof sheets.",
    status: "Proposed 3D Render Ready",
    iconName: "Laptop"
  },
  {
    id: "rem-principal-lodge",
    title: "Principal's Official Lodge Remodelling",
    category: "Staff Lodge",
    proposedModelDesc: "Proposed remodelled residential lodge with modern green architectural wall accents, ensuite facilities, security fencing, and water supply for resident principals.",
    asBuiltRealityDesc: "As-built principal lodge suffered water damage, stained walls, missing plumbing fixtures, and degraded roofing.",
    status: "As-Built Analysis",
    iconName: "Home"
  },
  {
    id: "rem-corpers-lodge",
    title: "Corper's Lodge (NYSC Residential Quarters)",
    category: "Staff Lodge",
    proposedModelDesc: "Proposed remodelling to provide comfortable, safe residential quarters for National Youth Service Corps (NYSC) teachers serving at ACHS.",
    asBuiltRealityDesc: "As-built corper's lodge had deteriorating plaster, weather-beaten wooden doors, and no internal sanitary facilities.",
    status: "As-Built Analysis",
    iconName: "GraduationCap"
  },
  {
    id: "rem-hall-500",
    title: "New Project: 500-Seater Multipurpose Hall",
    category: "New Capital Project",
    proposedModelDesc: "Brand-new architectural proposal for a 500-seater grand hall for school assemblies, WAEC/NECO examination halls, alumni conventions, and community events.",
    asBuiltRealityDesc: "New capital initiative designed by Greenwall Design and Construct to replace makeshift gathering spaces.",
    status: "Proposed 3D Render Ready",
    iconName: "Building"
  },
  {
    id: "rem-cbt-100",
    title: "New Project: 100-Seater CBT / ICT Center",
    category: "New Capital Project",
    proposedModelDesc: "Standalone modern Computer-Based Test (CBT) center with 100 networked computer terminals, server room, solar backup, and JAMB accreditation setup.",
    asBuiltRealityDesc: "New capital project to enable ACHS students take JAMB UTME & SSCE CBT exams locally without traveling long distances.",
    status: "Proposed 3D Render Ready",
    iconName: "Monitor"
  },
  {
    id: "rem-toilets",
    title: "Front & Back Toilet Facilities Modernization",
    category: "Sanitation & Utilities",
    proposedModelDesc: "Complete sanitation overhaul converting uncompleted pit toilet structures into modern water-waterborne toilet blocks for male and female students and staff.",
    asBuiltRealityDesc: "As-built front and back toilet buildings were uncompleted shells with no WC equipment, tiles, running water, or roofs.",
    status: "Action Plan Specified",
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
  motto: "IWE KIKO LAISI OKO ATI ADA KOIPE",
  mottoMeaning: "Education must be combined with hard work and practical life",
  location: "Ajebo Town, Obafemi Owode Local Government Area, Ogun State, Nigeria",
  lga: "Obafemi Owode LGA",
  state: "Ogun State",
  establishedYear: "October 1977",
  waecAccreditationYear: "1983–1984",
  logoUrl: "https://i.ibb.co/5XyPmfPd/Whats-App-Image-2026-08-01-at-2-45-25-PM.jpg",
  contactEmail: "info@ajebocommunityhighschool.edu.ng",
  contactPhone: "+234 803 456 7890",
  rebuildingDriveStatus: "Phase 1 Construction & Infrastructure Modernization",
  badgeDetails: {
    book: "The Open Book at the top stands for Knowledge.",
    cutlassHoe: "The Crossed Cutlass (Ada) and Hoe (Oko) with farm mound stands for Agriculture and dignity of labour - true to our motto.",
    shield: "The Shield stands for the protection and unity of Ajebo community."
  }
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
    gradYear: "1986",
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
    id: "mrs-abosede-elegbede",
    name: "Mrs. Abosede Aderemi Elegbede",
    role: "Principal (Junior Arm - ACHS JNR)",
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
    subtitle: "Community Driven Self-Help Initiative",
    description: "Founded in October 1977, Ajebo Community High School, Ajebo was established through communal self-help. Visionary local elders and leaders established the institution to bring quality secondary education directly to Ajebo town and surrounding agrarian villages.",
    category: "founding"
  },
  {
    year: "1977–1982",
    title: "Pioneer Era & Volunteer Faculty",
    subtitle: "Communal Classrooms & Dedicated Teachers",
    description: "During 1977–1982: Pioneer students, communal classrooms, and dedicated volunteer teachers laid the solid foundation of academic discipline, practical agriculture, and community self-reliance.",
    category: "founding"
  },
  {
    year: "1982",
    title: "Graduation of the Foundation Set",
    subtitle: "First Set Graduation Milestone",
    description: "1982: First Set graduated - the foundation set. The inaugural graduating class proved the success of the communal self-help effort and set a high standard for generations of students to come.",
    category: "accreditation"
  },
  {
    year: "1983–1984",
    title: "WAEC & GCE O-Level Accreditation",
    subtitle: "National Examination Milestone",
    description: "Archived records confirm full accreditation to present candidates for the West African Examinations Council (WAEC) and GCE O-Levels. Early cohorts produced prominent public servants like Hon. (Dr.) Tella O. Babatunde (1984 Set).",
    category: "accreditation"
  },
  {
    year: "2000s–2024",
    title: "Junior & Senior Secondary Integration",
    subtitle: "Leadership & Administration",
    description: "The school expanded into distinct Junior and Senior secondary arms under the Ogun State Ministry of Education, guided by dedicated administrators like Mr. Okusi and Mrs. Abosede Aderemi Elegbede.",
    category: "leadership"
  },
  {
    year: "Today",
    title: "Full Secondary School & Thriving Alumni Network",
    subtitle: "Ogun State Public School & ACHSOSA Rebuilding Drive",
    description: "Today: A full Junior and Senior Secondary School under Ogun State, with a thriving Old Students' Association (ACHSOSA) actively constructing a modern 16-classroom block, STEM ICT hub, solar grid, and revamped agricultural farm.",
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
    id: "gal-1",
    title: "Early Practical Agricultural Science Class",
    year: "1982",
    category: "historical",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d6eb12735?auto=format&fit=crop&q=80&w=800",
    caption: "Students working on the experimental poultry and crop plots under expatriate agricultural instructors."
  },
  {
    id: "gal-2",
    title: "Groundbreaking & Site Survey for New Classroom Block",
    year: "2026",
    category: "rebuilding",
    imageUrl: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=800",
    caption: "ACHSOSA building committee members conducting physical surveys on school grounds."
  },
  {
    id: "gal-3",
    title: "Mrs. Abosede Elegbede Retirement Send-off",
    year: "August 2024",
    category: "historical",
    imageUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800",
    caption: "Staff and old students celebrating Mrs. Elegbede after years of service as ACHS Junior Principal."
  },
  {
    id: "gal-4",
    title: "Architectural 3D Model of Proposed School Complex",
    year: "2026",
    category: "rebuilding",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    caption: "The vision for the modern eco-friendly academic block, solar grid, and ICT hub."
  },
  {
    id: "gal-5",
    title: "1984 WAEC Set Reunion Gathering",
    year: "2023",
    category: "reunions",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    caption: "Members of the 1984 set reuniting to establish the initial school development endowment fund."
  },
  {
    id: "gal-6",
    title: "Current Students in Classroom Session",
    year: "2025",
    category: "academics",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
    caption: "Students diligent at work, inspiring the alumni's commitment to building improved modern facilities."
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
        authorSet: "Class of 1986",
        content: "Well said, Honorable! The 1986 set is fully aligned. We have already pooled our initial pledge for the ICT center.",
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

