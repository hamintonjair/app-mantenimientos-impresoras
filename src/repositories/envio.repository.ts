import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Envio, EnvioRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class EnvioRepository extends DefaultCrudRepository<
  Envio,
  typeof Envio.prototype.Email,
  EnvioRelations
> {

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Envio.prototype.id>;

  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Envio, dataSource);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
  }
}
