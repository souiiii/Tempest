import React from 'react';
import { Gauge, HardDrives, ShieldCheck, Globe } from '@phosphor-icons/react';
import './SystemSpecs.css';

const specsData = [
  {
    icon: <Gauge size={24} weight="bold" />,
    title: "HIGH FREQUENCY CPUS",
    description: "Single-thread performance optimized for 20 TPS stability even under extreme world-gen workloads.",
  },
  {
    icon: <HardDrives size={24} weight="bold" />,
    title: "NVME STORAGE",
    description: "RAID 1 Enterprise NVMe arrays. Ultra-low seek times for instantaneous chunk loading and player data R/W.",
  },
  {
    icon: <ShieldCheck size={24} weight="bold" />,
    title: "DDOS PROTECTION",
    description: "12Tbps persistent scrubbing layer. Automated filtering for Minecraft-specific protocol exploits.",
  },
  {
    icon: <Globe size={24} weight="bold" />,
    title: "GLOBAL NETWORK",
    description: "Direct peering with major ISPs. Tier-1 transit via Lumen, GTT, and NTT for sub-20ms global routing.",
  }
];

const SystemSpecs = () => {
  return (
    <section className="specs-section">
      <div className="specs-container">
        <div className="specs-header">
          <h2 className="specs-title">SYSTEM SPECIFICATIONS</h2>
          <span className="specs-subtitle">LAYER 0 // BARE METAL ARCHITECTURE</span>
        </div>
        
        <div className="specs-grid">
          {specsData.map((spec, index) => (
            <div className="spec-card" key={index}>
              <div className="spec-icon">{spec.icon}</div>
              <h4 className="spec-card-title">{spec.title}</h4>
              <p className="spec-card-description">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemSpecs;
