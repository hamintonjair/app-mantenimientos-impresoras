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
import {Impresiones3D} from '../models';
import {Impresiones3DRepository} from '../repositories';

export class Impresiones3DController {
  constructor(
    @repository(Impresiones3DRepository)
    public impresiones3DRepository : Impresiones3DRepository,
  ) {}

  @post('/impresiones3ds')
  @response(200, {
    description: 'Impresiones3D model instance',
    content: {'application/json': {schema: getModelSchemaRef(Impresiones3D)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresiones3D, {
            title: 'NewImpresiones3D',
            exclude: ['Id'],
          }),
        },
      },
    })
    impresiones3D: Omit<Impresiones3D, 'id'>,
  ): Promise<Impresiones3D> {
    return this.impresiones3DRepository.create(impresiones3D);
  }

  @get('/impresiones3ds/count')
  @response(200, {
    description: 'Impresiones3D model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Impresiones3D) where?: Where<Impresiones3D>,
  ): Promise<Count> {
    return this.impresiones3DRepository.count(where);
  }

  @get('/impresiones3ds')
  @response(200, {
    description: 'Array of Impresiones3D model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Impresiones3D, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Impresiones3D) filter?: Filter<Impresiones3D>,
  ): Promise<Impresiones3D[]> {
    return this.impresiones3DRepository.find(filter);
  }

  @patch('/impresiones3ds')
  @response(200, {
    description: 'Impresiones3D PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresiones3D, {partial: true}),
        },
      },
    })
    impresiones3D: Impresiones3D,
    @param.where(Impresiones3D) where?: Where<Impresiones3D>,
  ): Promise<Count> {
    return this.impresiones3DRepository.updateAll(impresiones3D, where);
  }

  @get('/impresiones3ds/{id}')
  @response(200, {
    description: 'Impresiones3D model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Impresiones3D, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Impresiones3D, {exclude: 'where'}) filter?: FilterExcludingWhere<Impresiones3D>
  ): Promise<Impresiones3D> {
    return this.impresiones3DRepository.findById(id, filter);
  }

  @patch('/impresiones3ds/{id}')
  @response(204, {
    description: 'Impresiones3D PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresiones3D, {partial: true}),
        },
      },
    })
    impresiones3D: Impresiones3D,
  ): Promise<void> {
    await this.impresiones3DRepository.updateById(id, impresiones3D);
  }

  @put('/impresiones3ds/{id}')
  @response(204, {
    description: 'Impresiones3D PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() impresiones3D: Impresiones3D,
  ): Promise<void> {
    await this.impresiones3DRepository.replaceById(id, impresiones3D);
  }

  @del('/impresiones3ds/{id}')
  @response(204, {
    description: 'Impresiones3D DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.impresiones3DRepository.deleteById(id);
  }
}
