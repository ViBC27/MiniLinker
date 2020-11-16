import { getRepository } from 'typeorm';
import MainModel from '../models/Main';
import BankCommon from '../interfaces/BankCommon';

class MainController implements BankCommon {
  async create(data: any) {
    const repository = getRepository(MainModel);
    const newData = repository.create(data);
    await repository.save(newData);
    return newData;
  }
  async getAmount(idPerson: number) {
    const repository = getRepository(MainModel);
    const result = await repository.findOneOrFail(idPerson, {
      select: ['amount']
    });
    return result.amount;
  }
  async addAmount(idPerson: number, amount: number) {
    const repository = getRepository(MainModel);
    const previousAmount = await this.getAmount(idPerson);
    const newAmount = previousAmount + amount;
    await repository.update(idPerson, { amount: newAmount });
    return newAmount;
  }
  async removeAmount(idPerson: number, amount: number) {
    const repository = getRepository(MainModel);
    const previousAmount = await this.getAmount(idPerson);
    const newAmount = previousAmount - amount;
    await repository.update(idPerson, { amount: newAmount });
    return newAmount;
  }
}

export default MainController;
