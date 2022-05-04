function cadastrar() {
    let ListaUser = JSON.parse(localStorage.getItem('ListaUser') || '[]')

    ListaUser.push(
        {
            nome: document.getElementById("firshname").value,
            sobrenome: document.getElementById("lastname").value,
            email: document.getElementById("email").value,
            senha: document.getElementById("number").value,
            confSenha: document.getElementById("password").value,
            celular: document.getElementById("confirmpassword").value,
            genero: document.getElementById("genero").value
        }
    )

    localStorage.setItem('ListaUser', JSON.stringify(ListaUser))

    //limpar campos
    document.getElementById("firshname").value = "",
        document.getElementById("lastname").value = "",
        document.getElementById("email").value = "",
        document.getElementById("number").value = "",
        document.getElementById("password").value = "",
        document.getElementById("confirmpassword").value = ""
}