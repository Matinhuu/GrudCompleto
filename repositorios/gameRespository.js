import { conection } from "../conection.js"


export async function listarGame() {
  const comando = `
    SELECT * 
      FROM jogos_video
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherGame(id) {
  const comando = `
    SELECT * 
      FROM jogos_video
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarGame(nome) {
  const comando = `
    SELECT * 
      FROM jogos_video
     WHERE nome like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
  return reg;
}

/*
CREATE TABLE jogos_video (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150) NOT NULL,
  plataforma VARCHAR(50),
  genero VARCHAR(50),
  ano_lancamento INT,
  desenvolvedora VARCHAR(100),
  multiplayer BOOLEAN DEFAULT FALSE
);

*/

export async function inserirGame(novoGame) {
  const comando = `
    INSERT INTO jogos_video (titulo, plataforma, genero, ano_lancamento, desenvolvedora, multiplayer)
               values (?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoGame.titulo, novoGame.plataforma, novoGame.genero, novoGame.ano_lancamento, novoGame.desenvolvedora, novoGame.multiplayer]);
  return info.insertId;
}



export async function alterarGame(id, novosDados) {
  const comando = `
    UPDATE jogos_video
       SET titulo = ?, 
       plataforma = ?, 
       genero = ?, 
       ano_lancamento = ?, 
       desenvolvedora = ?, 
       multiplayer = ?

     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.titulo,
    novosDados.plataforma, 
    novosDados.genero, 
    novosDados.ano_lancamento, 
    novosDados.desenvolvedora, 
    novosDados.multiplayer,
    id
  ])
}


export async function deletarGame(id) {
  const comando = `
    DELETE FROM jogos_video
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}