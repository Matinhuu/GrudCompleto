import { conection } from "../repositories/conection.js";

export async function listarApple() {
  const comando = `Select * from apple;`

  let [registros] = await conection.query(comando);
  return registros;
}

export async function escolherApple(id) {
  const comando = `SELECT * FROM apple 
    WHERE id = ?`

  let [registros] = await conection.query(comando, [id]);
  return registros[0];
}


export async function filtrarApple(nome) {
  const comando = `
    SELECT * FROM apple
    WHERE nome like ?`

  let [registros] = await conection.query(comando, ['%'+nome+'%']);
  return registros;
}

/*
CREATE TABLE produtos_apple (
    id_produto INT AUTO_INCREMENT PRIMARY KEY,       -- Identificador único
    nome VARCHAR(100),                                -- Nome do produto
    categoria VARCHAR(50),                            -- Categoria (ex: iPhone, MacBook)
    modelo VARCHAR(50),                               -- Modelo específico
    capacidade_armazenamento VARCHAR(20),             -- Capacidade de armazenamento
    cor VARCHAR(30),                                  -- Cor do produto
    preco DECIMAL(10,2),                              -- Preço
    data_lancamento DATETIME,                         -- Data oficial de lançamento
    status VARCHAR(30),                               -- Status (ex: Em Produção, Descontinuado)
    descricao TEXT,                                   -- Descrição detalhada
    criado_em DATETIME,                               -- Data de criação do registro
    atualizado_em DATETIME                            -- Data da última atualização
);
*/

export async function inserirApple(novoApple) {
  const comando = `
    INSERT INTO apple (nome, categoria, modelo, capacidade_armazenamento, cor, preco, data_lancamento, status, descricao, criado_em, atualizado_em)
               values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `

  let [info] = await conection.query(comando, [novoApple.nome, novoApple.categoria, novoApple.modelo, novoApple.capacidade_armazenamento, novoApple.cor, novoApple.preco, novoApple.data_lancamento, novoApple.status, novoApple.descricao, novoApple.criado_em, novoApple.atualizado_em]);
  return info.insertId;
}

export async function alterarApple(id, novosDados) {
  const comando = `
    UPDATE apple
       SET nome = ?,
       categoria, modelo = ?, 
       capacidade_armazenamento = ?, 
       cor = ?, 
       preco = ?, 
       data_lancamento = ?, 
       status = ?, 
       descricao = ?, 
       criado_em = ?, 
       atualizado_em = ?
     WHERE id = ?
  `

  let [info] = await conection.query(comando, [
    novosDados.nome, 
    novosDados.categoria, 
    novosDados.modelo, 
    novosDados.capacidade_armazenamento, 
    novosDados.cor, 
    novosDados.preco, 
    novosDados.data_lancamento,
    novosDados.status, 
    novosDados.descricao, 
    novosDados.criado_em, 
    novosDados.atualizado_em,
    id
  ])
}


export async function apagarApple(id) {
  const comando = `
    DELETE FROM apple
    WHERE id = ?`

  let [info] = await conection.query(comando, [id]);
}

