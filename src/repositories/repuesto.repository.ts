import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Repuesto, RepuestoRelations} from '../models';

export class RepuestoRepository extends DefaultCrudRepository<
  Repuesto,
  typeof Repuesto.prototype.id,
  RepuestoRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(Repuesto, dataSource);
  }
}
