import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UserService } from '../user/user.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.searchUserLogin(data.login);

    const validPassword = compareSync(data.password, user.Senha);

    if (!validPassword) {
      throw new UnauthorizedException('Incorrect login or login');
    }

    return {
      user,
      token: 'banan',
    };
  }
}
