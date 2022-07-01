import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/1 - Presentation/guards/jwt-auth.guard';
import { UserCreateViewModel } from 'src/1 - Presentation/view-models/users/user-create.viewmodel';
import { UserGetViewModel } from 'src/1 - Presentation/view-models/users/user-get.viewmodel';
import { UserUpdateViewModel } from 'src/1 - Presentation/view-models/users/user-update.viewmodel';
import { UsersService } from 'src/2 - Services/users-service/users.service';
import { User } from 'src/4 - Core/domain/entities/user.entity';
import { MethodInspector } from 'src/4 - Core/utilities/decorators/log-input.decorator';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  @MethodInspector()
  async getUsers(): Promise<UserGetViewModel[]> {
    const users = await this.userService.getAll();
    return users.map((user) => new UserGetViewModel(user));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @MethodInspector()
  async getUserById(@Param('id') id: string): Promise<UserGetViewModel> {
    return new UserGetViewModel(await this.userService.getById(id));
  }

  @Post()
  @MethodInspector()
  async createUser(
    @Body() newUser: UserCreateViewModel,
  ): Promise<UserGetViewModel> {
    return new UserGetViewModel(
      await this.userService.create({ ...newUser } as User),
    );
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @MethodInspector()
  async updateUser(
    @Param('id') id: string,
    @Body() userToBeUpdated: UserUpdateViewModel,
  ): Promise<UserGetViewModel> {
    return new UserGetViewModel(
      await this.userService.update(id, { ...userToBeUpdated } as User),
    );
  }
}
