import React, { useState } from 'react';
import { ForumPost } from '../types';
import { MessageSquare, ThumbsUp, Send, User, Sparkles, MessageCircle } from 'lucide-react';

interface CommunityForumProps {
  posts: ForumPost[];
  onAddPost: (title: string, content: string, authorName: string, authorSet: string) => void;
  onAddReply: (postId: string, content: string, authorName: string, authorSet: string) => void;
  onLikePost: (postId: string) => void;
}

export const CommunityForum: React.FC<CommunityForumProps> = ({
  posts,
  onAddPost,
  onAddReply,
  onLikePost
}) => {
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorSet, setAuthorSet] = useState('');

  const [activeReplyPostId, setActiveReplyPostId] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const [replyAuthorName, setReplyAuthorName] = useState('');
  const [replyAuthorSet, setReplyAuthorSet] = useState('');

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newContent.trim() || !authorName.trim() || !authorSet.trim()) return;
    onAddPost(newTitle, newContent, authorName, authorSet);
    setNewTitle('');
    setNewContent('');
    setShowNewPostForm(false);
  };

  const handleSubmitReply = (postId: string, e: React.FormEvent) => {
    e.preventDefault();
    if (!replyContent.trim() || !replyAuthorName.trim() || !replyAuthorSet.trim()) return;
    onAddReply(postId, replyContent, replyAuthorName, replyAuthorSet);
    setReplyContent('');
    setActiveReplyPostId(null);
  };

  return (
    <div className="space-y-12 max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Title Banner */}
      <div className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-emerald-950 text-white rounded-3xl p-8 shadow-md relative overflow-hidden space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <span className="bg-orange-500 text-white font-semibold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5" /> Alumni Community Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white">
              ACHSOSA Discussion Forum & Updates
            </h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Connect with fellow alumni, share school memories from Ajebo town, and discuss set pledges for the ₦150M building project.
            </p>
          </div>

          <button
            id="forum-new-topic-btn"
            onClick={() => setShowNewPostForm(!showNewPostForm)}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {showNewPostForm ? "Close Form" : "Start New Topic"}
          </button>
        </div>
      </div>

      {/* New Topic Creation Form */}
      {showNewPostForm && (
        <form onSubmit={handleSubmitPost} className="bg-white rounded-3xl p-6 border-2 border-emerald-300 shadow-md space-y-4">
          <h3 className="text-lg font-bold font-serif text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-orange-500" />
            Post an Announcement or Topic to the Alumni Network
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
              <input 
                type="text"
                required
                placeholder="e.g. Adebayo Sowemimo"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Graduating Set *</label>
              <input 
                type="text"
                required
                placeholder="e.g. Class of 1984"
                value={authorSet}
                onChange={(e) => setAuthorSet(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Topic Title *</label>
            <input 
              type="text"
              required
              placeholder="e.g. 1988 Set Reunion & Building Pledges"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Message Content *</label>
            <textarea 
              rows={4}
              required
              placeholder="Write your update or message to fellow old students..."
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 px-3 py-2 rounded-xl text-xs focus:outline-hidden focus:border-emerald-500"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setShowNewPostForm(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-emerald-800 hover:bg-emerald-700 text-white font-medium text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              Publish Topic
            </button>
          </div>
        </form>
      )}

      {/* Forum Posts List */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-xs space-y-4">
            <div className="flex items-start justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-900 rounded-full flex items-center justify-center font-bold font-serif text-sm">
                  {post.authorName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base font-serif">{post.title}</h3>
                  <div className="text-xs text-slate-500 flex items-center gap-2">
                    <span className="font-medium text-emerald-800">{post.authorName}</span>
                    <span>•</span>
                    <span className="font-mono text-emerald-700 font-semibold">{post.authorSet}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {post.content}
            </p>

            {/* Like & Reply Action bar */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-600">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onLikePost(post.id)}
                  className="flex items-center gap-1.5 hover:text-emerald-700 transition"
                >
                  <ThumbsUp className="w-4 h-4 text-emerald-600" />
                  <span>{post.likes} Likes</span>
                </button>

                <button
                  onClick={() => setActiveReplyPostId(activeReplyPostId === post.id ? null : post.id)}
                  className="flex items-center gap-1.5 hover:text-emerald-700 transition"
                >
                  <MessageSquare className="w-4 h-4 text-slate-500" />
                  <span>{post.replies.length} Replies</span>
                </button>
              </div>

              <button
                onClick={() => setActiveReplyPostId(post.id)}
                className="text-emerald-700 font-medium hover:underline text-xs"
              >
                Reply to Topic
              </button>
            </div>

            {/* Replies List */}
            {post.replies.length > 0 && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 mt-2">
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Replies ({post.replies.length})
                </div>
                {post.replies.map((rep) => (
                  <div key={rep.id} className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] font-medium">
                      <span className="text-emerald-800 font-semibold">{rep.authorName} ({rep.authorSet})</span>
                      <span className="text-slate-400 font-mono">{rep.date}</span>
                    </div>
                    <p className="text-slate-600">{rep.content}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Inline Reply Form */}
            {activeReplyPostId === post.id && (
              <form onSubmit={(e) => handleSubmitReply(post.id, e)} className="bg-emerald-50/60 p-4 rounded-2xl border border-emerald-200 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input 
                    type="text"
                    required
                    placeholder="Your Name"
                    value={replyAuthorName}
                    onChange={(e) => setReplyAuthorName(e.target.value)}
                    className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs"
                  />
                  <input 
                    type="text"
                    required
                    placeholder="Graduating Set (e.g. 1985)"
                    value={replyAuthorSet}
                    onChange={(e) => setReplyAuthorSet(e.target.value)}
                    className="bg-white border border-slate-200 px-3 py-1.5 rounded-lg text-xs"
                  />
                </div>
                <textarea 
                  rows={2}
                  required
                  placeholder="Write your response..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  className="w-full bg-white border border-slate-200 p-2 rounded-lg text-xs"
                />
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveReplyPostId(null)}
                    className="text-xs text-slate-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-emerald-800 text-white text-xs px-4 py-1.5 rounded-lg font-medium"
                  >
                    Send Reply
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
