$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000');

    $('#cpf').mask('000.000.000-00')

    $('#cep').mask('00000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: 'Por favor, insira o seu e-mail.',
            telefone: 'Por favor, insira o seu telefone.',
            cpf: 'Por favor, insira o seu cpf.',
            endereco: 'Por favor, insira o seu endereço.',
            cep: 'Por favor, insira o seu cep.',
        },
        submitHandler: function(form) {
            alert("Formulário enviado com sucesso!");
            $('form input').val('')
        },
        invalidHandler: function(evento, validador) {
            let camposInvalidos = validador.numberOfInvalids();
            alert("Existem " + camposInvalidos + " campos inválidos!");
        }
    })

});