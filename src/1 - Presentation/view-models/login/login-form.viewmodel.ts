import { IsNotEmpty, Length, IsEmail } from 'class-validator';

export class LoginFormViewModel {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
