
import React from 'react';

const NODES = [
  { id: 'LDN-01', location: 'London', load: '14%', latency: '24ms', status: 'OPERATIONAL' },
  { id: 'SFO-02', location: 'San Francisco', load: '42%', latency: '12ms', status: 'OPERATIONAL' },
  { id: 'ZRH-01', location: 'Zurich', load: '8%', latency: '31ms', status: 'OPERATIONAL' },
  { id: 'SIN-04', location: 'Singapore', load: '67%', latency: '48ms', status: 'HIGH_TRAFFIC' },
  { id: 'TKO-01', location: 'Tokyo', load: '21%', latency: '18ms', status: 'OPERATIONAL' },
  { id: 'NYC-03', location: 'New York', load: '0%', latency: '-', status: 'MAINTENANCE' },
];

const Systems: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-24 border-b border-border-dim">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-8 bg-white"></span>
            <span className="text-[10px] font-mono text-txt-muted uppercase tracking-widest">Registry — Infrastructure Status</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light leading-[1.1] mb-8">
            Global Node Network.
          </h2>
          <p className="text-lg text-txt-muted font-light max-w-2xl leading-relaxed">
            Real-time status of our distributed research infrastructure. We maintain physical and digital nodes across 6 primary jurisdictions to ensure data sovereignty and systemic resilience.
          </p>
        </div>
      </section>

      <section className="w-full py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[10px] font-mono text-txt-muted uppercase tracking-widest border-b border-border-dim">
                <th className="py-6 font-medium">Node ID</th>
                <th className="py-6 font-medium">Jurisdiction</th>
                <th className="py-6 font-medium">System Load</th>
                <th className="py-6 font-medium">Latency</th>
                <th className="py-6 font-medium text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dim font-mono text-[11px]">
              {NODES.map((node) => (
                <tr key={node.id} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-8 text-white">{node.id}</td>
                  <td className="py-8 text-txt-muted">{node.location}</td>
                  <td className="py-8">
                    <div className="flex items-center gap-4">
                      <div className="w-24 h-1 bg-border-dim overflow-hidden">
                        <div 
                          className="h-full bg-white transition-all duration-1000" 
                          style={{ width: node.load }}
                        ></div>
                      </div>
                      <span className="text-txt-muted">{node.load}</span>
                    </div>
                  </td>
                  <td className="py-8 text-txt-muted">{node.latency}</td>
                  <td className="py-8 text-right">
                    <span className={`inline-flex items-center gap-2 ${
                      node.status === 'OPERATIONAL' ? 'text-green-500' : 
                      node.status === 'HIGH_TRAFFIC' ? 'text-yellow-500' : 'text-txt-muted'
                    }`}>
                      <span className={`size-1.5 rounded-full ${
                        node.status === 'OPERATIONAL' ? 'bg-green-500' : 
                        node.status === 'HIGH_TRAFFIC' ? 'bg-yellow-500' : 'bg-txt-muted'
                      }`}></span>
                      {node.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full bg-bg-surface py-24 px-6 lg:px-12 border-t border-border-dim">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="border border-border-dim p-12">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Security Protocol</h4>
                <p className="text-xs text-txt-muted leading-relaxed font-mono">
                    All nodes utilize quantum-resistant encryption (NIST-01) for cross-border data transfer. 
                    Redundancy is maintained via atmospheric satellite relay for Tier-1 nodes.
                </p>
            </div>
            <div className="border border-border-dim p-12">
                <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Uptime Commitment</h4>
                <p className="text-xs text-txt-muted leading-relaxed font-mono">
                    Target availability: 99.999% across the global mesh. 
                    In case of jurisdictional failure, nodes automatically migrate to neutral territory clusters.
                </p>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Systems;
