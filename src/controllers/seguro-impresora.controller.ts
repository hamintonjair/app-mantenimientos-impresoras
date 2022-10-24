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
import {SeguroImpresora} from '../models';
import {SeguroImpresoraRepository} from '../repositories';

export class SeguroImpresoraController {
  constructor(
    @repository(SeguroImpresoraRepository)
    public seguroImpresoraRepository : SeguroImpresoraRepository,
  ) {}

  @post('/seguro-impresoras')
  @response(200, {
    description: 'SeguroImpresora model instance',
    content: {'application/json': {schema: getModelSchemaRef(SeguroImpresora)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguroImpresora, {
            title: 'NewSeguroImpresora',
            exclude: ['id'],
          }),
        },
      },
    })
    seguroImpresora: Omit<SeguroImpresora, 'id'>,
  ): Promise<SeguroImpresora> {
    return this.seguroImpresoraRepository.create(seguroImpresora);
  }

  @get('/seguro-impresoras/count')
  @response(200, {
    description: 'SeguroImpresora model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(SeguroImpresora) where?: Where<SeguroImpresora>,
  ): Promise<Count> {
    return this.seguroImpresoraRepository.count(where);
  }

  @get('/seguro-impresoras')
  @response(200, {
    description: 'Array of SeguroImpresora model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(SeguroImpresora, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(SeguroImpresora) filter?: Filter<SeguroImpresora>,
  ): Promise<SeguroImpresora[]> {
    return this.seguroImpresoraRepository.find(filter);
  }

  @patch('/seguro-impresoras')
  @response(200, {
    description: 'SeguroImpresora PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguroImpresora, {partial: true}),
        },
      },
    })
    seguroImpresora: SeguroImpresora,
    @param.where(SeguroImpresora) where?: Where<SeguroImpresora>,
  ): Promise<Count> {
    return this.seguroImpresoraRepository.updateAll(seguroImpresora, where);
  }

  @get('/seguro-impresoras/{id}')
  @response(200, {
    description: 'SeguroImpresora model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(SeguroImpresora, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(SeguroImpresora, {exclude: 'where'}) filter?: FilterExcludingWhere<SeguroImpresora>
  ): Promise<SeguroImpresora> {
    return this.seguroImpresoraRepository.findById(id, filter);
  }

  @patch('/seguro-impresoras/{id}')
  @response(204, {
    description: 'SeguroImpresora PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(SeguroImpresora, {partial: true}),
        },
      },
    })
    seguroImpresora: SeguroImpresora,
  ): Promise<void> {
    await this.seguroImpresoraRepository.updateById(id, seguroImpresora);
  }

  @put('/seguro-impresoras/{id}')
  @response(204, {
    description: 'SeguroImpresora PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() seguroImpresora: SeguroImpresora,
  ): Promise<void> {
    await this.seguroImpresoraRepository.replaceById(id, seguroImpresora);
  }

  @del('/seguro-impresoras/{id}')
  @response(204, {
    description: 'SeguroImpresora DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.seguroImpresoraRepository.deleteById(id);
  }
}
