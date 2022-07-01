import { Injectable } from '@nestjs/common';
import { genSaltSync, hashSync } from 'bcrypt';
import { UsersRepository } from 'src/3 - Repositories/users-repository/users-repository';
import { User } from 'src/4 - Core/domain/entities/user.entity';
import { MethodInspector } from 'src/4 - Core/utilities/decorators/log-input.decorator';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  @MethodInspector()
  async getAll(): Promise<User[]> {
    return await this.usersRepository.getAll();
  }

  @MethodInspector()
  async getById(id: string): Promise<User> {
    return await this.usersRepository.getById(id);
  }

  @MethodInspector()
  async getByCredentials({ email, password }: Partial<User>) {
    const salt = await this.usersRepository.getSaltByEmail(email);
    const hashedPassword = hashSync(password, salt);

    return await this.usersRepository.getByCredentials({
      email,
      password: hashedPassword,
    });
  }

  @MethodInspector()
  async create(newUser: User): Promise<User> {
    const salt = genSaltSync(13);

    return await this.usersRepository.saveOrUpdate({
      ...newUser,
      salt,
      password: hashSync(newUser.password, salt),
    } as User);
  }

  @MethodInspector()
  async update(id: string, userToBeUpdated: User): Promise<User> {
    const existingUser = await this.getById(id);

    return await this.usersRepository.saveOrUpdate({
      ...existingUser,
      ...userToBeUpdated,
    });
  }
}
