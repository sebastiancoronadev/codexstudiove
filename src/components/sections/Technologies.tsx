import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

const techs = [
  { id: 'html', name: 'HTML5', file: 'HTML5.svg', color: '#E34F26', type: 'code', 
    snippet: '<!DOCTYPE html>\\n<html>\\n<head>\\n  <title>Codex</title>\\n</head>\\n<body>\\n  <h1>Dominamos HTML5!</h1>\\n</body>\\n</html>' },
  { id: 'css', name: 'CSS3', file: 'CSS3.svg', color: '#1572B6', type: 'code', 
    snippet: 'body {\\n  background-color: #000;\\n  color: #fff;\\n  font-family: "Space Grotesk";\\n}\\n\\n.senior-dev {\\n  display: flex;\\n  align-items: center;\\n}' },
  { id: 'js', name: 'JavaScript', file: 'JavaScript.svg', color: '#F7DF1E', type: 'code', 
    snippet: 'const dominamosJS = () => {\\n  console.log("¡JavaScript a nivel Senior!");\\n  return true;\\n};\\n\\ndominamosJS();' },
  { id: 'react', name: 'React', file: 'React.svg', color: '#61DAFB', type: 'code', 
    snippet: 'import React from "react";\\n\\nexport default function App() {\\n  return (\\n    <h1 className="text-blue-400">\\n      ¡Expertos en React y Hooks!\\n    </h1>\\n  );\\n}' },
  { id: 'python', name: 'Python', file: 'Python.svg', color: '#3776AB', type: 'code', 
    snippet: 'def hola_mundo():\\n    print("¡Hola, dominamos Python!")\\n    return "Senior backend ready"\\n\\nhola_mundo()' },
  { id: 'php', name: 'PHP', file: 'PHP.svg', color: '#777BB4', type: 'code', 
    snippet: '<?php\\n\\nclass Backend {\\n    public function dominaPHP() {\\n        echo "¡Claro que dominamos PHP!";\\n    }\\n}\\n\\n$dev = new Backend();\\n$dev->dominaPHP();' },
  { id: 'node', name: 'Node.js', file: 'Node.js.svg', color: '#339933', type: 'code', 
    snippet: 'const express = require("express");\\nconst app = express();\\n\\napp.get("/", (req, res) => {\\n  res.send("¡Node.js API lista y escalable!");\\n});' },
  { id: 'pg', name: 'PostgreSQL', file: 'PostgresSQL.svg', color: '#336791', type: 'terminal', 
    snippet: 'postgres=# CREATE DATABASE codexdb;\\nCREATE DATABASE\\npostgres=# \\c codexdb\\nYou are now connected to database "codexdb".\\ncodexdb=# SELECT * FROM developers WHERE is_senior = true;\\n(1 row returned)' },
  { id: 'firebase', name: 'Firebase', file: 'Firebase.svg', color: '#FFCA28', type: 'terminal', 
    snippet: "$ firebase deploy --only hosting\\n\\n=== Deploying to 'codex-app'...\\n\\ni  hosting: preparing public directory for upload...\\n✔  hosting: upload complete\\n\\n✔  Deploy complete!" },
  { id: 'vercel', name: 'Vercel', file: 'Vercel.svg', color: '#FFFFFF', type: 'terminal', 
    snippet: '$ vercel deploy --prod\\n\\nVercel CLI 32.0.0\\n> Building project...\\n> Deployment complete! (2450ms)\\n> Ready at https://codex-app.vercel.app' },
  { id: 'cloudflare', name: 'Cloudflare', file: 'Cloudflare.svg', color: '#F38020', type: 'terminal', 
    snippet: '$ wrangler publish\\n\\n> Published codex-worker (10.2 sec)\\n> https://codex.workers.dev\\n> Successfully deployed edge network routing.' },
  { id: 'vsc', name: 'VS Code', file: 'VSC.svg', color: '#0065A9', type: 'terminal', 
    snippet: '$ code .\\n> Opening workspace...\\n> Extensions loaded: ESLint, Prettier, GitLens.\\n> Ready to code like a senior.' }
];

const Typewriter = ({ text, isActive }: { text: string, isActive: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!isActive) return;
    
    setDisplayedText('');
    let i = 0;
    
    // Quick typing effect
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 20); // ms per char
    
    return () => clearInterval(interval);
  }, [text, isActive]);

  return <>{displayedText}</>;
};

export default function Technologies() {
  const { t } = useLanguage();
  const [activeTech, setActiveTech] = useState(techs[0]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Retrigger typewriter when tech changes
    setIsTyping(false);
    const timeout = setTimeout(() => setIsTyping(true), 50);
    return () => clearTimeout(timeout);
  }, [activeTech]);

  return (
    <section id="technologies" className="py-24 bg-[#050505] border-t border-gray-900 border-b relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-white">
            {t('tech.title') || 'Especialización'}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-sans">
            {t('tech.desc') || 'Habilidades de nivel Senior respaldadas por años de experiencia.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Tech Grid */}
          <div className="lg:col-span-2 grid grid-cols-3 sm:grid-cols-4 gap-6 content-start">
            {techs.map((tech) => (
              <motion.div 
                key={tech.id}
                whileHover={{ scale: 1.1 }}
                onClick={() => setActiveTech(tech)}
                className={`group relative flex flex-col items-center justify-center cursor-pointer p-2`}
              >
                {/* Outer animated ring */}
                <div 
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-300 transform scale-75 opacity-0 group-hover:scale-110 group-hover:opacity-100`}
                  style={{ borderColor: tech.color }}
                ></div>
                
                {/* Selection ring when clicked active */}
                <div 
                  className={`absolute inset-0 rounded-full border-2 transition-all duration-300 ${activeTech.id === tech.id ? 'scale-110 opacity-100' : 'scale-50 opacity-0'}`}
                  style={{ borderColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
                ></div>

                <div 
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#111] flex items-center justify-center z-10 border border-white/10 group-hover:border-transparent transition-colors p-3"
                  style={{ boxShadow: activeTech.id === tech.id ? `0 0 15px ${tech.color}40` : 'none' }}
                >
                  <img 
                    src={`/tech-icons/${tech.file}`} 
                    alt={tech.name} 
                    className={`w-full h-full object-contain transition-all duration-300 ${tech.id === 'js' ? 'scale-[0.85]' : ''} ${tech.id === 'vercel' ? '-translate-y-[3px] sm:-translate-y-[9px]' : ''} ${activeTech.id === tech.id ? (tech.id === 'vercel' ? 'brightness-100 opacity-100' : 'grayscale-0') : (tech.id === 'vercel' ? 'brightness-[0.4] opacity-80 group-hover:brightness-100 group-hover:opacity-100' : 'grayscale group-hover:grayscale-0')}`}
                  />
                </div>
                <span className="mt-3 text-xs sm:text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Code/Terminal Preview */}
          <div className="lg:col-span-3 h-full min-h-[400px]">
             <motion.div 
               key={activeTech.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="w-full h-full rounded-2xl bg-[#0A0A0A] border border-gray-800 shadow-2xl overflow-hidden flex flex-col"
             >
               {/* Terminal / Editor Header */}
               <div className="h-12 bg-[#121212] border-b border-gray-800 flex items-center px-4 gap-2">
                 <div className="flex gap-2">
                   <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                   <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                 </div>
                 <div className="ml-4 flex items-center gap-2 text-gray-400 text-xs font-tech">
                    <i className={activeTech.type === 'code' ? 'fas fa-code text-[#FF6B00]' : 'fas fa-terminal text-[#00FF00]'}></i>
                    {activeTech.name.toLowerCase()}.{activeTech.type === 'code' ? (activeTech.id === 'python' ? 'py' : activeTech.id === 'php' ? 'php' : activeTech.id === 'css' ? 'css' : activeTech.id === 'html' ? 'html' : 'js') : 'sh'}
                 </div>
               </div>

               {/* Editor Content */}
               <div className="flex-1 p-6 relative font-tech text-sm sm:text-base selection:bg-brand-orange/30 overflow-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-gray-700/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                 {/* Line numbers for code type */}
                 {activeTech.type === 'code' && (
                   <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#0d0d0d] border-r border-gray-800 py-6 flex flex-col items-end pr-3 text-gray-600 select-none">
                     {[...Array(12)].map((_, i) => <span key={i}>{i+1}</span>)}
                   </div>
                 )}
                 
                 <div className={`${activeTech.type === 'code' ? 'pl-10' : ''}`}>
                   <pre className={`${activeTech.type === 'code' ? 'text-blue-300' : 'text-gray-300'} whitespace-pre-wrap leading-relaxed`}>
                     <Typewriter text={activeTech.snippet} isActive={isTyping} />
                     <span className="inline-block w-2 sm:w-2.5 h-4 sm:h-5 ml-1 bg-white animate-pulse translate-y-1"></span>
                   </pre>
                 </div>
               </div>

               {/* StatusBar */}
               <div className="h-8 bg-[#007acc] px-4 flex items-center justify-between text-white text-xs font-tech">
                 <div className="flex gap-4">
                   <span className="flex items-center gap-1"><i className="fas fa-code-branch"></i> main</span>
                   <span className="flex items-center gap-1"><i className="fas fa-sync-alt"></i></span>
                 </div>
                 <div className="flex gap-4">
                   <span>UTF-8</span>
                   <span className="text-white/80">{activeTech.name} Space</span>
                 </div>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
