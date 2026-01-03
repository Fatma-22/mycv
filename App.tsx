
import React from 'react';
import { CV_DATA } from './constants';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen pb-20 print:pb-0 print:min-h-0">
      {/* Floating Toolbar */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 no-print">
        <div className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-xl border border-white/20 flex gap-4 items-center">
          <span className="text-sm font-semibold text-slate-600">Researcher Dashboard</span>
          <div className="w-px h-4 bg-slate-200"></div>
          <button 
            onClick={handlePrint}
            className="bg-indigo-600 text-white px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-indigo-700 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
            Download PDF
          </button>
        </div>
      </div>

      <div className="cv-container max-w-5xl mx-auto mt-24 mb-12 bg-white shadow-2xl rounded-3xl overflow-hidden print:m-0 print:rounded-none print:shadow-none sm:grid sm:grid-cols-12">
        {/* Sidebar / Profile Area */}
        <aside className="sm:col-span-4 bg-slate-900 text-white p-8 md:p-12 space-y-10 print:min-h-screen">
          <div className="text-center sm:text-left pt-4">
            <h1 className="text-3xl font-bold leading-tight mb-2">{CV_DATA.name}</h1>
            <p className="text-indigo-400 font-medium tracking-wide uppercase text-xs">Ph.D. Candidate & AI Researcher</p>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Contact</h2>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href={`mailto:${CV_DATA.email}`} className="hover:text-white transition-colors break-all">{CV_DATA.email}</a>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <span>{CV_DATA.mobile}</span>
              </div>
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-indigo-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span className="leading-relaxed">{CV_DATA.address}</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Platforms</h2>
            <div className="space-y-4 text-sm">
              <a href={CV_DATA.researchGate} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-indigo-600 transition-all">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                </div>
                ResearchGate
              </a>
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-1">Freelance Research</p>
                <a href={CV_DATA.mostaql} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-blue-500 transition-all">
                    <span className="font-bold text-[10px]">M</span>
                  </div>
                  Mostaql (مستقل)
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Academic Profile</h2>
            <div className="text-sm text-slate-300 space-y-2">
              <p><span className="text-slate-500">Ph.D. Status:</span> Candidate (since 2022)</p>
              <p><span className="text-slate-500">M.Sc. Confirmed:</span> 2021</p>
              <p><span className="text-slate-500">Born:</span> 1994</p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="sm:col-span-8 p-8 md:p-12 bg-white space-y-12">
          {/* Research Vision */}
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
                Research Vision
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg font-medium border-l-4 border-indigo-100 pl-6 py-2">
                {CV_DATA.objective}
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-700 leading-relaxed">
                  {CV_DATA.profile}
                </p>
              </div>
            </div>
          </section>

          {/* Research & Academic Experience */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              Academic & Research Experience
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 print:before:bg-slate-200">
              {CV_DATA.experience.map((exp, idx) => (
                <div key={idx} className="experience-item relative pl-10 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 z-10"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-indigo-600 tracking-tight">{exp.period}</span>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug">{exp.role}</h3>
                    <div className="text-slate-600 font-medium">{exp.organization}</div>
                    <div className="text-sm text-slate-500">{exp.location}</div>
                    {exp.details && (
                      <ul className="mt-3 space-y-1">
                        {exp.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Publications Section */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              Research Publications
            </h2>
            <div className="space-y-6">
              {CV_DATA.publications.map((pub, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors group print:border-slate-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">{pub.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-3 leading-tight">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2 italic">
                    {pub.authors}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    <span className="bg-white px-2 py-1 rounded shadow-sm border border-slate-200">{pub.journal}</span>
                    <span>{pub.details}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Specialized Skills */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.skills.technical.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 print:bg-slate-50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-600">Methodology & Leadership</h3>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.skills.interpersonal.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium border border-slate-200 print:bg-slate-50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Academic Background */}
          <section className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
              <span className="w-1.5 h-8 bg-indigo-600 rounded-full"></span>
              Education & Advanced Degrees
            </h2>
            <div className="space-y-8 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100 print:before:bg-slate-200">
              {CV_DATA.education.map((edu, idx) => (
                <div key={idx} className="education-item relative pl-10 group">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white border-4 border-indigo-600 z-10"></div>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-indigo-600 tracking-tight">{edu.period}</span>
                    <h3 className="text-lg font-bold text-slate-800 leading-snug">{edu.degree}</h3>
                    <div className="text-slate-600 font-medium">{edu.institution}</div>
                    {edu.details && (
                      <ul className="mt-3 space-y-1">
                        {edu.details.map((detail, dIdx) => (
                          <li key={dIdx} className="text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Note */}
          <footer className="pt-10 border-t border-slate-100 text-center">
             <p className="text-sm text-slate-400 font-medium tracking-wide italic">Scientific publications and academic references are available upon request.</p>
          </footer>
        </main>
      </div>

      <AIAssistant />
    </div>
  );
};

export default App;
