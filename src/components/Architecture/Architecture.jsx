import React from 'react';
import './Architecture.css';

const archData = [
  {
    num: '01',
    title: 'RPG NETWORKS',
    desc: 'Massive world maps and heavy plugin stacks require high-clock CPUs and high RAM availability. Our Ryzen infrastructure ensures that chunk-loading and complex world scripts never cause TPS drops. High NVMe IOPS prevent database bottlenecks during player data saves.',
    align: 'left'
  },
  {
    num: '02',
    title: 'COMPUTE CLUSTERS',
    desc: 'For large-scale simulations or pre-generation tasks, leverage our KVM architecture to run headless compute nodes. Deploy multiple instances in a private local network with 10Gbps cross-node communication for distributed processing tasks.',
    align: 'right'
  },
  {
    num: '03',
    title: 'GLOBAL PROXIES',
    desc: 'Deploy lightweight proxy instances (BungeeCord/Velocity) in our low-latency edge locations. Native DDoS scrubbing and Anycast IP options ensure your network remains online even under heavy volumetric attack vectors.',
    align: 'left'
  }
];

const Architecture = () => {
  return (
    <section className="architecture-section" style={{ backgroundImage: "url('/src/assets/alignment.png')" }}>
      <div className="architecture-fog"></div>
      
      <div className="architecture-container">
        <div className="architecture-header">
          <span className="architecture-subtitle">OPERATIONAL_MODES</span>
          <h2 className="architecture-title">ARCHITECTURE ALIGNMENT.</h2>
        </div>
        
        <div className="arch-list">
          {archData.map((item, idx) => (
            <div className="arch-row" key={idx}>
              {item.align === 'left' ? (
                <>
                  <div className="arch-col title-col left-aligned">
                    <span className="arch-num">{item.num}</span>
                    <h3 className="arch-title">{item.title}</h3>
                  </div>
                  <div className="arch-divider-wrapper">
                    <div className="arch-divider"></div>
                  </div>
                  <div className="arch-col desc-col left-aligned">
                    <p>{item.desc}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="arch-col desc-col right-aligned">
                    <p>{item.desc}</p>
                  </div>
                  <div className="arch-divider-wrapper">
                    <div className="arch-divider"></div>
                  </div>
                  <div className="arch-col title-col left-aligned">
                    <span className="arch-num">{item.num}</span>
                    <h3 className="arch-title">{item.title}</h3>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
