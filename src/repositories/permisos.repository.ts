import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Permisos, PermisosRelations} from '../models';

export class PermisosRepository extends DefaultCrudRepository<
  Permisos,
  typeof Permisos.prototype.id,
  PermisosRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(Permisos, dataSource);
  }
}
