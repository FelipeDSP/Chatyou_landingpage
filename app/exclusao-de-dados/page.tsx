import LegalLayout from "@/components/legal-layout"

export default function DataDeletionPolicyPage() {
  return (
    <LegalLayout title="Política de Exclusão de Dados de Usuário" lastUpdated="Última atualização: Fevereiro de 2026">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. IDENTIFICAÇÃO</h2>
        <p>O <strong>Chatyou</strong> é um serviço de gestão de atendimento multicanal desenvolvido por:</p>
        <p>
          <strong>Santos e Cia LTDA</strong><br />
          CNPJ: 34.036.537/0001-23<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a><br />
          E-mail para solicitações: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          WhatsApp: (69) 99956-5508
        </p>
        <p>Esta Política atende às exigências da Meta Platforms Inc. para aplicações que utilizam integrações com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WhatsApp Business Platform</li>
          <li>Facebook Messenger</li>
          <li>Instagram Graph API</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. OBJETIVO</h2>
        <p>Esta política descreve:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Como os usuários podem solicitar a exclusão de seus dados</li>
          <li>Como as empresas clientes podem solicitar exclusão</li>
          <li>Como o Chatyou processa e elimina dados</li>
          <li>Prazos e exceções legais</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. QUEM PODE SOLICITAR A EXCLUSÃO</h2>
        <p>A solicitação pode ser feita por:</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.1 Usuário Final (Cliente da empresa que utiliza o Chatyou)</h3>
        <p>Pessoa que interagiu via WhatsApp, Instagram ou Facebook.</p>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">3.2 Empresa Contratante</h3>
        <p>Cliente direto do Chatyou.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. COMO SOLICITAR A EXCLUSÃO</h2>
        
        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">🔹 Para Usuários Finais</h3>
        <p>O titular poderá solicitar a exclusão de seus dados enviando:</p>
        <p>E-mail para: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />Ou<br />WhatsApp: (69) 99956-5508</p>
        <p>A solicitação deverá conter:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome completo</li>
          <li>Número de telefone ou ID utilizado na interação</li>
          <li>Empresa com a qual manteve contato</li>
          <li>Descrição clara da solicitação</li>
        </ul>
        <p>O Chatyou poderá solicitar comprovação de identidade.</p>

        <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">🔹 Para Empresas Clientes</h3>
        <p>A empresa poderá solicitar exclusão:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Pelo painel administrativo</li>
          <li>Ou via e-mail oficial do responsável cadastrado</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. PROCEDIMENTO DE EXCLUSÃO</h2>
        <p>Após o recebimento da solicitação válida:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>A identidade do solicitante será verificada.</li>
          <li>O pedido será registrado.</li>
          <li>Os dados serão localizados nos sistemas.</li>
          <li>Será realizada exclusão ou anonimização conforme aplicável.</li>
        </ol>
        <p>Prazo estimado para conclusão: <strong>até 15 dias úteis</strong>, salvo exigência legal diversa.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. DADOS QUE PODEM SER EXCLUÍDOS</h2>
        <p>Podem ser excluídos:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Nome</li>
          <li>Número de telefone</li>
          <li>ID de perfil</li>
          <li>Histórico de mensagens</li>
          <li>Arquivos enviados</li>
          <li>Logs associados ao atendimento</li>
        </ul>
        <p>Quando necessário, os dados poderão ser anonimizados ao invés de excluídos.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. LIMITAÇÕES À EXCLUSÃO</h2>
        <p>A exclusão poderá não ocorrer imediatamente quando:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Houver obrigação legal de retenção</li>
          <li>Existir processo judicial em andamento</li>
          <li>Houver necessidade de cumprimento regulatório</li>
          <li>Existirem obrigações fiscais ou contábeis</li>
        </ul>
        <p>Nestes casos, os dados permanecerão armazenados com acesso restrito.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. DADOS TRATADOS POR INTEGRAÇÃO COM A META</h2>
        <p>Quando os dados forem provenientes de integrações com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>WhatsApp Business Platform</li>
          <li>Instagram</li>
          <li>Facebook Messenger</li>
        </ul>
        <p>A exclusão dentro do Chatyou não substitui a exclusão diretamente nos serviços da Meta Platforms Inc.</p>
        <p>O usuário também poderá exercer seus direitos diretamente junto à Meta, conforme as políticas próprias dessas plataformas.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">9. CONFIRMAÇÃO DA EXCLUSÃO</h2>
        <p>Após a conclusão:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Será enviada confirmação por e-mail</li>
          <li>Poderá ser emitido protocolo da solicitação</li>
          <li>Será informado se houve exclusão total ou anonimização</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">10. SEGURANÇA NO PROCESSO</h2>
        <p>Durante o processo de exclusão:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Os dados permanecem protegidos</li>
          <li>O acesso é restrito</li>
          <li>Há registro de auditoria</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">11. CANAL OFICIAL PARA SOLICITAÇÕES</h2>
        <p>
          E-mail: <a href="mailto:suporte@estudyou.com" className="text-primary hover:underline">suporte@estudyou.com</a><br />
          Telefone/WhatsApp: (69) 99956-5508<br />
          Site: <a href="https://www.chatyou.chat" className="text-primary hover:underline">www.chatyou.chat</a>
        </p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">12. CONFORMIDADE LEGAL</h2>
        <p>Esta Política está em conformidade com:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Lei nº 13.709/2018 (LGPD)</li>
          <li>Diretrizes da ANPD</li>
          <li>Exigências da Meta Platforms Inc. para aplicativos integrados</li>
        </ul>
      </section>
    </LegalLayout>
  )
}
