# Script de instalación y build para Codex Studio VE
Write-Host "Instalando dependencias..." -ForegroundColor Cyan
npm install

Write-Host "Ejecutando build de producción..." -ForegroundColor Cyan
npm run build

Write-Host "Build completado exitosamente." -ForegroundColor Green
Write-Host "Para iniciar en desarrollo: npm run dev" -ForegroundColor Yellow
Write-Host "Para iniciar en producción: npm start" -ForegroundColor Yellow
