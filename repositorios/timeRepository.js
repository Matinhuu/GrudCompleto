import { conection } from "../conection.js"


export async function listarTimes() {
  const comando = `
    SELECT * 
      FROM times
  `

  let [registros] = await conection.query(comando);
  return registros;
}

export async function consultarTimes(id) {
  const comando = `
    SELECT * 
      FROM times
     WHERE id = ?
  `

  let [registros] = await conection.query(comando, [id]);
  return registros[0];
}


export async function filtrarPorNome(nome) {
  const comando = `
    SELECT * 
      FROM times
     WHERE nome like ?
  `

  let [registros] = await conection.query(comando, ['%'+nome+'%']);
  return registros;
}

/*
CREATE TABLE times_futebol (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cidade_sede VARCHAR(100),
  estado VARCHAR(50),
  ano_fundacao INT,
  titulos_nacionais INT DEFAULT 0,
  possui_estadio_proprio BOOLEAN DEFAULT TRUE
);
*/

export async function inserirTime(novoTime) {
  const comando = `
    INSERT INTO times (nome, cidade_sede, estado, ano_fundacao, titulos_nacionais, possui_estadio_proprio)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoTime.nome, novoTime.cidade_sede, novoTime.estado, novoTime.ano_fundacao, novoTime.titulos_nacionais, novoTime.possui_estadio_proprio]);
  return info.insertId;
}



export async function alterarTimes(id, novosDados) {
  const comando = `
    UPDATE times
      SET nome = ?,
      cidade_sede = ?,
      estado, ano_fundacao = ?, 
      titulos_nacionais = ?, 
      possui_estadio_proprio = ?
     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome, 
    novosDados.cidade_sede, 
    novosDados.estado, 
    novosDados.ano_fundacao, 
    novosDados.titulos_nacionais, 
    novosDados.possui_estadio_proprio,
    id
  ])
}


export async function deletarTimes(id) {
  const comando = `
    DELETE FROM times
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}