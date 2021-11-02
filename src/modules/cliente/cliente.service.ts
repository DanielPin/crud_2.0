import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { ValidacaoCpf } from 'src/common/validacao/valida-cpf';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) {}
  private validacaoCpf = new ValidacaoCpf();

  async create(createCliente: CreateClienteDto): Promise<Cliente> {
    await this.verificarCpf(createCliente.cpf);

    const validaCliente = await this.findByCpf(createCliente.cpf);

    if (validaCliente) {
      throw new UnprocessableEntityException('Cliente já cadastrado');
    }

    const cliente = this.clienteRepository.create(createCliente);
    const clienteSalvo = await this.clienteRepository.save(cliente);

    if (!clienteSalvo) {
      throw new InternalServerErrorException('Problema ao criar novo cliente');
    }

    return clienteSalvo;
  }

  async findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async findByCpf(cpf: string): Promise<Cliente> {
    await this.verificarCpf(cpf);

    const cliente = await this.clienteRepository.findOne({
      where: { cpf: cpf },
    });

    if (!cliente) {
      throw new NotFoundException(
        'Cliente não encontrado, verifique o cpf digitado',
      );
    }

    return cliente;
  }

  async updateCliente(
    cpf: string,
    atualizarCliente: UpdateClienteDto,
  ): Promise<Cliente> {
    const cliente = await this.findByCpf(cpf);

    await this.clienteRepository.save({ ...cliente, ...atualizarCliente });

    const clienteAtualizado = this.clienteRepository.create({
      ...cliente,
      ...atualizarCliente,
    });

    return clienteAtualizado;
  }

  async deletarCLiente(cpf: string) {
    const cliente = await this.findByCpf(cpf);
    const clienteDeletado = await this.clienteRepository.remove(cliente);
    if (!clienteDeletado) {
      throw new InternalServerErrorException('Problema ao deletar cliente');
    }
  }

  async verificarCpf(cpf: string) {
    const cpfValido = await this.validacaoCpf.execute(cpf);
    if (!cpfValido) {
      throw new InternalServerErrorException('Cpf inválido!');
    }
  }
}
