import LegalLayout from "@/components/legal-layout"

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Termos de Serviço" lastUpdated="Última atualização: Fevereiro de 2026">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. IDENTIFICAÇÃO DO FORNECEDOR</h2>
        <p>O <strong>Chatyou</strong> é um serviço de gestão de atendimento multicanal desenvolvido e operado por:</p>
        <p>
          <strong>Santos e Cia LTDA</strong><br />
          CNPJ: 34.036.537/0001-23<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a><br />
          E-mail: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          Telefone/WhatsApp: (69) 99956-5508
        </p>
        <p>Ao utilizar o Chatyou, o usuário declara ter lido, compreendido e aceitado integralmente estes Termos de Serviço.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. DESCRIÇÃO DO SERVIÇO</h2>
        <p>O Chatyou é uma plataforma SaaS (Software as a Service) destinada à:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gestão de atendimento multicanal</li>
          <li>Centralização de mensagens</li>
          <li>Organização de equipes de atendimento</li>
          <li>Automação de fluxos de mensagens</li>
          <li>Integração com APIs oficiais</li>
        </ul>
        <p>A plataforma pode integrar-se a serviços da Meta Platforms Inc., incluindo:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WhatsApp Business Platform</li>
          <li>Facebook Messenger</li>
          <li>Instagram Direct</li>
        </ul>
        <p>O Chatyou não é afiliado oficialmente à Meta, atuando apenas como integrador autorizado via APIs oficiais.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. ELEGIBILIDADE E CONTA</h2>
        <p>O uso do Chatyou é permitido apenas para:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pessoas jurídicas regularmente constituídas</li>
          <li>Profissionais maiores de 18 anos</li>
          <li>Usuários que utilizem APIs oficiais</li>
        </ul>
        <p>O cliente é responsável por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Manter a confidencialidade de suas credenciais</li>
          <li>Garantir que apenas pessoas autorizadas tenham acesso</li>
          <li>Informar dados verdadeiros e atualizados</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. CONFORMIDADE COM AS POLÍTICAS DA META</h2>
        <p>Ao utilizar integrações com WhatsApp, Instagram ou Facebook, o cliente declara estar ciente e concordar com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WhatsApp Business Platform Policy</li>
          <li>Meta Platform Terms</li>
          <li>Meta Developer Policies</li>
          <li>Commerce Policies da Meta (quando aplicável)</li>
        </ul>
        <p>É expressamente proibido:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Envio de spam</li>
          <li>Uso de listas compradas</li>
          <li>Mensagens sem opt-in válido</li>
          <li>Conteúdo enganoso, fraudulento ou ilícito</li>
          <li>Automação não autorizada fora das regras da API oficial</li>
        </ul>
        <p>O descumprimento poderá resultar em:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Suspensão imediata da conta no Chatyou</li>
          <li>Cancelamento do contrato</li>
          <li>Bloqueio do número pelo provedor (Meta)</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. RESPONSABILIDADE SOBRE O CONTEÚDO</h2>
        <p>O cliente é o único responsável por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Conteúdo das mensagens enviadas</li>
          <li>Base legal para tratamento dos dados</li>
          <li>Consentimento dos usuários finais</li>
          <li>Cumprimento da LGPD</li>
        </ul>
        <p>O Chatyou não revisa previamente mensagens enviadas pela empresa contratante.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. PROTEÇÃO DE DADOS</h2>
        <p>O tratamento de dados pessoais observará:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lei nº 13.709/2018 (LGPD)</li>
          <li>Normas da ANPD</li>
          <li>Políticas da Meta Platforms Inc.</li>
        </ul>
        <p>O Chatyou atua:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Como <strong>Controlador</strong> em relação aos dados da empresa contratante</li>
          <li>Como <strong>Operador</strong> em relação aos dados dos usuários finais</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. LIMITAÇÃO DE RESPONSABILIDADE</h2>
        <p>O Chatyou não se responsabiliza por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Bloqueios aplicados pela Meta</li>
          <li>Penalizações por descumprimento das políticas da Meta</li>
          <li>Uso indevido da plataforma pelo cliente</li>
          <li>Quedas ou instabilidades externas das APIs</li>
        </ul>
        <p>A responsabilidade do Chatyou limita-se ao valor pago pelo cliente nos últimos 12 meses de contrato.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. DISPONIBILIDADE DO SERVIÇO</h2>
        <p>O Chatyou opera em modelo SaaS e poderá:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Realizar manutenções programadas</li>
          <li>Atualizar funcionalidades</li>
          <li>Suspender temporariamente o serviço por razões técnicas ou legais</li>
        </ul>
        <p>Não há garantia de disponibilidade ininterrupta, especialmente em integrações de terceiros.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. PLANOS, PAGAMENTO E CANCELAMENTO</h2>
        <p>O uso da plataforma está sujeito a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Plano contratado</li>
          <li>Pagamento recorrente conforme acordado</li>
          <li>Suspensão automática em caso de inadimplência</li>
        </ul>
        <p>O cancelamento poderá ser solicitado a qualquer momento, respeitando o ciclo de faturamento vigente.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. PROPRIEDADE INTELECTUAL</h2>
        <p>Todo o software, layout, código, marca e funcionalidades do Chatyou são propriedade exclusiva da Santos e Cia LTDA.</p>
        <p>É proibido:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Copiar ou modificar o sistema</li>
          <li>Realizar engenharia reversa</li>
          <li>Revender o serviço sem autorização</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. SUSPENSÃO OU RESCISÃO</h2>
        <p>O Chatyou poderá suspender ou encerrar a conta do cliente em caso de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Violação destes Termos</li>
          <li>Descumprimento das políticas da Meta</li>
          <li>Uso para fins ilegais</li>
          <li>Risco à reputação da plataforma</li>
        </ul>
        <p>A rescisão pode ocorrer sem aviso prévio em casos graves.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. INDENIZAÇÃO</h2>
        <p>O cliente concorda em indenizar o Chatyou por quaisquer prejuízos decorrentes de:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Uso irregular da plataforma</li>
          <li>Processos judiciais causados por envio de mensagens indevidas</li>
          <li>Violação das políticas da Meta</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. MODIFICAÇÕES DOS TERMOS</h2>
        <p>O Chatyou poderá alterar estes Termos a qualquer momento. A versão atualizada será publicada em: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a></p>
        <p>A continuidade do uso da plataforma implica aceitação das alterações.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. LEGISLAÇÃO E FORO</h2>
        <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
        <p>Fica eleito o foro da comarca de Ariquemes/RO para dirimir quaisquer controvérsias.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">15. CONTATO</h2>
        <p>
          Santos e Cia LTDA<br />
          CNPJ: 34.036.537/0001-23<br />
          E-mail: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          WhatsApp: (69) 99956-5508<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a>
        </p>
      </section>
    </LegalLayout>
  )
}
