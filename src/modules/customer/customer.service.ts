import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CpfValidation } from 'src/common/validacao/valida-cpf';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}

  async create(createCustomer: CreateCustomerDto): Promise<Customer> {
    await this.checkCpf(createCustomer.cpf);
    createCustomer.cpf = await this.replaceCpf(createCustomer.cpf);

    const validateCustomer = await this.customerRepository.findOne({
      where: { cpf: createCustomer.cpf },
    });

    if (validateCustomer) {
      throw new UnprocessableEntityException('Cliente já cadastrado');
    }

    const customer = this.customerRepository.create(createCustomer);
    const customerSaved = await this.customerRepository.save(customer);

    if (!customerSaved) {
      throw new InternalServerErrorException('Problema ao criar novo cliente');
    }

    return customerSaved;
  }

  async findAll(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async findByCpf(cpf: string): Promise<Customer> {
    await this.checkCpf(cpf);
    cpf = await this.replaceCpf(cpf);

    const customer = await this.customerRepository.findOne({
      where: { cpf: cpf },
    });

    if (!customer) {
      throw new NotFoundException(
        'Cliente não encontrado, verifique o cpf digitado',
      );
    }

    return customer;
  }

  async updateCustomer(
    cpf: string,
    updateCustomer: UpdateCustomerDto,
  ): Promise<Customer> {
    const customer = await this.findByCpf(cpf);

    await this.customerRepository.save({ ...customer, ...updateCustomer });

    const updatedCustomer = this.customerRepository.create({
      ...customer,
      ...updateCustomer,
    });

    return updatedCustomer;
  }

  async deleteCustomer(cpf: string) {
    const customer = await this.findByCpf(cpf);
    const deletedCustomer = await this.customerRepository.remove(customer);
    if (!deletedCustomer) {
      throw new InternalServerErrorException('Problema ao deletar cliente');
    }
  }

  async checkCpf(cpf: string) {
    const cpfValidation = new CpfValidation();
    const validCpf = await cpfValidation.execute(cpf);
    if (!validCpf) {
      throw new InternalServerErrorException('Cpf inválido!');
    }
  }

  async replaceCpf(cpf: string) {
    const cpfRepalce = cpf.replace('.', '').replace('.', '').replace('-', '');
    return cpfRepalce;
  }
}
