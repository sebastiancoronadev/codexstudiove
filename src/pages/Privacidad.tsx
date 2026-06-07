import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

export default function Privacidad() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (language === 'en') {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
        <SEO title="Privacy Policy | Codex" description="Privacy policy and data protection for Codex web development services." lang="en" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">Privacy Policy</h1>
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section><h2 className="text-2xl font-bold text-white mb-4">1. General Information</h2><p>At Codex, customer privacy is a priority. This policy details how we collect, use, and protect your personal information.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 Provided Information</h3><p>Includes name, email, phone, and project details entered in our contact form.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 Automatic Information</h3><p>We may collect basic data like IP address, browser type, and browsing behavior on our site.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2><p>We use your information to answer inquiries, send quotes, develop projects, and improve our services.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">4. Sharing Information</h2><p>We do not sell, rent, or share your personal information with third parties. We may only disclose it if required by law.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.1 Measures</h3><p>We implement industry-standard security measures to protect your data against unauthorized access.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.2 Retention</h3><p>We retain active project information for at least 2 years and billing data for 5 years.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2><p>You have the right to request access, rectification, or deletion of your data. Contact us to exercise these rights.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">7. Cookies and Tracking</h2><p>We use cookies to improve browsing experience. You can disable them in your browser settings.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">8. Links to Third-Parties</h2><p>Our website may contain links to external sites. We are not responsible for their privacy practices.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">9. Policy Changes</h2><p>We reserve the right to update this privacy policy at any time. We recommend reviewing this page periodically.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2><p>Email: codex.studio.ve@gmail.com</p></section>
        </div>
        <div className="mt-16 text-center"><Link to={language === 'es' ? '/' : `/${language}`} className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">Back to Web</Link></div>
      </div>
    );
  }

  if (language === 'zh') {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
        <SEO title="隐私政策 | Codex" description="Codex Web 开发服务的隐私政策和数据保护。" lang="zh" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">隐私政策</h1>
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section><h2 className="text-2xl font-bold text-white mb-4">1. 一般信息</h2><p>在 Codex，客户隐私是优先事项。本政策详细说明了我们如何收集、使用和保护您的个人信息。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">2. 我们收集的信息</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 提供的信息</h3><p>包括在我们的联系表中输入的姓名、电子邮件、电话和项目详细信息。</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 自动信息</h3><p>我们可能会收集我们在网站上的 IP 地址、浏览器类型和浏览行为等基本数据。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">3. 信息的利用</h2><p>我们利用您的信息来回答查询、发送报价、开发项目和改善我们的服务。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">4. 共享信息</h2><p>我们不会向第三方出售、出租或共享您的个人信息。我们可能仅在法律要求时披露。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">5. 数据安全</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.1 措施</h3><p>我们实施行业标准的安全措施以保护您的数据免受未经授权的访问。</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.2 保留</h3><p>我们将保留活动项目信息至少 2 年，计费数据保存 5 年。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">6. 你的权利</h2><p>您有权要求访问、纠正或删除您的个人数据。请联系我们以行使这些权利。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">7. Cookie 和跟踪</h2><p>我们使用 cookie 来改善浏览体验。您可以在浏览器设置中禁用它们。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">8. 第三方链接</h2><p>我们的网站可能包含指向外部站点的链接。我们不对他们的隐私惯例负责。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">9. 政策变更</h2><p>我们保留随时更新此隐私政策的权利。我们建议定期查看此页面。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">10. 联系我们</h2><p>Email: codex.studio.ve@gmail.com</p></section>
        </div>
        <div className="mt-16 text-center"><Link to={language === 'es' ? '/' : `/${language}`} className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">返回主页</Link></div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
      <SEO title="Política de Privacidad | Codex" description="Política de privacidad y protección de datos de los servicios de desarrollo web Codex." lang="es" />
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">Política de Privacidad</h1>
      
      <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Información General</h2>
          <p>En Codex, la privacidad de nuestros clientes es una prioridad. Esta política detalla cómo recopilamos, usamos y protegemos su información personal.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Información que Recopilamos</h2>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 Información Proporcionada</h3>
          <p>Incluye nombre, correo electrónico, teléfono y detalles del proyecto ingresados en nuestro formulario de contacto.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 Información Automática</h3>
          <p>Podemos recopilar datos básicos como dirección IP, tipo de navegador y comportamiento de navegación en nuestra web.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Uso de la Información</h2>
          <p>Utilizamos su información para responder consultas, enviar presupuestos, desarrollar proyectos y mejorar nuestros servicios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Compartición de Información</h2>
          <p>No vendemos, alquilamos ni compartimos su información personal con terceros. Solo podemos revelarla si es requerido por la ley.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Seguridad de los Datos</h2>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.1 Medidas</h3>
          <p>Implementamos medidas de seguridad estándar de la industria para proteger sus datos contra acceso no autorizado, alteración o destrucción.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">5.2 Retención</h3>
          <p>Conservamos la información de proyectos activos durante al menos 2 años y los datos de facturación por 5 años, según normativas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Tus Derechos</h2>
          <p>Usted tiene derecho a solicitar acceso, rectificación o supresión de sus datos personales. Puede contactarnos para ejercer estos derechos.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Cookies y Tecnologías</h2>
          <p>Utilizamos cookies para mejorar la experiencia de navegación. Puede desactivarlas desde la configuración de su navegador.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Enlaces a Sitios de Terceros</h2>
          <p>Nuestra web puede contener enlaces a sitios externos. No somos responsables por las prácticas de privacidad de dichos sitios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Cambios a esta Política</h2>
          <p>Podemos actualizar esta política ocasionalmente. Todos los cambios entrarán en vigencia al publicarse en esta página.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Contacto</h2>
          <p>Para preguntas sobre privacidad: codex.studio.ve@gmail.com</p>
        </section>
      </div>

      <div className="mt-16 text-center">
        <Link to={language === 'es' ? '/' : `/${language}`} className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">
          Volver a la Web
        </Link>
      </div>
    </div>
  );
}
