import express from 'express';
import * as CON from './repositorios/CONRespository.js'
import * as func from './repositorios/funcRepository.js'
import * as apple from './repositorios/appleRepository.js'
import * as crush from './repositorios/crushRepository.js'
import * as curso from './repositorios/cursoRepository.js'
import * as film from './repositorios/filmesRepository.js'
import * as game from './repositorios/gameRespository.js'
import * as book from './repositorios/livrosRepository.js'
import * as rest from './repositorios/restRespository.js'
import * as time from './repositorios/timeRepository.js'
const api = express();
api.use(express.json());

api.get('/curso', async (req, resp) => {
  let registros = await listarCrush();
  resp.send(registros);
})

api.get('/curso/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await filtrarPorNome(nome);
  resp.send(registros);
})

api.get('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await consultarCurso(id);
  resp.send(registros);
})


api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await inserirCurso(novoCurso);
  
  resp.send({
    novoId: id
  })
})


api.put('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await alterarCurso(id, novosDados);
  resp.send();
})


api.delete('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  await deletarCurso(id);
  resp.send();
})



api.listen(5010, () => console.log('Volta pra mim Isabella :('))