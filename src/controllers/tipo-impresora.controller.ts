import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {TipoImpresora} from '../models';
import {TipoImpresoraRepository} from '../repositories';

export class TipoImpresoraController {
  constructor(
    @repository(TipoImpresoraRepository)
    public tipoImpresoraRepository : TipoImpresoraRepository,
  ) {}

  @post('/tipo-impresoras')
  @response(200, {
    description: 'TipoImpresora model instance',
    content: {'application/json': {schema: getModelSchemaRef(TipoImpresora)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoImpresora, {
            title: 'NewTipoImpresora',
            exclude: ['id'],
          }),
        },
      },
    })
    tipoImpresora: Omit<TipoImpresora, 'id'>,
  ): Promise<TipoImpresora> {
    return this.tipoImpresoraRepository.create(tipoImpresora);
  }

  @get('/tipo-impresoras/count')
  @response(200, {
    description: 'TipoImpresora model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TipoImpresora) where?: Where<TipoImpresora>,
  ): Promise<Count> {
    return this.tipoImpresoraRepository.count(where);
  }

  @get('/tipo-impresoras')
  @response(200, {
    description: 'Array of TipoImpresora model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TipoImpresora, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TipoImpresora) filter?: Filter<TipoImpresora>,
  ): Promise<TipoImpresora[]> {
    return this.tipoImpresoraRepository.find(filter);
  }

  @patch('/tipo-impresoras')
  @response(200, {
    description: 'TipoImpresora PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoImpresora, {partial: true}),
        },
      },
    })
    tipoImpresora: TipoImpresora,
    @param.where(TipoImpresora) where?: Where<TipoImpresora>,
  ): Promise<Count> {
    return this.tipoImpresoraRepository.updateAll(tipoImpresora, where);
  }

  @get('/tipo-impresoras/{id}')
  @response(200, {
    description: 'TipoImpresora model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TipoImpresora, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TipoImpresora, {exclude: 'where'}) filter?: FilterExcludingWhere<TipoImpresora>
  ): Promise<TipoImpresora> {
    return this.tipoImpresoraRepository.findById(id, filter);
  }

  @patch('/tipo-impresoras/{id}')
  @response(204, {
    description: 'TipoImpresora PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TipoImpresora, {partial: true}),
        },
      },
    })
    tipoImpresora: TipoImpresora,
  ): Promise<void> {
    await this.tipoImpresoraRepository.updateById(id, tipoImpresora);
  }

  @put('/tipo-impresoras/{id}')
  @response(204, {
    description: 'TipoImpresora PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tipoImpresora: TipoImpresora,
  ): Promise<void> {
    await this.tipoImpresoraRepository.replaceById(id, tipoImpresora);
  }

  @del('/tipo-impresoras/{id}')
  @response(204, {
    description: 'TipoImpresora DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tipoImpresoraRepository.deleteById(id);
  }
}
