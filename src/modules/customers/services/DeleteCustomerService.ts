import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CustomersRepository from '../infra/typeorm/repositories/CustomersRepository';

interface IRequest {
  id: string;
}

class DeleteCusomerService {
  public async execute({ id }: IRequest): Promise<void> {
    const customersRepository = await getCustomRepository(CustomersRepository);

    const customer = await customersRepository.findById(id);

    if (!customer) {
      throw new AppError(`Customer not found`);
    }

    await customersRepository.remove(customer);
  }
}

export default DeleteCusomerService;
