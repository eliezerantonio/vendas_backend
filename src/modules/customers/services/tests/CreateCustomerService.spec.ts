import FakeCustomersRepository from '@modules/customers/domain/repositories/fakes/FakeCustomersRepository';
import CreateCustomerService from '../CreateCustomerService';
import AppError from '@shared/errors/AppError';

describe('CreateCustomer', () => {
  it('Should be able to create a new customer', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

    const customer = await createCustomer.execute({
      name: 'Eliezer Antonio',
      email: 'eliezer@test.com',
    });
    expect(customer).toHaveProperty('id');
  });

  it('Should not be able to create two customers with the same email', async () => {
    const fakeCustomersRepository = new FakeCustomersRepository();

    const createCustomer = new CreateCustomerService(fakeCustomersRepository);

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
