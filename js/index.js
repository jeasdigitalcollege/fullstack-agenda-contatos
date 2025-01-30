// Arquivo index.js

const MAIN = document.getElementById("main");

MAIN.innerHTML = `
    ${header()}

    <section class="card card-body mt-2">
        <div>  
            <h2>Bem Vindo ao Site Agenda de Contatos!</h2>
        </div>
    </section>

    ${footer()}`;

function alterarConteudo(pagina) {
   MAIN.innerHTML = `${header()} ${window[pagina]()} ${footer()}`;
}
