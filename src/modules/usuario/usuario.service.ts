import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private clienteRepository: Repository<Usuario>,
  ) {}

  async salvarUsuario(createUsuario: CreateUsuarioDto) {
    const usuario = await this.clienteRepository.create(createUsuario);
    const usuarioSalvo = await this.clienteRepository.save(usuario);

    return usuarioSalvo;
  }
}
