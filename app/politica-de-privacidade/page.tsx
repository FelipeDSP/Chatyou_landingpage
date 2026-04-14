import LegalLayout from "@/components/legal-layout"

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Política de Privacidade" lastUpdated="Última atualização: Fevereiro de 2026">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. IDENTIFICAÇÃO DO CONTROLADOR</h2>
        <p>O <strong>Chatyou</strong> é um serviço de gestão de atendimento multicanal desenvolvido e operado por:</p>
        <p>
          <strong>Santos e Cia LTDA</strong><br />
          CNPJ: 34.036.537/0001-23<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a><br />
          E-mail de suporte: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          Telefone/WhatsApp: (69) 99956-5508
        </p>
        <p>A Santos e Cia LTDA é a responsável pelo tratamento dos dados pessoais coletados por meio da plataforma Chatyou, nos termos da <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 – LGPD)</strong>.</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. SOBRE O CHATYOU</h2>
        <p>O Chatyou é uma plataforma de <strong>gestão de atendimento multicanal</strong>, permitindo a integração e organização de mensagens provenientes de diferentes canais digitais, incluindo, mas não se limitando a:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WhatsApp Business Platform</li>
          <li>Instagram</li>
          <li>Facebook Messenger</li>
          <li>Outros canais integráveis mediante API</li>
        </ul>
        <p>A utilização da plataforma pode envolver integrações com serviços da Meta Platforms Inc. (incluindo WhatsApp, Facebook e Instagram), sendo o uso dessas integrações condicionado ao cumprimento das políticas aplicáveis da Meta.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. DADOS COLETADOS</h2>
        <p>O Chatyou poderá coletar e tratar as seguintes categorias de dados:</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Dados do Cliente Contratante (Empresas Usuárias)</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome empresarial</li>
          <li>CNPJ</li>
          <li>Nome do responsável</li>
          <li>E-mail</li>
          <li>Telefone</li>
          <li>Dados de faturamento</li>
          <li>Dados de acesso à plataforma (login, IP, logs)</li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Dados de Usuários Finais (Clientes dos nossos clientes)</h3>
        <p>Quando a empresa contratante utiliza o Chatyou para atendimento via WhatsApp, Instagram ou Facebook, poderão ser processados:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome do contato</li>
          <li>Número de telefone</li>
          <li>ID do perfil (Instagram/Facebook)</li>
          <li>Conteúdo das mensagens trocadas</li>
          <li>Arquivos enviados (imagens, documentos, áudios)</li>
          <li>Histórico de conversas</li>
          <li>Data, hora e canal de atendimento</li>
        </ul>
        <p><strong>Importante:</strong> O Chatyou atua como <strong>Operador de Dados</strong> em relação aos dados dos usuários finais, tratando-os exclusivamente sob instruções da empresa contratante (Controladora).</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. FINALIDADE DO TRATAMENTO</h2>
        <p>Os dados são tratados para as seguintes finalidades:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Gestão centralizada de atendimentos</li>
          <li>Organização de conversas e equipes</li>
          <li>Registro e histórico de interações</li>
          <li>Automatizações de mensagens</li>
          <li>Geração de relatórios e métricas de atendimento</li>
          <li>Cumprimento de obrigações legais</li>
          <li>Segurança e prevenção a fraudes</li>
        </ul>
        <p>O Chatyou não comercializa dados pessoais.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. INTEGRAÇÃO COM SERVIÇOS DA META</h2>
        <p>Quando houver integração com WhatsApp, Instagram ou Facebook:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>O tratamento de dados também estará sujeito às políticas da Meta Platforms Inc.</li>
          <li>O uso da API do WhatsApp Business deve respeitar a <strong>WhatsApp Business Platform Policy</strong>.</li>
          <li>A empresa contratante é responsável por obter consentimento válido dos titulares quando necessário.</li>
          <li>O envio de mensagens em massa deve respeitar as regras de opt-in e qualidade impostas pela Meta.</li>
        </ul>
        <p>O Chatyou não é afiliado oficialmente à Meta, sendo apenas uma plataforma que utiliza APIs autorizadas.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. BASES LEGAIS (LGPD)</h2>
        <p>O tratamento de dados poderá ocorrer com base em:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Execução de contrato</li>
          <li>Cumprimento de obrigação legal</li>
          <li>Legítimo interesse</li>
          <li>Consentimento do titular (quando aplicável)</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. COMPARTILHAMENTO DE DADOS</h2>
        <p>Os dados poderão ser compartilhados:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Com provedores de hospedagem e infraestrutura</li>
          <li>Com provedores de API (como WhatsApp Business Platform)</li>
          <li>Com autoridades públicas, mediante obrigação legal</li>
          <li>Com ferramentas integradas autorizadas pelo cliente</li>
        </ul>
        <p>Todo compartilhamento é feito mediante critérios de segurança e confidencialidade.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. ARMAZENAMENTO E SEGURANÇA</h2>
        <p>Adotamos medidas técnicas e administrativas adequadas, incluindo:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Criptografia de dados quando aplicável</li>
          <li>Controle de acesso por nível de permissão</li>
          <li>Logs de auditoria</li>
          <li>Monitoramento de acessos</li>
          <li>Backup periódico</li>
        </ul>
        <p>Os dados são armazenados pelo tempo necessário para cumprir as finalidades informadas ou conforme exigido por lei.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. DIREITOS DOS TITULARES</h2>
        <p>Nos termos da LGPD, o titular poderá solicitar:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Confirmação da existência de tratamento</li>
          <li>Acesso aos dados</li>
          <li>Correção de dados incompletos</li>
          <li>Anonimização ou eliminação</li>
          <li>Portabilidade</li>
          <li>Revogação do consentimento</li>
        </ul>
        <p>As solicitações devem ser enviadas para: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. RESPONSABILIDADE DAS EMPRESAS CLIENTES</h2>
        <p>A empresa contratante da plataforma é responsável por:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Informar seus clientes sobre o uso do Chatyou</li>
          <li>Obter consentimento quando necessário</li>
          <li>Utilizar a plataforma conforme as regras da Meta</li>
          <li>Não realizar disparos abusivos ou spam</li>
          <li>Não utilizar listas compradas ou dados sem autorização</li>
        </ul>
        <p>O uso indevido pode resultar em suspensão de contas integradas, conforme regras da Meta.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. RETENÇÃO E EXCLUSÃO DE DADOS</h2>
        <p>Os dados serão mantidos:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Enquanto durar a relação contratual</li>
          <li>Pelo prazo legal exigido</li>
          <li>Pelo período necessário para defesa em processos judiciais</li>
        </ul>
        <p>Após esse período, os dados poderão ser eliminados ou anonimizados.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. TRANSFERÊNCIA INTERNACIONAL</h2>
        <p>Caso os dados sejam armazenados em servidores fora do Brasil, garantimos que a transferência observará as disposições da LGPD, adotando mecanismos adequados de proteção.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">13. ALTERAÇÕES NA POLÍTICA</h2>
        <p>Esta Política poderá ser atualizada a qualquer momento. A versão vigente estará sempre disponível em: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a></p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">14. CONTATO</h2>
        <p>Em caso de dúvidas sobre esta Política de Privacidade:</p>
        <p>
          E-mail: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          Telefone/WhatsApp: (69) 99956-5508<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a>
        </p>
      </section>
    </LegalLayout>
  )
}
