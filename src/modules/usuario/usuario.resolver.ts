import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Resolver()
export class UsuarioResolver {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Mutation(() => UsuarioDto)
  async createUsuario(
    @Args('createUser') createUser: CreateUsuarioDto,
  ): Promise<UsuarioDto> {
    const usuario = await this.usuarioService.salvarUsuario(createUser);
    return usuario;
  }
}
