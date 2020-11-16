import { getRepository } from 'typeorm';
import PersonModel from '../models/Person';

class PersonController {
  async create(data: any) {
    const repository = getRepository(PersonModel);
    const newData = repository.create(data);
    await repository.save(newData);
    return newData;
  }
  async getPerson(idPerson: number) {
    const repository = getRepository(PersonModel);
    return await repository.findOneOrFail(idPerson);
  }
  async getEmergencyStatus(idPerson: number) {
    const repository = getRepository(PersonModel);
    const result = await repository.findOneOrFail(idPerson, {
      select: ['isEmergency']
    });
    return result.isEmergency;
  }
  async setEmergencyStatus(idPerson: number, status: boolean) {
    const repository = getRepository(PersonModel);
    return await repository.update(idPerson, { isEmergency: status });
  }
}

export default PersonController;
