import BankCommon from '../interfaces/BankCommon';

// Aqui vai ficar as 'Queries' do SQLite.
class Register implements BankCommon {
  getAmount(idPerson: number) {
    return 0;
  }
  addAmount(idPerson: number, amount: number) {}
  removeAmount(idPerson: number, amount: number) {}
}

export default Register;
