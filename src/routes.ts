import { Router } from 'express';

import TransactionsController from './controllers/TransactionsController';

const routes = Router();

routes.get('/transactions', TransactionsController.index);
routes.post('/transactions', TransactionsController.create);

export default routes;
