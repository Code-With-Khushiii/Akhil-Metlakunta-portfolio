[1mdiff --git a/src/components/HeroText.jsx b/src/components/HeroText.jsx[m
[1mindex 59b3a45..34af5d7 100644[m
[1m--- a/src/components/HeroText.jsx[m
[1m+++ b/src/components/HeroText.jsx[m
[36m@@ -8,11 +8,11 @@[m [mconst HeroText = () => {[m
     visible: { opacity: 1, x: 0 },[m
   };[m
   return ([m
[31m-    <div className="z-10 text-center rounded-3xl bg-clip-text">[m
[32m+[m[32m    <div className="z-10 text-center rounded-3xl bg-clip-text text-slate-900">[m
       {/* Desktop View */}[m
       <div className="flex-col hidden md:flex items-center">[m
         <motion.h1[m
[31m-          className="text-4xl font-medium text-gold"[m
[32m+[m[32m          className="text-3xl font-medium text-slate-500"[m
           variants={variants}[m
           initial="hidden"[m
           animate="visible"[m
[36m@@ -22,7 +22,7 @@[m [mconst HeroText = () => {[m
         </motion.h1>[m
         <div className="flex flex-col items-center">[m
           <motion.p[m
[31m-            className="text-5xl font-medium text-white text-center"[m
[32m+[m[32m            className="text-5xl font-semibold text-slate-900 text-center"[m
             variants={variants}[m
             initial="hidden"[m
             animate="visible"[m
[36m@@ -37,13 +37,10 @@[m [mconst HeroText = () => {[m
             animate="visible"[m
             transition={{ delay: 1.5 }}[m
           >[m
[31m-            <FlipWords[m
[31m-              words={words}[m
[31m-              className="font-black text-gold text-8xl"[m
[31m-            />[m
[32m+[m[32m            <FlipWords words={words} className="font-semibold text-slate-700 text-6xl" />[m
           </motion.div>[m
           <motion.p[m
[31m-            className="text-4xl font-medium text-white text-center"[m
[32m+[m[32m            className="text-2xl font-medium text-slate-600 text-center"[m
             variants={variants}[m
             initial="hidden"[m
             animate="visible"[m
[36m@@ -54,9 +51,9 @@[m [mconst HeroText = () => {[m
         </div>[m
       </div>[m
       {/* Mobile View */}[m
[31m-      <div className="flex flex-col space-y-6 md:hidden items-center">[m
[32m+[m[32m      <div className="flex flex-col space-y-6 md:hidden items-center text-slate-900">[m
         <motion.p[m
[31m-          className="text-4xl font-medium text-gold"[m
[32m+[m[32m          className="text-3xl font-medium text-slate-600"[m
           variants={variants}[m
           initial="hidden"[m
           animate="visible"[m
[36m@@ -66,7 +63,7 @@[m [mconst HeroText = () => {[m
         </motion.p>[m
         <div className="text-center">[m
           <motion.p[m
[31m-            className="text-5xl font-black text-white"[m
[32m+[m[32m            className="text-4xl font-semibold text-slate-900"[m
             variants={variants}[m
             initial="hidden"[m
             animate="visible"[m
[36m@@ -80,13 +77,10 @@[m [mconst HeroText = () => {[m
             animate="visible"[m
             transition={{ delay: 1.5 }}[m
           >[m
[31m-            <FlipWords[m
[31m-              words={words}[m
[31m-              className="font-bold text-gold text-7xl"[m
[31m-            />[m
[32m+[m[32m            <FlipWords words={words} className="font-semibold text-slate-700 text-5xl" />[m
           </motion.div>[m
           <motion.p[m
[31m-            className="text-4xl font-black text-white"[m
[32m+[m[32m            className="text-3xl font-semibold text-slate-600"[m
             variants={variants}[m
             initial="hidden"[m
             animate="visible"[m
