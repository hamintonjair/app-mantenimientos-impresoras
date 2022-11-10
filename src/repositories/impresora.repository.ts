import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Impresora, ImpresoraRelations} from '../models';

export class ImpresoraRepository extends DefaultCrudRepository<
  Impresora,
  typeof Impresora.prototype.id,
  ImpresoraRelations
> {
  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource,
  ) {
    super(Impresora, dataSource);
   
  }
}
