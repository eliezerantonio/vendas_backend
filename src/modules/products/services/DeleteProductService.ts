import AppError from '@shared/errors/AppError';
import RedisCache from '@shared/RedisCache';
import { getCustomRepository } from 'typeorm';
import { ProductsRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = getCustomRepository(ProductsRepository);
    const redisCache = new RedisCache();
    const product = await productsRepository.findOne(id);
    if (!product) {
      throw new AppError('Product not found.');
    }
    await redisCache.invalidate('api-vendas-PRODUCT_LIST');
    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
