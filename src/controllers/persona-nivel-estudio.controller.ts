import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Persona,
  NivelEstudio,
} from '../models';
import {PersonaRepository} from '../repositories';

export class PersonaNivelEstudioController {
  constructor(
    @repository(PersonaRepository) protected personaRepository: PersonaRepository,
  ) { }

  @get('/personas/{id}/nivel-estudios', {
    responses: {
      '200': {
        description: 'Array of Persona has many NivelEstudio',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(NivelEstudio)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<NivelEstudio>,
  ): Promise<NivelEstudio[]> {
    return this.personaRepository.nivelEstudios(id).find(filter);
  }

  @post('/personas/{id}/nivel-estudios', {
    responses: {
      '200': {
        description: 'Persona model instance',
        content: {'application/json': {schema: getModelSchemaRef(NivelEstudio)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Persona.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelEstudio, {
            title: 'NewNivelEstudioInPersona',
            exclude: ['id'],
            optional: ['personaId']
          }),
        },
      },
    }) nivelEstudio: Omit<NivelEstudio, 'id'>,
  ): Promise<NivelEstudio> {
    return this.personaRepository.nivelEstudios(id).create(nivelEstudio);
  }

  @patch('/personas/{id}/nivel-estudios', {
    responses: {
      '200': {
        description: 'Persona.NivelEstudio PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelEstudio, {partial: true}),
        },
      },
    })
    nivelEstudio: Partial<NivelEstudio>,
    @param.query.object('where', getWhereSchemaFor(NivelEstudio)) where?: Where<NivelEstudio>,
  ): Promise<Count> {
    return this.personaRepository.nivelEstudios(id).patch(nivelEstudio, where);
  }

  @del('/personas/{id}/nivel-estudios', {
    responses: {
      '200': {
        description: 'Persona.NivelEstudio DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(NivelEstudio)) where?: Where<NivelEstudio>,
  ): Promise<Count> {
    return this.personaRepository.nivelEstudios(id).delete(where);
  }
}
