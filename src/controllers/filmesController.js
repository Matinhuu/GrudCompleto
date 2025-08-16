import * as film from '../repositories/filmesRepository.js';

import { Router } from 'express';
const endpoints = Router();

endpoints.get('/filme', async (req, resp) => {
  let registros = await film.listarFilmes();
  resp.send(registros);
})
endpoints.get('/filme/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await film.filtrarFilmes(nome);
  resp.send(registros);
})
endpoints.get('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await film.escolherFilmes(id);
  resp.send(registros);
})
endpoints.post('/filme', async (req, resp) => {
  let novoFilme = req.body;
  
  let id = await film.inserirFilme(novoFilme);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await film.alterarFilme(id, novosDados);
  resp.send();
})
endpoints.delete('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  await film.apagarFilme(id);
  resp.send();
})

export default endpoints;