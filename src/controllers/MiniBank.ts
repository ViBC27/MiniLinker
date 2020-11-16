import MainController from './Main';
import PersonController from './Person';
import { Request, Response } from 'express';
import EmergencyController from './Emergency';
import TransactionController from './Transaction';

class MiniBankController {
  async createPerson(request: Request, response: Response) {
    const main = new MainController();
    const person = new PersonController();
    const emergency = new EmergencyController();
    await person.create(request.body.person);
    await emergency.create({ idPerson: 1, amount: 0 });
    await main.create({ idPerson: 1, amount: 0 });
    return response.status(201).send('Pessoa adicionada');
  }

  async getPerson(request: Request, response: Response) {
    const person = new PersonController();
    const idPerson = request.body.idPerson;
    const personData = await person.getPerson(idPerson);
    return response.status(201).send(personData);
  }

  async getTransactions(request: Request, response: Response) {
    const transactions = new TransactionController();
    const idPerson = request.body.idPerson;
    const transactionsData = transactions.getTransactions(idPerson);
    return response.status(201).send({ transactions: transactionsData });
  }

  async activeEmergency(request: Request, response: Response) {
    const transactions = new TransactionController();
    const person = new PersonController();
    const idPerson = request.body.idPerson;
    if (await person.getEmergencyStatus(idPerson)) {
      return response.status(201).send('Error: Recurso já ativado');
    }
    await person.setEmergencyStatus(idPerson, true);
    await transactions.create({
      idPerson,
      amount: 0,
      date: new Date(),
      description: 'Reserva de Emergência ativida'
    });
    return response.status(201).send('Alteração realizada');
  }

  async desactiveEmergency(request: Request, response: Response) {
    const transactions = new TransactionController();
    const person = new PersonController();
    const idPerson = request.body.idPerson;
    if (await person.getEmergencyStatus(idPerson)) {
      const main = new MainController();
      const emergency = new EmergencyController();
      const amount = await emergency.getAmount(idPerson);
      await main.addAmount(idPerson, amount);
      await emergency.removeAmount(idPerson, amount);
      await person.setEmergencyStatus(idPerson, false);
      await transactions.create({
        idPerson,
        amount: 0,
        date: new Date(),
        description: 'Reserva de Emergência desativida'
      });
      return response.status(201).send('Alteração realizada');
    } else return response.status(201).send('Error: Recurso já desativado');
  }

  async getEmergencyAmount(request: Request, response: Response) {
    const person = new PersonController();
    const emergency = new EmergencyController();
    const idPerson: number = request.body.idPerson;
    if (await person.getEmergencyStatus(idPerson)) {
      const amount = await emergency.getAmount(idPerson);
      return response.status(201).send({ amount });
    } else return response.status(201).send('Error: Recurso desativado');
  }

  async addEmergencyAmount(request: Request, response: Response) {
    const transactions = new TransactionController();
    const person = new PersonController();
    const emergency = new EmergencyController();
    const amount: number = request.body.amount;
    const idPerson: number = request.body.idPerson;
    if (await person.getEmergencyStatus(idPerson)) {
      await emergency.addAmount(idPerson, amount);
      const newAmount = await emergency.getAmount(idPerson);
      await transactions.create({
        idPerson,
        amount,
        date: new Date(),
        description: 'Montante adicionado a reserva de emergência'
      });
      return response.status(201).send({ amount: newAmount });
    } else return response.status(201).send('Error: Recurso desativado');
  }

  async removeEmergencyAmount(request: Request, response: Response) {
    const transactions = new TransactionController();
    const person = new PersonController();
    const emergency = new EmergencyController();
    const amount: number = request.body.amount;
    const idPerson: number = request.body.idPerson;
    if (await person.getEmergencyStatus(idPerson)) {
      await emergency.removeAmount(idPerson, amount);
      const newAmount = await emergency.getAmount(idPerson);
      await transactions.create({
        idPerson,
        amount,
        date: new Date(),
        description: 'Montante removido da reserva de emergência'
      });
      return response.status(201).send({ amount: newAmount });
    } else return response.status(201).send('Error: Recurso desativado');
  }
}

export default MiniBankController;
