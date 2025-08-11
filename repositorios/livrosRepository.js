import { conection } from "../conection.js"


export async function listarCrush() {
  const comando = `
    SELECT * 
      FROM crush
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherCrush(id) {
  const comando = `
    SELECT * 
      FROM crush
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarCrush(nome) {
  const comando = `
    SELECT * 
      FROM crush
     WHERE nome like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
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

export async function inserirCrush(novoCrush) {
  const comando = `
    INSERT INTO crush (nome, idade, genero, cidade, interesses, data_conheceu, tem_contato, nota_paixao, status_relacionamento)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?, )
  `

  let [info] = await conection.query(comando, [novoCrush.nome, novoCrush.idade, novoCrush.genero, novoCrush.cidade, novoCrush.interesses, novoCrush.data_conheceu, novoCrush.tem_contato, novoCrush.nota_paixao, novoCrush.status_relacionamento]);
  return info.insertId;
}



export async function alterarCrush(id, novosDados) {
  const comando = `
    UPDATE curso
       SET nome = ?, 
       idade = ?, 
       genero = ?, 
       cidade = ?, 
       interesses = ?, 
       data_conheceu = ?, 
       tem_contato = ?, 
       nota_paixao = ?, 
       status_relacionamento = ?

     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.idade,
    novosDados.carga_horaria,
    novosDados.genero,
    novosDados.cidade,
    novosDados.interesses,
    novosDados.data_conheceu,
    novosDados.tem_contato,
    novosDados.nota_paixao,
    novosDados.status_relacionamento,
    id
  ])
}


export async function apagarCrush(id) {
  const comando = `
    DELETE FROM crush
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}