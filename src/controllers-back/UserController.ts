import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';
import UserView from '../views/user_views';

export default {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;
    const imageName = req.file.filename;

    const userRepository = getRepository(User);

    const user = userRepository.create({
      id: 1,
      name,
      email,
      image_name: imageName
    });

    await userRepository.save(user);

    return res.status(201).json(user);
  },

  async show(req: Request, res: Response) {
    const userRepository = getRepository(User);

    const user = await userRepository.findOneOrFail();

    return res.json(UserView.render(user));
  }
};
