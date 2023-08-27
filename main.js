function Aluno(nome, ra, email, status) {
    this.nome = nome;
    this.ra = ra;
    this.email = email;
    this.status = status;
}

function CienciaDaComputacao(nome, ra, email, status) {
    Aluno.call(this, nome, ra, email, status);

    this.cargaHoraria = 3200;
    this.tipoGraduacao = 'Bacharelado';
}

function ADS(nome, ra, email, status) {
    Aluno.call(this, nome, ra, email, status)

    this.cargaHoraria = 1600;
    this.tipoGraduacao = 'Tecnólogo';
}

const aluno1 = new CienciaDaComputacao("Higor", 123456, "higor@gmail.com", "Cursando");
const aluno2 = new ADS("João", 654321, "joao@gmail.com", "Concluído");
const aluno3 = new ADS("Júlia", 987654, "julia@gmail.com", "Cursando");

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);