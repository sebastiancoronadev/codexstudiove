"use client";
import { useState, useEffect } from "react";

interface Section {
  title: string;
  paragraphs: string[];
}

interface LegalContentProps {
  type: "terms" | "privacy" | "conditions";
}

const LANG_KEY = "codex_lang";

export function LegalContent({ type }: LegalContentProps) {
  const [lang, setLang] = useState<"es" | "en" | "zh">("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const readLang = () => {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored && ["es", "en", "zh"].includes(stored)) {
        setLang(stored as "es" | "en" | "zh");
      }
    };
    readLang();
    setMounted(true);

    // Escuchar cambios de localStorage desde otras pestañas
    const handleStorage = (e: StorageEvent) => {
      if (e.key === LANG_KEY || e.key === null) readLang();
    };
    window.addEventListener("storage", handleStorage);

    // Polling cada 500ms por si el idioma cambia en la misma pestaña
    const interval = setInterval(readLang, 500);

    return () => {
      window.removeEventListener("storage", handleStorage);
      clearInterval(interval);
    };
  }, []);

  const t = (es: string, en: string, zh: string): string => {
    if (!mounted) return es;
    if (lang === "en") return en;
    if (lang === "zh") return zh;
    return es;
  };

  const getContent = () => {
    const isEN = mounted && lang === "en";

    if (type === "terms") {
      if (isEN) {
        return {
          title: "Terms and Conditions",
          subtitle: "General Terms and Conditions for Digital Services",
          warning: "IMPORTANT NOTICE: By requesting, contracting, paying, accepting a quote, giving verbal or written instruction, or using any service offered by this agency, you declare to have read, understood and fully accepted, voluntarily and informed, these Terms and Conditions. If you do not agree with any of the clauses contained herein, you must refrain from contracting our services.",
          sections: [
            { title: "1. Identification of the Agency", paragraphs: ["1.1. 'The Agency', 'we', 'our' or 'the company' shall be understood as the entity providing specialized digital services, including programming, software development, video editing, digital audiovisual production, administration and configuration of Minecraft servers, hosting, technical maintenance, automation, digital design, integrations, technology consulting and any other digital service offered directly or indirectly.", "1.2. The Agency has a solid trajectory, verifiable experience and established work methodologies.", "1.3. Any official communication, quote, contract, invoice, instruction or service acceptance shall be considered an integral part of these Terms and Conditions."] },
            { title: "2. Acceptance of the Terms", paragraphs: ["2.1. Acceptance may occur through: express written acceptance, email, digital form, message, chat or electronic signature; total or partial payment of any service; request for quote followed by verbal or written approval; delivery of materials, files, accesses, credentials or instructions; use or receipt of any deliverable, product, code, file, configuration or service.", "2.2. Upon occurrence of any of the above scenarios, the client is legally and contractually bound by these Terms, even if not fully read.", "2.3. The client acknowledges that these Terms prevail over any verbal agreement, promise, expectation, custom, prior conversation or personal interpretation, unless a specific signed contract states otherwise expressly."] },
            { title: "3. Services Offered", paragraphs: ["3.1. The Agency may offer: programming and software development, websites, applications, bots, scripts, plugins, custom systems and technical solutions; video editing, post-production, color correction, montage, subtitling, animation, motion graphics, sound design and export in digital formats; configuration, administration, maintenance, optimization and support of Minecraft servers; hosting, domains, infrastructure, networks, databases and technical maintenance services; graphic design, visual identity, digital resources, multimedia content and promotional materials; consulting, advisory, auditing, automation, integration and technological support; any other digital service the Agency decides to offer in the future.", "3.2. The description of services, scope, times, deliverables and particular conditions will be detailed in each quote, proposal or specific agreement.", "3.3. The Agency reserves the right to reject, cancel, pause or discontinue any project or service without justification, especially if it detects legal, technical, reputational, operational, security, abuse, fraud, breach or misuse risk."] },
            { title: "4. Quotes, Prices and Payments", paragraphs: ["4.1. All quotes are personalized, valid for the indicated period and subject to availability, complexity, scope and technical conditions.", "4.2. The Agency's prices are firm, fair and based on experience, quality, trajectory and professional standards. WE DO NOT LOWER PRICES, DO NOT NEGOTIATE UNAUTHORIZED DISCOUNTS, DO NOT COMPETE ON PRICE, NOR ACCEPT COUNTEROFFERS INTENDING TO REDUCE THE VALUE OF THE WORK.", "4.3. The client accepts that any attempt at haggling, pressure, comparison with third parties, requesting discounts, threatening to go to another provider or commercial manipulation will not be accepted and may lead to immediate cancellation of the commercial relationship.", "4.4. Unless expressly agreed in writing, a minimum deposit of 50% is required to start any project. The remaining balance must be paid before final delivery, publication, deployment, delivery of credentials, file transfer or going into production.", "4.5. Payments may be made via the methods the Agency provides. The client is responsible for covering commissions, taxes, withholdings, bank charges, exchange differences or any additional cost derived from the transaction.", "4.6. Failure to pay, partial payment, rejected payment, chargeback, dispute, reversal or fraud empowers the Agency to immediately suspend service, withhold deliverables, block access, cancel the project and claim amounts owed through corresponding legal channels.", "4.7. No work begins without deposit. No final work is delivered without full payment. No source files, credentials, repositories, backups, accesses or configurations are released until the account is fully settled."] },
            { title: "5. No Refunds Policy", paragraphs: ["5.1. ALL PAYMENTS MADE ARE FINAL AND NON-REFUNDABLE. THERE ARE NO RETURNS, REFUNDS, CHARGEBACKS, COMPENSATIONS OR CREDITS FOR SERVICES ALREADY STARTED, IN PROGRESS OR DELIVERED.", "5.2. The client accepts that time, knowledge, work, resources, licenses, infrastructure, man-hours and technical effort invested cannot be reverted or recovered, and expressly waives requesting total or partial refunds.", "5.3. If the client cancels an already-started project, the deposit and any additional payment remain with the Agency as compensation for work done, schedule reservation, committed resources and lost opportunity.", "5.4. If the client abandons the project, does not respond, does not deliver materials, does not approve stages, does not pay balances or breaches obligations, the project may be declared abandoned. In that case, no refund, pending files not delivered, and the Agency may reuse, archive or delete the material at its discretion.", "5.5. Only in the case of a verifiable, serious error attributable exclusively to the Agency, a technical correction, adjustment or reasonable compensation may be evaluated, always at the Agency's discretion and without implying a monetary refund."] },
            { title: "6. Deadlines, Deliveries and Delays", paragraphs: ["6.1. Deadlines are estimates and depend on internal and external factors, including client availability, delivery of materials, approvals, scope changes, technical complexity, third parties, providers, platforms, servers, APIs, licenses, force majeure and causes beyond the Agency's control.", "6.2. The Agency does not guarantee exact dates unless a written delivery agreement with fixed date and specific conditions exists. Even so, delays due to external causes, force majeure or client breach do not generate liability, penalty, discount or refund.", "6.3. The client acknowledges that digital projects may suffer changes, unforeseen events, incompatibilities, third-party errors, platform updates, service outages, technical restrictions or external decisions affecting times and results.", "6.4. The Agency is not responsible for delays caused by lack of client response, constant instruction changes, absence of materials, payment delays, late approvals or third-party interference."] },
            { title: "7. Client Responsibility and Use of Work", paragraphs: ["7.1. The client is the sole and exclusive responsible party for the use, destination, implementation, exploitation, commercialization, dissemination, modification, distribution and consequences of any work, product, code, file, video, server, configuration or service delivered by the Agency.", "7.2. THE AGENCY IS NOT RESPONSIBLE, UNDER ANY CIRCUMSTANCE, FOR THE MISUSE, IMPROPER USE, ILLEGAL USE, ABUSIVE USE, FRAUDULENT USE, UNAUTHORIZED USE OR USE CONTRARY TO LAW THAT THE CLIENT OR THIRD PARTIES MAKE OF THE DELIVERED WORK.", "7.3. It is expressly prohibited to use our services for: illegal, criminal, fraudulent, deceptive or unlawful activities; infringement of copyrights, trademarks, patents, licenses or third-party intellectual property; distribution of malware, viruses, spyware, phishing, scams, malicious content or hacking activities; harassment, threats, discrimination, violence, exploitation, abuse, illegal sexual content or any act harming people or groups; manipulation of minors, grooming, child abuse content or any related activity; money laundering, tax evasion, illegal financing, terrorism or regulated activities without authorization; spam, advertising fraud, platform manipulation, evasion of security systems or breach of third-party terms; any activity that may damage the reputation, operation, infrastructure or legality of the Agency.", "7.4. The client shall indemnify, defend and hold harmless the Agency, its partners, employees, collaborators, providers and representatives against any claim, demand, complaint, fine, sanction, loss, damage, cost, legal fees or consequence derived from the client's use of our services.", "7.5. The Agency shall not be responsible for: loss of data, files, configurations, backups, accounts, accesses or information; crashes, hacks, attacks, breaches, leaks or security incidents occurring on servers, platforms or third-party services; sanctions, blocks, suspensions, bans, penalties or measures taken by Minecraft, Mojang, Microsoft, YouTube, Meta, Google, Discord, hosting, providers or any external platform; direct, indirect, incidental, special, consequential damages, lost profits, loss of opportunities, loss of customers, loss of reputation or moral damage; differences in interpretation, expectations not agreed in writing, personal tastes, changes of opinion or client subjectivity; errors caused by false, incomplete, late or incorrect information provided by the client; use of outdated, insecure or incompatible versions, plugins, mods, libraries, dependencies or software."] },
            { title: "8. Intellectual Property and Deliverables", paragraphs: ["8.1. Unless expressly agreed in writing, the Agency retains ownership of its methods, processes, templates, frameworks, libraries, internal tools, base code, reusable resources and prior knowledge.", "8.2. The client will receive the rights of use of the final deliverable once 100% of the project is paid. This does not imply transfer of intellectual property over internal tools, third-party components, licenses, plugins, libraries or resources belonging to their respective owners.", "8.3. The Agency may show the work in its portfolio, networks, website, presentations or promotional material, unless the client requests confidentiality in writing before starting the project.", "8.4. The client guarantees that all materials, files, images, videos, music, texts, logos, trademarks, data or content delivered to the Agency are their property or they have the necessary licenses, permissions and authorizations."] },
            { title: "9. Minors", paragraphs: ["9.1. The Agency may commercialize, provide services or interact with minors only under supervision, authorization and responsibility of their parents, guardians or legal representatives.", "9.2. If a minor requests, contracts, pays or uses our services, it will be understood that they have authorization from their parents or guardians.", "9.3. The parent, mother, guardian or legal representative who authorizes the service will assume total responsibility for payment, use of the service, legal, technical, economic or reputational consequences, and any damage, claim or breach derived.", "9.4. The Agency reserves the right to reject, cancel or suspend services to minors if it detects lack of supervision, risk, misuse, breach or any situation it considers inappropriate.", "9.5. The use of our services for activities involving exploitation, abuse, manipulation or harm to minors is strictly prohibited. Any indication will be reported to the corresponding authorities and the relationship cancelled immediately without refund."] },
            { title: "10. Confidentiality", paragraphs: ["10.1. The Agency will treat the client's confidential information with reasonable discretion. However, it is not responsible for leaks, unauthorized access, hacks, errors, third-party negligence, platform failures or incidents outside its control.", "10.2. The client accepts that the Agency may keep backup copies, records, conversations, files and documentation for operational, legal, accounting or security reasons.", "10.3. The confidentiality obligation does not apply when information is public, required by law, court order, competent authority or necessary for legal defense."] },
            { title: "11. Support, Maintenance and Warranty", paragraphs: ["11.1. Unless expressly agreed in writing, all service includes only the quoted scope. It does not include unlimited support, permanent maintenance, future changes, updates, corrections due to misuse, third-party modifications or continuous assistance.", "11.2. Any support, maintenance, update, correction, change or subsequent assistance will be quoted and charged independently.", "11.3. The Agency does not guarantee that services will be uninterrupted, error-free, compatible with all systems, secure against all attacks or suitable for all imaginable uses.", "11.4. The client accepts that digital services depend on changing external factors and that no absolute warranty is possible."] },
            { title: "12. Cancellations, Pauses and Abandonment", paragraphs: ["12.1. The client may request pause or cancellation, but this does not generate refund of payments made.", "12.2. If the client pauses a project for more than 30 days without prior agreement, the Agency may consider the project abandoned, close the file and not guarantee resumption under the same conditions.", "12.3. If the client does not respond within 15 business days to approval, material or decision requests, the project may be paused, rescheduled or cancelled without liability for the Agency.", "12.4. The Agency may cancel any project if it detects breach, non-payment, misuse, legal risk, abusive behavior, threats, defamation, extortion attempt, aggressive haggling or any inappropriate conduct."] },
            { title: "13. Prohibition of Haggling and Commercial Pressure", paragraphs: ["13.1. The client accepts that the Agency's prices are non-negotiable. Haggling, blackmail, derogatory comparisons, threats of bad reviews, public pressure, defamation, manipulation attempts or requests for 'friend price', 'volume discount not agreed', 'free work in exchange for exposure' or similar are not accepted.", "13.2. Any attempt to obtain discounts, rebates, favors, free services, unpaid extensions or non-quoted benefits may result in immediate cancellation of the commercial relationship, without refund and with possible legal action if applicable."] },
            { title: "14. Limitation of Liability", paragraphs: ["14.1. The total liability of the Agency is limited to the amount effectively paid by the client for the specific service that gave rise to the claim.", "14.2. The Agency shall not be liable for indirect, incidental, special, punitive, exemplary, consequential damages, lost profits, loss of data, loss of opportunities, reputational damage, moral damage, legal costs, fines or sanctions.", "14.3. The client expressly waives the right to claim indemnities greater than the amount paid, as well as class actions, mass claims or actions derived from expectations not agreed in writing."] },
            { title: "15. Indemnification", paragraphs: ["15.1. The client agrees to indemnify, defend and hold harmless the Agency, its directors, partners, employees, contractors, collaborators, providers and representatives against any claim, demand, lawsuit, complaint, fine, sanction, loss, cost, legal fees or damage derived from: client or third-party use of the services, content, data, files or materials provided by the client, breach of these Terms, violation of third-party rights, illegal, fraudulent or prohibited activities, and false statements or incorrect information."] },
            { title: "16. Modifications to the Terms", paragraphs: ["16.1. The Agency may modify, update, expand or replace these Terms and Conditions at any time, without prior notice.", "16.2. The current version is the one published on our website or communicated through official channels. Continued use of our services after any change implies automatic acceptance of the new version.", "16.3. It is the client's responsibility to periodically review these Terms and Conditions."] },
            { title: "17. Applicable Law and Jurisdiction", paragraphs: ["17.1. These Terms and Conditions shall be governed by the laws of the country or jurisdiction the Agency determines in its official documents.", "17.2. Any controversy shall be submitted to the competent courts of the jurisdiction the Agency designates, with the client waiving any other venue or jurisdiction.", "17.3. Before initiating any legal action, the parties agree to attempt amicable resolution through direct written communication."] },
            { title: "18. Final Provisions", paragraphs: ["18.1. If any clause of these Terms is declared invalid, illegal or unenforceable, the rest of the clauses remain valid and in full effect.", "18.2. Lack of exercise of any right by the Agency does not constitute waiver of that right.", "18.3. These Terms constitute the complete agreement between the parties regarding the use of our services and replace any prior agreement, verbal or written, unless a specific signed contract exists.", "18.4. The client declares to be of legal age or have authorization from their parents or guardians, to have legal capacity to contract and to accept these Terms freely, informed and voluntarily.", "18.5. UPON REQUESTING ANY SERVICE, THE CLIENT ACCEPTS THESE TERMS AND CONDITIONS IN THEIR ENTIRETY, WITHOUT RESERVATIONS, EXCEPTIONS OR MODIFICATIONS NOT AUTHORIZED IN WRITING BY THE AGENCY."] },
            { title: "19. Contact", paragraphs: ["19.1. For inquiries, clarifications or official communications, the client must use the contact channels published by the Agency.", "19.2. The Agency is not responsible for messages, agreements, promises or commitments made by unauthorized third parties, employees without authority, intermediaries, resellers or persons outside the company."] },
            { title: "20. Final Declaration of the Client", paragraphs: ["20.1. The client acknowledges having read these Terms and Conditions, understanding them, having had the opportunity to consult doubts, accepting all their clauses and understanding that upon requesting any service they are legally bound by this document.", "20.2. The client accepts that the Agency has a solid trajectory, that it does not lower prices, that it does not make refunds, that it is not responsible for misuse of its work, that it may reject services and that any relationship with minors requires supervision and authorization of parents or guardians.", "20.3. The client accepts that these Terms are clear, explicit, detailed and binding, and that their acceptance constitutes proof of conformity with them."] },
          ],
        };
      }
      return {
        title: "Términos y Condiciones",
        subtitle: "Términos y Condiciones Generales de Servicios Digitales",
        warning: "AVISO IMPORTANTE: Al solicitar, contratar, pagar, aceptar cotización, dar instrucción verbal o escrita, o utilizar cualquier servicio ofrecido por esta agencia, usted declara haber leído, entendido y aceptado de forma integral, voluntaria e informada los presentes Términos y Condiciones. Si no está de acuerdo con cualquiera de las cláusulas aquí contenidas, debe abstenerse de contratar nuestros servicios.",
        sections: [
          { title: "1. Identificación de la Agencia", paragraphs: ["1.1. Para efectos de estos Términos y Condiciones, se entenderá por 'la Agencia', 'nosotros', 'nuestro' o 'la empresa' a la entidad que presta servicios digitales especializados, incluyendo, de manera enunciativa pero no limitativa: programación, desarrollo de software, edición de video, producción audiovisual digital, administración y configuración de servidores de Minecraft, hosting, mantenimiento técnico, automatizaciones, diseño digital, integraciones, consultoría tecnológica y cualquier otro servicio digital ofrecido de forma directa o indirecta.", "1.2. La Agencia cuenta con trayectoria sólida, experiencia comprobable y metodologías de trabajo establecidas. No somos un servicio improvisado, informal ni experimental. Nuestros procesos, tiempos, estándares y políticas se aplican de manera uniforme a todos los clientes, sin excepción.", "1.3. Cualquier comunicación oficial, cotización, contrato, factura, instructivo o aceptación de servicio se considerará parte integrante de estos Términos y Condiciones."] },
          { title: "2. Aceptación de los Términos", paragraphs: ["2.1. La aceptación puede producirse de cualquiera de las siguientes formas: aceptación expresa por escrito, correo electrónico, formulario digital, mensaje, chat o firma electrónica; pago total o parcial de cualquier servicio; solicitud de cotización seguida de aprobación verbal o escrita; entrega de materiales, archivos, accesos, credenciales o instrucciones para iniciar un trabajo; uso o recepción de cualquier entregable, producto, código, archivo, configuración o servicio.", "2.2. En el momento en que ocurra cualquiera de los supuestos anteriores, el cliente queda legal y contractualmente vinculado por estos Términos y Condiciones, aunque no los haya leído de forma completa.", "2.3. El cliente reconoce que estos Términos y Condiciones prevalecen sobre cualquier acuerdo verbal, promesa, expectativa, costumbre, conversación previa o interpretación personal, salvo que exista un contrato firmado específico que indique lo contrario de manera expresa."] },
          { title: "3. Servicios Ofrecidos", paragraphs: ["3.1. La Agencia podrá ofrecer, entre otros, los siguientes servicios: programación y desarrollo de software, páginas web, aplicaciones, bots, scripts, plugins, sistemas personalizados y soluciones técnicas; edición de video, postproducción, corrección de color, montaje, subtitulado, animación, motion graphics, sonorización y exportación en formatos digitales; configuración, administración, mantenimiento, optimización y soporte de servidores de Minecraft; servicios de hosting, dominios, infraestructura, redes, bases de datos y mantenimiento técnico; diseño gráfico, identidad visual, recursos digitales, contenido multimedia y materiales promocionales; consultoría, asesoría, auditoría, automatización, integración y soporte tecnológico; cualquier otro servicio digital que la Agencia decida ofrecer en el futuro.", "3.2. La descripción de los servicios, alcance, tiempos, entregables y condiciones particulares se detallará en cada cotización, propuesta o acuerdo específico.", "3.3. La Agencia se reserva el derecho de rechazar, cancelar, pausar o discontinuar cualquier proyecto o servicio, sin necesidad de justificar su decisión, especialmente si detecta riesgo legal, técnico, reputacional, operativo, de seguridad, de abuso, de fraude, de incumplimiento o de uso indebido."] },
          { title: "4. Cotizaciones, Precios y Pagos", paragraphs: ["4.1. Todas las cotizaciones son personalizadas, válidas por el plazo indicado y sujetas a disponibilidad, complejidad, alcance y condiciones técnicas.", "4.2. Los precios de la Agencia son firmes, justos y basados en experiencia, calidad, trayectoria y estándares profesionales. NO REBAJAMOS PRECIOS, NO NEGOCIAMOS DESCUENTOS NO AUTORIZADOS, NO COMPETIMOS POR PRECIO NI ACEPTAMOS CONTRAPROPUESTAS QUE PRETENDAN REDUCIR EL VALOR DEL TRABAJO.", "4.3. Se requiere un anticipo mínimo del 50% para iniciar cualquier proyecto. El porcentaje restante deberá pagarse antes de la entrega final.", "4.4. La falta de pago faculta a la Agencia a suspender el servicio, retener entregables, bloquear accesos y reclamar los montos por vías legales.", "4.5. No se iniciará ningún trabajo sin anticipo. No se entregará ningún trabajo final sin pago completo."] },
          { title: "5. Política de No Devoluciones", paragraphs: ["5.1. TODOS LOS PAGOS REALIZADOS SON DEFINITIVOS Y NO REEMBOLSABLES.", "5.2. El cliente renuncia expresamente a solicitar devoluciones totales o parciales.", "5.3. Solo en caso de error comprobable, grave y atribuible exclusivamente a la Agencia, se podrá evaluar una corrección técnica o compensación razonable."] },
          { title: "6. Plazos, Entregas y Retrasos", paragraphs: ["6.1. Los plazos indicados son estimados y dependen de factores internos y externos.", "6.2. La Agencia no garantiza fechas exactas salvo acuerdo escrito específico.", "6.3. Retrasos por causas externas, fuerza mayor o incumplimiento del cliente no generan responsabilidad ni devolución."] },
          { title: "7. Responsabilidad del Cliente y Uso del Trabajo", paragraphs: ["7.1. El cliente es el único responsable del uso, destino, implementación, explotación y consecuencias del trabajo entregado.", "7.2. LA AGENCIA NO SE HACE RESPONSABLE POR EL MAL USO, USO ILEGAL O USO CONTRARIO A LA LEY.", "7.3. Queda prohibido utilizar nuestros servicios para actividades ilegales, fraudulentas, abusivas o contrarias a la ley."] },
          { title: "8. Propiedad Intelectual", paragraphs: ["8.1. Salvo acuerdo expreso, la Agencia conserva la titularidad de sus métodos, procesos y herramientas internas.", "8.2. El cliente recibirá los derechos de uso del entregable final una vez pagado el 100%."] },
          { title: "9. Menores de Edad", paragraphs: ["9.1. Los servicios a menores requieren supervisión y autorización de padres o tutores.", "9.2. Está prohibido el uso de nuestros servicios para actividades que involucren daño a menores."] },
          { title: "10. Confidencialidad", paragraphs: ["10.1. La Agencia tratará la información confidencial con discreción razonable, sin garantía absoluta."] },
          { title: "11. Soporte y Mantenimiento", paragraphs: ["11.1. Salvo acuerdo expreso, todo servicio incluye únicamente el alcance cotizado."] },
          { title: "12. Cancelaciones y Abandono", paragraphs: ["12.1. La cancelación no genera devolución de pagos realizados.", "12.2. Proyectos pausados más de 30 días pueden considerarse abandonados."] },
          { title: "13. Prohibición de Regateo", paragraphs: ["13.1. Los precios no son negociables. No se aceptan regateos, chantajes o presión comercial."] },
          { title: "14. Limitación de Responsabilidad", paragraphs: ["14.1. La responsabilidad total de la Agencia se limita al monto pagado por el servicio específico.", "14.2. No somos responsables de daños indirectos, lucro cesante o pérdida de datos."] },
          { title: "15. Indemnización", paragraphs: ["15.1. El cliente indemnizará y mantendrá indemne a la Agencia frente a cualquier reclamo derivado del uso de nuestros servicios."] },
          { title: "16. Modificaciones", paragraphs: ["16.1. La Agencia podrá modificar estos Términos en cualquier momento.", "16.2. El uso continuado implica aceptación de la nueva versión."] },
          { title: "17. Ley Aplicable y Jurisdicción", paragraphs: ["17.1. Se regirá por las leyes de la jurisdicción que la Agencia determine en sus documentos oficiales."] },
          { title: "18. Disposiciones Finales", paragraphs: ["18.1. Si alguna cláusula es inválida, el resto continúa vigente.", "18.2. Estos Términos constituyen el acuerdo completo entre las partes."] },
          { title: "19. Contacto", paragraphs: ["19.1. Para consultas use los canales de contacto publicados por la Agencia."] },
          { title: "20. Declaración Final del Cliente", paragraphs: ["20.1. El cliente reconoce haber leído estos Términos, entenderlos y aceptarlos íntegramente.", "20.2. Su aceptación constituye prueba de conformidad."] },
        ],
      };
    }

    if (type === "privacy") {
      if (isEN) {
        return {
          title: "Privacy Policy",
          subtitle: "Privacy Policy and Personal Data Processing",
          warning: "IMPORTANT NOTICE: By requesting, contracting, paying, accepting a quote, giving verbal or written instruction, or using any service offered by this agency, you declare to have read, understood and fully accepted, voluntarily and informed, this Privacy Policy. If you do not agree with any of the clauses contained herein, you must refrain from contracting our services.",
          sections: [
            { title: "1. Identification of the Responsible Party", paragraphs: ["1.1. For the purposes of this Privacy Policy, 'the Agency', 'we', 'our' or 'the company' shall be understood as the entity that provides specialized digital services.", "1.2. The Agency acts as the responsible party for the processing of personal data that the client, user, visitor or authorized third party provides in the framework of the commercial, contractual or browsing relationship.", "1.3. The Agency has a solid trajectory, verifiable experience and established work methodologies."] },
            { title: "2. Acceptance of the Privacy Policy", paragraphs: ["2.1. Acceptance may occur through express acceptance, payment, quote approval, delivery of materials, use of services or browsing our website.", "2.2. The client is legally bound by this Privacy Policy even if not fully read."] },
            { title: "3. Personal Data We Collect", paragraphs: ["3.1. The Agency may collect: identification data, contact data, billing and payment data, technical data, project data, communication data, usage data and third-party data.", "3.2. The Agency does not intentionally collect sensitive data.", "3.3. Minors may only provide personal data under supervision and authorization of parents or guardians."] },
            { title: "4. Purposes of Data Processing", paragraphs: ["4.1. The Agency will process personal data to manage services, prepare quotes and contracts, process payments, prevent fraud, comply with legal obligations, improve services, send commercial communications, show work in the portfolio and attend to requirements of authorities."] },
            { title: "5. Legal Basis", paragraphs: ["5.1. Processing is based on consent, execution of the contractual relationship, legal compliance, legitimate interest, protection of rights and other applicable legal bases."] },
            { title: "6. Client Consent", paragraphs: ["6.1. By providing personal data and accepting this Privacy Policy, the client grants free, express, informed and unequivocal consent.", "6.2. The client may revoke consent at any time in writing.", "6.3. Revocation may prevent continuing to provide the service, without right to refund."] },
            { title: "7. Cookies and Similar Technologies", paragraphs: ["7.1. Our website may use cookies, pixels, web beacons and similar technologies for preferences, traffic analysis, personalization and fraud detection."] },
            { title: "8. Sharing Data with Third Parties", paragraphs: ["8.1. The Agency may share data with technology providers, collaborators, authorities, in the case of merger or acquisition, or when the client authorizes it.", "8.2. We do not sell, rent or commercialize personal data."] },
            { title: "9. International Transfers", paragraphs: ["9.1. The client accepts that their data may be transferred, stored and processed in countries other than their own."] },
            { title: "10. Data Security", paragraphs: ["10.1. The Agency will adopt reasonable technical, administrative and organizational measures to protect data.", "10.2. No system is absolutely secure; the Agency does not guarantee total security."] },
            { title: "11. Data Retention", paragraphs: ["11.1. The Agency will retain personal data for the time necessary to fulfill the described purposes and applicable legal obligations."] },
            { title: "12. Data Subject Rights", paragraphs: ["12.1. The client may exercise access, rectification, cancellation, opposition, portability, limitation, revocation and complaint rights.", "12.2. Requests must be sent in writing to the official channels."] },
            { title: "13. Data of Minors", paragraphs: ["13.1. Services to minors require supervision and authorization of parents or guardians.", "13.2. The use of our services for activities that harm minors is strictly prohibited."] },
            { title: "14. Commercial Communications", paragraphs: ["14.1. The client accepts receiving commercial communications and can opt out at any time."] },
            { title: "15. Links to Third Parties", paragraphs: ["15.1. The Agency does not control or is responsible for the content, policies, security or data processing of third-party sites."] },
            { title: "16. Intellectual Property", paragraphs: ["16.1. The Agency retains ownership of its internal methods, processes and tools.", "16.2. The client guarantees that materials provided to the Agency are their property or they have licenses."] },
            { title: "17. Client Responsibility", paragraphs: ["17.1. The client is the sole responsible party for the accuracy of the data provided and the use of the services.", "17.2. THE AGENCY IS NOT RESPONSIBLE FOR THE MISUSE, ILLEGAL USE OR USE CONTRARY TO LAW."] },
            { title: "18. Limitation of Liability", paragraphs: ["18.1. The total liability of the Agency is limited to the amount paid by the client for the specific service.", "18.2. The Agency is not responsible for indirect, incidental, special, consequential damages, lost profits or legal costs."] },
            { title: "19. Indemnification", paragraphs: ["19.1. The client agrees to indemnify the Agency against any claim derived from the use of services or breach of this policy."] },
            { title: "20. Modifications", paragraphs: ["20.1. The Agency may modify this Privacy Policy at any time.", "20.2. Continued use implies acceptance of the new version."] },
            { title: "21. Applicable Law and Jurisdiction", paragraphs: ["21.1. This Privacy Policy shall be governed by the laws of the jurisdiction the Agency determines in its official documents."] },
            { title: "22. Final Provisions", paragraphs: ["22.1. If any clause is invalid, the rest remains in effect.", "22.2. This Privacy Policy constitutes the complete agreement between the parties."] },
            { title: "23. Contact", paragraphs: ["23.1. For inquiries or exercise of rights, use the official contact channels."] },
            { title: "24. Final Declaration of the Client", paragraphs: ["24.1. The client acknowledges having read this Privacy Policy and accepting all its clauses.", "24.2. Acceptance constitutes proof of conformity."] },
          ],
        };
      }
      return {
        title: "Política de Privacidad",
        subtitle: "Política de Privacidad y Tratamiento de Datos Personales",
        warning: "AVISO IMPORTANTE: Al solicitar, contratar, pagar, aceptar cotización, dar instrucción verbal o escrita, o utilizar cualquier servicio ofrecido por esta agencia, usted declara haber leído, entendido y aceptado de forma integral, voluntaria e informada la presente Política de Privacidad. Si no está de acuerdo con cualquiera de las cláusulas aquí contenidas, debe abstenerse de contratar nuestros servicios.",
        sections: [
          { title: "1. Identificación del Responsable", paragraphs: ["1.1. Para efectos de la presente Política de Privacidad, se entenderá por 'la Agencia', 'nosotros', 'nuestro' o 'la empresa' a la entidad que presta servicios digitales especializados.", "1.2. La Agencia actúa como responsable del tratamiento de los datos personales que el cliente, usuario, visitante o tercero autorizado proporcione en el marco de la relación comercial, contractual o de navegación.", "1.3. La Agencia cuenta con trayectoria sólida, experiencia comprobable y metodologías de trabajo establecidas."] },
          { title: "2. Aceptación de la Política", paragraphs: ["2.1. La aceptación puede producirse mediante aceptación expresa, pago, aprobación de cotización, entrega de materiales, uso de servicios o navegación en nuestro sitio web.", "2.2. El cliente queda legalmente vinculado por esta Política aunque no la haya leído completamente."] },
          { title: "3. Datos Personales que Recopilamos", paragraphs: ["3.1. La Agencia podrá recopilar: datos de identificación, datos de contacto, datos de facturación y pago, datos técnicos, datos de proyecto, datos de comunicación, datos de uso y datos de terceros.", "3.2. La Agencia no recopila datos sensibles de forma intencional.", "3.3. Los menores solo podrán proporcionar datos bajo supervisión y autorización de sus padres o tutores."] },
          { title: "4. Finalidades del Tratamiento", paragraphs: ["4.1. La Agencia tratará los datos personales para gestionar servicios, elaborar cotizaciones y contratos, procesar pagos, prevenir fraudes, cumplir obligaciones legales, mejorar servicios, enviar comunicaciones comerciales, mostrar trabajos en portafolio y atender requerimientos de autoridades."] },
          { title: "5. Base Legal", paragraphs: ["5.1. El tratamiento se fundamenta en el consentimiento, la ejecución de la relación contractual, el cumplimiento legal, el interés legítimo, la protección de derechos y otras bases legales aplicables."] },
          { title: "6. Consentimiento del Cliente", paragraphs: ["6.1. Al proporcionar sus datos y aceptar esta Política, el cliente otorga consentimiento libre, expreso, informado e inequívoco.", "6.2. El cliente puede revocar el consentimiento en cualquier momento mediante solicitud escrita.", "6.3. La revocación podrá impedir continuar prestando el servicio, sin derecho a devolución."] },
          { title: "7. Cookies y Tecnologías Similares", paragraphs: ["7.1. Nuestro sitio web puede utilizar cookies, píxeles, web beacons y tecnologías similares para preferencias, análisis de tráfico, personalización y detección de fraudes."] },
          { title: "8. Compartición de Datos con Terceros", paragraphs: ["8.1. La Agencia podrá compartir datos con proveedores tecnológicos, colaboradores, autoridades, en caso de fusión o adquisición, o cuando el cliente lo autorice.", "8.2. No vendemos, alquilamos ni comercializamos datos personales."] },
          { title: "9. Transferencias Internacionales", paragraphs: ["9.1. El cliente acepta que sus datos puedan transferirse, almacenarse y procesarse en países distintos al suyo."] },
          { title: "10. Seguridad de los Datos", paragraphs: ["10.1. La Agencia adoptará medidas técnicas, administrativas y organizativas razonables para proteger los datos.", "10.2. Ningún sistema es absolutamente seguro; la Agencia no garantiza seguridad total."] },
          { title: "11. Conservación de los Datos", paragraphs: ["11.1. La Agencia conservará los datos personales durante el tiempo necesario para cumplir las finalidades descritas y obligaciones legales aplicables."] },
          { title: "12. Derechos del Titular", paragraphs: ["12.1. El cliente podrá ejercer los derechos de acceso, rectificación, cancelación, oposición, portabilidad, limitación, revocación y reclamación.", "12.2. Las solicitudes deben enviarse por escrito a los canales oficiales."] },
          { title: "13. Datos de Menores", paragraphs: ["13.1. Los servicios a menores requieren supervisión y autorización de padres o tutores.", "13.2. Está prohibido el uso de nuestros servicios para actividades que dañen a menores."] },
          { title: "14. Comunicaciones Comerciales", paragraphs: ["14.1. El cliente acepta recibir comunicaciones comerciales y puede solicitar la baja en cualquier momento."] },
          { title: "15. Enlaces a Terceros", paragraphs: ["15.1. La Agencia no controla ni se responsabiliza por el contenido, políticas, seguridad o tratamiento de datos de sitios de terceros."] },
          { title: "16. Propiedad Intelectual", paragraphs: ["16.1. La Agencia conserva la titularidad de sus métodos, procesos y herramientas internas.", "16.2. El cliente garantiza que los materiales entregados son de su propiedad o cuenta con licencias."] },
          { title: "17. Responsabilidad del Cliente", paragraphs: ["17.1. El cliente es el único responsable de la veracidad de los datos proporcionados y del uso de los servicios.", "17.2. LA AGENCIA NO SE HACE RESPONSABLE POR EL MAL USO, USO ILEGAL O USO CONTRARIO A LA LEY."] },
          { title: "18. Limitación de Responsabilidad", paragraphs: ["18.1. La responsabilidad total de la Agencia se limita al monto pagado por el servicio específico.", "18.2. La Agencia no responde por daños indirectos, incidentales, especiales, consecuenciales, lucro cesante o costos legales."] },
          { title: "19. Indemnización", paragraphs: ["19.1. El cliente se obliga a indemnizar a la Agencia frente a cualquier reclamo derivado del uso de los servicios o incumplimiento de esta política."] },
          { title: "20. Modificaciones", paragraphs: ["20.1. La Agencia podrá modificar esta Política de Privacidad en cualquier momento.", "20.2. El uso continuado implica aceptación de la nueva versión."] },
          { title: "21. Ley Aplicable y Jurisdicción", paragraphs: ["21.1. Esta Política se regirá por las leyes de la jurisdicción que la Agencia determine en sus documentos oficiales."] },
          { title: "22. Disposiciones Finales", paragraphs: ["22.1. Si alguna cláusula es inválida, el resto continúa vigente.", "22.2. Esta Política constituye el acuerdo completo entre las partes."] },
          { title: "23. Contacto", paragraphs: ["23.1. Para consultas o ejercicio de derechos, use los canales oficiales de contacto."] },
          { title: "24. Declaración Final del Cliente", paragraphs: ["24.1. El cliente reconoce haber leído esta Política y aceptar todas sus cláusulas.", "24.2. Su aceptación constituye prueba de conformidad."] },
        ],
      };
    }

    if (isEN) {
      return {
        title: "Contracting Conditions",
        subtitle: "General Contracting Conditions for Digital Services",
        warning: "IMPORTANT NOTICE: By requesting, contracting, paying, accepting a quote, giving verbal or written instruction, or using any service offered by this agency, you declare to have read, understood and fully accepted, voluntarily and informed, these General Contracting Conditions. If you do not agree with any of the clauses contained herein, you must refrain from contracting our services.",
        sections: [
          { title: "1. Identification of the Agency", paragraphs: ["1.1. 'The Agency', 'we', 'our' or 'the company' shall be understood as the entity that provides specialized digital services.", "1.2. The Agency has a solid trajectory, verifiable experience and established work methodologies.", "1.3. These Conditions regulate the commercial, contractual and operational relationship between the Agency and the client.", "1.4. These Conditions complement the Terms and Conditions and the Privacy Policy. In case of conflict, the specific signed contract prevails."] },
          { title: "2. Acceptance of the Conditions", paragraphs: ["2.1. Acceptance may occur through express acceptance, payment, quote approval, delivery of materials or use of services.", "2.2. The client is legally bound even if not fully read.", "2.3. These Conditions prevail over any verbal agreement."] },
          { title: "3. Nature of Service and Scope", paragraphs: ["3.1. The Agency provides specialized, personalized and professional digital services.", "3.2. Unless expressly mentioned, all quote includes only what is detailed in it.", "3.3. Any additional work will be quoted and charged independently.", "3.4. The Agency may reject, cancel or discontinue any project if it detects risk."] },
          { title: "4. Quotes and Proposals", paragraphs: ["4.1. All quotes are personalized and subject to availability.", "4.2. Quotes do not constitute schedule reservation until deposit is paid.", "4.3. Acceptance of the quote implies acceptance of these Conditions."] },
          { title: "5. Prices, Payments and Invoicing", paragraphs: ["5.1. The Agency's prices are firm and non-negotiable.", "5.2. Any attempt at haggling or commercial manipulation will be rejected.", "5.3. A minimum deposit of 50% is required to start any project.", "5.4. Failure to pay allows the Agency to suspend the service and withhold deliverables.", "5.5. No work begins without deposit. No final work is delivered without full payment."] },
          { title: "6. No Refunds Policy", paragraphs: ["6.1. ALL PAYMENTS MADE ARE FINAL AND NON-REFUNDABLE.", "6.2. The client waives requesting total or partial refunds."] },
          { title: "7. Deadlines, Deliveries and Delays", paragraphs: ["7.1. Deadlines are estimates and depend on internal and external factors.", "7.2. The Agency does not guarantee exact dates unless agreed in writing."] },
          { title: "8. Client Obligations", paragraphs: ["8.1. The client must provide truthful information, deliver materials on time, respond to approvals, pay on time and comply with these Conditions."] },
          { title: "9. Client Responsibility and Use of Work", paragraphs: ["9.1. The client is solely responsible for the use of the delivered work.", "9.2. THE AGENCY IS NOT RESPONSIBLE FOR MISUSE, ILLEGAL USE OR USE CONTRARY TO LAW."] },
          { title: "10. Intellectual Property", paragraphs: ["10.1. The Agency retains ownership of its internal methods and tools.", "10.2. The client receives usage rights after 100% payment."] },
          { title: "11. Minors", paragraphs: ["11.1. Services to minors require supervision and authorization from parents or guardians."] },
          { title: "12. Confidentiality", paragraphs: ["12.1. The Agency will treat confidential information with reasonable discretion, without absolute guarantee."] },
          { title: "13. Support and Maintenance", paragraphs: ["13.1. Unless agreed in writing, all service includes only the quoted scope."] },
          { title: "14. Cancellations, Pauses and Abandonment", paragraphs: ["14.1. Cancellation does not generate refund.", "14.2. Projects paused more than 30 days may be considered abandoned."] },
          { title: "15. Prohibition of Haggling", paragraphs: ["15.1. Prices are non-negotiable."] },
          { title: "16. Limitation of Liability", paragraphs: ["16.1. The total liability of the Agency is limited to the amount paid for the specific service.", "16.2. No liability for indirect damages or lost profits."] },
          { title: "17. Indemnification", paragraphs: ["17.1. The client will indemnify the Agency against any claim derived from the use of services."] },
          { title: "18. Modifications", paragraphs: ["18.1. The Agency may modify these Conditions at any time."] },
          { title: "19. Applicable Law and Jurisdiction", paragraphs: ["19.1. These Conditions are governed by the laws of the jurisdiction the Agency determines."] },
          { title: "20. Final Provisions", paragraphs: ["20.1. If any clause is invalid, the rest continues in effect."] },
          { title: "21. Contact", paragraphs: ["21.1. Use the official contact channels."] },
          { title: "22. Final Declaration", paragraphs: ["22.1. The client acknowledges having read these Conditions and accepts all their clauses."] },
        ],
      };
    }

    return {
      title: "Condiciones de Contratación",
      subtitle: "Condiciones Generales de Contratación de Servicios Digitales",
      warning: "AVISO IMPORTANTE: Al solicitar, contratar, pagar, aceptar cotización, dar instrucción verbal o escrita, o utilizar cualquier servicio ofrecido por esta agencia, usted declara haber leído, entendido y aceptado de forma integral, voluntaria e informada las presentes Condiciones Generales de Contratación. Si no está de acuerdo con cualquiera de las cláusulas aquí contenidas, debe abstenerse de contratar nuestros servicios.",
      sections: [
        { title: "1. Identificación de la Agencia", paragraphs: ["1.1. Se entenderá por 'la Agencia' a la entidad que presta servicios digitales especializados.", "1.2. La Agencia cuenta con trayectoria sólida, experiencia comprobable y metodologías de trabajo establecidas.", "1.3. Estas Condiciones regulan la relación comercial, contractual y operativa entre la Agencia y el cliente.", "1.4. Estas Condiciones se complementan con los Términos y Condiciones y la Política de Privacidad. En caso de conflicto, prevalece el contrato específico firmado."] },
        { title: "2. Aceptación de las Condiciones", paragraphs: ["2.1. La aceptación puede producirse mediante aceptación expresa, pago, aprobación de cotización, entrega de materiales o uso de servicios.", "2.2. El cliente queda legalmente vinculado aunque no las haya leído completamente.", "2.3. Estas Condiciones prevalecen sobre cualquier acuerdo verbal."] },
        { title: "3. Naturaleza del Servicio y Alcance", paragraphs: ["3.1. La Agencia presta servicios digitales especializados, personalizados y profesionales.", "3.2. Salvo mención expresa, toda cotización incluye únicamente lo detallado en ella.", "3.3. Todo trabajo adicional será cotizado y cobrado de forma independiente.", "3.4. La Agencia se reserva el derecho de rechazar, cancelar o discontinuar cualquier proyecto si detecta riesgo."] },
        { title: "4. Cotizaciones y Propuestas", paragraphs: ["4.1. Todas las cotizaciones son personalizadas y sujetas a disponibilidad.", "4.2. Las cotizaciones no constituyen reserva de agenda hasta que se pague el anticipo.", "4.3. La aceptación de la cotización implica aceptación de estas Condiciones."] },
        { title: "5. Precios, Pagos y Facturación", paragraphs: ["5.1. Los precios de la Agencia son firmes y no negociables.", "5.2. Cualquier intento de regateo o manipulación comercial será rechazado.", "5.3. Se requiere anticipo mínimo del 50% para iniciar cualquier proyecto.", "5.4. La falta de pago faculta a la Agencia a suspender el servicio y retener entregables.", "5.5. No se inicia trabajo sin anticipo. No se entrega trabajo final sin pago completo."] },
        { title: "6. Política de No Devoluciones", paragraphs: ["6.1. TODOS LOS PAGOS REALIZADOS SON DEFINITIVOS Y NO REEMBOLSABLES.", "6.2. El cliente renuncia a solicitar devoluciones totales o parciales."] },
        { title: "7. Plazos, Entregas y Retrasos", paragraphs: ["7.1. Los plazos son estimados y dependen de factores internos y externos.", "7.2. La Agencia no garantiza fechas exactas salvo acuerdo escrito."] },
        { title: "8. Obligaciones del Cliente", paragraphs: ["8.1. El cliente debe proporcionar información veraz, entregar materiales a tiempo, responder a aprobaciones, pagar en plazo y cumplir estas Condiciones."] },
        { title: "9. Responsabilidad del Cliente y Uso del Trabajo", paragraphs: ["9.1. El cliente es el único responsable del uso del trabajo entregado.", "9.2. LA AGENCIA NO SE HACE RESPONSABLE POR EL MAL USO, USO ILEGAL O USO CONTRARIO A LA LEY."] },
        { title: "10. Propiedad Intelectual", paragraphs: ["10.1. La Agencia conserva la titularidad de sus métodos y herramientas internas.", "10.2. El cliente recibe derechos de uso tras pagar el 100%."] },
        { title: "11. Menores de Edad", paragraphs: ["11.1. Los servicios a menores requieren supervisión y autorización de padres o tutores."] },
        { title: "12. Confidencialidad", paragraphs: ["12.1. La Agencia tratará la información confidencial con discreción razonable, sin garantía absoluta."] },
        { title: "13. Soporte y Mantenimiento", paragraphs: ["13.1. Salvo acuerdo escrito, todo servicio incluye únicamente el alcance cotizado."] },
        { title: "14. Cancelaciones, Pausas y Abandono", paragraphs: ["14.1. La cancelación no genera devolución.", "14.2. Proyectos pausados más de 30 días pueden considerarse abandonados."] },
        { title: "15. Prohibición de Regateo", paragraphs: ["15.1. Los precios no son negociables."] },
        { title: "16. Limitación de Responsabilidad", paragraphs: ["16.1. La responsabilidad total de la Agencia se limita al monto pagado por el servicio específico.", "16.2. No hay responsabilidad por daños indirectos o lucro cesante."] },
        { title: "17. Indemnización", paragraphs: ["17.1. El cliente indemnizará a la Agencia frente a cualquier reclamo derivado del uso de los servicios."] },
        { title: "18. Modificaciones", paragraphs: ["18.1. La Agencia podrá modificar estas Condiciones en cualquier momento."] },
        { title: "19. Ley Aplicable y Jurisdicción", paragraphs: ["19.1. Estas Condiciones se rigen por las leyes de la jurisdicción que la Agencia determine."] },
        { title: "20. Disposiciones Finales", paragraphs: ["20.1. Si alguna cláusula es inválida, el resto continúa vigente."] },
        { title: "21. Contacto", paragraphs: ["21.1. Use los canales oficiales de contacto."] },
        { title: "22. Declaración Final", paragraphs: ["22.1. El cliente reconoce haber leído estas Condiciones y acepta todas sus cláusulas."] },
      ],
    };
  };

  const content = getContent();

  if (!mounted) {
    return (
      <>
        <header className="mb-10">
          <div className="h-12 w-3/4 bg-white/5 rounded-lg mb-4 animate-pulse" />
          <div className="h-4 w-1/2 bg-white/5 rounded-lg mb-2 animate-pulse" />
        </header>
        <div className="space-y-6">
          <div className="h-24 bg-white/5 rounded-2xl animate-pulse" />
          <div className="h-40 bg-white/5 rounded-2xl animate-pulse" />
        </div>
      </>
    );
  }

  return (
    <>
      <header className="mb-10">
        <h1 className="font-outfit text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          {content.title.split(" ").map((word, i, arr) => (
            <span
              key={i}
              className={
                i === arr.length - 1
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400"
                  : ""
              }
            >
              {word}
              {i < arr.length - 1 ? " " : ""}
            </span>
          ))}
        </h1>
        <p className="font-outfit text-sm text-white/40 mb-2">{content.subtitle}</p>
        <div className="flex flex-wrap gap-4 font-outfit text-xs text-white/50">
          <span>
            <strong className="text-white/70">
              {t("Última actualización:", "Last updated:", "最后更新：")}
            </strong>{" "}
            05/10/2026
          </span>
          <span>
            <strong className="text-white/70">
              {t("Versión:", "Version:", "版本：")}
            </strong>{" "}
            2026.10.05
          </span>
        </div>
      </header>

      <div className="font-outfit text-[15px] font-light text-white/65 leading-[1.8] space-y-6">
        <section className="p-5 md:p-6 rounded-2xl bg-pink-500/5 border border-pink-500/20">
          <p className="font-outfit text-[13px] md:text-sm font-semibold text-pink-300 uppercase tracking-wide leading-relaxed">
            {content.warning}
          </p>
        </section>

        {content.sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-outfit text-xl md:text-2xl font-bold text-white mt-8 mb-4">
              {section.title}
            </h2>
            {section.paragraphs.map((p, pIdx) => (
              <p key={pIdx} className={pIdx > 0 ? "mt-3" : ""}>
                {p}
              </p>
            ))}
          </section>
        ))}

        <p className="mt-10 pt-6 border-t border-white/[0.08] text-center font-outfit text-xs text-white/40 uppercase tracking-widest">
          {t("Fin del Documento", "End of Document", "文件结束")}
        </p>
      </div>
    </>
  );
}