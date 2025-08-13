import { conection } from "../conection.js"


export async function listarLivros() {
  const comando = `
    SELECT * 
      FROM livros
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherLivros(id) {
  const comando = `
    SELECT * 
      FROM livros
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarLivros(titulo) {
  const comando = `
    SELECT * 
      FROM livros
     WHERE titulo like ?
  `

  let [reg] = await conection.query(comando, ['%'+titulo+'%']);
  return reg;
}

/*
CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  autor VARCHAR(100) NOT NULL,
  genero VARCHAR(50),
  ano_publicacao INT,
  paginas INT,
  editora VARCHAR(100),
  preco DECIMAL(6,2)
);

*/

export async function inserirLivro(novoLivro) {
  const comando = `
    INSERT INTO livros (titulo, autor, genero, ano_publicacao, paginas, editora, preco)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoLivro.titulo, novoLivro.autor, novoLivro.genero, novoLivro.ano_publicacao, novoLivro.paginas, novoLivro.editora, novoLivro.preco]);
  return info.insertId;
}



export async function alterarLivro(id, novosDados) {
  const comando = `
    UPDATE livros
       SET titulo = ?, 
       autor = ?, 
       genero = ?, 
       ano_publicacao = ?, 
       paginas = ?, 
       editora = ?, 
       preco = ?

     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.autor,
    novosDados.genero,
    novosDados.ano_publicacao,
    novosDados.paginas,
    novosDados.editora,
    novosDados.preco,
    id
  ])
}


export async function deletarLivro(id) {
  const comando = `
    DELETE FROM livros
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}