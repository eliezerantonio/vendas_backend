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
  }: SearchParams): Promise<ICustomerPaginate | null>;

  findByName(name: string): Promise<ICustomer | null>;

  findById(name: string): Promise<ICustomer | null>;

  findByEmail(name: string): Promise<ICustomer | null>;

  create(data: ICreateCustomer): Promise<ICustomer>;

  save(customer: ICustomer): Promise<ICustomer>;

  remove(customer: ICustomer): Promise<void>;
}
