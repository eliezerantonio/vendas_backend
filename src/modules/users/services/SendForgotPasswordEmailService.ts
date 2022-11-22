import EtherealMail from '@config/mail/EtherealMail';
import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }
    const token = await userTokenRepository.generate(user.id);

    // await EtherealMail.sendMail({
    //   to: email,
    //   body: `Solicitacao de redifinicao de senha recebida ${token?.token}`,
    // });
  }
}

export default SendForgotPasswordEmailService;
