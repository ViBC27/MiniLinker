import { Router } from 'express';
import multer from 'multer';

import TransactionsController from './controllers/TransactionsController';
import UserController from './controllers/UserController';
import ReserveController from './controllers/ReserveController';

import multerConfig from './config/multer';

const routes = Router();
const upload = multer(multerConfig);

routes.post('/transactions', TransactionsController.create);
routes.get('/transactions', TransactionsController.index);

routes.post('/user', upload.single('image'), UserController.create);
routes.get('/user', UserController.show);

routes.post('/reserve', ReserveController.create);
routes.get('/reserve', ReserveController.show);

export default routes;
