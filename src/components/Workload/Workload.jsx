import React from 'react';
import { PottedPlant, CompassTool } from '@phosphor-icons/react';
import './Workload.css';

const Workload = () => {
  return (
    <section className="workload-section">
      <div className="workload-container">
        <h2 className="workload-title">BUILT FOR ANY WORKLOAD</h2>
        
        <div className="workload-grid">
          <div className="workload-card card-large">
            <div className="card-top-content">
               <h3 className="card-title">FULL CONTROL</h3>
               <p className="card-description">Complete root access to configure your<br/>server exactly how you need.</p>
            </div>
            <p className="card-footer-text">MAXIMUM FLEXIBILITY</p>
            <div className="card-icon-large">
               <PottedPlant size={44} weight="regular" />
            </div>
          </div>
          
          <div className="workload-right-column">
            <div className="workload-row-top">
              <div className="workload-card card-small">
                 <h3 className="card-title-small">LOW LATENCY</h3>
                 <p className="card-subtitle-small">OPTIMIZED NETWORK PERFORMANCE</p>
              </div>
              <div className="workload-card card-small">
                 <h3 className="card-title-small">DEDICATED RESOURCES</h3>
                 <p className="card-subtitle-small">NO SHARED PERFORMANCE</p>
              </div>
            </div>
            
            <div className="workload-card card-dark">
              <div className="card-dark-content">
                <h3 className="card-title-dark">SCALABLE</h3>
                <p className="card-description-dark">Easily upgrade resources as your needs grow.</p>
              </div>
              <div className="card-icon-dark">
                <CompassTool size={28} weight="regular" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workload;
