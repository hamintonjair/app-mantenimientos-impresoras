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
import {NivelEstudio} from '../models';
import {NivelEstudioRepository} from '../repositories';

export class NivelEstudioController {
  constructor(
    @repository(NivelEstudioRepository)
    public nivelEstudioRepository : NivelEstudioRepository,
  ) {}

  @post('/nivel-estudios')
  @response(200, {
    description: 'NivelEstudio model instance',
    content: {'application/json': {schema: getModelSchemaRef(NivelEstudio)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelEstudio, {
            title: 'NewNivelEstudio',
            exclude: ['id'],
          }),
        },
      },
    })
    nivelEstudio: Omit<NivelEstudio, 'id'>,
  ): Promise<NivelEstudio> {
    return this.nivelEstudioRepository.create(nivelEstudio);
  }

  @get('/nivel-estudios/count')
  @response(200, {
    description: 'NivelEstudio model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(NivelEstudio) where?: Where<NivelEstudio>,
  ): Promise<Count> {
    return this.nivelEstudioRepository.count(where);
  }

  @get('/nivel-estudios')
  @response(200, {
    description: 'Array of NivelEstudio model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(NivelEstudio, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(NivelEstudio) filter?: Filter<NivelEstudio>,
  ): Promise<NivelEstudio[]> {
    return this.nivelEstudioRepository.find(filter);
  }

  @patch('/nivel-estudios')
  @response(200, {
    description: 'NivelEstudio PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelEstudio, {partial: true}),
        },
      },
    })
    nivelEstudio: NivelEstudio,
    @param.where(NivelEstudio) where?: Where<NivelEstudio>,
  ): Promise<Count> {
    return this.nivelEstudioRepository.updateAll(nivelEstudio, where);
  }

  @get('/nivel-estudios/{id}')
  @response(200, {
    description: 'NivelEstudio model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(NivelEstudio, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(NivelEstudio, {exclude: 'where'}) filter?: FilterExcludingWhere<NivelEstudio>
  ): Promise<NivelEstudio> {
    return this.nivelEstudioRepository.findById(id, filter);
  }

  @patch('/nivel-estudios/{id}')
  @response(204, {
    description: 'NivelEstudio PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NivelEstudio, {partial: true}),
        },
      },
    })
    nivelEstudio: NivelEstudio,
  ): Promise<void> {
    await this.nivelEstudioRepository.updateById(id, nivelEstudio);
  }

  @put('/nivel-estudios/{id}')
  @response(204, {
    description: 'NivelEstudio PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() nivelEstudio: NivelEstudio,
  ): Promise<void> {
    await this.nivelEstudioRepository.replaceById(id, nivelEstudio);
  }

  @del('/nivel-estudios/{id}')
  @response(204, {
    description: 'NivelEstudio DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.nivelEstudioRepository.deleteById(id);
  }
}
