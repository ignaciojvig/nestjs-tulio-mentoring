import { IsAlphanumeric, IsNotEmpty, Length } from 'class-validator';

export class UserUpdateViewModel {
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(2, 20)
  firstName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(2, 20)
  lastName: string;

  @IsNotEmpty()
  isActive: boolean;
}
