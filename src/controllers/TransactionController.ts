import TransactionInput from '../interfaces/TransactionInput';

class Transaction {
  createTransaction(idPerson: number, transaction: TransactionInput) {}
  cancelTransaction(idPerson: number, idTransaction: number) {}
  getTransactions(idPerson: number, limit: number = 10) {}
}

export default Transaction;
