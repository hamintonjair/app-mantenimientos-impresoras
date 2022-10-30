import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Persona, PersonaRelations, Rol, NivelEstudio} from '../models';
import {RolRepository} from './rol.repository';
import {NivelEstudioRepository} from './nivel-estudio.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly rols: HasManyRepositoryFactory<Rol, typeof Persona.prototype.id>;

  public readonly nivelEstudios: HasManyRepositoryFactory<NivelEstudio, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource, @repository.getter('RolRepository') protected rolRepositoryGetter: Getter<RolRepository>, @repository.getter('NivelEstudioRepository') protected nivelEstudioRepositoryGetter: Getter<NivelEstudioRepository>,
  ) {
    super(Persona, dataSource);
    this.nivelEstudios = this.createHasManyRepositoryFactoryFor('nivelEstudios', nivelEstudioRepositoryGetter,);
    this.registerInclusionResolver('nivelEstudios', this.nivelEstudios.inclusionResolver);
    this.rols = this.createHasManyRepositoryFactoryFor('rols', rolRepositoryGetter,);
    this.registerInclusionResolver('rols', this.rols.inclusionResolver);
  }
}
