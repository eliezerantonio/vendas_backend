import { DataSource } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';
import { CreateProducts1667246691456 } from './migrations/1667246691456-CreateProducts';
import { CreateUsers1667583121155 } from './migrations/1667583121155-CreateUsers';
import { CreateUserTokens1668803607254 } from './migrations/1668803607254-CreateUserTokens';
import { CreateCustomers1669271395022 } from './migrations/1669271395022-CreateCustomers';
import { CreateOrders1669730274381 } from './migrations/1669730274381-CreateOrders';
import { AddCustomerIdToOrders1669732128693 } from './migrations/1669732128693-AddCustomerIdToOrders';
import { CreateOrdersProducts1669735296084 } from './migrations/1669735296084-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1669736239417 } from './migrations/1669736239417-AddOrderIdToOrdersProducts';
import { AddProductIdToOrdersProducts1669913053983 } from './migrations/1669913053983-AddProductIdToOrdersProducts';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'api_vendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1667246691456,
    CreateUsers1667583121155,
    CreateUserTokens1668803607254,
    CreateCustomers1669271395022,
    CreateOrders1669730274381,
    AddCustomerIdToOrders1669732128693,
    CreateOrdersProducts1669735296084,
    AddOrderIdToOrdersProducts1669736239417,
    AddProductIdToOrdersProducts1669913053983,
  ],
});
