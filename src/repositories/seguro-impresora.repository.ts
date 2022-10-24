import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {SeguroImpresora, SeguroImpresoraRelations} from '../models';

export class SeguroImpresoraRepository extends DefaultCrudRepository<
  SeguroImpresora,
  typeof SeguroImpresora.prototype.id,
  SeguroImpresoraRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(SeguroImpresora, dataSource);
  }
}
