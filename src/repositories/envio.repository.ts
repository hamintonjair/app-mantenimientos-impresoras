import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Envio, EnvioRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class EnvioRepository extends DefaultCrudRepository<
  Envio,
  typeof Envio.prototype.id,
  EnvioRelations
> {

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Envio.prototype.id>;

  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Envio, dataSource);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
  }
}
