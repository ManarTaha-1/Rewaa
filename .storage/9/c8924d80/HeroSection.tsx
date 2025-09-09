import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-32">
      <div className="max-w-4xl mx-auto space-y-8 fade-in-up">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 arabic-text">
          رواء – نرتوي علماً وإيماناً
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-purple-700 arabic-text max-w-3xl mx-auto">
          إحنا هنا علشانك… علشان تكوني أحسن نسخة من نفسك في كل جوانب حياتك بإذن الله
        </p>

        {/* Main Action Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
          <a 
            href="https://forms.gle/vSTatn4BYp8cALZG8"
            target="_blank"
            rel="noopener noreferrer"
            className="custom-btn text-lg px-8 py-4"
          >
            انضمي إلينا
          </a>
          
          <button className="custom-btn text-lg px-8 py-4">
            ابدأي رحلتك الآن
          </button>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16 max-w-6xl mx-auto">
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">📖</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              الدورات الدينية
            </h3>
          </div>
          
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">🎵</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              التجويد
            </h3>
          </div>
          
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              تطوير الذات
            </h3>
          </div>
          
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">🎶</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              الأناشيد
            </h3>
          </div>
          
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">📕</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              القرآن الكريم
            </h3>
          </div>
          
          <div className="section-card p-6 text-center cursor-pointer group">
            <div className="text-3xl mb-3">🤲</div>
            <h3 className="font-bold text-purple-800 group-hover:text-purple-600 transition-colors">
              الأذكار
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;