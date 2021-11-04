import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async salvarUsuario(createUsuario: CreateUsuarioDto) {
    createUsuario.Login = createUsuario.Login.toLowerCase();
    createUsuario.EMail = createUsuario.EMail.toLowerCase();

    const usuarioCadastrado = await this.usuarioRepository.findOne({
      where: { EMail: createUsuario.EMail },
    });

    if (usuarioCadastrado) {
      throw new Error('Email já cadastrado');
    }

    const usuarioLogin = await this.usuarioRepository.findOne({
      where: { Login: createUsuario.Login },
    });

    if (usuarioLogin) {
      throw new Error('Login já cadastrado, tente outro');
    }

    if (createUsuario.Senha !== createUsuario.ConfirmarSenha) {
      throw new NotFoundException('Senhas não coincidem');
    }

    const usuario = await this.usuarioRepository.create(createUsuario);
    const usuarioSalvo = await this.usuarioRepository.save(usuario);

    return usuarioSalvo;
  }

  async buscarTodosUsuarios() {
    const usuarios = await this.usuarioRepository.find();
    return usuarios;
  }

  async buscarUsuarioLogin(login: string) {
    login = login.toLowerCase();

    const usuario = await this.usuarioRepository.findOne({
      where: { Login: login },
    });

    if (!usuario) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return usuario;
  }

  async atualizarUsuario(login: string, updateUsuarioDto: UpdateUsuarioDto) {    
    login = login.toLowerCase();

    if (updateUsuarioDto.Senha !== updateUsuarioDto.ConfirmarSenha) {
      throw new NotFoundException('Senhas não coincidem');
    }

    const usuario = await this.buscarUsuarioLogin(login);

    await this.usuarioRepository.save({ ...usuario, ...updateUsuarioDto });

    const usuarioAtualizado = await this.usuarioRepository.create({
      ...usuario,
      ...updateUsuarioDto,
    });

    return usuarioAtualizado;
  }
}
