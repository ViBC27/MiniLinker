import { Router } from 'express';
import MiniBankController from './controllers/MiniBankController';

const bankRouter = Router();
const mainRouter = Router();
const registerRouter = Router();
const emergencyRouter = Router();
const miniBank = new MiniBankController();

bankRouter.use('/main');
bankRouter.use('/register');
bankRouter.use('/emergency');

bankRouter.route('/amount').get(miniBank.getGeneralAmount);

mainRouter
  .route('/amount')
  .get(miniBank.getMainAmount)
  .post(miniBank.addMainAmount)
  .put(miniBank.removeMainAmount);

// registerRouter.route('/amount')
//   .get(miniBank.getRegisterAmount)
//   .post(miniBank.addRegisterAmount)
//   .put(miniBank.removeRegisterAmount);
//
// emergencyRouter.route('/amount')
//   .get(miniBank.getEmergencyAmount)
//   .post(miniBank.addEmergencyAmount)
//   .put(miniBank.removeEmergencyAmount);

export default routes;
