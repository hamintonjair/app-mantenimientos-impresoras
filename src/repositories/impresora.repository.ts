import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Impresora, ImpresoraRelations} from '../models';

export class ImpresoraRepository extends DefaultCrudRepository<
  Impresora,
  typeof Impresora.prototype.id,
  ImpresoraRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Impresora, dataSource);
  }
}
