import Reserve from '../models/Reserve';

export default {
  render(reserve: Reserve) {
    return {
      option: reserve.selected,
      date: reserve.date,
      initial_value: reserve.initial_value,
      amount: reserve.amount
    };
  }
};
