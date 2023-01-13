import { ICreateCustomer } from '../models/ICreateCustomer';
import { ICustomer } from '../models/ICustomer';
import { ICustomerPaginate } from '../models/ICustomerPaginate';

export type SearchParams = {
  page: number;
  skip: number;
  take: number;
};

export interface ICustomersRepository {
  findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<ICustomerPaginate | undefined>;

  findByName(name: string): Promise<ICustomer | undefined>;

  findById(name: string): Promise<ICustomer | undefined>;

  findByEmail(name: string): Promise<ICustomer | undefined>;

  create(data: ICreateCustomer): Promise<ICustomer>;

  save(customer: ICustomer): Promise<ICustomer>;

  remove(customer: ICustomer): Promise<void>;
}
