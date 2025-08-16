import * as time from '../repositories/timeRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/time', async (req, resp) => {
  let registros = await time.listarTimes();
  resp.send(registros);
})
endpoints.get('/time/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await time.filtrarPorNome(nome);
  resp.send(registros);
})
endpoints.get('/time/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await time.consultarTimes(id);
  resp.send(registros);
})
endpoints.post('/time', async (req, resp) => {
  let novoTime = req.body;
  
  let id = await time.inserirTime(novoTime);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/time/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await time.alterarTimes(id, novosDados);
  resp.send();
})
endpoints.delete('/time/:id', async (req, resp) => {
  let id = req.params.id;
  await time.deletarTimes(id);
  resp.send();
})

export default endpoints;