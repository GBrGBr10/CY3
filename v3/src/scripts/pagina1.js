document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores dos campos de e-mail e senha
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validação simples
    if (email === "" || password === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Login bem-sucedido!");
       
    }

});

