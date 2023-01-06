import { ICreateCustomer } from '../ICreateCustomer';
import { ICustomer } from '../ICustomer';

export interface ICustomersRepository {
  findByName(name: string): Promise<ICustomer | undefined>;

  findById(name: string): Promise<ICustomer | undefined>;

  findByEmail(name: string): Promise<ICustomer | undefined>;

  // create(data: ICreateCustomer): Promise<ICustomer>;

  // save(customer: ICustomer): Promise<ICustomer>;
}
