import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Transaction from '../models/Transaction';
import TransactionView from '../views/transactions_views';

export default {
  async create(req: Request, res: Response) {
    const { name, description, date, value } = req.body;

    const transactionRepository = getRepository(Transaction);

    const transaction = transactionRepository.create({
      name,
      description,
      date,
      value
    });

    await transactionRepository.save(transaction);

    return res.status(201).json(transaction);
  },

  async index(req: Request, res: Response) {
    const transactionsRepository = getRepository(Transaction);

    const transactions = await transactionsRepository.find({
      select: ['id', 'name', 'description', 'date', 'value']
    });

    return res.json(TransactionView.renderMany(transactions));
  }
};
