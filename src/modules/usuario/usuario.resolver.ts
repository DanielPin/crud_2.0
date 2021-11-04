import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
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

  @Query(() => [UsuarioDto])
  async getUsuarios(): Promise<UsuarioDto[]> {
    const usuarios = await this.usuarioService.buscarTodosUsuarios();
    return usuarios;
  }

  @Query(() => UsuarioDto)
  async buscarUsuarioLogin(@Args('login') login: string): Promise<UsuarioDto> {
    const usuario = await this.usuarioService.buscarUsuarioLogin(login);
    return usuario;
  }

  @Mutation(() => UsuarioDto)
  async atualizarUsuario(
    @Args('login') login: string,
    @Args('data') atualizarUsuario: UpdateUsuarioDto,
  ): Promise<UsuarioDto> {
    const usuario = await this.usuarioService.atualizarUsuario(
      login,
      atualizarUsuario,
    );
    return usuario;
  }
}
