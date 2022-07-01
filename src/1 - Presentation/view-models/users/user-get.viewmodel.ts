import { User } from 'src/4 - Core/domain/entities/user.entity';

export class UserGetViewModel {
  constructor(user: User) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.isActive = user.isActive;
  }

  id: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
}
