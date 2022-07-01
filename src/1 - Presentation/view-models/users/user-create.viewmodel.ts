import { IsNotEmpty, IsAlphanumeric, Length, IsEmail } from 'class-validator';

export class UserCreateViewModel {
  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(2, 20)
  firstName: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  @Length(2, 20)
  lastName: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
