import { conection } from "../repositories/conection.js";

export async function listarFunc() {
  const comando = `
    SELECT * 
      FROM funcionarios
  `
  let [reg] = await conection.query(comando);
  return reg;
}

export async function escolherFunc(id) {
  const comando = `
    SELECT * 
      FROM funcionarios
     WHERE id = ?
  `

  let [reg] = await conection.query(comando, [id]);
  return reg[0];
}


export async function filtrarFunc(nome) {
  const comando = `
    SELECT * 
      FROM funcionarios
     WHERE nome like ?
  `

  let [reg] = await conection.query(comando, ['%'+nome+'%']);
  return reg;
}

/*
CREATE TABLE funcionarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  cargo VARCHAR(50),
  departamento VARCHAR(50),
  salario DECIMAL(8,2),
  data_contratacao DATE,
  email VARCHAR(100),
  telefone VARCHAR(20),
  ativo BOOLEAN DEFAULT TRUE
);

*/

export async function inserirFunc(novoFunc) {
  const comando = `
    INSERT INTO funcionarios (nome, cargo, departamento, salario, data_contratacao, email, telefone, ativo)
               values (?, ?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoFunc.nome, novoFunc.cargo, novoFunc.departamento, novoFunc.salario, novoFunc.data_contratacao, novoFunc.email, novoFunc.telefone, novoFunc.ativo]);
  return info.insertId;
}



export async function alterarFunc(id, novosDados) {
  const comando = `
    UPDATE funcionarios
       SET nome = ?, 
       cargo = ?, 
       departamento = ?, 
       salario = ?, 
       data_contratacao = ?, 
       email = ?, 
       telefone = ?, 
       ativo = ?
     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome, 
    novosDados.cargo, 
    novosDados.departamento, 
    novosDados.salario, 
    novosDados.data_contratacao, 
    novosDados.email, 
    novosDados.telefone, 
    novosDados.ativo,
    id
  ])
}


export async function apagarFunc(id) {
  const comando = `
    DELETE FROM funcionarios
          WHERE id = ?
  `

  let [info] = await conection.query(comando, [id]);
}