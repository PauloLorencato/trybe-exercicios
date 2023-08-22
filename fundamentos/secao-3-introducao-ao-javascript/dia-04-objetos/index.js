const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};

console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ‘${reader.favoriteBooks[0].title}’.`);

function newFavoriteBook(object, value) {
    object.favoriteBooks.push(value);
}

newFavoriteBook(reader, {
    title: 'Harry Potter e o Prisioneiro de Azkaban', 
    author: 'JK Rowling', 
    publisher: 'Rocco',  
  })
const quantidade = reader.favoriteBooks.length;
if(quantidade === 1) {
    console.log(`${reader.name} tem ${quantidade} livro favorito.`);
}
else {
    console.log(`${reader.name} tem ${quantidade} livros favoritos.`);
}