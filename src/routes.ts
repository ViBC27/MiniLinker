import { Router } from 'express';
import MiniBankController from './controllers/MiniBank';

const bankRouter = Router();
const mainRouter = Router();
const personRouter = Router();
const registerRouter = Router();
const emergencyRouter = Router();
const transactionRouter = Router();
const miniBank = new MiniBankController();

bankRouter.use('/main', mainRouter);
bankRouter.use('/register', registerRouter);
// bankRouter.route('/amount').get(miniBank.getGeneralAmount);

bankRouter.use('/person', personRouter);
personRouter.post('/getPerson', miniBank.getPerson);
personRouter.post('/createPerson', miniBank.createPerson);

bankRouter.use('/transaction', transactionRouter);
transactionRouter.post('/getTransactions', miniBank.getTransactions);

bankRouter.use('/emergency', emergencyRouter);
emergencyRouter.post('/getAmount', miniBank.getEmergencyAmount);
emergencyRouter.post('/addAmount', miniBank.addEmergencyAmount);
emergencyRouter.post('/removeAmount', miniBank.removeEmergencyAmount);
emergencyRouter.post('/desactiveEmergency', miniBank.desactiveEmergency);
emergencyRouter.post('/activeEmergency', miniBank.activeEmergency);
// mainRouter
//   .route('/amount')
//   .get(miniBank.getMainAmount)
//   .post(miniBank.addMainAmount)
//   .put(miniBank.removeMainAmount);
//
// registerRouter
//   .route('/amount')
//   .get(miniBank.getRegisterAmount)
//   .post(miniBank.addRegisterAmount)
//   .put(miniBank.removeRegisterAmount);

export default bankRouter;
