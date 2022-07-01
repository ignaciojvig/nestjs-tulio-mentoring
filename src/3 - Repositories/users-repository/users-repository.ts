import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/4 - Core/domain/entities/user.entity';
import { MethodInspector } from 'src/4 - Core/utilities/decorators/log-input.decorator';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  @MethodInspector()
  async getAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  @MethodInspector()
  async getById(id: string): Promise<User> {
    return await this.usersRepository.findOneByOrFail({ id: id });
  }

  @MethodInspector()
  async getSaltByEmail(email: string): Promise<string> {
    const { salt } = await this.usersRepository.findOneByOrFail({
      email: email,
    });
    return salt;
  }

  @MethodInspector()
  async getByCredentials({ email, password }: Partial<User>) {
    return await this.usersRepository.findOneByOrFail({ email, password });
  }

  @MethodInspector()
  async saveOrUpdate(userToBeCreatedOrUpdated: User): Promise<User> {
    return await this.usersRepository.save(userToBeCreatedOrUpdated);
  }
}
