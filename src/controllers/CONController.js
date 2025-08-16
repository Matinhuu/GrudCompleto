import * as CON from '../repositories/CONRespository.js'

import { Router } from 'express'
const endpoints = Router();

endpoints.get('/con', async (req, resp) => {
  let registros = await CON.listarCON();
  resp.send(registros);
})
endpoints.get('/con/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await CON.filtrarCON(nome);
  resp.send(registros);
})
endpoints.get('/con/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await CON.escolherCON(id);
  resp.send(registros);
})
endpoints.post('/con', async (req, resp) => {
  let novoCON = req.body;
  
  let id = await CON.inserirCON(novoCON);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/con/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await CON.alterarCON(id, novosDados);
  resp.send();
})
endpoints.delete('/con/:id', async (req, resp) => {
  let id = req.params.id;
  await CON.apagarCON(id);
  resp.send();
})

export default endpoints;