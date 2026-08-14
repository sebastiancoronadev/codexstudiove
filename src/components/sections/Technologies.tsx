ï»¿import React, { useState, useEffect } from 'react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../../i18n/LanguageContext';

interface Tech {
  id: string;
  name: string;
  icon: string;
  color: string;
  type: 'code' | 'terminal';
  snippet: string;
}

interface Category {
  id: string;
  title: {
    es: string;
    en: string;
  };
  iconClass: string;
  techs: Tech[];
}

const categories: Category[] = [
  {
    id: 'frontend',
    title: { es: 'Frontend', en: 'Frontend' },
    iconClass: 'fas fa-laptop-code',
    techs: [
      { 
        id: 'html', 
        name: 'HTML5', 
        icon: '/tech-icons/HTML5.svg', 
        color: '#E34F26', 
        type: 'code', 
        snippet: '<!DOCTYPE html>\n<html lang="es">\n<head>\n  <meta charset="UTF-8">\n  <title>Codex Studio</title>\n</head>\n<body>\n  <h1>Â¡Dominio de HTML5 SemÃ¡ntico!</h1>\n</body>\n</html>' 
      },
      { 
        id: 'css', 
        name: 'CSS3', 
        icon: '/tech-icons/CSS3.svg', 
        color: '#1572B6', 
        type: 'code', 
        snippet: 'body {\n  background-color: #000;\n  color: #fff;\n  font-family: "Inter", sans-serif;\n}\n\n.senior-developer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}' 
      },
      { 
        id: 'js', 
        name: 'JavaScript', 
        icon: '/tech-icons/JavaScript.svg', 
        color: '#F7DF1E', 
        type: 'code', 
        snippet: 'const matchVision = (idea) => {\n  console.log(`Transformando ${idea} en realidad...`);\n  return { success: true, quality: "Senior" };\n};\n\nmatchVision("Codex Studio");' 
      },
      { 
        id: 'react', 
        name: 'React', 
        icon: '/tech-icons/React.svg', 
        color: '#61DAFB', 
        type: 'code', 
        snippet: 'import React, { useState } from "react";\n\nexport default function App() {\n  const [seoActive, setSeoActive] = useState(true);\n  return (\n    <div className="p-8 text-center bg-black">\n      <h1 className="text-2xl font-bold">SEO & React Senior App</h1>\n    </div>\n  );\n}' 
      },
      { 
        id: 'nextjs', 
        name: 'Next.js', 
        icon: '/tech-icons/Next.js.svg', 
        color: '#FFFFFF', 
        type: 'terminal', 
        snippet: '$ npx create-next-app@latest --typescript --tailwind --app\n\nCreating a next generation Next.js application...\nâœ“ Selected Tailwind CSS\nâœ“ Configured App Router\nâœ“ Successfully initialized SEO structure!' 
      },
      { 
        id: 'vuejs', 
        name: 'Vue.js', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vuejs/vuejs-original.svg', 
        color: '#4FC08D', 
        type: 'code', 
        snippet: 'import { createApp, ref } from "vue";\n\nconst app = createApp({\n  setup() {\n    const title = ref("Vue.js Reactividad de Alto Impacto");\n    return { title };\n  }\n});' 
      },
      { 
        id: 'angular', 
        name: 'Angular', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/angular/angular-original.svg', 
        color: '#DD0031', 
        type: 'code', 
        snippet: 'import { Component } from "@angular/core";\n\n@Component({\n  selector: "app-root",\n  template: "<h1>Â¡Sistemas Angular Empresariales!</h1>",\n  styleUrls: ["./app.component.css"]\n})\nexport class AppComponent {}' 
      },
      { 
        id: 'threejs', 
        name: 'Three.js', 
        icon: '/tech-icons/Three.js.svg', 
        color: '#FFFFFF', 
        type: 'code', 
        snippet: 'import * as THREE from "three";\n\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer({ antialias: true });\n\nconsole.log("3D WebGL Canvas Ready!");' 
      },
      { 
        id: 'tailwind', 
        name: 'Tailwind CSS', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', 
        color: '#06B6D4', 
        type: 'code', 
        snippet: '@import "tailwindcss";\n\n@layer utilities {\n  .brand-glow {\n    text-shadow: 0 0 20px rgba(255, 0, 127, 0.8);\n  }\n}' 
      },
      { 
        id: 'bootstrap', 
        name: 'Bootstrap', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/bootstrap/bootstrap-original.svg', 
        color: '#7952B3', 
        type: 'code', 
        snippet: '<div className="container py-5 text-center">\n  <div className="row justify-content-center">\n    <div className="col-lg-8">\n      <h1 className="display-4 text-purple">Bootstrap Modernizado</h1>\n    </div>\n  </div>\n</div>' 
      }
    ]
  },
  {
    id: 'backend',
    title: { es: 'Backend', en: 'Backend' },
    iconClass: 'fas fa-server',
    techs: [
      { 
        id: 'python', 
        name: 'Python', 
        icon: '/tech-icons/Python.svg', 
        color: '#3776AB', 
        type: 'code', 
        snippet: 'def process_data(payload):\n    """Procesa peticiones pesadas asÃ­ncronas"""\n    print(f"Procesando: {payload}")\n    return {"status": "success", "performance": "optimal"}\n\nprocess_data("SEO Schema Engine")' 
      },
      { 
        id: 'php', 
        name: 'PHP', 
        icon: '/tech-icons/PHP.svg', 
        color: '#777BB4', 
        type: 'code', 
        snippet: '<?php\n\nnamespace CodexStudio;\n\nclass BackendController {\n    public function index() {\n        return json_encode(["status" => "PHP Moderno & MVC Listo"]);\n    }\n}' 
      },
      { 
        id: 'node', 
        name: 'Node.js', 
        icon: '/tech-icons/Node.js.svg', 
        color: '#339933', 
        type: 'code', 
        snippet: 'const express = require("express");\nconst app = express();\n\napp.get("/api/seo", (req, res) => {\n  res.json({ canonical: "https://www.codexstudiove.com/", status: 200 });\n});' 
      },
      { 
        id: 'java', 
        name: 'Java', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg', 
        color: '#007396', 
        type: 'code', 
        snippet: 'package com.codex;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class Application {\n    public static void main(String[] args) {\n        SpringApplication.run(Application.class, args);\n    }\n}' 
      },
      { 
        id: 'fastapi', 
        name: 'FastAPI', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/fastapi/fastapi-original.svg', 
        color: '#059669', 
        type: 'code', 
        snippet: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/api/v1/health")\nasync def health_check():\n    return {"status": "green", "agent": "Antigravity Active"}' 
      },
      { 
        id: 'flask', 
        name: 'Flask', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/flask/flask-original.svg', 
        color: '#FFFFFF', 
        type: 'code', 
        snippet: 'from flask import Flask, jsonify\napp = Flask(__name__)\n\n@app.route("/api/v1/service")\ndef get_service():\n    return jsonify(message="Microservicio modular con Flask")' 
      },
      { 
        id: 'django', 
        name: 'Django', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/django/django-plain.svg', 
        color: '#092E20', 
        type: 'code', 
        snippet: 'from django.db import models\n\nclass Project(models.Model):\n    name = models.CharField(max_length=200)\n    created_at = models.DateTimeField(auto_now_add=True)\n    is_premium = models.BooleanField(default=True)' 
      }
    ]
  },
  {
    id: 'database',
    title: { es: 'Bases de Datos', en: 'Databases' },
    iconClass: 'fas fa-database',
    techs: [
      { 
        id: 'pg', 
        name: 'PostgreSQL', 
        icon: '/tech-icons/PostgresSQL.svg', 
        color: '#336791', 
        type: 'terminal', 
        snippet: 'postgres=# CREATE TABLE seo_records (id SERIAL PRIMARY KEY, url TEXT, indexable BOOLEAN);\nCREATE TABLE\npostgres=# INSERT INTO seo_records (url, indexable) VALUES (\'https://www.codexstudiove.com/\', true);\nINSERT 0 1\npostgres=# SELECT * FROM seo_records;' 
      },
      { 
        id: 'firebase', 
        name: 'Firebase', 
        icon: '/tech-icons/Firebase.svg', 
        color: '#FFCA28', 
        type: 'terminal', 
        snippet: '$ firebase init firestore\n\n? What file should be used for Firestore Rules? firestore.rules\n? What file should be used for Firestore indexes? firestore.indexes.json\n\nâœ” Firebase initialization complete!' 
      },
      { 
        id: 'sqlite', 
        name: 'SQLite', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/sqlite/sqlite-original.svg', 
        color: '#003B57', 
        type: 'code', 
        snippet: '-- SQLite Local DB Query\nSELECT name, type, tbl_name FROM sqlite_master\nWHERE type=\'table\' AND name NOT LIKE \'sqlite_%\';\n\n-- Executed successfully in 0.02ms' 
      },
      { 
        id: 'mongodb', 
        name: 'MongoDB', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mongodb/mongodb-original.svg', 
        color: '#47A248', 
        type: 'code', 
        snippet: 'db.seo_analytics.aggregate([\n  { $match: { clicks: { $gt: 500 } } },\n  { $group: { _id: "$keyword", totalImpressions: { $sum: "$impressions" } } }\n]);' 
      },
      { 
        id: 'mysql', 
        name: 'MySQL', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg', 
        color: '#4479A1', 
        type: 'code', 
        snippet: 'ALTER TABLE users ADD COLUMN premium_token VARCHAR(255) DEFAULT NULL;\nUPDATE users SET premium_token = SHA2(UUID(), 256) WHERE active = 1;\nSELECT COUNT(*) FROM users;' 
      },
      { 
        id: 'supabase', 
        name: 'Supabase', 
        icon: '/tech-icons/supabase-logo-icon.svg', 
        color: '#3ECF8E', 
        type: 'code', 
        snippet: 'import { createClient } from "@supabase/supabase-js";\n\nconst supabase = createClient(SUPABASE_URL, SUPABASE_KEY);\nconst { data, error } = await supabase\n  .from("leads")\n  .select("*")\n  .eq("converted", true);' 
      }
    ]
  },
  {
    id: 'cloud_devops',
    title: { es: 'Cloud & DevOps', en: 'Cloud & DevOps' },
    iconClass: 'fas fa-cloud',
    techs: [
      { 
        id: 'vercel', 
        name: 'Vercel', 
        icon: '/tech-icons/Vercel.svg', 
        color: '#FFFFFF', 
        type: 'terminal', 
        snippet: '$ vercel --prod\n\n> Deploying codex-studio to Production...\n> Inspect: https://vercel.com/codex/project\n> Ready! https://www.codexstudiove.com [Canonical Configured]' 
      },
      { 
        id: 'cloudflare', 
        name: 'Cloudflare', 
        icon: '/tech-icons/Cloudflare.svg', 
        color: '#F38020', 
        type: 'terminal', 
        snippet: '$ wrangler deploy\n\nUploaded codex-edge-worker (1.25 sec)\nDeployed successfully to Cloudflare Global CDN Edge Networks!\nSSL/TLS Security: Strict.' 
      },
      { 
        id: 'aws', 
        name: 'AWS', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', 
        color: '#FF9900', 
        type: 'terminal', 
        snippet: '$ aws s3 cp ./dist s3://codexstudio-assets --recursive\n\nupload: ./dist/assets/index.js to s3://codexstudio-assets/assets/index.js\nCompleted 48 assets with optimized compression algorithms.' 
      },
      { 
        id: 'gcp', 
        name: 'GCP', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg', 
        color: '#4285F4', 
        type: 'terminal', 
        snippet: '$ gcloud run deploy codex-production --source .\n\nBuilding Container image...\nDeploying revision to Cloud Run...\nâœ” Service [codex-production] has been deployed. Active!' 
      },
      { 
        id: 'azure', 
        name: 'Azure', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/azure/azure-original.svg', 
        color: '#0078D4', 
        type: 'terminal', 
        snippet: '$ az webapp deployment source config-zip --resource-group RG_Codex --name Web_Codex --src dist.zip\n\nUploading zip package...\nDeployment status: Success' 
      },
      { 
        id: 'docker', 
        name: 'Docker', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg', 
        color: '#2496ED', 
        type: 'code', 
        snippet: '# Dockerfile multi-stage production build\nFROM node:18-alpine AS builder\nWORKDIR /app\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=builder /app/dist /usr/share/nginx/html' 
      },
      { 
        id: 'kubernetes', 
        name: 'Kubernetes', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/kubernetes/kubernetes-plain.svg', 
        color: '#326CE5', 
        type: 'code', 
        snippet: 'apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: codex-app\nspec:\n  replicas: 5\n  template:\n    spec:\n      containers:\n      - name: web\n        image: codex:latest' 
      }
    ]
  },
  {
    id: 'tools',
    title: { es: 'Herramientas', en: 'Tools' },
    iconClass: 'fas fa-tools',
    techs: [
      { 
        id: 'vsc', 
        name: 'VS Code', 
        icon: '/tech-icons/VSC.svg', 
        color: '#0065A9', 
        type: 'terminal', 
        snippet: '$ code . --force-user-env\n\n> Opening Workspace: /workspace/codex-studio\n> Launching VS Code Senior IDE Environment...\n> Linting active file system: 0 errors, 0 warnings.' 
      },
      { 
        id: 'figma', 
        name: 'Figma', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/figma/figma-original.svg', 
        color: '#F24E1E', 
        type: 'code', 
        snippet: '// Exportando Frames de Figma vÃ­a API REST\nconst response = await fetch("https://api.figma.com/v1/images/" + FILE_KEY, {\n  headers: { "X-Figma-Token": FIGMA_PERSONAL_TOKEN }\n});\nconst data = await response.json();' 
      },
      { 
        id: 'postman', 
        name: 'Postman', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg', 
        color: '#FF6C37', 
        type: 'code', 
        snippet: '// Tests de AutomatizaciÃ³n de APIs en Postman\npm.test("La respuesta es rÃ¡pida", function () {\n    pm.expect(pm.response.responseTime).to.be.below(150);\n});\npm.test("Header Canonical presente", function () {\n    pm.response.to.have.header("Link");\n});' 
      },
      { 
        id: 'git', 
        name: 'Git', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg', 
        color: '#F05032', 
        type: 'terminal', 
        snippet: '$ git status\nOn branch main\nYour branch is up to date with \'origin/main\'.\n\nChanges to be committed:\n  modified:   index.html\n  modified:   vercel.json\n  modified:   Technologies.tsx' 
      },
      { 
        id: 'github', 
        name: 'GitHub', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/github/github-original.svg', 
        color: '#FFFFFF', 
        type: 'terminal', 
        snippet: '$ git push origin main\n\nEnumerating objects: 12, done.\nCounting objects: 100% (12/12), done.\nDelta compression using up to 16 threads\nTo github.com:sebastiancoronadev/codex-studio.git\n   a4b5d6e..f8e9d0a  main -> main' 
      },
      { 
        id: 'linux', 
        name: 'Linux', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/linux/linux-original.svg', 
        color: '#FCC624', 
        type: 'terminal', 
        snippet: '$ sysctl vm.swappiness=10\n$ htop --delay=1\n\n[CPU  |||||||||||||||||||||||||||||| 42.1%]  Tasks: 128, 452 thr; 1 running\n[Mem  |||||||||||||               2.42G/7.78G]\n[Swp                              0K/2.00G]' 
      },
      { 
        id: 'npm', 
        name: 'npm', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/npm/npm-original-wordmark.svg', 
        color: '#CB3837', 
        type: 'terminal', 
        snippet: '$ npm run build\n\n> codex-studio@2.5.0 build\n> vite build\n\nâœ“ 156 modules transformed.\ndist/index.html                     4.12 kB\ndist/assets/index-b4f7e9da.js    342.15 kB' 
      }
    ]
  },
  {
    id: 'additional_tools',
    title: { es: 'Adicionales', en: 'Additionals' },
    iconClass: 'fas fa-plus-circle',
    techs: [
      { 
        id: 'nginx', 
        name: 'Nginx', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/nginx/nginx-original.svg', 
        color: '#009639', 
        type: 'code', 
        snippet: 'server {\n    listen 80;\n    server_name www.codexstudiove.com;\n    return 301 https://codexstudiove.com$request_uri;\n}\n\n# RedirecciÃ³n canÃ³nica perfecta y segura configurada.' 
      },
      { 
        id: 'redis', 
        name: 'Redis', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/redis/redis-original.svg', 
        color: '#DC382D', 
        type: 'terminal', 
        snippet: '127.0.0.1:6379> SETEX homepage_cache 300 "{\"html\": \"...\"}"\nOK\n127.0.0.1:6379> TTL homepage_cache\n(integer) 294\n127.0.0.1:6379> GET homepage_cache' 
      },
      { 
        id: 'rabbitmq', 
        name: 'RabbitMQ', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/rabbitmq/rabbitmq-original.svg', 
        color: '#FF6600', 
        type: 'code', 
        snippet: '# Publicando mensaje en la cola de tareas\nchannel.basic_publish(\n    exchange=\'\',\n    routing_key=\'seo_recrawl\',\n    body=\'{"url": "https://www.codexstudiove.com/"}\',\n    properties=pika.BasicProperties(delivery_mode=2)\n)' 
      },
      { 
        id: 'selenium', 
        name: 'Selenium', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/selenium/selenium-original.svg', 
        color: '#43B02A', 
        type: 'code', 
        snippet: 'from selenium import webdriver\nfrom selenium.webdriver.common.by import By\n\ndriver = webdriver.Chrome()\ndriver.get("https://www.codexstudiove.com")\nheading = driver.find_element(By.TAG_NAME, "h1")\nprint(f"H1 Encontrado: {heading.text}")' 
      },
      { 
        id: 'jenkins', 
        name: 'Jenkins', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/jenkins/jenkins-original.svg', 
        color: '#D24939', 
        type: 'code', 
        snippet: 'pipeline {\n    agent any\n    stages {\n        stage(\'Audit\') {\n            steps {\n                sh \'npm run lint && npm run test\'\n            }\n        }\n    }\n}' 
      },
      { 
        id: 'grafana', 
        name: 'Grafana', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/grafana/grafana-original.svg', 
        color: '#F46036', 
        type: 'code', 
        snippet: '# Grafana Dashboard Config\n{\n  "datasource": "Prometheus",\n  "fieldConfig": {\n    "defaults": {\n      "custom": { "showPoints": "auto" },\n      "unit": "ms"\n    }\n  }\n}' 
      },
      { 
        id: 'prometheus', 
        name: 'Prometheus', 
        icon: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/prometheus/prometheus-original.svg', 
        color: '#E6522C', 
        type: 'code', 
        snippet: '# ConfiguraciÃ³n de rastreo de objetivos\nscrape_configs:\n  - job_name: \'codex-backend\'\n    scrape_interval: 10s\n    static_configs:\n      - targets: [\'localhost:3000\']' 
      }
    ]
  }
];

const Typewriter = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    if (!isActive) return;
    
    setDisplayedText('');
    let i = 0;
    
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 15);
    
    return () => clearInterval(interval);
  }, [text, isActive]);

  return <>{displayedText}</>;
};

export default function Technologies() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [activeTech, setActiveTech] = useState<Tech>(categories[0].techs[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    setIsTyping(false);
    const timeout = setTimeout(() => setIsTyping(true), 50);
    return () => clearTimeout(timeout);
  }, [activeTech]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    const category = categories.find(c => c.id === catId);
    if (category && category.techs.length > 0) {
      setActiveTech(category.techs[0]);
    }
  };

  const lang = language === 'es' ? 'es' : 'en';
  const currentCategory = categories.find(c => c.id === activeCategory) || categories[0];

  // Helper function to check if icon is black in dark backgrounds and should be white
  const isBlackBrandedLogo = (id: string) => {
    return ['nextjs', 'flask', 'github', 'vercel'].includes(id);
  };

  return (
    <section id="technologies" className="py-20 md:py-28 bg-[#050505] border-t border-gray-900 border-b relative overflow-visible">
      {/* Decorative ambient backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-brand-pink/5 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-brand-orange/5 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 overflow-visible">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans text-white tracking-tight">
            {t('tech.title') || (lang === 'es' ? 'EspecializaciÃ³n' : 'Specialization')}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            {t('tech.desc') || (lang === 'es' ? 'Habilidades de nivel Senior respaldadas por aÃ±os de experiencia.' : 'Senior-level skills backed by years of hands-on experience.')}
          </p>
        </motion.div>

        {/* Responsive Navigation Category Bar with wrap on mobile */}
        <div className="mb-12 flex justify-center w-full overflow-visible relative">
          <div className="relative w-full md:w-auto flex justify-center overflow-visible">
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-1.5 md:gap-2 p-1 md:p-1.5 bg-[#0e0e0e]/90 backdrop-blur-md border border-zinc-800/80 rounded-2xl max-w-full">
              {categories.map((category) => {
                const isActive = activeCategory === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`relative px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-medium text-xs md:text-sm transition-all duration-300 flex items-center gap-1.5 md:gap-2 whitespace-nowrap cursor-pointer z-10 ${
                      isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-brand-pink/20 to-brand-orange/20 border border-brand-pink/30 z-[-1]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <i className={`${category.iconClass} text-xs ${isActive ? 'text-brand-pink' : 'text-zinc-500'}`}></i>
                    <span>{category.title[lang]}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start overflow-visible">
          
          {/* Tech Grid Column (Left) */}
          <div className="lg:col-span-2 space-y-6 overflow-visible">
            <div className="space-y-4 overflow-visible">
              <div className="flex items-center justify-between border-b border-zinc-900 pb-2">
                <h3 className="text-sm font-semibold tracking-wider text-gray-500 uppercase">
                  {lang === 'es' ? `Stack de ${currentCategory.title[lang]}` : `${currentCategory.title[lang]} Stack`}
                </h3>
                <span className="text-xs text-brand-pink font-mono font-medium">
                  {lang === 'es' ? `${currentCategory.techs.length} tecnologÃ­as` : `${currentCategory.techs.length} technologies`}
                </span>
              </div>

              {/* Grid of icons with responsive column sizes and perfect overflow behavior */}
              <div className="overflow-visible min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategory}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 gap-x-4 xs:gap-x-5 sm:gap-x-6 gap-y-6 p-1 overflow-visible justify-items-center"
                  >
                    {currentCategory.techs.map((tech) => {
                      const isSelected = activeTech.id === tech.id;
                      const isHovered = hoveredId === tech.id;
                      const isBlackBrand = isBlackBrandedLogo(tech.id);
                      const isWhiteBrand = tech.id === 'vercel';

                      // Smart filter formula: Inverts colored icons first to turn primary color into high-contrast white-ish and original white details dark, preserving negative space
                      const filterValue = isWhiteBrand
                        ? 'none'
                        : (isSelected || isHovered
                          ? (isBlackBrand ? 'brightness(0) invert(1)' : 'none')
                          : (isBlackBrand ? 'brightness(0) invert(1)' : 'invert(1) grayscale(1) brightness(1.6) contrast(1.2)'));

                      return (
                        <div 
                          key={tech.id}
                          onClick={() => setActiveTech(tech)}
                          className="group relative flex flex-col items-center justify-center cursor-pointer overflow-visible w-full h-28 xs:h-30 sm:h-32 rounded-2xl transition-all duration-300 z-10 select-none p-3 xs:p-3.5 sm:p-4"
                          style={{ 
                            backgroundColor: isHovered 
                              ? `${tech.color}08` 
                              : isSelected 
                                ? `${tech.color}05` 
                                : 'transparent',
                          }}
                          onMouseEnter={() => setHoveredId(tech.id)}
                          onMouseLeave={() => setHoveredId(null)}
                        >
                          {/* Snug outer cylindrical ring wrapping the whole card, expanded 0.5px outwards (1px total inset) */}
                          <div 
                            className="absolute -inset-[1px] rounded-2xl border transition-all duration-300 pointer-events-none"
                            style={{ 
                              borderColor: isHovered || isSelected ? tech.color : 'rgba(255, 255, 255, 0.08)',
                              boxShadow: isSelected ? `0 0 15px ${tech.color}30` : 'none',
                              borderWidth: '1px'
                            }}
                          ></div>

                          {/* Inner circle - surrounding ONLY the logo */}
                          <div 
                            className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10 border transition-all duration-300 shrink-0"
                            style={{ 
                              borderColor: isHovered || isSelected ? tech.color : 'rgba(255, 255, 255, 0.08)',
                              backgroundColor: isHovered 
                                ? `${tech.color}15` 
                                : isSelected 
                                  ? `${tech.color}10` 
                                  : '#121212',
                              boxShadow: isSelected ? `0 0 15px ${tech.color}25` : 'none'
                            }}
                          >
                            {/* Technology Icon container - slightly more compact for better visual balance */}
                            <div 
                              className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-all duration-300 ${
                                tech.id === 'vercel' ? 'p-0.5' : ''
                              }`}
                            >
                              <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-full h-full object-contain transition-all duration-300"
                                style={{
                                  filter: filterValue,
                                  opacity: isSelected || isHovered ? 1 : 0.65,
                                }}
                              />
                            </div>
                          </div>

                          {/* Text label inside the card */}
                          <span className="mt-2 text-[9px] xs:text-[10px] sm:text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors text-center leading-tight whitespace-normal max-w-full h-5 flex items-center justify-center px-0.5 z-10 select-none">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Interactive Code/Terminal Preview Panel (Right Column) with fixed circular border-radius container */}
          <div className="lg:col-span-3 h-full min-h-[420px] lg:sticky lg:top-24 overflow-visible">
             <motion.div 
               key={activeTech.id}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="w-full h-full rounded-2xl bg-[#0A0A0A] border border-gray-800 shadow-2xl overflow-hidden flex flex-col hover:border-zinc-700/80 transition-colors duration-300 shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)]"
             >
               {/* Terminal / Editor Header with top rounded borders */}
               <div className="h-12 bg-[#121212] border-b border-gray-800 flex items-center px-4 justify-between rounded-t-2xl overflow-hidden shrink-0">
                 <div className="flex items-center gap-2 overflow-visible">
                   <div className="flex gap-1.5 shrink-0">
                     <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                     <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                   </div>
                   <div className="ml-4 flex items-center gap-2 text-gray-400 text-xs font-mono select-none overflow-hidden truncate">
                      <i className={activeTech.type === 'code' ? 'fas fa-code text-[#FF007F] shrink-0' : 'fas fa-terminal text-[#FF6B00] shrink-0'}></i>
                      <span className="flex items-center gap-1.5 truncate">
                        {activeTech.name.toLowerCase().replace(/\s+/g, '')}.
                        {activeTech.type === 'code' 
                          ? (activeTech.id === 'python' || activeTech.id === 'fastapi' || activeTech.id === 'flask' || activeTech.id === 'django' ? 'py' : activeTech.id === 'php' ? 'php' : activeTech.id === 'css' || activeTech.id === 'tailwind' ? 'css' : activeTech.id === 'html' ? 'html' : activeTech.id === 'java' ? 'java' : 'js') 
                          : 'sh'}
                      </span>
                   </div>
                 </div>
                 
                 {/* Mini logo inside editor header */}
                 <div className="flex items-center gap-2 shrink-0 overflow-visible">
                   <div className="w-5 h-5 flex items-center justify-center overflow-visible">
                     <img 
                       src={activeTech.icon} 
                       alt={activeTech.name} 
                       className="w-4 h-4 object-contain"
                       style={{
                         filter: isBlackBrandedLogo(activeTech.id) || activeTech.color === '#FFFFFF' ? 'brightness(0) invert(1)' : 'none'
                       }}
                     />
                   </div>
                   <div className="text-[10px] text-zinc-600 font-mono tracking-wider uppercase hidden sm:block select-none">
                     {lang === 'es' ? `EDITOR DE ${activeTech.type.toUpperCase()}` : `${activeTech.type.toUpperCase()} EDITOR`}
                   </div>
                 </div>
               </div>

               {/* Editor Content with Typewriter */}
               <div className="flex-1 p-6 relative font-mono text-sm sm:text-base selection:bg-brand-pink/20 overflow-auto min-h-[300px] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:bg-zinc-800 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                 {activeTech.type === 'code' && (
                   <div className="absolute left-0 top-0 bottom-0 w-12 bg-[#090909] border-r border-zinc-900 py-6 flex flex-col items-end pr-3 text-zinc-700 select-none text-xs">
                     {[...Array(12)].map((_, i) => <span key={i} className="leading-[1.625rem]">{i+1}</span>)}
                   </div>
                 )}
                 
                 <div className={`${activeTech.type === 'code' ? 'pl-10' : ''}`}>
                   <pre className={`${activeTech.type === 'code' ? 'text-[#FFD700]' : 'text-emerald-400'} whitespace-pre-wrap leading-relaxed font-medium`}>
                     <Typewriter text={activeTech.snippet} isActive={isTyping} />
                     <span className="inline-block w-[2px] h-4 sm:h-5 ml-1 bg-brand-pink align-middle animate-pulse"></span>
                   </pre>
                 </div>
               </div>

               {/* VSCode-style Statusbar with bottom rounded borders */}
               <div className="h-8 bg-zinc-950 px-4 flex items-center justify-between text-[10px] sm:text-xs text-zinc-500 font-mono border-t border-zinc-900 rounded-b-2xl select-none shrink-0 overflow-hidden">
                 <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                   <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer shrink-0">
                     <i className="fas fa-code-branch text-brand-pink text-[11px] sm:text-xs"></i> 
                     <span className="font-medium">main*</span>
                   </span>
                   <span className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer shrink-0">
                     <i className="fas fa-sync-alt animate-spin-slow text-[11px] sm:text-xs"></i> 
                     <span className="font-medium">{lang === 'es' ? 'sincronizado' : 'synced'}</span>
                   </span>
                 </div>
                 <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                   <span className="hidden xs:inline shrink-0 text-zinc-600">UTF-8</span>
                   <span className="text-zinc-300 font-medium truncate max-w-[80px] xs:max-w-[120px] sm:max-w-none">
                     {lang === 'es' ? activeTech.name : `${activeTech.name} Env`}
                   </span>
                 </div>
               </div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
