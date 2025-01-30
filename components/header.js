function header() {
   return `
      <header class="d-flex flex-row align-items-center justify-content-between gap-5">
         <img  src="/img/agenda.jpg" class="logo" alt="Logo">
         <h2>Agenda de Contatos</h2>

         <nav class="mb-2 text-end""> 
            <button class="btn btn-outline-primary" onclick="alterarConteudo('contatos')">Contatos</button>        
            <button class="btn btn-outline-primary" onclick="sair()">Sair</button>    
         </nav>

      </header>
      `;
}
