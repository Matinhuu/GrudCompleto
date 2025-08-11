import { conection } from "../conection.js"


export async function listarRest() {
  const comando = `
    SELECT * 
      FROM restaurantes
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherRest(id) {
  const comando = `
    SELECT * 
      FROM restaurantes
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarRest(nome) {
  const comando = `
    SELECT * 
      FROM restaurantes
     WHERE nome like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
  return reg;
}

/*
CREATE TABLE restaurantes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo_cozinha VARCHAR(50),
  cidade VARCHAR(100),
  estado VARCHAR(50),
  capacidade INT,
  possui_delivery BOOLEAN DEFAULT TRUE,
  avaliacao DECIMAL(2,1)
);

*/

export async function inserirRest(novoRest) {
  const comando = `
    INSERT INTO restaurantes (nome, tipo_cozinha, cidade, estado, capacidade, possui_delivery, avaliacao)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoRest.nome, novoRest.tipo_cozinha, novoRest.cidade, novoRest.estado, novoRest.capacidade, novoRest.possui_delivery, novoRest.avaliacao]);
  return info.insertId;
}



export async function alterarRest(id, novosDados) {
  const comando = `
    UPDATE restaurantes
       SET nome = ?, 
       tipo_cozinha = ?, 
       cidade = ?, 
       estado = ?, 
       capacidade = ?, 
       possui_delivery = ?, 
       avaliacao = ?
     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome, 
    novosDados.tipo_cozinha, 
    novosDados.cidade, 
    novosDados.estado, 
    novosDados.capacidade, 
    novosDados.possui_delivery, 
    novosDados.avaliacao,
    id
  ])
}


export async function apagarRest(id) {
  const comando = `
    DELETE FROM restaurantes
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}