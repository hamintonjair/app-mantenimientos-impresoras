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
import {Impresion3D} from '../models';
import {Impresion3DRepository} from '../repositories';

export class Impresion3DController {
  constructor(
    @repository(Impresion3DRepository)
    public impresion3DRepository : Impresion3DRepository,
  ) {}

  @post('/impresion3ds')
  @response(200, {
    description: 'Impresion3D model instance',
    content: {'application/json': {schema: getModelSchemaRef(Impresion3D)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresion3D, {
            title: 'NewImpresion3D',
            exclude: ['id'],
          }),
        },
      },
    })
    impresion3D: Omit<Impresion3D, 'id'>,
  ): Promise<Impresion3D> {
    return this.impresion3DRepository.create(impresion3D);
  }

  @get('/impresion3ds/count')
  @response(200, {
    description: 'Impresion3D model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Impresion3D) where?: Where<Impresion3D>,
  ): Promise<Count> {
    return this.impresion3DRepository.count(where);
  }

  @get('/impresion3ds')
  @response(200, {
    description: 'Array of Impresion3D model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Impresion3D, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Impresion3D) filter?: Filter<Impresion3D>,
  ): Promise<Impresion3D[]> {
    return this.impresion3DRepository.find(filter);
  }

  @patch('/impresion3ds')
  @response(200, {
    description: 'Impresion3D PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresion3D, {partial: true}),
        },
      },
    })
    impresion3D: Impresion3D,
    @param.where(Impresion3D) where?: Where<Impresion3D>,
  ): Promise<Count> {
    return this.impresion3DRepository.updateAll(impresion3D, where);
  }

  @get('/impresion3ds/{id}')
  @response(200, {
    description: 'Impresion3D model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Impresion3D, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Impresion3D, {exclude: 'where'}) filter?: FilterExcludingWhere<Impresion3D>
  ): Promise<Impresion3D> {
    return this.impresion3DRepository.findById(id, filter);
  }

  @patch('/impresion3ds/{id}')
  @response(204, {
    description: 'Impresion3D PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresion3D, {partial: true}),
        },
      },
    })
    impresion3D: Impresion3D,
  ): Promise<void> {
    await this.impresion3DRepository.updateById(id, impresion3D);
  }

  @put('/impresion3ds/{id}')
  @response(204, {
    description: 'Impresion3D PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() impresion3D: Impresion3D,
  ): Promise<void> {
    await this.impresion3DRepository.replaceById(id, impresion3D);
  }

  @del('/impresion3ds/{id}')
  @response(204, {
    description: 'Impresion3D DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.impresion3DRepository.deleteById(id);
  }
}
