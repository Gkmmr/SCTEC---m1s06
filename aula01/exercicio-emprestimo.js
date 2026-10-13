function solicitaEmprestimo(renda) {
    return new Promise((resolve, reject) => {
        if (renda >= 5000) {
            resolve(`Emprestimo Aprovado!`);
        } else { 
            reject('Emprestimo Reprovado!');
        }
    });
}

solicitaEmprestimo(5000)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((erro) => {
        console.log(erro);
    });
