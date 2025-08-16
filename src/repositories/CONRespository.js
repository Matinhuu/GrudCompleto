import { conection } from "../repositories/conection.js";

export async function listarCON() {
  const comando = `
    SELECT * 
      FROM cursos_online
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherCON(id) {
  const comando = `
    SELECT * 
      FROM cursos_online
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarCON(nome) {
  const comando = `
    SELECT * 
      FROM cursos_online
     WHERE nome like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
  return reg;
}

/*
CREATE TABLE cursos_online (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(150) NOT NULL,
  categoria VARCHAR(50),
  instrutor VARCHAR(100),
  carga_horaria INT,
  preco DECIMAL(6,2),
  data_inicio DATE,
  certificado BOOLEAN DEFAULT TRUE
);

*/

export async function inserirCON(novoCON) {
  const comando = `
    INSERT INTO cursos_online (nome, categoria, instrutor, cidade, carga_horaria, preco, data_inicio)
               values (?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoCON.nome, novoCON.categoria, novoCON.instrutor, novoCON.cidade, novoCON.carga_horaria, novoCON.preco, novoCON.data_inicio]);
  return info.insertId;
}



export async function alterarCON(id, novosDados) {
  const comando = `
    UPDATE cursos_online
       SET nome = ?, categoria = ?, instrutor = ?, cidade = ?, carga_horaria = ?, preco = ?, data_inicio = ?

     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.categoria, 
    novosDados.instrutor, 
    novosDados.cidade, 
    novosDados.carga_horaria, 
    novosDados.preco,
    novosDados.data_inicio,
    id
  ])
}


export async function apagarCON(id) {
  const comando = `
    DELETE FROM cursos_online
          WHERE id = ?
  `
  let [info] = await conection.query(comando, [id]);
}