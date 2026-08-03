import React from 'react';
import SEO from './SEO';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSEO() {
  const { language } = useLanguage();

  const seoData = {
    es: {
      title: 'Sebastián Corona | Programador Full Stack Valencia Venezuela',
      description: 'Programador Full Stack en Valencia, Venezuela con 5+ años de experiencia. Especialista en React, Node.js, Three.js. +100 proyectos completados. Disponible para trabajar remoto en Chile, Argentina, Colombia, México, España y USA.',
      keywords: 'programador full stack valencia venezuela, desarrollador web valencia, programador venezolano, full stack developer venezuela, react developer valencia, Codex Studio',
    },
    en: {
      title: 'Sebastián Corona | Full Stack Programmer | Web Developer | Codex Studio',
      description: 'Full Stack Programmer based in Valencia, Venezuela. Expert in React, Node.js, Three.js and 3D experiences. 5+ years of experience, 100+ completed projects.',
      keywords: 'full stack programmer, web developer, react developer, node.js developer, venezuela programmer',
    },
    zh: {
      title: '塞巴斯蒂安·科罗纳 | 全栈程序员 | 瓦伦西亚委内瑞拉',
      description: '委内瑞拉瓦伦西亚的全栈程序员。React、Node.js、Three.js专家。5年以上经验，100多个已完成项目。可远程工作。',
      keywords: '全栈程序员, 网页开发, React开发, Valencia程序员, 委内瑞拉程序员, Codex Studio',
    },
    ja: {
      title: 'セバスティアン・コロナ | フルスタックプログラマー | Web開発者 | Codex',
      description: 'ベネズエラ・バレンシアを拠点とするフルスタックプログラマー。React、Node.js、Three.js、3D Web開発のエキスパート。5年以上の実務経験、100件以上のプロジェクト実績。',
      keywords: 'フルスタックプログラマー, Web開発者, React開発者, Node.jsデベロッパー, ベネズエラ プログラマー, Codex Studio, セバスチャン・コロナ',
    }
  };

  const data = seoData[language as keyof typeof seoData] || seoData.es;

  return (
    <SEO 
      title={data.title}
      description={data.description}
      keywords={data.keywords}
      lang={language}
    />
  );
}
