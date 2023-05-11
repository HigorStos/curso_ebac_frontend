const form = document.getElementById('form-validacao');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const numA = document.getElementById('numA');
    const numB = document.getElementById('numB');

    const maior = `O número <b>${numB.value}</b> é maior que <b>${numA.value}</b><br>Portanto, <b>B</b> é maior que <b>A</b>`;
    const menor = `O número <b>${numB.value}</b> é menor que <b>${numA.value}</b><br>Portanto, <b>B</b> é menor que <b>A</b>`;
    const igual = `O número <b>${numB.value}</b> é igual a <b>${numA.value}</b><br>Portanto, <b>B</b> é igual a <b>A</b>`;

    const valido = Number(numB.value) > Number(numA.value)
    const invalido = Number(numB.value) < Number(numA.value)
    const iguais = Number(numB.value) == Number(numA.value)
    
    if (valido){
        document.querySelector('.message').innerHTML = maior;
        const numMaior = document.querySelector('.message');
        numMaior.style.display = 'block';
        numMaior.style.backgroundColor = '#27ae60';

        numA.value = ''
        numB.value = ''
    }

    else if (invalido) {
        document.querySelector('.message').innerHTML = menor;
        const numMenor = document.querySelector('.message');
        numMenor.style.display = 'block';
        numMenor.style.backgroundColor = 'red';

        numA.value = ''
        numB.value = ''
    }

    else if (!valido && iguais) {
        document.querySelector('.message').innerHTML = igual;
        const numIgual = document.querySelector('.message')
        numIgual.style.display = 'block';
        numIgual.style.backgroundColor = 'blue';

        numA.value = ''
        numB.value = ''
    }

});