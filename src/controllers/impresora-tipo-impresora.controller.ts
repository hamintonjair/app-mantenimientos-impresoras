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
  Impresora,
  TipoImpresora,
} from '../models';
import {ImpresoraRepository} from '../repositories';

export class ImpresoraTipoImpresoraController {
  constructor(
    @repository(ImpresoraRepository) protected impresoraRepository: ImpresoraRepository,
  ) { }

  @get('/impresoras/{id}/tipo-impresoras', {
    responses: {
      '200': {
        description: 'Array of Impresora has many TipoImpresora',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TipoImpresora)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<TipoImpresora>,
  ): Promise<TipoImpresora[]> {
    return this.impresoraRepository.tipoImpresoras(id).find(filter);
  }

  @post('/impresoras/{id}/tipo-impresoras', {
    responses: {
      '200': {
        description: 'Impresora model instance',
        content: {'application/json': {schema: getModelSchemaRef(TipoImpresora)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Impresora.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoImpresora, {
            title: 'NewTipoImpresoraInImpresora',
            exclude: ['id'],
            optional: ['impresoraId']
          }),
        },
      },
    }) tipoImpresora: Omit<TipoImpresora, 'id'>,
  ): Promise<TipoImpresora> {
    return this.impresoraRepository.tipoImpresoras(id).create(tipoImpresora);
  }

  @patch('/impresoras/{id}/tipo-impresoras', {
    responses: {
      '200': {
        description: 'Impresora.TipoImpresora PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoImpresora, {partial: true}),
        },
      },
    })
    tipoImpresora: Partial<TipoImpresora>,
    @param.query.object('where', getWhereSchemaFor(TipoImpresora)) where?: Where<TipoImpresora>,
  ): Promise<Count> {
    return this.impresoraRepository.tipoImpresoras(id).patch(tipoImpresora, where);
  }

  @del('/impresoras/{id}/tipo-impresoras', {
    responses: {
      '200': {
        description: 'Impresora.TipoImpresora DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(TipoImpresora)) where?: Where<TipoImpresora>,
  ): Promise<Count> {
    return this.impresoraRepository.tipoImpresoras(id).delete(where);
  }
}
