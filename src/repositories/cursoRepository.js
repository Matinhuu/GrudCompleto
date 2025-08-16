import { conection } from "../repositories/conection.js";


export async function listarCursos() {
  const comando = `
    SELECT * 
      FROM curso
  `

  let [registros] = await conection.query(comando);
  return registros;
}

export async function consultarCurso(id) {
  const comando = `
    SELECT * 
      FROM curso
     WHERE id = ?
  `

  let [registros] = await conection.query(comando, [id]);
  return registros[0];
}


export async function filtrarPorNome(nome) {
  const comando = `
    SELECT * 
      FROM curso
     WHERE nome like ?
  `

  let [registros] = await conection.query(comando, ['%'+nome+'%']);
  return registros;
}

/*
CREATE TABLE crush (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  carga_horaria INT,
  area varchar(100)
);
*/

export async function inserirCurso(novoCurso) {
  const comando = `
    INSERT INTO curso (nome, carga_horaria, area)
               values (?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoCurso.nome, novoCurso.carga_horaria, novoCurso.area]);
  return info.insertId;
}



export async function alterarCurso(id, novosDados) {
  const comando = `
    UPDATE curso
       SET nome = ?,
           carga_horaria = ?,
           area = ?
     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome,
    novosDados.carga_horaria,
    novosDados.area,
    id
  ])
}


export async function deletarCurso(id) {
  const comando = `
    DELETE FROM curso
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}