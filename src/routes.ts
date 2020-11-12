import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send({ message: 'top' });
});

export default routes;
