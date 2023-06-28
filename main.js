$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();
        const tarefa = $('#cadastrar-texto').val();
        const novoItem = $(`<li>${tarefa}</li>`);;
        $(novoItem).appendTo('ul');
        $('#cadastrar-texto').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).css('text-decoration', 'line-through');
    });        

})