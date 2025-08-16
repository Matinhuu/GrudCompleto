import cursoController from './controllers/cursoController.js'
import CONController from './controllers/CONController.js'
import crushController from './controllers/crushController.js'
import appleController from './controllers/appleController.js'
import filmesController from './controllers/filmesController.js'
import gameController from './controllers/gameController.js'
import livrosController from './controllers/livrosController.js'
import restController from './controllers/restController.js'
import timeController from './controllers/timeController.js'
import funcController from './controllers/funcController.js'

export function adicionarRotas(api) {
  api.use(cursoController);
  api.use(CONController);
  api.use(crushController);
  api.use(appleController);
  api.use(filmesController);
  api.use(gameController);
  api.use(livrosController);
  api.use(restController);
  api.use(timeController);
  api.use(funcController);
}