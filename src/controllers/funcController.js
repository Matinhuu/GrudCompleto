import * as func from '../repositories/funcRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/func', async (req, resp) => {
  let registros = await func.listarFunc();
  resp.send(registros);
})
endpoints.get('/func/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await func.filtrarFunc(nome);
  resp.send(registros);
})
endpoints.get('/func/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await func.escolherFunc(id);
  resp.send(registros);
})
endpoints.post('/func', async (req, resp) => {
  let novoFunc = req.body;
  
  let id = await func.alterarFunc(novoFunc);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/func/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await func.alterarFunc(id, novosDados);
  resp.send();
})
endpoints.delete('/func/:id', async (req, resp) => {
  let id = req.params.id;
  await func.apagarFunc(id);
  resp.send();
})

export default endpoints;