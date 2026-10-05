export interface Tech {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "cloud" | "tools";
  customColor?: string;
}

export const techCategories = {
  frontend: { label: "Frontend", icon: "bi-window-stack", color: "pink" },
  backend: { label: "Backend", icon: "bi-server", color: "orange" },
  database: { label: "Bases de Datos", icon: "bi-database", color: "rose" },
  cloud: { label: "Cloud & DevOps", icon: "bi-cloud", color: "purple" },
  tools: { label: "Herramientas", icon: "bi-tools", color: "amber" },
} as const;

export const technologies: Tech[] = [
  // Frontend
  { name: "HTML5", icon: "devicon-html5-plain colored", category: "frontend" },
  { name: "CSS3", icon: "devicon-css3-plain colored", category: "frontend" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored", category: "frontend" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored", category: "frontend" },
  { name: "React", icon: "devicon-react-original colored", category: "frontend" },
  { name: "Next.js", icon: "devicon-nextjs-plain", category: "frontend" },
  { name: "Vue.js", icon: "devicon-vuejs-plain colored", category: "frontend" },
  { name: "Angular", icon: "devicon-angular-plain colored", category: "frontend" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored", category: "frontend" },
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored", category: "frontend" },

  // Backend
  { name: "Python", icon: "devicon-python-plain colored", category: "backend" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored", category: "backend" },
  { name: "Flask", icon: "devicon-flask-original", category: "backend" },
  { name: "Django", icon: "devicon-django-plain colored", category: "backend" },
  { name: "PHP", icon: "devicon-php-plain colored", category: "backend" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored", category: "backend" },
  { name: "Java", icon: "devicon-java-plain colored", category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored", category: "database" },
  { name: "Firebase", icon: "devicon-firebase-plain colored", category: "database" },
  { name: "SQLite", icon: "devicon-sqlite-plain colored", category: "database" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored", category: "database" },
  { name: "MySQL", icon: "devicon-mysql-plain colored", category: "database" },
  { name: "Supabase", icon: "devicon-supabase-plain colored", category: "database" },

  // Cloud & DevOps
  { name: "Vercel", icon: "devicon-vercel-original", category: "cloud", customColor: "#ffffff" },
  { name: "Cloudflare", icon: "devicon-cloudflare-plain colored", category: "cloud" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored", category: "cloud" },
  { name: "GCP", icon: "devicon-googlecloud-plain colored", category: "cloud" },
  { name: "Azure", icon: "devicon-azure-plain colored", category: "cloud" },
  { name: "Docker", icon: "devicon-docker-plain colored", category: "cloud" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored", category: "cloud" },

  // Tools
  { name: "VS Code", icon: "devicon-vscode-plain colored", category: "tools" },
  { name: "Three.js", icon: "devicon-threejs-original", category: "tools", customColor: "#ffffff" },
  { name: "Figma", icon: "devicon-figma-plain colored", category: "tools" },
  { name: "Postman", icon: "devicon-postman-plain colored", category: "tools" },
  { name: "Git", icon: "devicon-git-plain colored", category: "tools" },
  { name: "GitHub", icon: "devicon-github-original", category: "tools", customColor: "#ffffff" },
  { name: "Linux", icon: "devicon-linux-plain", category: "tools", customColor: "#ffffff" },
  { name: "npm", icon: "devicon-npm-original-wordmark colored", category: "tools" },
  { name: "Nginx", icon: "devicon-nginx-original colored", category: "tools" },
  { name: "Redis", icon: "devicon-redis-plain colored", category: "tools" },
  { name: "RabbitMQ", icon: "devicon-rabbitmq-original colored", category: "tools" },
  { name: "Selenium", icon: "devicon-selenium-original colored", category: "tools" },
  { name: "Jenkins", icon: "devicon-jenkins-line", category: "tools", customColor: "#ffffff" },
  { name: "Grafana", icon: "devicon-grafana-plain colored", category: "tools" },
  { name: "Prometheus", icon: "devicon-prometheus-original colored", category: "tools" },
];