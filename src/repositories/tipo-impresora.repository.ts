import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {TipoImpresora, TipoImpresoraRelations} from '../models';

export class TipoImpresoraRepository extends DefaultCrudRepository<
  TipoImpresora,
  typeof TipoImpresora.prototype.id,
  TipoImpresoraRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(TipoImpresora, dataSource);
  }
}
