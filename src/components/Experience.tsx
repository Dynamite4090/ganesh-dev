import React from 'react';
import { motion } from 'motion/react';
import { Award, Briefcase, GraduationCap, CheckCircle2, Bookmark, FileText } from 'lucide-react';
import { experienceData, educationData } from '../data';

export default function Experience() {
  const internship = experienceData[0];
  const academicDegree = educationData[0];

  return (
    <div className="px-6 md:px-12 py-24 max-w-6xl mx-auto space-y-12">
      {/* Page Header */}
      <div className="relative border-b border-game-border pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-2"
        >
          <span className="font-mono text-xs text-game-cyan tracking-widest uppercase">// 04. CAREER TRACK</span>
          <h1 className="font-head text-4xl md:text-6xl font-bold uppercase text-white">
            EXPERIENCE &amp; <span className="text-game-cyan text-glow-cyan">EDUCATION</span>
          </h1>
        </motion.div>
        <span className="absolute bottom-[-1px] left-0 w-24 h-0.5 bg-game-cyan" />
      </div>

      {/* Main Experience layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* Left Side: Spotlight Callout Box */}
        <div className="lg:col-span-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-game-surface border border-game-border rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-game-cyan/5 rounded-full filter blur-xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-2 border-b border-game-border pb-3">
                <Award className="text-game-cyan size-5" />
                <h3 className="font-head text-sm font-bold uppercase tracking-widest text-white">
                  // INTERN STATUS
                </h3>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">ORGANIZATION:</div>
                  <div className="text-white font-bold">{internship.company}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">PERIOD STATUS:</div>
                  <div className="text-game-cyan font-bold">{internship.dateRange}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">VERIFIER &amp; SIGN:</div>
                  <div className="text-white font-semibold">{internship.certificateIssuer}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">IP MATRICES:</div>
                  <div className="text-white">Full NDA with IP Assignment Executed</div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="bg-game-bg/60 border border-game-cyan/25 p-3 rounded-lg flex items-center gap-3">
                <CheckCircle2 size={18} className="text-game-cyan flex-shrink-0" />
                <div className="text-[11px] text-game-muted leading-snug">
                  Official certificate of continuous remote gaming programming completed successfully.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Academic Statistics Sidebar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-game-surface border border-game-border rounded-xl p-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-game-orange/5 rounded-full filter blur-xl" />
            <div className="relative space-y-4">
              <div className="flex items-center gap-2 border-b border-game-border pb-3">
                <GraduationCap className="text-game-orange size-5" />
                <h3 className="font-head text-sm font-bold uppercase tracking-widest text-white">
                  // ACADEMIC EVAL
                </h3>
              </div>

              <div className="space-y-3 font-sans text-xs">
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">CAMPUS:</div>
                  <div className="text-white font-bold">{academicDegree.school}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">CONSILIATION CGPA:</div>
                  <div className="text-game-orange font-bold text-base leading-none text-glow-orange mt-1">
                    {academicDegree.cgpa}
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-game-muted font-mono uppercase text-[10px]">CREDITS STAGED:</div>
                  <div className="text-white font-semibold">104 / 104 Credits cleared with 0 active backlogs.</div>
                </div>
              </div>

              {/* ADYPU Badge */}
              <div className="bg-game-bg/60 border border-game-border p-3 rounded-lg flex items-center gap-3">
                <FileText size={18} className="text-game-gold flex-shrink-0 animate-pulse" />
                <div className="text-[11px] text-game-muted leading-snug">
                  Certified projects dissertation. Both evaluated by thesis guides under ADYPU framework.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Detailed logs */}
        <div className="lg:col-span-2 space-y-12">
          {/* Work Experience logs */}
          <div className="space-y-6">
            <h3 className="font-head text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <Briefcase className="text-game-cyan text-glow-cyan" />
              <span>Professional Industry Experience</span>
            </h3>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-game-surface border-l-4 border-game-cyan border border-game-border p-6 md:p-8 rounded-r-xl space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-game-border pb-4">
                <div>
                  <h4 className="font-head text-2xl font-bold text-white uppercase leading-tight">
                    {internship.role}
                  </h4>
                  <p className="text-sm font-semibold text-game-cyan uppercase tracking-wider">
                    {internship.company}
                  </p>
                </div>
                <div className="font-mono text-xs bg-game-bg border border-game-border text-game-muted px-3 py-1.5 rounded uppercase">
                  {internship.dateRange}
                </div>
              </div>

              {/* Task bullet points */}
              <ul className="space-y-3 font-sans">
                {internship.points.map((point, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-game-muted leading-relaxed">
                    <span className="text-game-cyan select-none font-bold font-mono mt-0.5">0{idx + 1}.</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Education background modules */}
          <div className="space-y-6">
            <h3 className="font-head text-2xl font-bold uppercase tracking-wider text-white flex items-center gap-3">
              <GraduationCap className="text-game-cyan text-glow-cyan" />
              <span>Full Education Credentials</span>
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-game-surface/60 border border-game-border p-6 rounded-xl space-y-3"
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5">
                    <div>
                      <h4 className="font-head text-lg font-bold text-white uppercase">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-game-cyan uppercase tracking-wider">
                        {edu.school}
                      </p>
                    </div>
                    <span className="font-mono text-xs bg-game-bg border border-game-border/80 text-game-muted px-2 py-0.5 rounded uppercase">
                      {edu.years}
                    </span>
                  </div>

                  {edu.notes && (
                    <ul className="space-y-1.5 font-sans">
                      {edu.notes.map((note, noteIdx) => (
                        <li key={noteIdx} className="flex gap-2 text-xs text-game-muted leading-relaxed">
                          <span className="text-game-cyan font-mono select-none">»</span>
                          <span>{note}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
