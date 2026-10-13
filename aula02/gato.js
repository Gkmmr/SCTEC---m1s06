const AnimalDomestico = require('./animal_domestico');

class Gato extends AnimalDomestico {
    constructor(nome, idade, raca, corPredominante) {
        super(nome, idade, raca, corPredominante);
    }

    emitirSom() {
        console.log ('miau');
    }
}

const gato = new Gato('Lili', 4, 'VL', 'branco');

gato.emitirSom();
gato.comer();
console.log(gato.corPredominante);