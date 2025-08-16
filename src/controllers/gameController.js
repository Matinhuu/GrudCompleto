import * as game from '../repositories/gameRespository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/game', async (req, resp) => {
  let registros = await game.listarGame();
  resp.send(registros);
})
endpoints.get('/game/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await game.filtrarGame(nome);
  resp.send(registros);
})
endpoints.get('/game/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await game.escolherGame(id);
  resp.send(registros);
})
endpoints.post('/game', async (req, resp) => {
  let novoGame = req.body;
  
  let id = await game.inserirGame(novoGame);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/game/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await game.alterarGame(id, novosDados);
  resp.send();
})
endpoints.delete('/game/:id', async (req, resp) => {
  let id = req.params.id;
  await game.deletarGame(id);
  resp.send();
})

export default endpoints;