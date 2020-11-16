interface BankCommon {
  getAmount(idPerson: number): Promise<number>;
  addAmount(idPerson: number, amount: number): Promise<number>;
  removeAmount(idPerson: number, amount: number): Promise<number>;
}

export default BankCommon;
