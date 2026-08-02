/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, DonorRecord, AlumniRegistration, ForumPost } from './types';
import { INITIAL_DONORS, NOTABLE_ALUMNI, INITIAL_FORUM_POSTS } from './data/schoolData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BuildingProject } from './components/BuildingProject';
import { HistorySection } from './components/HistorySection';
import { NotableAlumni } from './components/NotableAlumni';
import { Administration } from './components/Administration';
import { AlumniDirectory } from './components/AlumniDirectory';
import { EventsSection } from './components/EventsSection';
import { GallerySection } from './components/GallerySection';
import { CommunityForum } from './components/CommunityForum';
import { DonationModal } from './components/DonationModal';
import { RegisterModal } from './components/RegisterModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  // Persistent Donors list initialized with state
  const [donors, setDonors] = useState<DonorRecord[]>(() => {
    const saved = localStorage.getItem('achsosa_donors');
    return saved ? JSON.parse(saved) : INITIAL_DONORS;
  });

  // Persistent Registered Alumni Directory
  const [registeredAlumni, setRegisteredAlumni] = useState<AlumniRegistration[]>(() => {
    const saved = localStorage.getItem('achsosa_registered_alumni');
    if (saved) return JSON.parse(saved);
    
    // Seed with notable alumni & default directory records
    return [
      {
        id: "reg-1",
        fullName: "Hon. (Dr.) Tella O. Babatunde",
        gradSet: "1984 Set",
        email: "tella.babatunde@ogha.gov.ng",
        phone: "+234 803 111 2233",
        occupation: "Ogun House of Assembly Lawmaker",
        city: "Abeokuta",
        country: "Nigeria",
        bio: "Completed GCE O-Level Certificate at ACHS in 1984.",
        registeredAt: "2026-06-01"
      },
      {
        id: "reg-2",
        fullName: "Dr. Gbenga Adeoye",
        gradSet: "1986 Set",
        email: "adeoye@legalconsult.ng",
        phone: "+234 802 333 4455",
        occupation: "Corporate Lawyer & Tax Specialist",
        city: "Lagos",
        country: "Nigeria",
        bio: "Senior legal consultant and chairman of ACHSOSA legal advisory.",
        registeredAt: "2026-06-05"
      },
      {
        id: "reg-3",
        fullName: "Eunice Akinwande",
        gradSet: "1985 Set",
        email: "eunice.akinwande@agribusiness.org",
        phone: "+234 805 666 7788",
        occupation: "Former Asst. Director, Lagos Ministry of Agric",
        city: "Ikeja",
        country: "Nigeria",
        bio: "Agricultural pioneer and agribusiness consultant.",
        registeredAt: "2026-06-10"
      },
      {
        id: "reg-4",
        fullName: "Engr. Olumide Ogundipe",
        gradSet: "1992 Set",
        email: "ogundipe@apexinfra.ng",
        phone: "+234 803 999 0011",
        occupation: "Structural Engineer",
        city: "Ibadan",
        country: "Nigeria",
        bio: "Lead engineering advisor for the new 16-classroom block.",
        registeredAt: "2026-06-15"
      },
      {
        id: "reg-5",
        fullName: "Mrs. Folake Aderibigbe",
        gradSet: "1988 Set",
        email: "folake.aderibigbe@fce.edu.ng",
        phone: "+234 806 222 3344",
        occupation: "Educational Administrator",
        city: "Abeokuta",
        country: "Nigeria",
        bio: "Lecturer and curriculum developer.",
        registeredAt: "2026-06-20"
      }
    ];
  });

  // Persistent Forum Posts
  const [forumPosts, setForumPosts] = useState<ForumPost[]>(() => {
    const saved = localStorage.getItem('achsosa_forum_posts');
    return saved ? JSON.parse(saved) : INITIAL_FORUM_POSTS;
  });

  useEffect(() => {
    localStorage.setItem('achsosa_donors', JSON.stringify(donors));
  }, [donors]);

  useEffect(() => {
    localStorage.setItem('achsosa_registered_alumni', JSON.stringify(registeredAlumni));
  }, [registeredAlumni]);

  useEffect(() => {
    localStorage.setItem('achsosa_forum_posts', JSON.stringify(forumPosts));
  }, [forumPosts]);

  // Handler to add new donor pledge
  const handleAddDonor = (newDonorData: Omit<DonorRecord, 'id' | 'date'>) => {
    const newRecord: DonorRecord = {
      ...newDonorData,
      id: `don-${Date.now()}`,
      date: new Date().toISOString().split('T')[0]
    };
    setDonors([newRecord, ...donors]);
  };

  // Handler to add new registration
  const handleAddRegistration = (newRegData: Omit<AlumniRegistration, 'id' | 'registeredAt'>) => {
    const newReg: AlumniRegistration = {
      ...newRegData,
      id: `reg-${Date.now()}`,
      registeredAt: new Date().toISOString().split('T')[0]
    };
    setRegisteredAlumni([newReg, ...registeredAlumni]);
  };

  // Handler to add forum post
  const handleAddPost = (title: string, content: string, authorName: string, authorSet: string) => {
    const newPost: ForumPost = {
      id: `post-${Date.now()}`,
      authorName,
      authorSet,
      title,
      content,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      replies: []
    };
    setForumPosts([newPost, ...forumPosts]);
  };

  // Handler to add reply
  const handleAddReply = (postId: string, content: string, authorName: string, authorSet: string) => {
    setForumPosts(forumPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: [
            ...post.replies,
            {
              id: `rep-${Date.now()}`,
              authorName,
              authorSet,
              content,
              date: new Date().toISOString().split('T')[0]
            }
          ]
        };
      }
      return post;
    }));
  };

  // Handler to like post
  const handleLikePost = (postId: string) => {
    setForumPosts(forumPosts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-orange-500 selection:text-white">
      {/* Header Navigation */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Main Content Area */}
      <main className="grow">
        {activeTab === 'home' && (
          <Hero 
            setActiveTab={setActiveTab}
            onOpenDonate={() => setIsDonateOpen(true)}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activeTab === 'building' && (
          <BuildingProject 
            donors={donors}
            onOpenDonate={() => setIsDonateOpen(true)}
          />
        )}

        {activeTab === 'history' && (
          <HistorySection setActiveTab={setActiveTab} />
        )}

        {activeTab === 'alumni' && (
          <NotableAlumni />
        )}

        {activeTab === 'leadership' && (
          <Administration />
        )}

        {activeTab === 'directory' && (
          <AlumniDirectory 
            registeredAlumni={registeredAlumni}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
        )}

        {activeTab === 'events' && (
          <EventsSection />
        )}

        {activeTab === 'gallery' && (
          <GallerySection />
        )}

        {activeTab === 'forum' && (
          <CommunityForum 
            posts={forumPosts}
            onAddPost={handleAddPost}
            onAddReply={handleAddReply}
            onLikePost={handleLikePost}
          />
        )}
      </main>

      {/* Footer */}
      <Footer 
        setActiveTab={setActiveTab}
        onOpenDonate={() => setIsDonateOpen(true)}
        onOpenRegister={() => setIsRegisterOpen(true)}
      />

      {/* Modals */}
      <DonationModal 
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        onAddDonor={handleAddDonor}
      />

      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        onAddRegistration={handleAddRegistration}
      />
    </div>
  );
}
