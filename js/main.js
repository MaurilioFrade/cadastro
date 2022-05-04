function cadastrar(){
    let ListaUser = JSON.parse(localStorage.getItem('ListaUser')|| '[]')

    ListaUser.push(
        {
    nome : document.getElementById("firshname").value,
    sobrenome : document.getElementById("lastname").value,
    vemail : document.getElementById("email").value,
    senha : document.getElementById("number").value,
    confSenha : document.getElementById("password").value,
    celular : document.getElementById("confirmpassword").value,
    genero : document.getElementById("genero").value
        }
    )

    localStorage.setItem('ListaUser', JSON.stringify(ListaUser))
}