import { conection } from "../repositories/conection.js";


export async function listarFilmes() {
  const comando = `
    SELECT * 
      FROM filmes
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherFilmes(id) {
  const comando = `
    SELECT * 
      FROM filmes
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarFilmes(nome) {
  const comando = `
    SELECT * 
      FROM filmes
     WHERE titulo like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
  return reg;
}

/*
CREATE TABLE filmes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  diretor VARCHAR(100),
  genero VARCHAR(50),
  ano_lancamento INT,
  duracao_min INT,
  classificacao_etaria VARCHAR(10),
  bilheteria_mundial DECIMAL(12,2)
);
*/

export async function inserirFilme(novoFilme) {
  const comando = `
    INSERT INTO filmes (titulo, diretor, genero, ano_lancamento, duracao_min, classificacao_etaria, bilheteria_mundial)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoFilme.titulo, novoFilme.diretor, novoFilme.genero, novoFilme.ano_lancamento, novoFilme.duracao_min, novoFilme.classificacao_etaria, novoFilme.bilheteria_mundial]);
  return info.insertId;
}



export async function alterarFilme(id, novosDados) {
  const comando = `
    UPDATE filmes
       SET titulo = ?,
       diretor = ?, 
       genero = ?, 
       ano_lancamento = ?, 
       duracao_min = ?, 
       classificacao_etaria = ?, 
       bilheteria_mundial = ?

     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.titulo, 
    novosDados.diretor, 
    novosDados.genero, 
    novosDados.ano_lancamento, 
    novosDados.duracao_min, 
    novosDados.classificacao_etaria, 
    novosDados.bilheteria_mundial,
    id
  ])
}


export async function apagarFilme(id) {
  const comando = `
    DELETE FROM filmes
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}