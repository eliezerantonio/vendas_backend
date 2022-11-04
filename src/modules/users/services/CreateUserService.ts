import AppError from '@shared/errors/AppError';

import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/User';
import UsersRepository from '../typeorm/repositories/UserRepository';

interface IRequest {
  name: string;
  password: string;
  email: string;
}

class CreateUserService {
  public static async execute({
    name,
    email,
    password,
  }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UsersRepository);
    const emailExists = await usersRepository.findByEmail(email);

    if (emailExists) {
      throw new AppError('email address already used');
    }

    const user = usersRepository.create({ name, email, password });

    await usersRepository.save(user);
    return user;
  }
}

export default CreateUserService;
