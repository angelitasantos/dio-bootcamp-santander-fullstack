const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Sofia',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Pedro',
        nota: 5,
        turma: '2C',
    },
    {
        nome: 'Miguel',
        nota: 3,
        turma: '2C',
    },
];

function alunosAprovados(listaAlunos, media) {
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < listaAlunos.length; i++) {
        const { nome, nota } = listaAlunos[i];
        if (nota >= media) {
            aprovados.push(nome);
        } else if (nota < media) {
            reprovados.push(nome);
        }
    }
    let lista = `Aprovados: ${aprovados}, Reprovados: ${reprovados}`;
    return lista;
}

console.log(alunosAprovados(alunos, 5));