/* eslint-disable @typescript-eslint/no-unused-vars */
import { EntityRepository, Repository } from 'typeorm';

import Customer from '../entities/Customer';
import { ICustomersRepository } from '@modules/customers/domain/models/repositories/ICustomersRepository';

@EntityRepository(Customer)
class CustomersRepository
  extends Repository<Customer>
  implements ICustomersRepository
{
  public async findByName(name: string): Promise<Customer | undefined> {
    const customer = await this.findOne({ where: { name } });

    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = await this.findOne({ where: { id } });

    return customer;
  }
  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = await this.findOne({ where: { email } });

    return customer;
  }
}

export default CustomersRepository;
