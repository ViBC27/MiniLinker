import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Reserve from '../models/Reserve';
import ReserveView from '../views/reserve_view';

export default {
  async create(req: Request, res: Response) {
    const { selected, date, initial_value, amount } = req.body;

    const reserveRepository = getRepository(Reserve);

    const reserve = reserveRepository.create({
      id: 1,
      selected,
      date,
      initial_value,
      amount
    });

    await reserveRepository.save(reserve);

    return res.status(201).json(reserve);
  },

  async show(req: Request, res: Response) {
    const reserveRepository = getRepository(Reserve);

    const reserve = await reserveRepository.findOneOrFail({
      select: ['selected', 'date', 'initial_value', 'amount']
    });

    return res.json(ReserveView.render(reserve));
  }
};
