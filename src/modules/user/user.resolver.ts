import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserDto)
  async createUser(
    @Args('createUser') createUser: CreateUserDto,
  ): Promise<UserDto> {
    const user = await this.userService.savedUser(createUser);
    return user;
  }

  @Query(() => [UserDto])
  async searchAllUsers(): Promise<UserDto[]> {
    const users = await this.userService.searchAllUsers();
    return users;
  }

  @Query(() => UserDto)
  async searchUserLogin(@Args('login') login: string): Promise<UserDto> {
    const user = await this.userService.searchUserLogin(login);
    return user;
  }

  @Mutation(() => UserDto)
  async updateUser(
    @Args('login') login: string,
    @Args('data') updateUser: UpdateUserDto,
  ): Promise<UserDto> {
    const user = await this.userService.updateUser(login, updateUser);
    return user;
  }

  @Mutation(() => Boolean)
  async deleteUser(@Args('login') login: string): Promise<boolean> {
    await this.userService.deleteUser(login);
    return true;
  }
}
