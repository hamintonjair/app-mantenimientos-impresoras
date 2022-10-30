import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {NivelEstudio, NivelEstudioRelations} from '../models';

export class NivelEstudioRepository extends DefaultCrudRepository<
  NivelEstudio,
  typeof NivelEstudio.prototype.id,
  NivelEstudioRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(NivelEstudio, dataSource);
  }
}
