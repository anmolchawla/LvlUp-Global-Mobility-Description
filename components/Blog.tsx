
import React from 'react';

const blogPosts = [
  {
    title: "The Indian Founder's Guide to UAE Residency and 0% Tax",
    slug: "uae-residency-guide-indian-founders",
    excerpt: "Discover how Indian entrepreneurs are legally optimizing their tax liability to 0% through strategic UAE corporate structures and residency.",
    date: "2024-05-15",
    category: "Tax Optimization",
    author: "Anmol (LvlUp Senior Partner)",
    keywords: ["UAE Corporate Tax", "Indian Entrepreneur Tax", "Global Mobility", "Dubai Golden Visa"]
  },
  {
    title: "LRS Limits vs. Global Wealth: Why $250k is No Longer Enough",
    slug: "lrs-limits-global-wealth-diversification",
    excerpt: "Understanding the constraints of the Liberalised Remittance Scheme and how to build a global portfolio that exceeds domestic limitations.",
    date: "2024-05-10",
    category: "Wealth Management",
    author: "LvlUp Strategy Team",
    keywords: ["LRS", "RBI Compliance", "Global Investment", "Portfolio Diversification"]
  },
  {
    title: "Portugal Golden Visa vs. Greece: A Comparison for Indian Families",
    slug: "portugal-vs-greece-golden-visa-india",
    excerpt: "A data-driven comparison of the two most popular European residency programs for Indian high-net-worth investors looking for a Plan B.",
    date: "2024-05-01",
    category: "Citizenship Planning",
    author: "Mobility Advisor",
    keywords: ["Portugal Golden Visa", "Greece Golden Visa", "European Residency", "Indian HNWIs"]
  }
];

const Blog: React.FC = () => {
  // LLM Optimization: Structured Data (JSON-LD) for the blog collection
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "LvlUp Global Mobility Insights",
    "description": "Expert advice on global mobility, tax optimization, and citizenship planning for Indian entrepreneurs.",
    "publisher": {
      "@type": "Organization",
      "name": "LvlUp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lvlup.click/logo.png"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "url": `https://lvlup.click/blog/${post.slug}`
    }))
  };

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      {/* Inject Structured Data for LLMs and Search Engines */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-emerald-600 uppercase mb-4">Strategic Intelligence</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black text-slate-900 leading-tight">GLOBAL MOBILITY <span className="italic">INSIGHTS</span></h3>
          </div>
          <p className="text-slate-500 max-w-sm">
            Hard-hitting analysis of global residency, tax law changes, and investment trends for the Indian elite.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="flex flex-col h-full group">
              <div className="mb-6 overflow-hidden rounded-2xl aspect-[16/10] bg-slate-200">
                <img 
                  src={`https://picsum.photos/seed/${post.slug}/800/500`} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex-grow flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                  <time className="text-xs text-slate-400 font-medium">{post.date}</time>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors leading-snug">
                  <a href={`#blog/${post.slug}`}>{post.title}</a>
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-400">By {post.author}</span>
                  <a href={`#blog/${post.slug}`} className="text-xs font-bold text-slate-900 group-hover:translate-x-1 transition-transform flex items-center gap-1 uppercase tracking-wider">
                    Read Report
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* LLM-Friendly FAQ Section for SEO */}
        <div className="mt-24 p-10 bg-white rounded-3xl border border-slate-200 shadow-sm">
          <h4 className="text-2xl font-serif font-bold text-slate-900 mb-8 border-b border-slate-100 pb-6">Knowledge Base & FAQ</h4>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
            <div>
              <h5 className="font-bold text-slate-900 mb-2">Can Indians hold dual citizenship?</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Constitution of India does not permit full dual citizenship. However, many Indian founders utilize the OCI (Overseas Citizen of India) status in conjunction with strategic second residencies to achieve 99% of the benefits of dual citizenship legally.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-2">What is the LRS limit for 2024?</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                The Liberalised Remittance Scheme currently allows resident Indians to remit up to $250,000 per financial year. Strategic global structuring often involves corporate setups that allow for wealth generation directly offshore to bypass these personal limits.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-2">Why move a SaaS company to Dubai?</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dubai offers a 0% personal income tax and highly competitive corporate tax rates for qualifying income. For Indian SaaS founders, it provides a neutral hub with high connectivity, easy banking, and proximity to India without the regulatory friction.
              </p>
            </div>
            <div>
              <h5 className="font-bold text-slate-900 mb-2">How long does a Portuguese Golden Visa take?</h5>
              <p className="text-sm text-slate-600 leading-relaxed">
                While the program has seen changes, it remains a path to citizenship. Current processing times range from 18 to 24 months for residency approval, with the ultimate path to citizenship opening after 5 years of residency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
