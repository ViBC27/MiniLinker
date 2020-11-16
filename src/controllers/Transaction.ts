import { getRepository } from 'typeorm';
import TransactionModel from '../models/Transaction';

class TransactionController {
  async create(data: any) {
    const repository = getRepository(TransactionModel);
    const newData = repository.create(data);
    await repository.save(newData);
    return newData;
  }
  async getTransactions(idPerson: number) {
    const repository = getRepository(TransactionModel);
    return await repository.find({
      select: ['description'],
      where: { idPerson }
    });
  }
}

export default TransactionController;
