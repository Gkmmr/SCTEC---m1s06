const Animal = require('./animal');

class AnimalDomestico extends Animal {
    constructor (nome, idade, raca, corPredominante) {
        super(nome, idade, raca, corPredominante);
    }

    fazerCarinho() {
        console.log('miau');
    }
}

module.exports =  AnimalDomestico;