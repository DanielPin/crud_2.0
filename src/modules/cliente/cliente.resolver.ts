import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClienteService } from './cliente.service';
import { ClienteDTO } from './dto/cliente.dto';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Resolver('Cliente')
export class ClienteResolver {
  constructor(private readonly clienteService: ClienteService) {}

  @Query(() => [ClienteDTO])
  async listarClientes(): Promise<ClienteDTO[]> {
    return this.clienteService.findAll();
  }

  @Mutation(() => ClienteDTO)
  async cadastroDeCliente(
    @Args('createcliente') createcliente: CreateClienteDto,
  ): Promise<ClienteDTO> {
    const teste = await this.clienteService.create(createcliente);
    return teste;
  }

  @Mutation(() => ClienteDTO)
  async atualizarCliente(
    @Args('cpf') cpf: string,
    @Args('data') atualizarCliente: UpdateClienteDto,
  ): Promise<ClienteDTO> {
    const teste = await this.clienteService.updateCliente(
      cpf,
      atualizarCliente,
    );
    return teste;
  }
}
