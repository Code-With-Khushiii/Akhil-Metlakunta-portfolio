import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";

const HeroText = () => {
  const words = ["SQL", "Python", "Power BI", "Tableau", "ETL"];
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="z-10 text-center rounded-3xl bg-clip-text text-slate-900">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex items-center space-y-4">
        <motion.h1
          className="text-2xl font-light text-slate-600"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hello, I'm
        </motion.h1>
        <motion.h2
          className="text-6xl font-bold text-slate-900"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Akhil Metlakunta
        </motion.h2>
        <motion.div
          className="flex items-center gap-3"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="text-2xl font-medium text-slate-700">I build</span>
          <FlipWords
            words={words}
            className="font-bold text-orange-500 text-4xl"
          />
        </motion.div>
        <motion.p
          className="text-xl font-normal text-slate-600 max-w-2xl mt-4"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Data & BI Analyst transforming complex datasets into actionable insights
        </motion.p>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden items-center text-slate-900">
        <motion.h1
          className="text-xl font-light text-slate-600"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Hello, I'm
        </motion.h1>
        <motion.h2
          className="text-4xl font-bold text-slate-900"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Akhil Metlakunta
        </motion.h2>
        <motion.div
          className="flex flex-col items-center gap-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <span className="text-xl font-medium text-slate-700">I build</span>
          <FlipWords
            words={words}
            className="font-bold text-orange-500 text-3xl"
          />
        </motion.div>
        <motion.p
          className="text-base font-normal text-slate-600 text-center px-4 mt-2"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          Data & BI Analyst transforming complex datasets into actionable insights
        </motion.p>
      </div>
    </div>
  );
};

export default HeroText;
