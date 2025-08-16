import * as curso from '../repositories/cursoRepository.js';

import { Router } from "express";
const endpoints = Router();

endpoints.get('/curso', async (req, resp) => {
  let registros = await curso.listarCursos();
  resp.send(registros);
})
endpoints.get('/curso/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await curso.filtrarPorNome(nome);
  resp.send(registros);
})
endpoints.get('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await curso.consultarCurso(id);
  resp.send(registros);
})
endpoints.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await curso.inserirCurso(novoCurso);
  
  resp.send({
    novoId: id
  })
})
endpoints.put('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await curso.alterarCurso(id, novosDados);
  resp.send();
})
endpoints.delete('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  await curso.deletarCurso(id);
  resp.send();
})

export default endpoints;