import { getRepository } from 'typeorm';
import { Request, Response } from 'express';

import User from '../models/User';
import Register from '../models/Register';
type Middleware = (request: Request, response: Response) => void;

const setRegister: Middleware = (request, response) => {
  const selected: boolean = request.body.selected;
  const idRegister: number = request.body.idRegister;
  const registerRepository = getRepository(Register);
  registerRepository.update(idRegister, { selected });
  response.status(201).send({ register: 'active' });
};

export default {
  setRegister
};
