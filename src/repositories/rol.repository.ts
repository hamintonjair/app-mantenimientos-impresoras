import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Rol, RolRelations, Persona} from '../models';
import {PersonaRepository} from './persona.repository';

export class RolRepository extends DefaultCrudRepository<
  Rol,
  typeof Rol.prototype.id,
  RolRelations
> {

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Rol.prototype.id>;

  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Rol, dataSource);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
  }
}
