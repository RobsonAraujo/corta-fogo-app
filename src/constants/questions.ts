interface IData {
  q1: { title: string; answer1: string; answer2: string };
  q2: { title: string; answer1: string; answer2: string };
}

const Data: IData = {
  q1: {
    title: 'Onde ocorre o foco do incêndio?',
    answer1: 'Queima de materiais',
    answer2: 'Em árvores',
  },
  q2: {
    title: 'Qual a proporção do incêndio?',
    answer1: 'Baixa, o foco está em um lugar',
    answer2: 'Alta, está se alastrando',
  },
};

export default Data;
