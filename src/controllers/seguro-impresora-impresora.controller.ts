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
  SeguroImpresora,
  Impresora,
} from '../models';
import {SeguroImpresoraRepository} from '../repositories';

export class SeguroImpresoraImpresoraController {
  constructor(
    @repository(SeguroImpresoraRepository) protected seguroImpresoraRepository: SeguroImpresoraRepository,
  ) { }

  @get('/seguro-impresoras/{id}/impresoras', {
    responses: {
      '200': {
        description: 'Array of SeguroImpresora has many Impresora',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Impresora)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Impresora>,
  ): Promise<Impresora[]> {
    return this.seguroImpresoraRepository.impresoras(id).find(filter);
  }

  @post('/seguro-impresoras/{id}/impresoras', {
    responses: {
      '200': {
        description: 'SeguroImpresora model instance',
        content: {'application/json': {schema: getModelSchemaRef(Impresora)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof SeguroImpresora.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresora, {
            title: 'NewImpresoraInSeguroImpresora',
            exclude: ['id'],
            optional: ['seguroImpresoraId']
          }),
        },
      },
    }) impresora: Omit<Impresora, 'id'>,
  ): Promise<Impresora> {
    return this.seguroImpresoraRepository.impresoras(id).create(impresora);
  }

  @patch('/seguro-impresoras/{id}/impresoras', {
    responses: {
      '200': {
        description: 'SeguroImpresora.Impresora PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresora, {partial: true}),
        },
      },
    })
    impresora: Partial<Impresora>,
    @param.query.object('where', getWhereSchemaFor(Impresora)) where?: Where<Impresora>,
  ): Promise<Count> {
    return this.seguroImpresoraRepository.impresoras(id).patch(impresora, where);
  }

  @del('/seguro-impresoras/{id}/impresoras', {
    responses: {
      '200': {
        description: 'SeguroImpresora.Impresora DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Impresora)) where?: Where<Impresora>,
  ): Promise<Count> {
    return this.seguroImpresoraRepository.impresoras(id).delete(where);
  }
}
