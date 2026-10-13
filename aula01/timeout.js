// setTimeout (() => {
//     console.log ('rodou depois de 1 segundo');
// }, 1000);

console.log ('1. Pedindo os dados ao servidor...');
setTimeout(() => console.log('3. Dados chegaram!'), 1000);
console.log ('2. Enquanto isso, o programa continua...');

function carregarPedidos(callback) {
    setTimeout(() => {
        console.log('Pedidos carregados!');
        callback();
    }, 1000)
}

carregarPedidos(() => (console.log('os pedidos são esses: ')));