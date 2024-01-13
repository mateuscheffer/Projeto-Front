function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    document.getElementById('nameError').innerHTML = "";
    document.getElementById('phoneError').innerHTML = "";
    document.getElementById('emailError').innerHTML = "";
    document.getElementById('messageError').innerHTML = "";
    document.getElementById('successMessage').innerHTML = "";

    if (name === "") {
        document.getElementById('nameError').innerHTML = "Por favor, preencha o campo Nome.";
    }
    if (phone === "") {
        document.getElementById('phoneError').innerHTML = "Por favor, preencha o campo Telefone.";
    }
    if (email === "") {
        document.getElementById('emailError').innerHTML = "Por favor, preencha o campo E-mail.";
    }
    if (message === "") {
        document.getElementById('messageError').innerHTML = "Por favor, preencha o campo Mensagem.";
    }

    if (name !== "" && email !== "" && message !== "") {
        document.getElementById('successMessage').innerHTML = "Formulário enviado com sucesso!";

        document.getElementById('name').value = "";
        document.getElementById('phone').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
    }
}
