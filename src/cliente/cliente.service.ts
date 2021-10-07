import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
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
}
