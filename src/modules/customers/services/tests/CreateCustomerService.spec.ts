import FakeCustomersRepository from '@modules/customers/domain/repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from '../CreateCustomerService';
import AppError from '@shared/errors/AppError';

let fakeCustomersRepository: FakeCustomersRepository;
let createCustomer: CreateCustomerService;

describe('CreateCustomer', () => {
  beforeEach(() => {
    fakeCustomersRepository = new FakeCustomersRepository();

    createCustomer = new CreateCustomerService(fakeCustomersRepository);
  });

  it('Should be able to create a new customer', async () => {
    const customer = await createCustomer.execute({
      name: 'Eliezer Antonio',
      email: 'eliezer@test.com',
    });
    expect(customer).toHaveProperty('id');
  });

  it('Should not be able to create two customers with the same email', async () => {
    await createCustomer.execute({
      name: 'Eliezer Antonio',
      email: 'eliezer@test.com',
    });

    expect(
      createCustomer.execute({
        name: 'Eliezer Antonio',
        email: 'eliezer@test.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
