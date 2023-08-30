const alunos = [
    {
        nome: 'Higor',
        nota: 10
    },
    {
        nome: 'Luana',
        nota: 9.5
    },
    {
        nome: 'Gustavo',
        nota: 2
    },
    {
        nome: 'Daniel',
        nota: 5
    },
    {
        nome: 'João',
        nota: 8
    },
]

const filtrarAlunosAprovados = aluno => aluno.nota >= 6;

const alunosAprovados = alunos.filter(filtrarAlunosAprovados)

console.log(alunosAprovados)