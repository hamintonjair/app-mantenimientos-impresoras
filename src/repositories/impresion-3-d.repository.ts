import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Impresion3D, Impresion3DRelations} from '../models';

export class Impresion3DRepository extends DefaultCrudRepository<
  Impresion3D,
  typeof Impresion3D.prototype.id,
  Impresion3DRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Impresion3D, dataSource);
  }
}
