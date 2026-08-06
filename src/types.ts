export type TabType = 
  | 'home'
  | 'building'
  | 'history'
  | 'alumni'
  | 'directory'
  | 'leadership'
  | 'exco'
  | 'events'
  | 'gallery'
  | 'forum';

export interface ExcoMember {
  no: string;
  pos: string;
  name: string;
  email?: string;
  personalEmail?: string;
  raw?: string;
  formatted?: string;
  wa?: string;
  showContact?: boolean;
}

export interface AlumniProfile {
  id: string;
  name: string;
  title: string;
  gradYear: string;
  occupation: string;
  companyOrOrg?: string;
  location?: string;
  category: 'law' | 'agriculture' | 'politics' | 'business' | 'education' | 'healthcare' | 'tech';
  bio: string;
  quote?: string;
  achievements: string[];
  image?: string;
  isVerified: boolean;
  featured?: boolean;
}

export interface AdminLeader {
  id: string;
  name: string;
  role: string;
  period: string;
  arm?: string;
  phone?: string;
  bio: string;
  notableAchievement: string;
  status: 'active' | 'retired' | 'historical';
  image?: string;
}

export interface CompletedProject {
  id: string;
  title: string;
  description: string;
  category: string;
  dateCompleted?: string;
  imageUrls: string[];
}

export interface AlumniAmbassador {
  id: string;
  name: string;
  role: string;
  gradSet: string;
  contact?: string;
}

export interface BuildingSubProject {
  id: string;
  title: string;
  description: string;
  scope: string;
  progressPercent: number; // 0 to 100
  iconName: string;
  status: 'In Progress' | 'Planned' | 'Phase 1 Complete' | 'Procurement Stage';
  timeline: string;
}

export interface DonorRecord {
  id: string;
  name: string;
  gradSet: string;
  contributionArea: string; // e.g., "Classroom Block Foundation Sponsorship"
  tier: 'Lead Sponsor' | 'Key Building Partner' | 'Patron Set' | 'Project Supporter';
  date: string;
  subProjectTarget?: string;
  isAnonymous?: boolean;
  message?: string;
}

export interface AlumniRegistration {
  id: string;
  fullName: string;
  gradSet: string;
  email: string;
  phone: string;
  occupation: string;
  city: string;
  country: string;
  bio?: string;
  linkedinOrSocial?: string;
  registeredAt: string;
}

export interface HistoryEvent {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'founding' | 'accreditation' | 'agriculture' | 'leadership' | 'rebuilding';
  image?: string;
}

export interface BoardOfTrusteesMember {
  id?: string;
  no: string | number;
  name: string;
  role?: string;
  title?: string;
}

export interface EldersForumMember {
  id?: string;
  no: string | number;
  name: string;
  role?: string;
  title?: string;
}

export interface AdviserMember {
  id?: string;
  no: string | number;
  name: string;
  role?: string;
  title?: string;
}

export interface GrandPatronMember {
  id?: string;
  no: string | number;
  name: string;
  role?: string;
  title?: string;
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  type: 'Reunion' | 'Fundraiser' | 'Mentorship' | 'General Assembly' | 'Honorary & Retirement Ceremony' | 'Ceremony';
  isVirtual?: boolean;
  featuredImage?: string;
  featuredImageCaption?: string;
  giftImages?: {
    url: string;
    caption: string;
    linkUrl?: string;
  }[];
  honouree?: string;
  status?: 'upcoming' | 'concluded' | 'passed';
  isPassed?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  year: string;
  category: string;
  imageUrl: string;
  caption: string;
  linkUrl?: string;
}

export interface ForumPost {
  id: string;
  authorName: string;
  authorSet: string;
  title: string;
  content: string;
  date: string;
  likes: number;
  replies: {
    id: string;
    authorName: string;
    authorSet: string;
    content: string;
    date: string;
  }[];
}

export interface RemodellingFacility {
  id: string;
  title: string;
  category: 'Classroom Block' | 'Specialist Facility' | 'Staff Lodge' | 'New Capital Project' | 'Sanitation & Utilities';
  proposedModelDesc: string;
  asBuiltRealityDesc: string;
  status: 'Proposed 3D Render Ready' | 'As-Built Analysis' | 'Action Plan Specified';
  requirements?: string[];
  iconName: string;
  proposedImageUrl?: string;
  proposedImageUrls?: string[];
  asBuiltImageUrl?: string;
  asBuiltImageUrls?: string[];
}

export interface EducationalProgram {
  id: string;
  title: string;
  presenters: string;
  outline: string[];
}

export interface MemberWelfareItem {
  id: string;
  title: string;
  description: string;
  examples: string;
}

