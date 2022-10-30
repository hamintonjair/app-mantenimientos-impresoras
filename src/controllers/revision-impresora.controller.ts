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
  Revision,
  Impresora,
} from '../models';
import {RevisionRepository} from '../repositories';

export class RevisionImpresoraController {
  constructor(
    @repository(RevisionRepository) protected revisionRepository: RevisionRepository,
  ) { }

  @get('/revisions/{id}/impresoras', {
    responses: {
      '200': {
        description: 'Array of Revision has many Impresora',
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
    return this.revisionRepository.impresoras(id).find(filter);
  }

  @post('/revisions/{id}/impresoras', {
    responses: {
      '200': {
        description: 'Revision model instance',
        content: {'application/json': {schema: getModelSchemaRef(Impresora)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Revision.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Impresora, {
            title: 'NewImpresoraInRevision',
            exclude: ['id'],
            optional: ['revisionId']
          }),
        },
      },
    }) impresora: Omit<Impresora, 'id'>,
  ): Promise<Impresora> {
    return this.revisionRepository.impresoras(id).create(impresora);
  }

  @patch('/revisions/{id}/impresoras', {
    responses: {
      '200': {
        description: 'Revision.Impresora PATCH success count',
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
    return this.revisionRepository.impresoras(id).patch(impresora, where);
  }

  @del('/revisions/{id}/impresoras', {
    responses: {
      '200': {
        description: 'Revision.Impresora DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Impresora)) where?: Where<Impresora>,
  ): Promise<Count> {
    return this.revisionRepository.impresoras(id).delete(where);
  }
}
