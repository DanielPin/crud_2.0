import { registerEnumType } from '@nestjs/graphql';

export enum Roles {
  ADMIN = 0,
  USER = 1,
}

registerEnumType(Roles, {
  name: 'Roles',
});
