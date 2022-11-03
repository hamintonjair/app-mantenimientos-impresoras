import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Impresora, ImpresoraRelations, TipoImpresora} from '../models';
import {TipoImpresoraRepository} from './tipo-impresora.repository';

export class ImpresoraRepository extends DefaultCrudRepository<
  Impresora,
  typeof Impresora.prototype.id,
  ImpresoraRelations
> {

  public readonly tipoImpresoras: HasManyRepositoryFactory<TipoImpresora, typeof Impresora.prototype.id>;

  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource, @repository.getter('TipoImpresoraRepository') protected tipoImpresoraRepositoryGetter: Getter<TipoImpresoraRepository>,
  ) {
    super(Impresora, dataSource);
    this.tipoImpresoras = this.createHasManyRepositoryFactoryFor('tipoImpresoras', tipoImpresoraRepositoryGetter,);
    this.registerInclusionResolver('tipoImpresoras', this.tipoImpresoras.inclusionResolver);
  }
}
