import * as crush from '../repositories/crushRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/crush', async (req, resp) => {
  let registros = await crush.listarCrush();
  resp.send(registros);
})
endpoints.get('/crush/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await crush.filtrarCrush(nome);
  resp.send(registros);
})
endpoints.get('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await crush.escolherCrush(id);
  resp.send(registros);
})
endpoints.post('/crush', async (req, resp) => {
  let novoGame = req.body;
  
  let id = await crush.inserirCrush(novoGame);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await crush.alterarCrush(id, novosDados);
  resp.send();
})
endpoints.delete('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  await crush.apagarCrush(id);
  resp.send();
})

export default endpoints;