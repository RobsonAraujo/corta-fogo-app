interface IData {
  q1: { title: string; answer1: string; answer2: string; answer3: string };
  q2: { title: string; answer1: string; answer2: string; answer3: string };
}

const Data: IData = {
  q1: {
    title: 'Onde ocorre o foco do incêndio?',
    answer1: 'Solo',
    answer2: 'Copa das árvores',
    answer3: 'Solo e copa das árvores',
  },
  q2: {
    title: 'Qual a proporção do incêndio?',
    answer1: 'Baixa, até 10.000 m²',
    answer2: 'Média, até 5 km²',
    answer3: 'Alta, acima de 5 km²',
  },
};

export default Data;
