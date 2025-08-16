import * as book from '../repositories/livrosRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/book', async (req, resp) => {
  let registros = await book.listarLivros();
  resp.send(registros);
})
endpoints.get('/book/filtrar', async (req, resp) => {
  let titulo = req.query.nome;
  let registros = await book.filtrarLivros(titulo);
  resp.send(registros);
})
endpoints.get('/book/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await book.escolherLivros(id);
  resp.send(registros);
})
endpoints.post('/book', async (req, resp) => {
  let novoLivro = req.body;
  
  let id = await book.inserirLivro(novoLivro);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/book/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await book.alterarLivro(id, novosDados);
  resp.send();
})
endpoints.delete('/book/:id', async (req, resp) => {
  let id = req.params.id;
  await book.deletarLivro(id);
  resp.send();
})

export default endpoints;