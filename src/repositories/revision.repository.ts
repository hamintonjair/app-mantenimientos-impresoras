import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbMantenimientosDataSource} from '../datasources';
import {Revision, RevisionRelations, Impresora, Repuesto, Persona} from '../models';
import {ImpresoraRepository} from './impresora.repository';
import {RepuestoRepository} from './repuesto.repository';
import {PersonaRepository} from './persona.repository';

export class RevisionRepository extends DefaultCrudRepository<
  Revision,
  typeof Revision.prototype.id,
  RevisionRelations
> {

  public readonly impresoras: HasManyRepositoryFactory<Impresora, typeof Revision.prototype.id>;

  public readonly repuestos: HasManyRepositoryFactory<Repuesto, typeof Revision.prototype.id>;

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Revision.prototype.id>;

  constructor(
    @inject('datasources.dbMantenimientos') dataSource: DbMantenimientosDataSource, @repository.getter('ImpresoraRepository') protected impresoraRepositoryGetter: Getter<ImpresoraRepository>, @repository.getter('RepuestoRepository') protected repuestoRepositoryGetter: Getter<RepuestoRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>,
  ) {
    super(Revision, dataSource);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
    this.repuestos = this.createHasManyRepositoryFactoryFor('repuestos', repuestoRepositoryGetter,);
    this.registerInclusionResolver('repuestos', this.repuestos.inclusionResolver);
    this.impresoras = this.createHasManyRepositoryFactoryFor('impresoras', impresoraRepositoryGetter,);
    this.registerInclusionResolver('impresoras', this.impresoras.inclusionResolver);
  }
}
