import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Login, LoginRelations} from '../models';

export class LoginRepository extends DefaultCrudRepository<
  Login,
  typeof Login.prototype.id,
  LoginRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Login, dataSource);
  }
}
