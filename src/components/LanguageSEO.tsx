ï»¿import React from 'react';
import React from 'react';
import SEO from './SEO';
import { useLanguage } from '../i18n/LanguageContext';

export default function LanguageSEO() {
  const { language } = useLanguage();

  const seoData = {
    es: {
      title: 'SebastiÃ¡n Corona | Programador Full Stack Valencia Venezuela',
      description: 'Programador Full Stack en Valencia, Venezuela con 5+ aÃ±os de experiencia. Especialista en React, Node.js, Three.js. +100 proyectos completados. Disponible para trabajar remoto en Chile, Argentina, Colombia, MÃ©xico, EspaÃ±a y USA.',
      keywords: 'programador full stack valencia venezuela, desarrollador web valencia, programador venezolano, full stack developer venezuela, react developer valencia, Codex Studio',
    },
    en: {
      title: 'SebastiÃ¡n Corona | Full Stack Programmer | Web Developer | Codex Studio',
      description: 'Full Stack Programmer based in Valencia, Venezuela. Expert in React, Node.js, Three.js and 3D experiences. 5+ years of experience, 100+ completed projects.',
      keywords: 'full stack programmer, web developer, react developer, node.js developer, venezuela programmer',
    },
    zh: {
      title: 'å¡žå·´æ–¯è’‚å®‰Â·ç§‘ç½—çº³ | å…¨æ ˆç¨‹åºå‘˜ | ç“¦ä¼¦è¥¿äºšå§”å†…ç‘žæ‹‰',
      description: 'å§”å†…ç‘žæ‹‰ç“¦ä¼¦è¥¿äºšçš„å…¨æ ˆç¨‹åºå‘˜ã€‚Reactã€Node.jsã€Three.jsä¸“å®¶ã€‚5å¹´ä»¥ä¸Šç»éªŒï¼Œ100å¤šä¸ªå·²å®Œæˆé¡¹ç›®ã€‚å¯è¿œç¨‹å·¥ä½œã€‚',
      keywords: 'å…¨æ ˆç¨‹åºå‘˜, ç½‘é¡µå¼€å‘, Reactå¼€å‘, Valenciaç¨‹åºå‘˜, å§”å†…ç‘žæ‹‰ç¨‹åºå‘˜, Codex Studio',
    },
    ja: {
      title: 'ã‚»ãƒã‚¹ãƒ†ã‚£ã‚¢ãƒ³ãƒ»ã‚³ãƒ­ãƒŠ | ãƒ•ãƒ«ã‚¹ã‚¿ãƒƒã‚¯ãƒ—ãƒ­ã‚°ãƒ©ãƒžãƒ¼ | Webé–‹ç™ºè€… | Codex',
      description: 'ãƒ™ãƒã‚ºã‚¨ãƒ©ãƒ»ãƒãƒ¬ãƒ³ã‚·ã‚¢ã‚’æ‹ ç‚¹ã¨ã™ã‚‹ãƒ•ãƒ«ã‚¹ã‚¿ãƒƒã‚¯ãƒ—ãƒ­ã‚°ãƒ©ãƒžãƒ¼ã€‚Reactã€Node.jsã€Three.jsã€3D Webé–‹ç™ºã®ã‚¨ã‚­ã‚¹ãƒ‘ãƒ¼ãƒˆã€‚5å¹´ä»¥ä¸Šã®å®Ÿå‹™çµŒé¨“ã€100ä»¶ä»¥ä¸Šã®ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆå®Ÿç¸¾ã€‚',
      keywords: 'ãƒ•ãƒ«ã‚¹ã‚¿ãƒƒã‚¯ãƒ—ãƒ­ã‚°ãƒ©ãƒžãƒ¼, Webé–‹ç™ºè€…, Reacté–‹ç™ºè€…, Node.jsãƒ‡ãƒ™ãƒ­ãƒƒãƒ‘ãƒ¼, ãƒ™ãƒã‚ºã‚¨ãƒ© ãƒ—ãƒ­ã‚°ãƒ©ãƒžãƒ¼, Codex Studio, ã‚»ãƒã‚¹ãƒãƒ£ãƒ³ãƒ»ã‚³ãƒ­ãƒŠ',
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
