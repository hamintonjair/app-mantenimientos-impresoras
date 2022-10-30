import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {SeguroImpresora, SeguroImpresoraRelations, Impresora} from '../models';
import {ImpresoraRepository} from './impresora.repository';

export class SeguroImpresoraRepository extends DefaultCrudRepository<
  SeguroImpresora,
  typeof SeguroImpresora.prototype.id,
  SeguroImpresoraRelations
> {

  public readonly impresoras: HasManyRepositoryFactory<Impresora, typeof SeguroImpresora.prototype.id>;

  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource, @repository.getter('ImpresoraRepository') protected impresoraRepositoryGetter: Getter<ImpresoraRepository>,
  ) {
    super(SeguroImpresora, dataSource);
    this.impresoras = this.createHasManyRepositoryFactoryFor('impresoras', impresoraRepositoryGetter,);
    this.registerInclusionResolver('impresoras', this.impresoras.inclusionResolver);
  }
}
