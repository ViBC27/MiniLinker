import Transaction from '../models/Transaction';

export default {
  render(transaction: Transaction) {
    return {
      id: transaction.id,
      name: transaction.name,
      description: transaction.description,
      date: transaction.date,
      value: transaction.value
    };
  },

  renderMany(transaction: Transaction[]) {
    return transaction.map(transaction => this.render(transaction));
  }
};
