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
  Login,
  Rol,
} from '../models';
import {LoginRepository} from '../repositories';

export class LoginRolController {
  constructor(
    @repository(LoginRepository) protected loginRepository: LoginRepository,
  ) { }

  @get('/logins/{id}/rols', {
    responses: {
      '200': {
        description: 'Array of Login has many Rol',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Rol)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Rol>,
  ): Promise<Rol[]> {
    return this.loginRepository.rols(id).find(filter);
  }

  @post('/logins/{id}/rols', {
    responses: {
      '200': {
        description: 'Login model instance',
        content: {'application/json': {schema: getModelSchemaRef(Rol)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Login.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {
            title: 'NewRolInLogin',
            exclude: ['id'],
            optional: ['loginId']
          }),
        },
      },
    }) rol: Omit<Rol, 'id'>,
  ): Promise<Rol> {
    return this.loginRepository.rols(id).create(rol);
  }

  @patch('/logins/{id}/rols', {
    responses: {
      '200': {
        description: 'Login.Rol PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {partial: true}),
        },
      },
    })
    rol: Partial<Rol>,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.loginRepository.rols(id).patch(rol, where);
  }

  @del('/logins/{id}/rols', {
    responses: {
      '200': {
        description: 'Login.Rol DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Rol)) where?: Where<Rol>,
  ): Promise<Count> {
    return this.loginRepository.rols(id).delete(where);
  }
}
