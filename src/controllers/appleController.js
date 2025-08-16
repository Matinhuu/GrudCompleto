import * as apple from '../repositories/appleRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/apple', async (req, resp) => {
  let registros = await apple.listarApple();
  resp.send(registros);
})
endpoints.get('/apple/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await apple.filtrarApple(nome);
  resp.send(registros);
})
endpoints.get('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await apple.escolherApple(id);
  resp.send(registros);
})
endpoints.post('/apple', async (req, resp) => {
  let novoApple = req.body;
  
  let id = await apple.inserirApple(novoApple);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await apple.alterarApple(id, novosDados);
  resp.send();
})
endpoints.delete('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  await apple.apagarApple(id);
  resp.send();
})

export default endpoints;