import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Impresiones3D, Impresiones3DRelations} from '../models';

export class Impresiones3DRepository extends DefaultCrudRepository<
  Impresiones3D,
  typeof Impresiones3D.prototype.Id,
  Impresiones3DRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(Impresiones3D, dataSource);
  }
}
