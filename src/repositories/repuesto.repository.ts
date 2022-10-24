import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Repuesto, RepuestoRelations} from '../models';

export class RepuestoRepository extends DefaultCrudRepository<
  Repuesto,
  typeof Repuesto.prototype.id,
  RepuestoRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Repuesto, dataSource);
  }
}
