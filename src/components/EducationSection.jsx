import { motion as Motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const EDUCATION_DATA = [
  { id: 1, duration: '2012 – 2022', degree: 'Matriculation (Science)', institute: 'Fazaia Inter College (FIC)', percentage: '81.7%', description: 'Secondary education with focus on Science subjects', isOngoing: false },
  { id: 2, duration: '2022 – 2024', degree: 'Intermediate', institute: 'Fazaia Inter College (FIC)', percentage: '75%', description: 'Higher secondary education', isOngoing: false },
  { id: 3, duration: 'June 2024', degree: 'Diploma in Software Engineering (1st Semester)', institute: 'Aptech', percentage: '78%', description: 'Professional software engineering diploma', isOngoing: false },
  { id: 4, duration: 'November 2024 – March 2026', degree: 'Full Stack MERN Development', institute: 'SMIT (Saylani Mass IT Training)', description: 'Comprehensive MERN stack development bootcamp', isOngoing: false },
  { id: 5, duration: '2025 – Present', degree: "Bachelor's in Cyber Security", institute: 'Dawood University', description: 'Specialized degree in cybersecurity', isOngoing: true },
];

const EducationCard = ({ education, index }) => (
  <Motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
    className={`education-card relative col-start-2 w-full min-w-0 md:col-span-1 ${
      index % 2 === 0 ? 'md:col-start-3 md:pl-10' : 'md:col-start-1 md:pr-10'
    }`}
  >
    <span className={`education-connector absolute top-1/2 h-px w-4 -translate-y-1/2 ${
      index % 2 === 0 ? 'left-[-1rem]' : 'right-[-1rem]'
    }`} />
    <div className="education-card-surface rounded-2xl p-5 shadow-lg sm:p-6">
      <div className="mb-3 flex items-center gap-2">
        <Calendar size={16} className="text-main" />
        <span className="text-sm font-semibold text-main">{education.duration}</span>
      </div>
      <h3 className="mb-2 text-xl font-bold text-white">{education.degree}</h3>
      <div className="mb-3 flex items-center gap-2">
        <MapPin size={16} className="text-slate-500" />
        <span className="text-sm font-medium text-slate-400">{education.institute}</span>
      </div>
      {education.percentage && (
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp size={16} className="text-main" />
          <span className="text-sm text-slate-400">
            <span className="font-semibold text-main">{education.percentage}</span> Grade
          </span>
        </div>
      )}
      <p className="text-sm leading-relaxed text-slate-400">{education.description}</p>
      {education.isOngoing && (
        <div className="mt-4 border-t border-[var(--border-color)] pt-4">
          <span className="education-badge inline-block rounded-full px-3 py-1 text-xs font-semibold">
            Ongoing
          </span>
        </div>
      )}
    </div>
  </Motion.div>
);

const EducationSection = () => (
  <AnimatedSection id="education" className="theme-section min-h-screen py-16 md:py-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="mb-14 text-center md:mb-20">
        <Motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-4xl font-bold text-main md:text-5xl"
        >
          Education Journey
        </Motion.h2>
        <Motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="mx-auto h-1 w-20 bg-[var(--main-color)] shadow-glow"
        />
      </div>

      <div className="education-timeline relative mx-auto max-w-5xl">
        <div className="education-line absolute bottom-0 left-4 top-0 w-px md:left-1/2 md:-translate-x-1/2" />
        <div className="grid gap-8 md:gap-y-10">
          {EDUCATION_DATA.map((education, index) => (
            <div key={education.id} className="education-row grid min-w-0 grid-cols-[2rem_minmax(0,1fr)] md:grid-cols-[1fr_2rem_1fr]">
              <div className="relative col-start-1 row-start-1 md:col-start-2">
                <Motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="education-node absolute left-1/2 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-[var(--page-bg)]"
                />
              </div>
              <EducationCard education={education} index={index} />
            </div>
          ))}
        </div>
      </div>

      <p className="mt-16 text-center text-sm text-slate-500">
        Continuous learner | Always exploring new technologies
      </p>
    </div>
  </AnimatedSection>
);

export default EducationSection;
