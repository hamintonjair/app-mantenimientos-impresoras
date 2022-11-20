import { Persona } from './../models/persona.model';
import { service } from '@loopback/core';
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
  HttpErrors,
} from '@loopback/rest';
import {Rol} from '../models';
import {RolRepository} from '../repositories';
import {UtilidadesService} from '../services';

export class RolController {
  constructor(
    @repository(RolRepository)
    public rolRepository : RolRepository,
    @service(UtilidadesService)
    public utilidadesService : UtilidadesService
  ) {}


  @post('/logins')
  @response(200, {
    description: 'Usuario logueado con exito'
  })
  async login(
    @requestBody() rol : Rol
  ){
    
    let persona = await this.utilidadesService.loginAsync( rol.Rol, rol.Password );

    if( persona ){     
      
      return {
        data : {
          id : rol.id,
          Nombre : rol.Nombre,
          Password : rol.Password,
          Rol: rol.Rol          
        },      
      }
    }else{
      throw new HttpErrors[401]('Usuario no autorizado')      
    }

  }

  @post('/rols')
  @response(200, {
    description: 'Rol model instance',
    content: {'application/json': {schema: getModelSchemaRef(Rol)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {
            title: 'NewRol',
            exclude: ['id'],
          }),
        },
      },
    })
    rol: Omit<Rol, 'id'>,
  ): Promise<Rol> {

    // rol.Password = this.utilidadesService.generarPassword();
    // rol.Password = this.utilidadesService.encriptar(rol.Password);

    return this.rolRepository.create(rol);
  }

  @get('/rols/count')
  @response(200, {
    description: 'Rol model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Rol) where?: Where<Rol>,
  ): Promise<Count> {
    return this.rolRepository.count(where);
  }

  @get('/rols')
  @response(200, {
    description: 'Array of Rol model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Rol, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Rol) filter?: Filter<Rol>,
  ): Promise<Rol[]> {
    
    return this.rolRepository.find(filter);
  }

  @patch('/rols')
  @response(200, {
    description: 'Rol PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {partial: true}),
        },
      },
    })
    rol: Rol,
    @param.where(Rol) where?: Where<Rol>,
  ): Promise<Count> {
    return this.rolRepository.updateAll(rol, where);
  }

  @get('/rols/{id}')
  @response(200, {
    description: 'Rol model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Rol, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Rol, {exclude: 'where'}) filter?: FilterExcludingWhere<Rol>
  ): Promise<Rol> {
    return this.rolRepository.findById(id, filter);
  }

  @patch('/rols/{id}')
  @response(204, {
    description: 'Rol PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Rol, {partial: true}),
        },
      },
    })
    rol: Rol,
  ): Promise<void> {
    await this.rolRepository.updateById(id, rol);
  }

  @put('/rols/{id}')
  @response(204, {
    description: 'Rol PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() rol: Rol,
  ): Promise<void> {
    await this.rolRepository.replaceById(id, rol);
  }

  @del('/rols/{id}')
  @response(204, {
    description: 'Rol DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.rolRepository.deleteById(id);
  }
}
