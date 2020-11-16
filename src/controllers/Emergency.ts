import { getRepository } from 'typeorm';
import EmergencyModel from '../models/Emergency';
import BankCommon from '../interfaces/BankCommon';

class EmergencyController implements BankCommon {
  async create(data: any) {
    const repository = getRepository(EmergencyModel);
    const newData = repository.create(data);
    await repository.save(newData);
    return newData;
  }
  async getAmount(idPerson: number) {
    const repository = getRepository(EmergencyModel);
    const result = await repository.findOneOrFail(idPerson, {
      select: ['amount']
    });
    return result.amount;
  }
  async addAmount(idPerson: number, amount: number) {
    const repository = getRepository(EmergencyModel);
    const previousAmount = await this.getAmount(idPerson);
    const newAmount = previousAmount + amount;
    await repository.update(idPerson, { amount: newAmount });
    return newAmount;
  }
  async removeAmount(idPerson: number, amount: number) {
    const repository = getRepository(EmergencyModel);
    const previousAmount = await this.getAmount(idPerson);
    const newAmount = previousAmount - amount;
    await repository.update(idPerson, { amount: newAmount });
    return newAmount;
  }
}

export default EmergencyController;
