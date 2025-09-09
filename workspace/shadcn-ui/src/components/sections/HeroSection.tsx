import React, { useState } from 'react';
import CoursesSection from './CoursesSection';
import rewaa from '../../../../../cover/rewaa.png';


const HeroSection: React.FC = () => {
  const [showCourses, setShowCourses] = useState(false);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32 mb-20">
      <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
        {/* Banner */}
        <div className="text-center mb-4">
          <img 
            src={rewaa}
            alt="بانر رواء"
            className="w-full h-70 object-cover rounded-lg opacity-90"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        {/* Main Title */}
        <h1 id="home" className="text-4xl md:text-6xl font-bold text-purple-800 arabic-text pt-5">
          رواء – نرتوي علماً وإيماناً
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-700 arabic-text max-w-3xl mx-auto">
          إحنا هنا علشانك… علشان تكوني أحسن نسخة من نفسك في كل جوانب حياتك بإذن الله
        </p>

        {/* Main Action Buttons */}
        <div className="flex md:flex-row gap-6 justify-center items-center mt-12">
          <a 
            href="https://forms.gle/vSTatn4BYp8cALZG8"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn text-lg px-8 py-4"
          >
            انضمي إلينا
          </a>
          
          <button 
            onClick={() => setShowCourses(!showCourses)}
            className="custom-btn text-lg px-8 py-4"
          >
            ابدأي رحلتك الآن
          </button>
        </div>

        {/* Purple accent section */}
        <div className="purple-accent mt-16 ">
          <h3 className="text-2xl font-bold text-purple-800 mb-4 arabic-text">
            مكتبة رواء الشاملة
          </h3>
          <p className="text-purple-700 arabic-text">
            دورات دينية • تجويد • تطوير ذات • أناشيد • قرآن كريم • أذكار
          </p>
        </div>
      </div>

      {/* Show courses when button is clicked */}
      {showCourses && (
        <div className="w-full mt-16 fade-in-up">
          <CoursesSection />
        </div>
      )}
    </section>
  );
};

export default HeroSection;