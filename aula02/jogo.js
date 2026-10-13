const Jogador = require('./jogadores');

const jogador1 = new Jogador('Gustavo');
const jogador2 = new Jogador('Kathlen');

jogador1.pontuar();

jogador2.pontuar();
jogador2.pontuar();

jogador1.pontuar();
jogador1.pontuar();

jogador1.exibirPontuacao();
jogador2.exibirPontuacao();