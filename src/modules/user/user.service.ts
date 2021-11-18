import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async savedUser(createUser: CreateUserDto) {
    createUser.Login = createUser.Login.toLowerCase();
    createUser.EMail = createUser.EMail.toLowerCase();

    const registeredUser = await this.userRepository.findOne({
      where: { EMail: createUser.EMail },
    });

    if (registeredUser) {
      throw new Error('E-mail already registered');
    }

    const loginAlreadyRegistered = await this.userRepository.findOne({
      where: { Login: createUser.Login },
    });

    if (loginAlreadyRegistered) {
      throw new Error('Login already registered, try another one');
    }

    if (createUser.Senha !== createUser.ConfirmarSenha) {
      throw new NotFoundException('Passwords do not match');
    }

    const user = await this.userRepository.create(createUser);
    const savedUser = await this.userRepository.save(user);

    return savedUser;
  }

  async searchAllUsers() {
    const users = await this.userRepository.find();
    return users;
  }

  async searchUserLogin(login: string) {
    login = login.toLowerCase();

    const user = await this.userRepository.findOne({
      where: { Login: login },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async updateUser(login: string, updateUserDto: UpdateUserDto) {
    login = login.toLowerCase();

    if (updateUserDto.Senha !== updateUserDto.ConfirmarSenha) {
      throw new NotFoundException('Passwords do not match');
    }

    const user = await this.searchUserLogin(login);

    await this.userRepository.save({ ...user, ...updateUserDto });

    const updatedUser = await this.userRepository.create({
      ...user,
      ...updateUserDto,
    });

    return updatedUser;
  }

  async deleteUser(login: string) {
    const user = await this.searchUserLogin(login);
    const deletedUser = await this.userRepository.remove(user);
    if (!deletedUser) {
      throw new InternalServerErrorException('Problema ao deletar usuario');
    }
  }
}
