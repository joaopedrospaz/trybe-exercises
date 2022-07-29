// primeira parte
// 1 - Mensagem de boas vindas para o personagem.
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log('Bem-vinda,', info.personagem);
console.log('**********************************************************');

//  2 - adicionar uma nova chave imprimir o obejto 
info.recorrente = 'Sim';
console.log(info); 
console.log('**********************************************************');
// parte 3 -imprimir as chaves com o for/in
for (const key in info) {
    console.log(key);
};
console.log('**********************************************************');
// parte 4 -imprimir os valores com o for/in
for (key in info) {
    console.log(info[key]);
};
console.log('**********************************************************');
// parte 5 -imprimir as chaves com o for/in
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

for (key in info) {
  console.log(info[key], 'e', info2[key]);
}
console.log('**********************************************************');

// segunda parte
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// parte 6 - acessar informações dentro de livrosFavoritos
console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 'se chama "' + leitor.livrosFavoritos[0].titulo + '"');
console.log('**********************************************************');

leitor.livrosFavoritos.push(
  {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }
)
// parte 8 -  Acesse as chaves nome e livrosFavoritos para mostrar os lirve
console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 'livros favoritos',);