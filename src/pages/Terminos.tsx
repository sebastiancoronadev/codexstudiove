import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../i18n/LanguageContext';
import SEO from '../components/SEO';

export default function Terminos() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (language === 'en') {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
        <SEO title="Terms and Conditions | Codex" description="Terms and conditions for Codex web development services." lang="en" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">Terms and Conditions</h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section><h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2><p>By accessing and using Codex services, you agree to be bound by these terms and conditions. If you do not agree, please do not use our services.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">2. Hiring Process</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 Request</h3><p>Every project starts with a formal request through our form or direct contact.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 Budget</h3><p>A detailed budget will be provided, valid for 14 days from issuance.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.3 Payment</h3><p>A 50% upfront payment is required to start, and the remaining 50% upon delivery. Payments are exclusively in USD.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.1 Client Rights</h3><p>Once full payment is completed, the client obtains usage rights for the final product. For web projects, source code is delivered under license.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.2 Codex Rights</h3><p>Codex reserves the right to display the project in its portfolio unless an NDA is signed.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">4. Deadlines and Delivery</h2><p>Delivery times are estimated. The exact deadline is defined in the initial budget. The client must provide required materials on time.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">5. Review and Modifications</h2><p>The client has 14 days to review the final product. Included:</p><ul className="list-disc pl-6 mt-2 space-y-1"><li>2 revisions for Web projects</li><li>1 revision for Video projects</li><li>1 revision for Server setups</li></ul><p className="mt-2">Structural modifications outside initial scope are billed separately.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">6. Cancellation and Refunds</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">6.1 By Client</h3><p>If canceled, the 50% initial deposit is non-refundable for work already executed.</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">6.2 By Codex</h3><p>If Codex cannot deliver the product, the full paid amount will be refunded.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">7. Specific Services</h2><p>Responsibilities associated with services are limited to what was agreed; we are not responsible for third-party downtimes or misuse.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2><p>In no event shall we be liable for indirect damages, data loss, or lost profits related to the use of our services.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">9. Privacy and Data</h2><p>We handle client information confidentially. Details in Privacy Policy.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">10. Modifications</h2><p>We reserve the right to modify these terms without prior notice.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">11. Governing Law</h2><p>Interpreted according to the laws of the Bolivarian Republic of Venezuela.</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">12. Contact</h2><p>Email: codex.studio.ve@gmail.com<br/>Discord: sebmaster09</p></section>
        </div>
        <div className="mt-16 text-center"><Link to={language === 'es' ? '/' : `/${language}`} className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">Back to Web</Link></div>
      </div>
    );
  }

  if (language === 'zh') {
    return (
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
        <SEO title="条款和条件 | Codex" description="Codex Web 开发服务的条款和条件。" lang="zh" />
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">条款和条件</h1>
        <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
          <section><h2 className="text-2xl font-bold text-white mb-4">1. 接受条款</h2><p>访问和使用 Codex 服务即表示您同意受这些条款和条件的约束。如果您不同意，请勿使用我们的服务。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">2. 签约流程</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 请求</h3><p>每个项目都始于通过我们的表格或直接联系提出的正式请求。</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 预算</h3><p>将提供详细预算，自发布起 14 天内有效。</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.3 付款</h3><p>开始前需要支付 50% 预付款，交付时支付剩余 50%。仅接受美元付款。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">3. 知识产权</h2><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.1 客户权利</h3><p>全额付款后，客户获得最终产品的使用权。网络项目的源代码根据许可证交付。</p><h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.2 Codex 权利</h3><p>除非签署了 NDA，否则 Codex 保留将项目作为成功案例展示的权利。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">4. 期限和交付</h2><p>交货时间是估计的。确切期限在初始预算中定义。客户必须按时提供所需材料。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">5. 审查和修改</h2><p>客户有 14 天时间审查最终产品。包括：</p><ul className="list-disc pl-6 mt-2 space-y-1"><li>网页项目的 2 次修改</li><li>视频项目的 1 次修改</li><li>服务器设置的 1 次修改</li></ul><p className="mt-2">初始范围之外的结构修改将另行计费。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">6. 取消和退款</h2><p>如果取消，对于已经执行的工作，50% 的初始押金不予退还。如果 Codex 无法交付，将全额退还。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">7. 特定服务</h2><p>服务的责任仅限于约定的范围；我们不对第三方停机或误用负责。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">8. 责任限制</h2><p>在任何情况下，我们均不对与使用我们服务相关的间接损害、数据丢失或利润损失负责。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">9. 隐私和数据</h2><p>我们对客户信息保密。详情见隐私政策。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">10. 条款修改</h2><p>我们保留修改这些条款的权利，恕不另行通知。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">11. 适用法律</h2><p>根据委内瑞拉玻利瓦尔共和国法律解释。</p></section>
          <section><h2 className="text-2xl font-bold text-white mb-4">12. 联系方式</h2><p>Email: codex.studio.ve@gmail.com<br/>Discord: sebmaster09</p></section>
        </div>
        <div className="mt-16 text-center"><Link to={language === 'es' ? '/' : `/${language}`} className="inline-block px-8 py-3 bg-[#FF007F] text-white font-bold rounded-lg hover:shadow-[0_0_20px_rgba(255,0,127,0.6)] transition-all hover:-translate-y-1 cursor-pointer">返回主页</Link></div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 md:px-8">
      <SEO title="Términos y Condiciones | Codex" description="Términos y condiciones para los servicios de desarrollo web de Codex." lang="es" />
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#FF007F]">Términos y Condiciones</h1>
      
      <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar los servicios de Codex, usted acepta estar sujeto a estos términos y condiciones. Si no está de acuerdo, por favor no utilice nuestros servicios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Proceso de Contratación</h2>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.1 Solicitud</h3>
          <p>Todo proyecto inicia con una solicitud formal a través de nuestro formulario o contacto directo.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.2 Presupuesto</h3>
          <p>Se entregará un presupuesto detallado que tendrá una validez de 14 días desde su emisión.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">2.3 Pago</h3>
          <p>Se requiere un pago del 50% por adelantado para iniciar y el 50% restante a la entrega. Los pagos se realizan exclusivamente en USD.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Propiedad Intelectual</h2>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.1 Derechos del Cliente</h3>
          <p>Una vez completado el pago total, el cliente obtiene los derechos de uso del producto final. En proyectos web, el código fuente se entrega bajo licencia, permitiendo su uso exclusivo para el proyecto especificado.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">3.2 Derechos de Codex</h3>
          <p>Codex se reserva el derecho de mostrar el proyecto en su portafolio como caso de éxito, a menos que se firme un acuerdo de confidencialidad (NDA).</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Plazos y Entrega</h2>
          <p>Los tiempos de entrega son estimados y varían según la complejidad. El plazo exacto se define en el presupuesto inicial. El cliente debe proporcionar el material requerido a tiempo para no retrasar el desarrollo.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">5. Revisión y Modificaciones</h2>
          <p>El cliente cuenta con 14 días para revisar el producto final. Se incluyen:</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>2 revisiones para proyectos Web</li>
            <li>1 revisión para proyectos de Video</li>
            <li>1 revisión para configuración de Servidores</li>
          </ul>
          <p className="mt-2">Modificaciones estructurales fuera del alcance inicial se cobrarán por separado.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">6. Cancelación y Reembolsos</h2>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">6.1 Por parte del Cliente</h3>
          <p>Si el cliente cancela, el depósito inicial (50%) no es retornable por el trabajo ya ejecutado.</p>
          <h3 className="text-xl font-semibold text-[#FF0000] mb-2 mt-4">6.2 Por parte de Codex</h3>
          <p>Si Codex no puede entregar el producto, se reembolsará el dinero pagado en su totalidad.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">7. Servicios Específicos</h2>
          <p>Las responsabilidades asociadas a servicios (Web, Video, Discord, Minecraft) están limitadas a lo acordado; no nos hacemos cargo de caídas de terceros ni uso indebido.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">8. Limitación de Responsabilidad</h2>
          <p>En ningún caso seremos responsables por daños indirectos, pérdida de datos o lucro cesante relacionados con el uso de nuestros servicios.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">9. Privacidad y Datos</h2>
          <p>Manejamos la información del cliente con confidencialidad. Los detalles están disponibles en nuestra Política de Privacidad.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">10. Modificaciones a los Términos</h2>
          <p>Nos reservamos el derecho de modificar estos términos sin previo aviso. Los proyectos activos mantendrán los términos vigentes al momento de la firma.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">11. Ley Aplicable y Jurisdicción</h2>
          <p>Estos términos se interpretarán según las leyes de la República Bolivariana de Venezuela.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">12. Contacto</h2>
          <p>Email: codex.studio.ve@gmail.com<br/>Discord: sebmaster09</p>
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
