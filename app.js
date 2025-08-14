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

//TABELA CURSO 1

api.get('/curso', async (req, resp) => {
  let registros = await curso.listarCursos();
  resp.send(registros);
})
api.get('/curso/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await curso.filtrarPorNome(nome);
  resp.send(registros);
})
api.get('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await curso.consultarCurso(id);
  resp.send(registros);
})
api.post('/curso', async (req, resp) => {
  let novoCurso = req.body;
  
  let id = await curso.inserirCurso(novoCurso);
  
  resp.send({
    novoId: id
  })
})
api.put('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await curso.alterarCurso(id, novosDados);
  resp.send();
})
api.delete('/curso/:id', async (req, resp) => {
  let id = req.params.id;
  await curso.deletarCurso(id);
  resp.send();
})

//TABELA TIMES 2

api.get('/time', async (req, resp) => {
  let registros = await time.listarTimes();
  resp.send(registros);
})
api.get('/time/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await time.filtrarPorNome(nome);
  resp.send(registros);
})
api.get('/time/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await time.consultarTimes(id);
  resp.send(registros);
})
api.post('/time', async (req, resp) => {
  let novoTime = req.body;
  
  let id = await time.inserirTime(novoTime);
  
  resp.send({
    novoId: id
  })
})
api.put('/time/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await time.alterarTimes(id, novosDados);
  resp.send();
})
api.delete('/time/:id', async (req, resp) => {
  let id = req.params.id;
  await time.deletarTimes(id);
  resp.send();
})

//TABELA FUNCIONARIOS 3

api.get('/func', async (req, resp) => {
  let registros = await func.listarFunc();
  resp.send(registros);
})
api.get('/func/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await func.filtrarFunc(nome);
  resp.send(registros);
})
api.get('/func/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await func.escolherFunc(id);
  resp.send(registros);
})
api.post('/func', async (req, resp) => {
  let novoFunc = req.body;
  
  let id = await func.alterarFunc(novoFunc);
  
  resp.send({
    novoId: id
  })
})
api.put('/func/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await func.alterarFunc(id, novosDados);
  resp.send();
})
api.delete('/func/:id', async (req, resp) => {
  let id = req.params.id;
  await func.apagarFunc(id);
  resp.send();
})

//TABELA FILMES 4

api.get('/filme', async (req, resp) => {
  let registros = await film.listarFilmes();
  resp.send(registros);
})
api.get('/filme/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await film.filtrarFilmes(nome);
  resp.send(registros);
})
api.get('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await film.escolherFilmes(id);
  resp.send(registros);
})
api.post('/filme', async (req, resp) => {
  let novoFilme = req.body;
  
  let id = await film.inserirFilme(novoFilme);
  
  resp.send({
    novoId: id
  })
})
api.put('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await film.alterarFilme(id, novosDados);
  resp.send();
})
api.delete('/filme/:id', async (req, resp) => {
  let id = req.params.id;
  await film.apagarFilme(id);
  resp.send();
})

//TABELA RESTAURANTES 5

api.get('/rest', async (req, resp) => {
  let registros = await rest.listarRest();
  resp.send(registros);
})
api.get('/rest/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await rest.filtrarRest(nome);
  resp.send(registros);
})
api.get('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await rest.escolherRest(id);
  resp.send(registros);
})
api.post('/rest', async (req, resp) => {
  let novoRest = req.body;
  
  let id = await rest.inserirRest(novoRest);
  
  resp.send({
    novoId: id
  })
})
api.put('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await rest.alterarRest(id, novosDados);
  resp.send();
})
api.delete('/rest/:id', async (req, resp) => {
  let id = req.params.id;
  await rest.apagarRest(id);
  resp.send();
})

//TABELA LIVROS 6

api.get('/book', async (req, resp) => {
  let registros = await book.listarLivros();
  resp.send(registros);
})
api.get('/book/filtrar', async (req, resp) => {
  let titulo = req.query.nome;
  let registros = await book.filtrarLivros(titulo);
  resp.send(registros);
})
api.get('/book/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await book.escolherLivros(id);
  resp.send(registros);
})
api.post('/book', async (req, resp) => {
  let novoLivro = req.body;
  
  let id = await book.inserirLivro(novoLivro);
  
  resp.send({
    novoId: id
  })
})
api.put('/book/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await book.alterarLivro(id, novosDados);
  resp.send();
})
api.delete('/book/:id', async (req, resp) => {
  let id = req.params.id;
  await book.deletarLivro(id);
  resp.send();
})

//TABELA GAME 7

api.get('/game', async (req, resp) => {
  let registros = await game.listarGame();
  resp.send(registros);
})
api.get('/game/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await game.filtrarGame(nome);
  resp.send(registros);
})
api.get('/game/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await game.escolherGame(id);
  resp.send(registros);
})
api.post('/game', async (req, resp) => {
  let novoGame = req.body;
  
  let id = await game.inserirGame(novoGame);
  
  resp.send({
    novoId: id
  })
})
api.put('/game/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await game.alterarGame(id, novosDados);
  resp.send();
})
api.delete('/game/:id', async (req, resp) => {
  let id = req.params.id;
  await game.deletarGame(id);
  resp.send();
})


//TABELA APPLE 8

api.get('/apple', async (req, resp) => {
  let registros = await apple.listarApple();
  resp.send(registros);
})
api.get('/apple/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await apple.filtrarApple(nome);
  resp.send(registros);
})
api.get('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await apple.escolherApple(id);
  resp.send(registros);
})
api.post('/apple', async (req, resp) => {
  let novoApple = req.body;
  
  let id = await apple.inserirApple(novoApple);
  
  resp.send({
    novoId: id
  })
})
api.put('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await apple.alterarApple(id, novosDados);
  resp.send();
})
api.delete('/apple/:id', async (req, resp) => {
  let id = req.params.id;
  await apple.apagarApple(id);
  resp.send();
})

//TABELA CRUSH 9

api.get('/crush', async (req, resp) => {
  let registros = await crush.listarCrush();
  resp.send(registros);
})
api.get('/crush/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await crush.filtrarCrush(nome);
  resp.send(registros);
})
api.get('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await crush.escolherCrush(id);
  resp.send(registros);
})
api.post('/crush', async (req, resp) => {
  let novoGame = req.body;
  
  let id = await crush.inserirCrush(novoGame);
  
  resp.send({
    novoId: id
  })
})
api.put('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await crush.alterarCrush(id, novosDados);
  resp.send();
})
api.delete('/crush/:id', async (req, resp) => {
  let id = req.params.id;
  await crush.apagarCrush(id);
  resp.send();
})

//TABELA CURSO ONLINE 10

api.get('/con', async (req, resp) => {
  let registros = await CON.listarCON();
  resp.send(registros);
})
api.get('/con/filtrar', async (req, resp) => {
  let nome = req.query.nome;
  let registros = await CON.filtrarCON(nome);
  resp.send(registros);
})
api.get('/con/:id', async (req, resp) => {
  let id = req.params.id;
  let registros = await CON.escolherCON(id);
  resp.send(registros);
})
api.post('/con', async (req, resp) => {
  let novoCON = req.body;
  
  let id = await CON.inserirCON(novoCON);
  
  resp.send({
    novoId: id
  })
})
api.put('/con/:id', async (req, resp) => {
  let id = req.params.id;
  let novosDados = req.body;

  await CON.alterarCON(id, novosDados);
  resp.send();
})
api.delete('/con/:id', async (req, resp) => {
  let id = req.params.id;
  await CON.apagarCON(id);
  resp.send();
})

api.listen(5010, () => console.log('Volta pra mim Isabella S2'))