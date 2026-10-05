import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
      
      <div className="relative z-10 text-center">
        <h1 className="font-space text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400 mb-4">
          404
        </h1>
        <p className="font-outfit text-xl text-white/50 mb-8">
          Módulo no encontrado. La ruta solicitada no existe.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-pink-600 to-orange-500 text-white font-outfit font-bold hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-300"
        >
          <i className="bi bi-arrow-left" />
          Volver al Inicio
        </Link>
      </div>
    </main>
  );
}
