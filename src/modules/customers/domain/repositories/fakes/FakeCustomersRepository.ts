/* eslint-disable @typescript-eslint/no-unused-vars */

import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import { v4 as uuidv4 } from 'uuid';
import {
  ICustomersRepository,
  SearchParams,
} from '@modules/customers/domain/repositories/ICustomersRepository';
import { ICreateCustomer } from '@modules/customers/domain/models/ICreateCustomer';
import { ICustomer } from '../../models/ICustomer';
import { ICustomerPaginate } from '../../models/ICustomerPaginate';

class FakeCustomersRepository implements ICustomersRepository {
  findAll({
    page,
    skip,
    take,
  }: SearchParams): Promise<ICustomerPaginate | undefined> {
    throw new Error('Method not implemented.');
  }
  remove(customer: ICustomer): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private customers: Customer[] = [];

  public async create({ name, email }: ICreateCustomer): Promise<Customer> {
    const customer = new Customer();

    customer.id = uuidv4();
    customer.name = name;
    customer.email = email;

    this.customers.push(customer);

    return customer;
  }

  public async save(customer: Customer): Promise<Customer> {
    Object.assign(this.customers, customer);

    return customer;
  }

  public async findByName(name: string): Promise<Customer | undefined> {
    const customer = this.customers.find(customer => customer.name === name);
    return customer;
  }

  public async findById(id: string): Promise<Customer | undefined> {
    const customer = this.customers.find(customer => customer.id === id);
    return customer;
  }

  public async findByEmail(email: string): Promise<Customer | undefined> {
    const customer = this.customers.find(customer => customer.email === email);
    return customer;
  }
}

export default FakeCustomersRepository;
