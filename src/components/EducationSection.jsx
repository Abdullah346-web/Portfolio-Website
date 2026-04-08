import { motion } from 'framer-motion';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const EducationSection = () => {
  const educationData = [
                            { id: 1, duration: '2012 – 2022', degree: 'Matriculation (Science)', institute: 'Fazaia Inter College (FIC)', percentage: '81.7%', description: 'Secondary education with focus on Science subjects', isOngoing: false },
                            { id: 2, duration: '2022 – 2024', degree: 'Intermediate', institute: 'Fazaia Inter College (FIC)', percentage: '75%', description: 'Higher secondary education', isOngoing: false },
                            { id: 3, duration: 'June 2024', degree: 'Diploma in Software Engineering (1st Semester)', institute: 'Aptech', percentage: '78%', description: 'Professional software engineering diploma', isOngoing: false },
                            { id: 4, duration: 'November 2024 – March 2026', degree: 'Full Stack MERN Development', institute: 'SMIT (Saylani Mass IT Training)', description: 'Comprehensive MERN stack development bootcamp', isOngoing: false },
                            { id: 5, duration: '2025 – Present', degree: "Bachelor's in Cyber Security", institute: 'Dawood University', description: 'Specialized degree in cybersecurity', isOngoing: true },
                          ];

                          const containerVariants = {
                            hidden: { opacity: 0 },
                            visible: {
                              opacity: 1,
                              transition: { staggerChildren: 0.15, delayChildren: 0.2 },
                            },
                          };

                          const itemVariants = {
                            hidden: { opacity: 0, y: 30 },
                            visible: {
                              opacity: 1,
                              y: 0,
                              transition: { duration: 0.5, ease: 'easeOut' },
                            },
                          };

                          const lineVariants = {
                            hidden: { scaleY: 0 },
                            visible: { scaleY: 1, transition: { duration: 1.2, ease: 'easeOut' } },
                          };

                          const dotVariants = {
                            hidden: { scale: 0, opacity: 0 },
                            visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
                          };

                          return (
                            <AnimatedSection id="education" className="min-h-screen bg-black py-20">
                              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="text-center mb-20">
                                  <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="text-4xl md:text-5xl font-bold text-main mb-4"
                                  >
                                    Education Journey
                                  </motion.h2>
                                  <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    className="w-20 h-1 bg-[var(--main-color)] mx-auto shadow-glow"
                                  />
                                </div>

                                <div className="relative max-w-4xl mx-auto">
                                  <motion.div
                                    variants={lineVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[var(--main-color)] to-gray-700 origin-top"
                                  />

                                  <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, margin: '-100px' }}
                                    className="space-y-12"
                                  >
                                    {educationData.map((education, index) => (
                                      <motion.div
                                        key={education.id}
                                        variants={itemVariants}
                                        className="relative w-full flex justify-center"
                                      >
                                        <motion.div
                                          variants={dotVariants}
                                          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20"
                                        >
                                          <div
                                            className={`w-6 h-6 rounded-full border-4 border-black shadow-lg relative z-10 ${
                                              education.isOngoing
                                                ? 'bg-[var(--main-color)] shadow-[0_0_20px_rgba(36,240,243,0.6)]'
                                                : 'bg-[var(--main-color)]'
                                            }`}
                                          >
                                            {education.isOngoing && (
                                              <motion.div
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 rounded-full border-2 border-[var(--main-color)] opacity-50"
                                              />
                                            )}
                                          </div>
                                        </motion.div>

                                        {index % 2 === 0 && (
                                          <div className="w-full md:w-[calc(50%-30px)] md:pr-12">
                                            <motion.div
                                              initial={{ opacity: 0, x: -30 }}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: 0.3 + index * 0.15 }}
                                              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[var(--main-color)] transition-colors shadow-lg"
                                            >
                                              <div className="flex items-center gap-2 mb-3">
                                                <Calendar size={16} className="text-[var(--main-color)]" />
                                                <span className="text-[var(--main-color)] font-semibold text-sm">{education.duration}</span>
                                              </div>
                                              <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                                              <div className="flex items-center gap-2 mb-3">
                                                <MapPin size={16} className="text-gray-500" />
                                                <span className="text-gray-400 text-sm font-medium">{education.institute}</span>
                                              </div>
                                              {education.percentage && (
                                                <div className="flex items-center gap-2 mb-3">
                                                  <TrendingUp size={16} className="text-green-500" />
                                                  <span className="text-gray-400 text-sm">
                                                    <span className="text-green-400 font-semibold">{education.percentage}</span>
                                                    {' '}Grade
                                                  </span>
                                                </div>
                                              )}
                                              <p className="text-gray-500 text-sm leading-relaxed">{education.description}</p>
                                              {education.isOngoing && (
                                                <div className="mt-4 pt-4 border-t border-gray-700">
                                                  <span className="inline-block px-3 py-1 bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-semibold rounded-full border border-[var(--main-color)]/30">
                                                    🚀 Ongoing
                                                  </span>
                                                </div>
                                              )}
                                            </motion.div>
                                          </div>
                                        )}

                                        {index % 2 === 1 && (
                                          <div className="w-full md:w-[calc(50%-30px)] md:ml-[calc(50%+30px)]">
                                            <motion.div
                                              initial={{ opacity: 0, x: 30 }}
                                              whileInView={{ opacity: 1, x: 0 }}
                                              viewport={{ once: true }}
                                              transition={{ delay: 0.3 + index * 0.15 }}
                                              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-[var(--main-color)] transition-colors shadow-lg"
                                            >
                                              <div className="flex items-center gap-2 mb-3">
                                                <Calendar size={16} className="text-[var(--main-color)]" />
                                                <span className="text-[var(--main-color)] font-semibold text-sm">{education.duration}</span>
                                              </div>
                                              <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                                              <div className="flex items-center gap-2 mb-3">
                                                <MapPin size={16} className="text-gray-500" />
                                                <span className="text-gray-400 text-sm font-medium">{education.institute}</span>
                                              </div>
                                              {education.percentage && (
                                                <div className="flex items-center gap-2 mb-3">
                                                  <TrendingUp size={16} className="text-green-500" />
                                                  <span className="text-gray-400 text-sm">
                                                    <span className="text-green-400 font-semibold">{education.percentage}</span>
                                                    {' '}Grade
                                                  </span>
                                                </div>
                                              )}
                                              <p className="text-gray-500 text-sm leading-relaxed">{education.description}</p>
                                              {education.isOngoing && (
                                                <div className="mt-4 pt-4 border-t border-gray-700">
                                                  <span className="inline-block px-3 py-1 bg-[var(--main-color)]/10 text-[var(--main-color)] text-xs font-semibold rounded-full border border-[var(--main-color)]/30">
                                                    🚀 Ongoing
                                                  </span>
                                                </div>
                                              )}
                                            </motion.div>
                                          </div>
                                        )}
                                      </motion.div>
                                    ))}
                                  </motion.div>

                                  <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8 }}
                                    className="text-center mt-20"
                                  >
                                    <p className="text-gray-500 text-sm">Continuous learner | Always exploring new technologies</p>
                                  </motion.div>
                                </div>
                              </div>
                            </AnimatedSection>
                                                  );
                                                };
                        
                        export default EducationSection;
