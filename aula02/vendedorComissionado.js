const Vendedor = require("./vendedor");

class VendedorComissionado extends Vendedor {
    constructor(nome, sobrenome, valorVendidoNoMes, salarioBase, taxaComissao) {
        super(nome, sobrenome, valorVendidoNoMes, salarioBase);
        this.taxaComissao = taxaComissao;
    }

    getSalario() {
        const salario = this.salarioBase + (this.valorVendidoNoMes * this.taxaComissao);
        return salario;
    }

}

const vendedor1 = new Vendedor('Gustavo', 'Kammer', 20000, 6000);

const vendedor2 = new VendedorComissionado('Kathlen', 'Fernanda', 40000, 6000, 0.2);

console.log(vendedor1.nome, vendedor1.sobrenome, vendedor1.valorVendidoNoMes, vendedor1.salarioBase);
console.log(vendedor2.nome, vendedor2.sobrenome, vendedor2.valorVendidoNoMes, vendedor2.salarioBase, vendedor2.getSalario());