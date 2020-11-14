import { Request, Response } from 'express';
import MainController from './MainController';
import RegisterController from './RegisterController';
import EmergencyController from './EmergencyController';
import TransactionController from './TransactionController';
import TransactionInput from '../interfaces/TransactionInput';
import NotificationsController from './NotificationsController';

class MiniBankController {
  private mainController: MainController;
  private registerController: RegisterController;
  private emergencyController: EmergencyController;
  private transactionController: TransactionController;
  private notificationsController: NotificationsController;

  getGeneralAmount(request: Request, response: Response) {
    const mainAmount = this.mainController.getAmount(request.body.idPerson);
    const registerAmount = this.registerController.getAmount(request.body.idPerson);
    const emergencyAmount = this.emergencyController.getAmount(request.body.idPerson);
    const generalAmount = mainAmount + registerAmount + emergencyAmount;
    return response.status(201).send(generalAmount);
  }

  getMainAmount(request: Request, response: Response) {
    const amount = this.mainController.getAmount(request.body.idPerson);
    return response.status(201).send(amount);
  }

  addMainAmount(request: Request, response: Response) {
    const idPerson: number = request.body.idPerson;
    const transaction: TransactionInput = request.body.transaction;
    this.mainController.addAmount(idPerson, transaction.amount);
    this.transactionController.createTransaction(idPerson, transaction);
    this.notificationsController.createNotification(idPerson, transaction);
    return response.status(201).send('Ok');
  }

  removeMainAmount(request: Request, response: Response) {
    const idPerson: number = request.body.idPerson;
    const transaction: TransactionInput = request.body.transaction;
    this.mainController.removeAmount(idPerson, transaction.amount);
    this.transactionController.createTransaction(idPerson, transaction);
    this.notificationsController.createNotification(idPerson, transaction);
    return response.status(201).send('Ok');
  }

  // ... Faltam addEmergencyAmount, addRegisterAmount etc
  // ... É necessário reduzir as repetições
  // ... Pequena refatoração nessa classe
}

export default MiniBankController;
