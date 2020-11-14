interface BankCommon {
  getAmount(idPerson: number): number;
  addAmount(idPerson: number, amount: number): void;
  removeAmount(idPerson: number, amount: number): void;
}

export default BankCommon;
