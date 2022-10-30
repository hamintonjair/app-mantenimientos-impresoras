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
  Envio,
  Persona,
} from '../models';
import {EnvioRepository} from '../repositories';

export class EnvioPersonaController {
  constructor(
    @repository(EnvioRepository) protected envioRepository: EnvioRepository,
  ) { }

  @get('/envios/{id}/personas', {
    responses: {
      '200': {
        description: 'Array of Envio has many Persona',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Persona)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Persona>,
  ): Promise<Persona[]> {
    return this.envioRepository.personas(id).find(filter);
  }

  @post('/envios/{id}/personas', {
    responses: {
      '200': {
        description: 'Envio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Persona)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Envio.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {
            title: 'NewPersonaInEnvio',
            exclude: ['id'],
            optional: ['envioId']
          }),
        },
      },
    }) persona: Omit<Persona, 'id'>,
  ): Promise<Persona> {
    return this.envioRepository.personas(id).create(persona);
  }

  @patch('/envios/{id}/personas', {
    responses: {
      '200': {
        description: 'Envio.Persona PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Persona, {partial: true}),
        },
      },
    })
    persona: Partial<Persona>,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.envioRepository.personas(id).patch(persona, where);
  }

  @del('/envios/{id}/personas', {
    responses: {
      '200': {
        description: 'Envio.Persona DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Persona)) where?: Where<Persona>,
  ): Promise<Count> {
    return this.envioRepository.personas(id).delete(where);
  }
}
