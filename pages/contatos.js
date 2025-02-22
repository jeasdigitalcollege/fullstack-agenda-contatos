function contatos() {
   return `
        <section class="d-flex flex-row justify-content-between align-items-center card card-body mt-2">
            <div>  
                <h2>Contatos</h2>
            </div>

            <div>
                <a class="btn btn-outline-primary" href="#">Novo Contato</a>
            </div>
        </section>

        <section class="card card-body mt-2">
            <table class="table table-hover table-striped">
                <thead class="table-primary">
                    <tr>
                        <th class="text-center">#Id</th>
                        <th>Nome do Contato</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th class="text-center">Ações</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="text-center">1</td>
                        <td>José Maria</td>
                        <td>ze@email.com.br</td>
                        <td>(11) 91234-5678</td>
                        <td class="text-center">
                            <div class="d-flex justify-content-center gap-2">
                                <a href="#" class="btn btn-outline-success btn-sm">
                                    Consultar
                                </a>
                                <a href="#"  class="btn btn-outline-warning btn-sm">
                                    Editar
                                </a>
                                <a href="#" class="btn btn-outline-danger btn-sm">
                                    Excluir
                                </a>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="text-center">2</td>
                        <td>Ana Beatriz</td>
                        <td>ana.beatriz@email.com</td>
                        <td>(21) 96543-2109</td>
                        <td class="text-center">
                            <div class="d-flex justify-content-center gap-2">
                                <a href="#" class="btn btn-outline-success btn-sm">
                                    Consultar
                                </a>
                                <a href="#" class="btn btn-outline-warning btn-sm">
                                    Editar
                                </a>
                                <a href="#" class="btn btn-outline-danger btn-sm">
                                    Excluir
                                </a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    `;
}
