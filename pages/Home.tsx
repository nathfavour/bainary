
import React from 'react';
import { PROBES, RESEARCH_UPDATES } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32 border-b border-border-dim">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-white"></span>
              <span className="text-[10px] font-mono text-txt-muted uppercase tracking-[0.3em]">Parent Company · Est. 2018</span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] text-white">
              Resolving<br />
              <span className="text-txt-muted">Uncertainty.</span>
            </h2>
            <div className="mt-12 md:ml-24 max-w-2xl pl-8 border-l border-white/20">
              <p className="text-xl md:text-2xl text-txt-muted font-light leading-relaxed">
                <span className="text-white font-medium">We build where study ends.</span><br />
                A research-led group studying complex systems and constructing infrastructure to navigate the gap between theoretical models and chaotic reality.
              </p>
              <div className="mt-12 flex flex-wrap gap-8">
                <Link to="/manifesto" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-txt-muted hover:border-txt-muted transition-all">
                  Read Manifesto
                </Link>
                <Link to="/inquiry" className="text-xs font-bold uppercase tracking-widest text-txt-muted hover:text-white transition-all">
                  View Methodology
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="bg-bg-surface p-8 border border-border-dim font-mono text-[11px] text-txt-muted">
              <div className="flex justify-between border-b border-border-dim pb-4 mb-4 text-white font-bold uppercase tracking-widest">
                <span>SYSTEM_STATUS</span>
                <span className="text-txt-muted">v2026.01</span>
              </div>
              <div className="space-y-4 mono-num">
                <div className="flex justify-between">
                  <span>Active Probes</span>
                  <span className="text-white">03</span>
                </div>
                <div className="flex justify-between">
                  <span>Research Cycles</span>
                  <span className="text-white">12</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Ingest</span>
                  <span className="text-white">4.2 PB</span>
                </div>
                <div className="h-px bg-border-dim my-2"></div>
                <div className="flex justify-between text-txt-muted italic">
                  <span>Next Deployment</span>
                  <span>Q2 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Quick Grid */}
      <section className="w-full border-b border-border-dim bg-bg-surface">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 px-6 lg:px-12 py-12 gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-light text-white">12+</span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Active Nodes</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-light text-white">4.2<span className="text-sm align-top">PB</span></span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Processed</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-light text-white">99.9<span className="text-sm align-top">%</span></span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Uptime</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-4xl font-light text-white">Global</span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Coverage</span>
          </div>
        </div>
      </section>

      {/* Active Probes */}
      <section className="w-full py-24 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-border-dim pb-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Portfolio</span>
              <h3 className="text-2xl font-normal tracking-tight">Active Probes</h3>
            </div>
            <span className="text-[10px] font-mono text-txt-muted mt-2 md:mt-0 uppercase tracking-widest">INDEX_REF: VXR · ATN · WSP</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROBES.map(probe => (
              <div key={probe.id} className="group border border-border-dim bg-bg-surface flex flex-col transition-all hover:border-white/40">
                <div className="relative h-64 overflow-hidden grayscale opacity-70 transition-all group-hover:opacity-100 group-hover:grayscale-0">
                  <div className="absolute top-4 right-4 z-10 font-mono text-[10px] bg-black/80 border border-border-dim px-2 py-1">
                    {probe.code}
                  </div>
                  <img src={probe.image} alt={probe.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-medium">{probe.name}</h4>
                    <span className="material-symbols-outlined text-sm text-txt-muted group-hover:text-white transition-colors">arrow_outward</span>
                  </div>
                  <p className="text-sm text-txt-muted leading-relaxed font-light mb-8 flex-1">
                    {probe.description}
                  </p>
                  <div className="pt-6 border-t border-border-dim flex justify-between items-center text-[10px] font-mono text-txt-muted uppercase tracking-widest">
                    <span>STATUS: {probe.status}</span>
                    <span>{probe.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
