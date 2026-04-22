import React from 'react';
import { MapPin, Cpu, Database, Gauge } from '@phosphor-icons/react';
import './InstanceTiers.css';

const tiersData = [
  {
    name: 'AMD RYZEN 9 5950X',
    specs: '16C / 32T @ 3.4GHZ / 4.9GHZ',
    benchmark: 'Scored 45,900 on a CPU benchmark',
    price: '$79.99',
    features: [
      { icon: <MapPin size={22} weight="regular" />, title: 'AMSTERDAM', sub: 'NETHERLANDS' },
      { icon: <Cpu size={22} weight="regular" />, title: '64GB DDR4', sub: 'MEMORY' },
      { icon: <Database size={22} weight="regular" />, title: '2X 2TB NVME SSD', sub: 'STORAGE' },
      { icon: <Gauge size={22} weight="regular" />, title: '1 GBIT', sub: 'PORT SPEED' }
    ]
  },
  {
    name: 'INTEL CORE I9-12900K',
    specs: '16C / 24T @ 3.2GHZ / 5.2GHZ',
    benchmark: 'Scored 42,300 on a CPU benchmark',
    price: '$89.99',
    features: [
      { icon: <MapPin size={22} weight="regular" />, title: 'NEW YORK', sub: 'UNITED STATES' },
      { icon: <Cpu size={22} weight="regular" />, title: '128GB DDR4', sub: 'MEMORY' },
      { icon: <Database size={22} weight="regular" />, title: '2X 1TB NVME SSD', sub: 'STORAGE' },
      { icon: <Gauge size={22} weight="regular" />, title: '1 GBIT', sub: 'PORT SPEED' }
    ]
  },
  {
    name: 'AMD RYZEN 7 5800X',
    specs: '8C / 16T @ 3.8GHZ / 4.7GHZ',
    benchmark: 'Scored 28,400 on a CPU benchmark',
    price: '$49.99',
    features: [
      { icon: <MapPin size={22} weight="regular" />, title: 'LONDON', sub: 'UNITED KINGDOM' },
      { icon: <Cpu size={22} weight="regular" />, title: '32GB DDR4', sub: 'MEMORY' },
      { icon: <Database size={22} weight="regular" />, title: '1TB NVME SSD', sub: 'STORAGE' },
      { icon: <Gauge size={22} weight="regular" />, title: '1 GBIT', sub: 'PORT SPEED' }
    ]
  }
];

const InstanceTiers = () => {
  return (
    <section className="tiers-section">
      <div className="tiers-container">
        
        <div className="tiers-header-container">
          <h2 className="tiers-title">INSTANCE TIERS</h2>
          <span className="tiers-subtitle">FIXED MONTHLY RATES // NO HIDDEN EGRESS COSTS</span>
        </div>
        
        <div className="tiers-list">
          {tiersData.map((tier, idx) => (
            <div className="tier-card" key={idx}>
              <div className="tier-details">
                <div className="tier-header">
                  <span className="tier-name">{tier.name}</span>
                  <span className="tier-separator">|</span>
                  <span className="tier-specs">{tier.specs}</span>
                </div>
                <p className="tier-benchmark">{tier.benchmark}</p>
                
                <div className="tier-features">
                  {tier.features.map((feature, fIdx) => (
                    <div className="feature-item" key={fIdx}>
                      <div className="feature-icon">{feature.icon}</div>
                      <div className="feature-text">
                        <span className="feature-title">{feature.title}</span>
                        <span className="feature-sub">{feature.sub}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="tier-pricing">
                <div className="price-value">{tier.price}</div>
                <div className="price-period">/ MONTH</div>
                <button className="btn-configure">CONFIGURE SERVER</button>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default InstanceTiers;
