import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Persona, PersonaRelations, NivelEstudio} from '../models';
import {NivelEstudioRepository} from './nivel-estudio.repository';

export class PersonaRepository extends DefaultCrudRepository<
  Persona,
  typeof Persona.prototype.id,
  PersonaRelations
> {

  public readonly nivelEstudios: HasManyRepositoryFactory<NivelEstudio, typeof Persona.prototype.id>;

  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource, @repository.getter('NivelEstudioRepository') protected nivelEstudioRepositoryGetter: Getter<NivelEstudioRepository>,
  ) {
    super(Persona, dataSource);
    this.nivelEstudios = this.createHasManyRepositoryFactoryFor('nivelEstudios', nivelEstudioRepositoryGetter,);
    this.registerInclusionResolver('nivelEstudios', this.nivelEstudios.inclusionResolver);
  }
}
