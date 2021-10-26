import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
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

  async create(createCliente: CreateClienteDto): Promise<Cliente> {
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
    return this.clienteRepository.findOne({
      where: { cpf: cpf },
    });
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
}
