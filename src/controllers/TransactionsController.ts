import { Request, Response } from 'express';
import { getRepository, Like } from 'typeorm';

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
    const { day, month, year } = req.query;

    const dayNumber = Number(day);
    const monthNumber = Number(month);
    const yearNumber = Number(year);

    let monthString, dayString;

    if (monthNumber) {
      monthString = String(monthNumber).length === 2 ? `${monthNumber}` : `0${monthNumber}`;
    }

    if (dayNumber) {
      dayString = String(dayNumber).length === 2 ? `${dayNumber}` : `0${dayNumber}`;
    }

    const searchString = `${yearNumber ? yearNumber : '%'}-${monthNumber ? monthString : '%'}-${
      dayNumber ? dayString : '%'
    }`;

    const transactionsRepository = getRepository(Transaction);

    const transactions = await transactionsRepository.find({
      date: Like(`${searchString}%`)
    });

    return res.json(TransactionView.renderMany(transactions));
  }
};
