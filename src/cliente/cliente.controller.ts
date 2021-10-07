import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('create')
  async create(@Body() createClienteDto: CreateClienteDto): Promise<Cliente> {
    return this.clienteService.create(createClienteDto);
  }

  @Get('pegarTodos')
  async buscarTodos(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Get('buscarPorCpf/:cpf')
  async buscarPorCpf(@Res() res: Response, @Param('cpf') cpf: string) {
    const cliente = await this.clienteService.findByCpf(cpf);

    if (!cliente) {
      return res.status(204).json({ message: 'Cliente não encontrado' });
    }

    return res.status(200).json({ cliente });
  }
}
