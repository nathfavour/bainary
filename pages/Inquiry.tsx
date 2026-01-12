
import React, { useState } from 'react';
import { INQUIRY_AREAS } from '../constants';
import { getResearchInsight } from '../services/gemini';

const Inquiry: React.FC = () => {
  const [query, setQuery] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    setInsight(null);
    const result = await getResearchInsight(query);
    setInsight(result || 'No data retrieved.');
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 border-b border-border-dim">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-8 bg-white"></span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Scope 01 — Research Mandate</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8">
            Our mandate is to understand the architecture of necessity. We study where systems fail, adapt, or emerge.
          </h2>
          <p className="text-lg text-txt-muted font-light max-w-2xl leading-relaxed">
            The following areas represent our current primary research vectors. These are domains of sustained inquiry where we deploy capital and code to resolve uncertainty.
          </p>
        </div>
      </section>

      {/* Inquiry List */}
      <section className="w-full py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-6 border-b border-border-dim text-[10px] font-mono text-txt-muted uppercase tracking-widest mb-12">
            <div className="md:col-span-1">ID</div>
            <div className="md:col-span-7">Inquiry Question & Context</div>
            <div className="md:col-span-4 pl-4 hidden md:block">Hypothesis Status</div>
          </div>

          <div className="space-y-0">
            {INQUIRY_AREAS.map((area) => (
              <div key={area.id} className="group py-16 border-b border-border-dim">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                  <div className="md:col-span-1 text-xs font-mono text-txt-muted">{area.id}</div>
                  <div className="md:col-span-7 pr-8 md:border-r border-border-dim">
                    <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest mb-4 block">{area.domain}</span>
                    <h3 className="text-2xl md:text-3xl font-normal mb-6 tracking-tight leading-tight">{area.question}</h3>
                    <p className="text-base text-txt-muted font-light leading-relaxed max-w-2xl">{area.context}</p>
                  </div>
                  <div className="md:col-span-4 md:pl-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="block text-[10px] font-mono text-txt-muted uppercase tracking-widest">Core Hypothesis</span>
                      <p className="text-sm text-txt-muted font-mono leading-relaxed italic opacity-80">{area.hypothesis}</p>
                    </div>
                    <div className="mt-12 flex items-center gap-6">
                      <span className="inline-block px-3 py-1 text-[10px] border border-border-dim text-white font-mono uppercase tracking-widest">
                        {area.statusLabel}
                      </span>
                      <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">{area.metric}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Research Assistant Section */}
      <section className="w-full bg-bg-surface py-24 px-6 lg:px-12 border-t border-border-dim">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-normal mb-6 tracking-tight">Systemic Query</h3>
              <p className="text-base text-txt-muted font-light leading-relaxed max-w-md">
                Access our synthetic intelligence layer to generate insights on emerging systemic deficiencies. Our AI engine is trained on global chaos patterns and architectural theory.
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <form onSubmit={handleInquiry} className="flex gap-4">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Analyze systemic fragility in..."
                  className="flex-1 bg-transparent border-b border-border-dim focus:border-white transition-colors py-3 text-sm font-light placeholder:text-txt-muted focus:ring-0 outline-none"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black text-xs font-bold uppercase tracking-widest px-8 py-3 hover:bg-neutral-200 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processing...' : 'Inquire'}
                </button>
              </form>

              {(insight || loading) && (
                <div className="bg-bg-main border border-border-dim p-8 animate-in fade-in duration-500">
                  <div className="flex items-center gap-2 mb-6 border-b border-border-dim pb-4">
                    <div className="size-2 bg-white animate-pulse"></div>
                    <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Synthesized Result</span>
                  </div>
                  {loading ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-border-dim w-full animate-pulse"></div>
                      <div className="h-4 bg-border-dim w-3/4 animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="text-sm text-txt-muted font-light leading-relaxed whitespace-pre-wrap font-mono">
                      {insight}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
