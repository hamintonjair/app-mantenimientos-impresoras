import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {NivelEstudio, NivelEstudioRelations} from '../models';

export class NivelEstudioRepository extends DefaultCrudRepository<
  NivelEstudio,
  typeof NivelEstudio.prototype.id,
  NivelEstudioRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(NivelEstudio, dataSource);
  }
}
