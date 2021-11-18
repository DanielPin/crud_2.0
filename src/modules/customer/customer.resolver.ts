import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CustomerService } from './customer.service';
import { CustomerDTO } from './dto/customer.dto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Resolver('Customer')
export class CustomerResolver {
  constructor(private readonly customerService: CustomerService) {}

  @Query(() => [CustomerDTO])
  async listCustomers(): Promise<CustomerDTO[]> {
    return this.customerService.findAll();
  }

  @Query(() => CustomerDTO)
  async searchCustomerByCpf(@Args('cpf') cpf: string): Promise<CustomerDTO> {
    return this.customerService.findByCpf(cpf);
  }

  @Mutation(() => CustomerDTO)
  async customerRegistration(
    @Args('createcliente') createcliente: CreateCustomerDto,
  ): Promise<CustomerDTO> {
    const teste = await this.customerService.create(createcliente);
    return teste;
  }

  @Mutation(() => CustomerDTO)
  async updateCustomer(
    @Args('cpf') cpf: string,
    @Args('data') atualizarCliente: UpdateCustomerDto,
  ): Promise<CustomerDTO> {
    const teste = await this.customerService.updateCustomer(
      cpf,
      atualizarCliente,
    );
    return teste;
  }

  @Mutation(() => Boolean)
  async deleteCustomer(@Args('cpf') cpf: string): Promise<boolean> {
    await this.customerService.deleteCustomer(cpf);
    return true;
  }
}
