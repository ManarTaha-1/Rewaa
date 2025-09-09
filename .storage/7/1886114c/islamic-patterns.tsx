import React from 'react';

const IslamicPatterns: React.FC = () => {
  return (
    <>
      <div className="islamic-pattern"></div>
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </>
  );
};

export default IslamicPatterns;