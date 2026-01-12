
import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-32">
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl mx-auto text-center">
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-[0.4em] mb-12 block">V.1.0 — Architecture of Necessity</span>
            <h2 className="text-5xl md:text-8xl font-light leading-[0.9] tracking-tighter mb-16">
                Against the <br />
                <span className="text-txt-muted">Transient.</span>
            </h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-16 text-lg md:text-xl font-light text-txt-muted leading-relaxed border-t border-border-dim pt-24">
            <p className="text-white first-letter:text-6xl first-letter:font-light first-letter:float-left first-letter:mr-4 first-letter:leading-none">
                We operate on the premise that the modern institutional framework is optimized for a stability that no longer exists. 
                As complexity increases, the cost of formalization rises exponentially, leading to systemic fragility.
            </p>

            <div className="space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">01. THE TEN-YEAR MINIMUM</h3>
                <p>
                    Bainaryglobe does not engage in quarterly cycles. We analyze systems in decade-long increments. 
                    Infrastructure built for the "now" is already obsolete. We construct for the necessity of the future.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">02. BRUTALIST REALISM</h3>
                <p>
                    We value the function over the aesthetic, yet we recognize that clarity of design reflects clarity of thought. 
                    Our systems are brutalist—exposed, functional, and resilient under pressure.
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">03. AUTONOMOUS COORDINATION</h3>
                <p>
                    The firm as a unit of organization is dissolving. We facilitate the transition to autonomous 
                    coordination protocols where value is captured not by intermediaries, but by the protocol itself.
                </p>
            </div>

            <div className="pt-16 border-t border-border-dim">
                <blockquote className="text-3xl italic text-white font-light tracking-tight">
                    "Resilience is found in the gap between what is planned and what is required."
                </blockquote>
                <cite className="block mt-6 text-xs font-mono uppercase tracking-widest text-txt-muted">— Founding Protocol, 2018</cite>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Manifesto;
