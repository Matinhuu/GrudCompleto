import * as rest from '../repositories/restRespository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/rest', async (req, resp) => {
  let registros = await rest.listarRest();
  resp.send(registros);
})
endpoints.get('/rest/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await rest.filtrarRest(nome);
  resp.send(registros);
})
endpoints.get('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await rest.escolherRest(id);
  resp.send(registros);
})
endpoints.post('/rest', async (req, resp) => {
  let novoRest = req.body;
  
  let id = await rest.inserirRest(novoRest);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await rest.alterarRest(id, novosDados);
  resp.send();
})
endpoints.delete('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  await rest.apagarRest(id);
  resp.send();
})

export default endpoints;