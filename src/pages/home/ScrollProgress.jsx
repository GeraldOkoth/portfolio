import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // Calculate progress percentage
      const totalScroll = documentHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      
      setScrollProgress(Math.min(progress, 100));
    };

    // Initial calculation
    calculateScrollProgress();

    // Add scroll listener
    window.addEventListener('scroll', calculateScrollProgress);
    window.addEventListener('resize', calculateScrollProgress);

    return () => {
      window.removeEventListener('scroll', calculateScrollProgress);
      window.removeEventListener('resize', calculateScrollProgress);
    };
  }, []);

  // Calculate stroke dashoffset for circular progress
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.div 
      className="scroll-progress-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <div className="progress-ring">
        <svg width="70" height="70">
          {/* Background circle */}
          <circle
            className="progress-ring-background"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="3"
            fill="transparent"
            r={radius}
            cx="35"
            cy="35"
          />
          
          {/* Progress circle */}
          <circle
            className="progress-ring-progress"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="transparent"
            r={radius}
            cx="35"
            cy="35"
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: strokeDashoffset,
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
              transition: 'stroke-dashoffset 0.3s ease'
            }}
            strokeLinecap="round"
          />
          
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff7b00" />
              <stop offset="100%" stopColor="#ff9500" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="progress-text">
          <span className="progress-number">{Math.round(scrollProgress)}</span>
          <span className="progress-percent">%</span>
        </div>
      </div>
      
      {/* Tooltip */}
      <div className="progress-tooltip">
        Scroll Progress
      </div>
    </motion.div>
  );
};

export default ScrollProgress;