import React, { useState } from 'react';
import { ExternalLink, Play, Book, Heart, Star, Headphones } from 'lucide-react';

interface Course {
  title: string;
  url: string;
  description?: string;
}

interface CourseCategory {
  title: string;
  icon: React.ReactNode;
  courses: Course[];
  color: string;
}

const CoursesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const courseCategories: CourseCategory[] = [
    {
      title: "الدورات الدينية",
      icon: <Book className="w-6 h-6" />,
      color: "bg-purple-100 border-purple-300",
      courses: [
        { title: "عالمغرب", url: "https://youtube.com/playlist?list=PLlXQj2VGUTmfOrpzgytlcIlu38pQWh4UJ&si=A71R28vmJ5m_WC9g" },
        { title: "انا مش فاهمنى - دكتور حازم شومان", url: "https://youtube.com/playlist?list=PLVPp4tYPys9P_e1DjAfRwz23QsJasEujM&si=AVrd0dzAbAeTq-_7" },
        { title: "شرح كتاب انا مش فاهمنى - الجزء الأول", url: "https://youtu.be/snWdwyjG98A?si=nhwNbwTJXYNfP9mB" },
        { title: "شرح كتاب انا مش فاهمنى - الجزء الثاني", url: "https://youtu.be/CbxLrZgkY_Q?si=tMXaT5r9qSuqFBNF" },
        { title: "الاربعون النووية", url: "https://www.youtube.com/watch?v=I4uZxRTgJIY&list=PL1i_D1Vw3d5PUJK-u7dpPimaYECXnPp3i" },
        { title: "امهات المؤمنين", url: "https://www.youtube.com/watch?v=qP5YiVPmyVY&list=PL1i_D1Vw3d5ND66UyzMRvBoHF7VuhzAPB" },
        { title: "تعلمت من يوسف", url: "https://www.youtube.com/watch?v=4b42YbHztDE&list=PL1i_D1Vw3d5PStIM5Rv29cfbKJGmtt4S8" },
        { title: "جوامع الدعاء", url: "https://www.youtube.com/watch?v=SNVuN00Cbxg&list=PL1i_D1Vw3d5NlD9ooLyfLbn2V2sOhoeQi" },
        { title: "قصة آدم عليه السلام", url: "https://www.youtube.com/watch?v=fcZa7Kn0_dY&list=PL1i_D1Vw3d5M6huXoMMJ2PfnfL8K4pImw" },
        { title: "اسماء الله الحسنى", url: "https://www.youtube.com/watch?v=Ajs0ukspDVM&list=PL1i_D1Vw3d5OdEWLlSZpbTlKPO9t76WkC" },
        { title: "تدبر سورة مريم", url: "https://www.youtube.com/watch?v=Wungx18tyhk&list=PL1i_D1Vw3d5MzIDQKeupJwFmNfQa2Yte1" },
        { title: "داء القلوب و دواؤها", url: "https://www.youtube.com/watch?v=uT0a15oRKsc&list=PL1i_D1Vw3d5Nva9fQgfnCB8xVQysY_HaR" },
        { title: "معوقات الطريق الى الله", url: "https://www.youtube.com/watch?v=aX6z-mH3gPg&list=PL1i_D1Vw3d5OKBoZw2ZToh7btEKcSk18_" },
        { title: "تذوق العبادات", url: "https://www.youtube.com/watch?v=si994Z9BAr8&list=PLSFJcWy6euuA1fybGAh3MO-D2ODE_ccsB" }
      ]
    },
    {
      title: "التجويد",
      icon: <Headphones className="w-6 h-6" />,
      color: "bg-indigo-100 border-indigo-300",
      courses: [
        { title: "التجويد للشيخ علاء حامد", url: "https://youtube.com/playlist?list=PL1i_D1Vw3d5PrPubon8D1z9Cl3Hl8jJsX&si=vgU2hIaVQDmT7q8l" },
        { title: "التجويد الميسر للنساء", url: "https://youtube.com/playlist?list=PLr1ERqp3vuxTo9GkK-jg_hsFFt62cufgn&si=E7RrGlPpyUwSUeL7" },
        { title: "مخارج الحروف د.ايمن سويد", url: "https://youtube.com/playlist?list=PL7HSgRWkJwjzq3OSPX6fx1Qp-OoGI-kZH&si=C14RKdYfkYy8yHNx" }
      ]
    },
    {
      title: "تطوير المهارات",
      icon: <Star className="w-6 h-6" />,
      color: "bg-pink-100 border-pink-300",
      courses: [
        { title: "شجرة الخلد - شريف على", url: "https://youtube.com/playlist?list=PL_ZXIiZMp3MIrKp6vA3aHA5eTW3kT5plU&si=WJ9-K9H59kY0YMzf" },
        { title: "كل يوم آيه - محمد الغليظ", url: "https://youtube.com/playlist?list=PLgqtKVxUxe2o9aaQLD7gwS9_EIdNLwdh7&si=8iurpKvrLftmpd4c" },
        { title: "سُكون - كريم إسماعيل", url: "https://youtube.com/playlist?list=PLg2VgXJ7dHj_J1c6nxxPU-FVmYYqLJbSp&si=WJENlBlJuRHAbmKE" },
        { title: "بهدوء مع كريم إسماعيل", url: "https://youtube.com/playlist?list=PLg2VgXJ7dHj-KbCAvgK4VyHXfTJQXA7wx&si=nWOVBKedLkYJSMqn" },
        { title: "القوة العلمية - سمير مصطفى", url: "https://youtube.com/playlist?list=PLSUcSqxe9RhzaImfPjfi3mwq2bN_bXmyZ&si=-C1KSClFScUsD_Et" },
        { title: "تأسيس وعى المسلم المعاصر - ايمن عبدالرحيم", url: "https://youtube.com/playlist?list=PLnFJTGgdQYTNJLSn8ENSzD9qaPz3LypyW&si=q9u_yNx6LNj-aa7r" },
        { title: "احسن القصص - عمر عبدالكافى", url: "https://youtube.com/playlist?list=PLnFJTGgdQYTPE04yQ0IDrgqxPaD_yg-Yh&si=nX_KZTUh5d3-DLLh" },
        { title: "قصص الانبياء - نبيل العوضى", url: "https://youtube.com/playlist?list=OLAK5uy_l-eBzCjZzLqRQbsrLifHUhmTT6BWxkpEU&si=aPJGtdbCQPejCAz3" },
        { title: "دورة الفوتوشوب", url: "https://youtu.be/LqeVpcDO3wc?si=iLGQ7tZizaidVZSY" },
        { title: "دورة UI/UX Design", url: "https://youtube.com/playlist?list=PLjzhiGLyugKwnM6uN4NXhfpU8L7XvtDEv&si=7w5DWhCgqJ3GUpDt" },
        { title: "دورة دافنشى ريزولف", url: "https://youtube.com/playlist?list=PLZ5zEGbaMXXVFoFJBD_NW-PcidoD6l69D&si=qFSTI9MUGtLZncUt" },
        { title: "دورة اليستريتور", url: "https://youtube.com/playlist?list=PLg9ps5Gu0MiC_T2Spv3tMmmQjhpCrKC7Z&si=a-QEF3677NACK_ln" }
      ]
    },
    {
      title: "الأناشيد",
      icon: <Heart className="w-6 h-6" />,
      color: "bg-rose-100 border-rose-300",
      courses: [
        { title: "سيمر هذا الوقت", url: "https://youtu.be/2W0YeCgcYCM?si=hLZPX5ttxA9EJbUB" },
        { title: "اترك قليلاً جموع الناس كُلِهم", url: "https://youtu.be/45xN0x6Ra7g?si=Bt5wJgprEIt1jYeI" },
        { title: "لا تيأس من روح الله", url: "https://www.youtube.com/watch?v=4v6VL5wQWRg" },
        { title: "الى بيغرس النهارده بيحصد بكرة", url: "https://www.youtube.com/watch?v=aeyJia0KOB0&list=RDaeyJia0KOB0&start_radio=1" },
        { title: "ختمنا الطريق", url: "https://www.youtube.com/watch?v=hHPCis9GV0o" },
        { title: "تمسك بحُلمك", url: "https://www.youtube.com/watch?v=PhkjFJpuTaA" },
        { title: "خير الأصحاب", url: "https://www.youtube.com/watch?v=i3jGslbiVbY" },
        { title: "الله يعلم", url: "https://www.youtube.com/watch?v=i3jGslbiVbY" },
        { title: "ما مد لرب العرش يدا", url: "https://www.youtube.com/watch?v=qpMfu-dwVLo" },
        { title: "طال ليلي", url: "https://youtu.be/2sMpIe9L7qE?si=4Ui4VcuEOH0G16C1" },
        { title: "كن فيكون", url: "https://youtu.be/VQSUCfRoZPM?si=g4OmyFlC04sUWBxS" },
        { title: "سبيل الدموع", url: "https://youtu.be/2WHypCgleKg?si=lM5zcuZ6E9zCQb9N" },
        { title: "ليبقى النور بأُمتنا", url: "https://youtu.be/XUNAyTn0IDs?si=As_rvtNddu3UX6xH" },
        { title: "نور دربى و اهديني", url: "https://youtu.be/qLGbYUEeQQA?si=nrXom8voTUyUuZdl" },
        { title: "نور دربى يا رب", url: "https://youtu.be/44yjZVuJz-4?si=eb8g45Ky9tUGhmQT" },
        { title: "الله يعلم ما نشكو من الألمِ", url: "https://youtu.be/K7vL6NlUHa0?si=Go9I05htpPDKKcMm" },
        { title: "ان العبد الذى كسب الذنوب", url: "https://youtu.be/HLvZVAoYnd8?si=f2crtmwtTzbaqssY" },
        { title: "كشوق الليالى لضوء القمر", url: "https://youtu.be/-PpwsOAQ1LM?si=3p59x09j1I4FFps2" },
        { title: "رحلة لا تنتهى", url: "https://youtu.be/fRoevyQWix0?si=oShKY59P942kR1Za" },
        { title: "وديلى سلامى يا رايح للحرم", url: "https://youtu.be/6uPdFFQsdtE?si=eO1utax-ci2vbiaR" }
      ]
    },
    {
      title: "القرآن الكريم",
      icon: <Book className="w-6 h-6" />,
      color: "bg-green-100 border-green-300",
      courses: [
        { title: "سورة النساء - احمد بن طالب", url: "https://youtu.be/uXc8OnwuBoc?si=imcfz2NUn2gPMx_0" },
        { title: "سورتي النجم و القمر - محمد اللحيدان", url: "https://youtu.be/QwxXG3FIkf8?si=LrAzV9UqdMJSUQz_" },
        { title: "سورة المؤمنون - ياسر الدوسري", url: "https://youtu.be/3vOzwdTyzDA?si=MpcYFu7V4QmsBLuw" },
        { title: "سوره لقمان - مشاري راشد", url: "https://youtu.be/gUA9skGkmDI?si=G6N_0Sl3-Kgnmd_p" },
        { title: "سوره ق - ياسر الدوسري", url: "https://youtu.be/mswaCpJ9Db8?si=lI7zGunZkYtlmD7V" },
        { title: "سورة المعارج - محمد اللحيدان", url: "https://youtu.be/BKaQ7_6QM24?si=5rV0mH7SjCMGgAy7" },
        { title: "سورة الحديد - خالد الجليل", url: "https://youtu.be/NCfycN0rP6Q?si=7H_hwl5awyO34aMx" },
        { title: "سورة آل عمران - عمر ضياء الدين", url: "https://youtu.be/jtLz-MFOTQQ?si=1K6NndlxU46uWUs5" },
        { title: "سوره الفجر - للمنشاوي", url: "https://youtu.be/jS_UQTyGnR0?si=misT63VdpvsD64oS" },
        { title: "سوره يس - للحصري", url: "https://youtu.be/dFl2ia_8VUk?si=BOC-TUfH6KaQp0MA" },
        { title: "سوره نوح - احمد بن عبدالعزيز النفيس", url: "https://youtu.be/fzgsKaIqRiY?si=CT3qX0qjtO8kpbaU" },
        { title: "سوره طه - احمد بن عبدالعزيز النفيس", url: "https://youtu.be/xQfjmQEDfs0?si=389kstBDzSVQcLeh" },
        { title: "سورة الاحزاب - منصور السالمي", url: "https://youtu.be/Zo7nP1ThahY?si=KN8WZUGUureYVIkK" },
        { title: "سوره طه - عبدالله كامل", url: "https://youtu.be/AOsFhe10vtQ?si=ikSCgVn03Olqd4GG" },
        { title: "سوره نوح - عبدالله كامل", url: "https://youtu.be/maZ3BWifaNE?si=bNkgCIeJ2y6kq-12" },
        { title: "سوره مريم - حسين العزام", url: "https://youtu.be/LPpYmqb8ug4?si=wvY2H4ijM375Gfjq" },
        { title: "سورة ابراهيم - باسل مؤنس", url: "https://youtu.be/2Q9SAZeY6nw?si=LXFioLItGDa_QTQ5" },
        { title: "الطبلاوي - اواخر سورة الحشر", url: "https://youtu.be/r1flc2sC6z8?si=g7gfqrBlhc2HsvJ7" },
        { title: "محمد اللحيدان", url: "https://youtu.be/_OYt6l7lzJI?si=JcYpVN8ExfpZevLn" },
        { title: "سوره مريم - مشاري راشد", url: "https://youtu.be/BmEFz-2aZmU?si=0kXAKWJyX_Gdy-OP" }
      ]
    },
    {
      title: "الأذكار",
      icon: <Play className="w-6 h-6" />,
      color: "bg-amber-100 border-amber-300",
      courses: [
        { title: "اذكار الصباح و المساء - مشاري راشد", url: "https://youtu.be/xrZALrmabb0?si=OwcMZGShA2SOfVDe" }
      ]
    }
  ];

  const toggleCategory = (categoryTitle: string) => {
    setActiveCategory(activeCategory === categoryTitle ? null : categoryTitle);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-16 arabic-text">
          مكتبة رواء التعليمية
        </h2>
        
        <div className="space-y-6">
          {courseCategories.map((category, index) => (
            <div key={index} className="section-card overflow-hidden">
              <button
                onClick={() => toggleCategory(category.title)}
                className={`w-full p-6 text-right flex items-center justify-between hover:bg-purple-50 transition-colors ${category.color}`}
              >
                <div className="flex items-center space-x-reverse space-x-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-purple-800 arabic-text">
                    {category.title}
                  </h3>
                </div>
                <div className={`transform transition-transform ${activeCategory === category.title ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              {activeCategory === category.title && (
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {category.courses.map((course, courseIndex) => (
                      <a
                        key={courseIndex}
                        href={course.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-purple-200 hover:border-purple-400 hover:shadow-md transition-all group"
                      >
                        <span className="text-purple-700 font-medium arabic-text text-sm md:text-base">
                          {course.title}
                        </span>
                        <ExternalLink className="w-4 h-4 text-purple-500 group-hover:text-purple-700 transition-colors flex-shrink-0 ml-2" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;