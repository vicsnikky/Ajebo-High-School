/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, DonorRecord, AlumniRegistration, ForumPost } from './types';
import { INITIAL_DONORS, NOTABLE_ALUMNI, INITIAL_FORUM_POSTS, INITIAL_DIRECTORY_ALUMNI } from './data/schoolData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { BuildingProject } from './components/BuildingProject';
import { HistorySection } from './components/HistorySection';
import { NotableAlumni } from './components/NotableAlumni';
import { Administration } from './components/Administration';
import { ExcoSection } from './components/ExcoSection';
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
    if (saved) {
      try {
        const parsed: AlumniRegistration[] = JSON.parse(saved);
        // Merge missing seed items so newly added official directory members appear
        const existingNames = new Set(parsed.map(a => a.fullName.toLowerCase().trim()));
        const missingSeed = INITIAL_DIRECTORY_ALUMNI.filter(
          item => !existingNames.has(item.fullName.toLowerCase().trim())
        );
        return [...parsed, ...missingSeed];
      } catch {
        return INITIAL_DIRECTORY_ALUMNI;
      }
    }
    return INITIAL_DIRECTORY_ALUMNI;
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

        {activeTab === 'exco' && (
          <ExcoSection 
            setActiveTab={setActiveTab}
            onOpenDonate={() => setIsDonateOpen(true)}
            onOpenRegister={() => setIsRegisterOpen(true)}
          />
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
