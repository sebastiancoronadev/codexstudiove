import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../../i18n/LanguageContext'
import { useInView } from 'react-intersection-observer'

interface Technology { name: string; icon: string; color: string; type: 'code' | 'terminal'; code: string; language: string }

const forcedLightLogos = ['GitHub', 'Flask', 'Three.js', 'Vercel', 'AWS']

const technologiesData: Record<string, Technology[]> = {
  Frontend: [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', color: '#E34F26', type: 'code', language: 'html', code: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Codex Studio</title>\n</head>\n<body>\n  <h1>Dominio de HTML5 Semantico!</h1>\n</body>\n</html>' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', color: '#1572B6', type: 'code', language: 'css', code: 'body {\n  background-color: #000;\n  color: #fff;\n  font-family: "Inter", sans-serif;\n}\n\n.senior-developer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', color: '#F7DF1E', type: 'code', language: 'javascript', code: 'const matchVision = (idea) => {\n  console.log("Transformando " + idea + " en realidad...");\n  return { success: true, quality: "Senior" };\n};\n\nmatchVision("Codex Studio");' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', color: '#61DAFB', type: 'code', language: 'jsx', code: 'import React, { useState } from "react";\n\nexport default function App() {\n  const [seoActive, setSeoActive] = useState(true);\n  return (\n    <div className="p-8 text-center bg-black">\n      <h1>SEO & React Senior App</h1>\n    </div>\n  );\n}' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', color: '#EAEAEA', type: 'terminal', language: 'bash', code: '$ npx create-next-app@latest --typescript --tailwind --app\n\nCreating a next generation Next.js application...\nSelected Tailwind CSS\nConfigured App Router\nSuccessfully initialized SEO structure!' },
    { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', color: '#4FC08D', type: 'code', language: 'javascript', code: 'import { createApp, ref } from "vue";\n\nconst app = createApp({\n  setup() {\n    const title = ref("Vue.js Reactividad de Alto Impacto");\n    return { title };\n  }\n});' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg', color: '#DD0031', type: 'code', language: 'typescript', code: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  template: "<h1>Sistemas Angular Empresariales!</h1>",\n  styleUrls: ["./app.component.css"]\n})\nexport class AppComponent {}' },
    { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', color: '#D4D4D4', type: 'code', language: 'javascript', code: 'import * as THREE from "three";\n\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\n\nconsole.log("3D WebGL Canvas Ready!");' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', color: '#06B6D4', type: 'code', language: 'css', code: '@import "tailwindcss";\n\n@layer utilities {\n  .brand-glow {\n    text-shadow: 0 0 20px rgba(255, 0, 127, 0.8);\n  }\n}' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', color: '#7952B3', type: 'code', language: 'html', code: '<div className="container py-5 text-center">\n  <div className="row justify-content-center">\n    <div className="col-lg-8">\n      <h1>Bootstrap Modernizado</h1>\n    </div>\n  </div>\n</div>' },
  ],
  Backend: [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', color: '#3776AB', type: 'code', language: 'python', code: 'def process_data(payload):\n    print(f"Procesando: {payload}")\n    return {"status": "success"}\n\nprocess_data("SEO Schema Engine")' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', color: '#339933', type: 'code', language: 'javascript', code: 'const express = require("express");\nconst app = express();\n\napp.get("/api/seo", (req, res) => {\n  res.json({ canonical: "https://codexstudiove.com", status: 200 });\n});' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', color: '#777BB4', type: 'code', language: 'php', code: '<?php\n\nnamespace CodexStudio;\n\nclass BackendController {\n    public function index() {\n        return json_encode(["status" => "PHP Moderno"]);\n    }\n}' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg', color: '#007396', type: 'code', language: 'java', code: 'package com.codex;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}' },
    { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg', color: '#059669', type: 'code', language: 'python', code: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/api/v1/health")\nasync def health_check():\n    return {"status": "green"}' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg', color: '#D4D4D4', type: 'code', language: 'python', code: 'from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route("/api/v1/service")\ndef get_service():\n    return jsonify(message="Microservicio modular con Flask")' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg', color: '#092E20', type: 'code', language: 'python', code: 'from django.db import models\n\nclass Project(models.Model):\n    name = models.CharField(max_length=200)\n    created_at = models.DateTimeField(auto_now_add=True)\n    is_premium = models.BooleanField(default=True)' },
  ],
  'Bases de Datos': [
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', color: '#336791', type: 'terminal', language: 'sql', code: `CREATE TABLE seo_records (id SERIAL PRIMARY KEY, url TEXT, indexable BOOLEAN);
INSERT INTO seo_records (url, indexable) VALUES ('https://codexstudiove.com', true);
SELECT * FROM seo_records;` },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', color: '#FFCA28', type: 'terminal', language: 'bash', code: `$ firebase init firestore

Firestore Rules: firestore.rules
Firebase initialization complete!` },
    { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg', color: '#003B57', type: 'code', language: 'sql', code: `-- SQLite Local DB Query
SELECT name, type, tbl_name FROM sqlite_master
WHERE type='table' AND name NOT LIKE 'sqlite_%';
-- Executed successfully in 0.02ms` },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', color: '#47A248', type: 'code', language: 'javascript', code: `db.seo_analytics.aggregate([
  { $match: { clicks: { $gt: 500 } } },
  { $group: { _id: "$keyword", total: { $sum: "$impressions" } } }
]);` },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', color: '#4479A1', type: 'code', language: 'sql', code: `ALTER TABLE users ADD COLUMN premium_token VARCHAR(255) DEFAULT NULL;
UPDATE users SET premium_token = SHA2(UUID(), 256) WHERE active = 1;
SELECT COUNT(*) FROM users;` },
    { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', color: '#3ECF8E', type: 'code', language: 'javascript', code: `import { createClient } from "@supabase/supabase-js";
const supabase = createClient(URL, KEY);
const { data } = await supabase.from("leads").select("*");` },
  ],
  'Cloud y DevOps': [
    { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', color: '#D4D4D4', type: 'terminal', language: 'bash', code: `$ vercel --prod
Deploying to Production...
Ready! https://codexstudiove.com` },
    { name: 'Cloudflare', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg', color: '#F38020', type: 'terminal', language: 'bash', code: `$ wrangler deploy
Uploaded codex-edge-worker
Deployed to Cloudflare Global CDN!` },
    { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#D4D4D4', type: 'terminal', language: 'bash', code: `$ aws s3 cp ./dist s3://codexstudio-assets --recursive
upload: ./dist/assets/index.js
Completed 48 assets.` },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', color: '#2496ED', type: 'code', language: 'dockerfile', code: `FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
RUN npm run build
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html` },
    { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', type: 'code', language: 'yaml', code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: codex-app
spec:
  replicas: 5` },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', color: '#D4D4D4', type: 'terminal', language: 'bash', code: `$ git push origin main
To github.com:sebastiancoronadev/codex-studio.git` },
  ],
  Herramientas: [
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg', color: '#0065A9', type: 'terminal', language: 'bash', code: `$ code . --force-user-env
Opening Workspace: codex-studio
Linting: 0 errors, 0 warnings.` },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', color: '#F24E1E', type: 'code', language: 'javascript', code: `const response = await fetch("https://api.figma.com/v1/images/" + KEY);` },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', color: '#F05032', type: 'terminal', language: 'bash', code: `$ git status
On branch main
Changes to be committed:
  modified: index.html` },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', color: '#FCC624', type: 'terminal', language: 'bash', code: `$ sysctl vm.swappiness=10
$ htop --delay=1
CPU: 42.1%  Mem: 2.42G/7.78G` },
    { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg', color: '#CB3837', type: 'terminal', language: 'bash', code: `$ npm run build
> vite build
156 modules transformed.` },
  ],
  Adicionales: [
    { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg', color: '#009639', type: 'code', language: 'nginx', code: `server { listen 80; server_name www.codexstudiove.com; return 301 https://codexstudiove.com$request_uri; }` },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', color: '#DC382D', type: 'terminal', language: 'bash', code: `127.0.0.1:6379> SETEX cache 300 "data"
OK
127.0.0.1:6379> TTL cache
(integer) 294` },
  ],
}

export default function Specialization() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [selectedTech, setSelectedTech] = useState<string | null>(null)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const typingRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const categories = Object.keys(technologiesData)
  const currentTechs = technologiesData[activeCategory] || []
  const activeTech = currentTechs.find(t => t.name === selectedTech) || null

  useEffect(() => {
    if (activeTech) {
      setIsTyping(true); setDisplayedCode(''); let index = 0; const code = activeTech.code
      if (typingRef.current) clearInterval(typingRef.current)
      typingRef.current = setInterval(() => { if (index < code.length) { setDisplayedCode(code.substring(0, index + 1)); index++ } else { setIsTyping(false); if (typingRef.current) clearInterval(typingRef.current) } }, 15)
      return () => { if (typingRef.current) clearInterval(typingRef.current) }
    }
  }, [activeTech])

  return (
    <section id="specialization" className="relative py-24 bg-[#050505] border-y border-zinc-900 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-[120px]"></div>
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4"><span className="text-gradient">{t('specialization.title')}</span></h2>
          <p className="text-zinc-400 text-lg mb-8">{t('specialization.subtitle')}</p>
          <div className="flex flex-wrap justify-center gap-2 p-2 bg-[#0e0e0e]/90 backdrop-blur-md border border-zinc-800/80 rounded-2xl max-w-3xl mx-auto">
            {categories.map((cat) => (
              <button key={cat} onClick={() => { setActiveCategory(cat); setSelectedTech(null) }} className={`relative px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? 'text-white' : 'text-zinc-500 hover:text-white'}`}>
                {activeCategory === cat && <motion.div layoutId="activeCategory" className="absolute inset-0 bg-gradient-to-r from-brand-pink/20 to-brand-orange/20 border border-brand-pink/30 rounded-xl" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-3 gap-3">
              {currentTechs.map((tech) => {
                const isForcedLight = forcedLightLogos.includes(tech.name)
                const imgFilter = selectedTech === tech.name ? 'none' : isForcedLight ? 'brightness(0) invert(1)' : 'grayscale(1) brightness(1.6)'
                const imgOpacity = selectedTech === tech.name ? 1 : isForcedLight ? 0.85 : 0.65
                return (
                  <motion.button key={tech.name} onClick={() => setSelectedTech(tech.name === selectedTech ? null : tech.name)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className={`relative h-28 md:h-32 rounded-xl transition-all duration-300 ${selectedTech === tech.name ? 'border shadow-lg' : 'border border-transparent hover:border-zinc-600'}`}
                    style={{ borderColor: selectedTech === tech.name ? tech.color : undefined, borderWidth: '1px', boxShadow: selectedTech === tech.name ? `0 0 15px ${tech.color}30` : undefined, backgroundColor: selectedTech === tech.name ? `${tech.color}05` : 'transparent' }}>
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: selectedTech === tech.name ? `${tech.color}10` : '#121212' }}>
                        <img src={tech.icon} alt={tech.name} className="w-7 h-7 transition-all duration-300" style={{ opacity: imgOpacity, filter: imgFilter }} />
                      </div>
                      <span className="text-xs text-zinc-400">{tech.name}</span>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <div className="bg-[#0A0A0A] border border-[#111111] rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-12 bg-[#0A0A0A] border-b border-zinc-900 flex items-center px-4 gap-3">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div><div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div><div className="w-3 h-3 rounded-full bg-[#27C93F]"></div></div>
                {activeTech && <div className="flex items-center gap-2 text-xs text-zinc-500 ml-4"><img src={activeTech.icon} alt="" className="w-4 h-4" /><span>{activeTech.name.toLowerCase()}.{activeTech.language}</span><i className={`fas ${activeTech.type === 'terminal' ? 'fa-terminal' : 'fa-code'} text-xs`}></i></div>}
              </div>
              <div className="flex" style={{ minHeight: '400px' }}>
                <div className="bg-[#090909] border-r border-zinc-900 pr-3 pt-4 select-none">{Array.from({ length: 12 }, (_, i) => (<div key={i} className="text-xs text-zinc-700 font-mono text-right leading-6 px-3">{i + 1}</div>))}</div>
                <div className="flex-1 p-4 overflow-auto"><pre className="text-sm font-mono leading-6"><code style={{ color: activeTech?.type === 'terminal' ? '#34D399' : '#FFD700' }}>{displayedCode}</code>{isTyping && <span className="inline-block w-2 h-5 bg-brand-pink animate-pulse align-middle ml-0.5"></span>}</pre></div>
              </div>
              <div className="h-8 bg-zinc-950 border-t border-zinc-900 flex items-center justify-between px-4 text-xs">
                <div className="flex items-center gap-3 text-zinc-500"><span className="flex items-center gap-1"><i className="fa-brands fa-git-alt text-brand-pink"></i> main*</span></div>
                <div className="flex items-center gap-3 text-zinc-600"><span>UTF-8</span><span>{activeTech?.name || 'React'} Env</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
