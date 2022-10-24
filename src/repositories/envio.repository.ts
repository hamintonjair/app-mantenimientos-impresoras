import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Envio, EnvioRelations} from '../models';

export class EnvioRepository extends DefaultCrudRepository<
  Envio,
  typeof Envio.prototype.id,
  EnvioRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Envio, dataSource);
  }
}
