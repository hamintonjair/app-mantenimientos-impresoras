import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Login, LoginRelations, Rol} from '../models';
import {RolRepository} from './rol.repository';

export class LoginRepository extends DefaultCrudRepository<
  Login,
  typeof Login.prototype.id,
  LoginRelations
> {

  public readonly rols: HasManyRepositoryFactory<Rol, typeof Login.prototype.id>;

  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>,
  ) {
    super(Login, dataSource);
    this.rols = this.createHasManyRepositoryFactoryFor('rols', rolRepositoryGetter,);
    this.registerInclusionResolver('rols', this.rols.inclusionResolver);
  }
}
