export default function GEOEngineEnterprise() { const features = [ 'Real-Time GEO Audits', 'AI Visibility Tracking', 'llms.txt Generator', 'Semantic Entity Mapping', 'AI Citation Optimization', 'Core Web Vitals Scanner', 'Competitor GEO Analysis', 'Vector Search Optimization', 'Automated Schema Builder', 'AI Readability Engine', 'Cloudflare Edge Metrics', 'Enterprise SaaS Dashboard' ];

const metrics = [ { title: 'AI Crawlability', value: '92/100', status: 'Excellent' }, { title: 'GEO Visibility', value: 'High', status: 'Optimized' }, { title: 'TTFB Speed', value: '210ms', status: 'Fast' }, { title: 'AI Readability', value: '9.8/10', status: 'Recommended' } ];

return ( <div className="min-h-screen bg-black text-white"> <header className="border-b border-white/10 sticky top-0 z-50 backdrop-blur bg-black/70"> <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center"> <div className="flex items-center gap-4"> <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center font-black text-xl"> AI </div> <div> <h1 className="text-2xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> GEO Engine X </h1> <p className="text-xs text-zinc-500 uppercase tracking-[4px]"> AI Search Optimization Platform </p> </div> </div>

<button className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 font-bold hover:scale-105 transition-all">
        Launch Dashboard
      </button>
    </div>
  </header>

  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_50%)]"></div>

    <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-sm mb-6">
          Enterprise GEO + AI SEO Infrastructure
        </div>

        <h2 className="text-6xl md:text-7xl font-black leading-tight mb-6">
          Optimize Websites For
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            ChatGPT, Gemini & AI Search
          </span>
        </h2>

        <p className="text-zinc-400 text-xl leading-relaxed max-w-3xl mx-auto mb-10">
          Advanced Generative Engine Optimization platform with AI crawler analysis,
          semantic entity mapping, vector search optimization, llms.txt automation,
          and enterprise-grade GEO analytics.
        </p>

        <div className="bg-zinc-950 border border-white/10 rounded-3xl p-6 max-w-4xl mx-auto shadow-2xl">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              placeholder="https://yourwebsite.com"
              className="flex-1 bg-black border border-white/10 rounded-2xl px-6 py-5 text-lg outline-none focus:border-indigo-500"
            />

            <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-lg hover:scale-[1.02] transition-all shadow-2xl">
              Execute GEO Audit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-zinc-950 border border-white/10 rounded-3xl p-8 hover:border-indigo-500/30 transition-all"
        >
          <p className="text-zinc-500 uppercase text-xs tracking-[3px] mb-3">
            {metric.title}
          </p>

          <h3 className="text-4xl font-black mb-3 text-indigo-400">
            {metric.value}
          </h3>

          <span className="text-sm px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            {metric.status}
          </span>
        </div>
      ))}
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-12">
    <div className="grid lg:grid-cols-2 gap-10">
      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-10">
        <h3 className="text-3xl font-black mb-6">
          Enterprise GEO Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl p-4 bg-white/[0.02] hover:bg-indigo-500/5 hover:border-indigo-500/20 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                <span className="font-medium text-zinc-200">{feature}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-zinc-950 border border-white/10 rounded-3xl p-10">
        <h3 className="text-3xl font-black mb-6">
          Recommended Tech Stack
        </h3>

        <div className="space-y-4 text-zinc-300">
          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-bold text-indigo-400 mb-2">Frontend</h4>
            <p>Next.js + TypeScript + Tailwind CSS + Framer Motion</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-bold text-indigo-400 mb-2">Backend</h4>
            <p>Supabase + Edge Functions + PostgreSQL + Vector DB</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-bold text-indigo-400 mb-2">AI Systems</h4>
            <p>OpenAI API + NLP Embeddings + GEO Intelligence Engine</p>
          </div>

          <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
            <h4 className="font-bold text-indigo-400 mb-2">Infrastructure</h4>
            <p>Cloudflare Edge + CDN + Enterprise Security + Auto Scaling</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="rounded-[40px] border border-indigo-500/20 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 p-12 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_60%)]"></div>

      <div className="relative z-10">
        <h3 className="text-5xl font-black mb-6">
          Future-Proof Your Website For AI Search
        </h3>

        <p className="text-zinc-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
          Deploy next-generation GEO infrastructure that helps websites become
          understandable, discoverable, and recommendable across all major AI systems.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button className="px-8 py-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 font-bold text-lg hover:scale-105 transition-all">
            Start Enterprise Scan
          </button>

          <button className="px-8 py-5 rounded-2xl border border-white/10 bg-white/5 font-bold text-lg hover:bg-white/10 transition-all">
            View GEO Dashboard
          </button>
        </div>
      </div>
    </div>
  </section>

  <footer className="border-t border-white/10 py-10 text-center text-zinc-500 text-sm">
    © 2026 GEO Engine X — Enterprise AI Search Optimization Infrastructure
  </footer>
</div>

); }
