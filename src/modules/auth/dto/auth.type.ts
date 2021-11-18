import { Field, ObjectType } from '@nestjs/graphql';
import { UserDto } from 'src/modules/user/dto/user.dto';
import { User } from 'src/modules/user/entities/user.entity';

@ObjectType()
export class AuthType {
  @Field(() => UserDto)
  user: UserDto;

  @Field()
  token: string;
}
