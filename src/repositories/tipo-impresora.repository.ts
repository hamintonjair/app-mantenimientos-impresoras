import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {TipoImpresora, TipoImpresoraRelations} from '../models';

export class TipoImpresoraRepository extends DefaultCrudRepository<
  TipoImpresora,
  typeof TipoImpresora.prototype.id,
  TipoImpresoraRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(TipoImpresora, dataSource);
  }
}
