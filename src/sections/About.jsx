import { useRef, useState, useEffect } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [californiaTime, setCaliforniaTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const californiaTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Los_Angeles" }));
      const timeString = californiaTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short",
      });
      setCaliforniaTime(timeString);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color grid-1 relative flex items-center justify-center px-4 py-8 md:py-12">
          {/* Text Content */}
          <div className="relative z-10 max-w-3xl text-center md:text-left">
            <p className="headtext text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 break-words">
              Hi, I'm Akhil Metlakunta
            </p>
            <p className="subtext mt-4 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-slate-700">
              Data & BI Analyst with 3+ years of experience turning raw datasets into actionable insights for energy, public sector, and SaaS teams. I focus on clean SQL models, governed BI layers, and collaborative delivery that keeps stakeholders informed without noise.
            </p>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 overflow-y-auto max-h-full skills-scrollbar relative">
          <div className="absolute top-4 right-4 z-10 flex flex-col items-center gap-1 text-orange-500 opacity-70 animate-bounce">
            <span className="text-xs font-medium">Scroll</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
          <div className="flex flex-col w-full p-4 sm:p-6">
            <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-900 mb-4">
              Skills
            </p>
            <div className="space-y-4">
              {/* Programming */}
              <div>
                <p className="text-sm font-semibold text-orange-600 mb-2">Programming</p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "NumPy", "Pandas", "Matplotlib", "SQL", "MySQL", "PostgreSQL", "MS SQL Server"].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 text-xs sm:text-sm text-center rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Business Intelligence */}
              <div>
                <p className="text-sm font-semibold text-orange-600 mb-2">Business Intelligence</p>
                <div className="flex flex-wrap gap-2">
                  {["Power BI", "DAX", "Power Query", "Tableau"].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 text-xs sm:text-sm text-center rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* ETL & Data Integration */}
              <div>
                <p className="text-sm font-semibold text-orange-600 mb-2">ETL & Data Integration</p>
                <div className="flex flex-wrap gap-2">
                  {["Alteryx", "Talend", "SSIS", "DBeaver", "ER/Studio"].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 text-xs sm:text-sm text-center rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Machine Learning */}
              <div>
                <p className="text-sm font-semibold text-orange-600 mb-2">Machine Learning</p>
                <div className="flex flex-wrap gap-2">
                  {["Seaborn", "TensorFlow", "Keras", "OpenCV", "SciPy", "Scikit-learn", "PyTorch"].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 text-xs sm:text-sm text-center rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tools & Platforms */}
              <div>
                <p className="text-sm font-semibold text-orange-600 mb-2">Tools & Platforms</p>
                <div className="flex flex-wrap gap-2">
                  {["Git", "AWS", "S3", "EC2", "ServiceNow", "Azure", "Jira", "Excel"].map((skill) => (
                    <div key={skill} className="px-3 py-1.5 text-xs sm:text-sm text-center rounded-full bg-orange-500 text-white font-medium shadow-md hover:bg-orange-600 transition-colors">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3 relative overflow-hidden">
          <div className="relative z-20 w-full h-full flex flex-col justify-center px-6">
            <p className="headtext text-2xl sm:text-3xl mb-2">Time Zone</p>
            <p className="subtext text-base sm:text-lg mb-3">
              San Jose, California
            </p>
            <p className="text-3xl sm:text-4xl font-bold text-orange-500 mb-2">
              {californiaTime || "Loading..."}
            </p>
            <p className="subtext text-sm">
              Open to remote work worldwide
            </p>
          </div>
          <figure className="absolute right-0 top-0 w-1/2 h-full opacity-20 pointer-events-none">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center text-slate-900 headtext">
              Interested in a calm, data-first partnership?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
