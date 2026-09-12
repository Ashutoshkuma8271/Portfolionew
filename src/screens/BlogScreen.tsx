import React, { useState } from 'react';
import { BLOG_POSTS } from '../data/folioData';
import { BlogPost } from '../types';
import { BookOpen, Search, ArrowRight, Clock, Calendar, Eye, Tag, X, Share2, CheckCircle2, Sparkles } from 'lucide-react';
import { LazyImage } from '../components/LazyImage';
import { ThreeDCard } from '../components/ThreeDCard';

interface BlogScreenProps {
  onOpenCollaborate: () => void;
  onOpenAdmin?: () => void;
  onSelectArticle?: (article: BlogPost) => void;
}

export const BlogScreen: React.FC<BlogScreenProps> = ({ onOpenCollaborate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSent, setNewsletterSent] = useState(false);

  const categories = ['All', 'Trade & FDI', 'Cinema & Media', 'Women Leadership', 'Investment Advisory'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSent(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 3500);
  };

  return (
    <div className="w-full bg-[#131314] text-[#e5e2e3] py-12 sm:py-16 px-4 sm:px-6 lg:px-20 max-w-[1440px] mx-auto space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 border-b border-[#382f1e]/80 pb-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#1c1913] border border-[#d4af37]/45 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-[0.24em] rounded">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Thought Leadership</span>
          </div>
          <h1 className="font-['Cinzel'] text-[28px] sm:text-[38px] lg:text-[44px] font-normal leading-tight text-[#f4efe6]">
            Insights &amp; <span className="italic font-serif text-[#f2ca50]">Monographs</span>
          </h1>
          <p className="font-['Montserrat'] text-[13.5px] sm:text-[14px] text-[#c8beaa] leading-relaxed font-light">
            In-depth strategic analyses, statecraft whitepapers, and cultural commentary covering GCC–India trade corridors, transnational cinematic co-productions, and civic governance.
          </p>
        </div>

        {/* Search Input */}
        <div className="w-full sm:w-auto relative min-w-[280px]">
          <Search className="w-4 h-4 text-[#99907c] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, keywords..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#161412] border border-[#382f1e] text-[13px] text-[#e5e2e3] placeholder:text-[#99907c] focus:border-[#f2ca50] focus:outline-none rounded-lg"
          />
        </div>
      </section>

      {/* Category Pills — Sleek, Non-Wrapping Horizontal Scroll on Mobile & Elegant Pill Wrap on Desktop */}
      <section className="relative w-full">
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-1 sm:flex-wrap">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-lg font-['Montserrat'] text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#d4af37] via-[#f2ca50] to-[#e6bc48] text-[#1a1402] shadow-[0_2px_10px_rgba(212,175,55,0.25)]'
                    : 'bg-[#161412] border border-[#382f1e] text-[#c8beaa] hover:border-[#f2ca50] hover:text-[#f4efe6]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-[#161412] border border-[#382f1e]/80 hover:border-[#f2ca50]/70 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="aspect-[16/9] overflow-hidden relative">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  aspectRatio="aspect-[16/9]"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-[#0a0907]/90 backdrop-blur-md border border-[#f2ca50]/50 text-[#f2ca50] font-['Montserrat'] text-[9.5px] font-bold uppercase tracking-wider rounded-md">
                  {post.category}
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-4 text-[11px] text-[#99907c] font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#f2ca50]" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#e9c176]" />
                    {post.readTime}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5" />
                    {post.views.toLocaleString()} reads
                  </span>
                </div>

                <h3
                  onClick={() => setActiveArticle(post)}
                  className="font-serif text-[22px] sm:text-[24px] text-[#e5e2e3] group-hover:text-[#f2ca50] transition-colors leading-snug cursor-pointer"
                >
                  {post.title}
                </h3>

                <p className="font-sans text-[14px] text-[#d0c5af] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#0e0e0f] border border-[#4d4635]/40 text-[10px] text-[#ffdea5] rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0 border-t border-[#4d4635]/30 mt-4 flex items-center justify-between">
              <span className="font-sans text-[11px] text-[#99907c]">By {post.author}</span>
              <button
                onClick={() => setActiveArticle(post)}
                className="inline-flex items-center gap-2 font-sans text-[11px] font-bold text-[#f2ca50] hover:text-[#ffe088] uppercase tracking-widest transition-colors cursor-pointer"
              >
                Read Full Monograph
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </section>

      {/* Newsletter Subscription Box (Requested in Optional & Recommended 4️⃣) */}
      <section className="bg-gradient-to-br from-[#1c1b1c] to-[#0e0e0f] border border-[#d4af37]/40 rounded-xl p-8 sm:p-12 shadow-2xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="font-sans text-[11px] font-bold text-[#f2ca50] tracking-widest uppercase block">
            Executive Briefing Dispatch
          </span>
          <h3 className="font-serif text-[28px] sm:text-[34px] text-[#e5e2e3]">
            Subscribe to Confidential Trade &amp; Media Gazettes
          </h3>
          <p className="font-sans text-[14px] text-[#d0c5af]">
            Receive monthly ministerial briefs, investment corridor updates, and film festival market intelligence directly to your inbox.
          </p>
        </div>

        {newsletterSent ? (
          <div className="p-4 bg-[#122416] border border-[#2e5936] text-[#8ae899] rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#38b04a] shrink-0" />
            <span className="font-sans text-[13px]">
              Institutional verification confirmed. Welcome to the Executive Dispatch registry.
            </span>
          </div>
        ) : (
          <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              placeholder="Enter institutional or official email"
              className="flex-1 bg-[#131314] border border-[#4d4635] px-4 py-3 text-[13px] text-[#e5e2e3] focus:border-[#f2ca50] focus:outline-none rounded"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#f2ca50] text-[#1a1402] font-sans text-[11px] font-bold tracking-widest uppercase hover:from-[#ffe088] transition-all rounded whitespace-nowrap cursor-pointer shadow-md"
            >
              Subscribe Now
            </button>
          </form>
        )}
      </section>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#141312] border border-[#d4af37]/70 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 sm:p-10 relative shadow-[0_0_50px_rgba(212,175,55,0.2)] space-y-6">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-[#d0c5af] hover:text-[#f2ca50] cursor-pointer p-1"
              aria-label="Close article"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-3">
              <span className="px-3 py-1 bg-[#f2ca50]/15 text-[#f2ca50] font-sans text-[10px] font-bold uppercase tracking-widest rounded border border-[#f2ca50]/30 inline-block">
                {activeArticle.category}
              </span>
              <h2 className="font-serif text-[28px] sm:text-[36px] text-[#e5e2e3] leading-snug">
                {activeArticle.title}
              </h2>
              <div className="flex items-center gap-4 text-[12px] text-[#99907c] font-mono border-b border-[#4d4635]/40 pb-4">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
            </div>

            <div className="font-sans text-[15px] sm:text-[16px] text-[#d0c5af] leading-relaxed space-y-4 whitespace-pre-line">
              {activeArticle.content}
            </div>

            <div className="pt-6 border-t border-[#4d4635]/40 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-[#f2ca50]" />
                <span className="text-[12px] text-[#ffdea5]">
                  {activeArticle.tags.map((t) => `#${t}`).join(' ')}
                </span>
              </div>

              <button
                onClick={() => {
                  setActiveArticle(null);
                  onOpenCollaborate();
                }}
                className="px-6 py-2.5 bg-[#f2ca50] text-[#1a1402] font-sans text-[11px] font-bold uppercase tracking-widest hover:bg-[#ffe088] rounded cursor-pointer transition-colors"
              >
                Inquire on this Subject
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
