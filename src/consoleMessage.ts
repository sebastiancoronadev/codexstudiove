const consoleMessages: Record<string, string> = {
  es: '👀 ¿Qué haces aquí en la consola? ¡Eres curioso! 😄 - Codex Studio',
  en: '👀 What are you doing in the console? You are curious! 😄 - Codex Studio',
  zh: '👀 你在控制台做什么？你很好奇！😄 - Codex Studio',
  ja: '👀 コンソールで何してるの？好奇心旺盛だね！😄 - Codex Studio',
}

const lang = document.documentElement.lang || 'es'
console.log(consoleMessages[lang] || consoleMessages.es)
