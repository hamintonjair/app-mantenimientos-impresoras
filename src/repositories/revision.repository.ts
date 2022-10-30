import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DsMantenimientosDataSource} from '../datasources';
import {Revision, RevisionRelations, Impresora, Persona, Repuesto} from '../models';
import {ImpresoraRepository} from './impresora.repository';
import {PersonaRepository} from './persona.repository';
import {RepuestoRepository} from './repuesto.repository';

export class RevisionRepository extends DefaultCrudRepository<
  Revision,
  typeof Revision.prototype.id,
  RevisionRelations
> {

  public readonly impresoras: HasManyRepositoryFactory<Impresora, typeof Revision.prototype.id>;

  public readonly personas: HasManyRepositoryFactory<Persona, typeof Revision.prototype.id>;

  public readonly repuestos: HasManyRepositoryFactory<Repuesto, typeof Revision.prototype.id>;

  constructor(
    @inject('datasources.dsMantenimientos') dataSource: DsMantenimientosDataSource, @repository.getter('ImpresoraRepository') protected impresoraRepositoryGetter: Getter<ImpresoraRepository>, @repository.getter('PersonaRepository') protected personaRepositoryGetter: Getter<PersonaRepository>, @repository.getter('RepuestoRepository') protected repuestoRepositoryGetter: Getter<RepuestoRepository>,
  ) {
    super(Revision, dataSource);
    this.repuestos = this.createHasManyRepositoryFactoryFor('repuestos', repuestoRepositoryGetter,);
    this.registerInclusionResolver('repuestos', this.repuestos.inclusionResolver);
    this.personas = this.createHasManyRepositoryFactoryFor('personas', personaRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
    this.impresoras = this.createHasManyRepositoryFactoryFor('impresoras', impresoraRepositoryGetter,);
    this.registerInclusionResolver('impresoras', this.impresoras.inclusionResolver);
  }
}
