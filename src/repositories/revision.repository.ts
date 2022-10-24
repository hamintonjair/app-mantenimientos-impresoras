import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Revision, RevisionRelations} from '../models';

export class RevisionRepository extends DefaultCrudRepository<
  Revision,
  typeof Revision.prototype.id,
  RevisionRelations
> {
  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource,
  ) {
    super(Revision, dataSource);
  }
}
