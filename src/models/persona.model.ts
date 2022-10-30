import {Entity, model, property, hasMany} from '@loopback/repository';
import {Rol} from './rol.model';
import {NivelEstudio} from './nivel-estudio.model';

@model()
export class Persona extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'number',
    required: true,
  })
  cedula: number;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  socio: string;

  @property({
    type: 'string',
  })
  revisionId?: string;

  @hasMany(() => Rol)
  rols: Rol[];

  @hasMany(() => NivelEstudio)
  nivelEstudios: NivelEstudio[];

  @property({
    type: 'string',
  })
  envioId?: string;

  constructor(data?: Partial<Persona>) {
    super(data);
  }
}

export interface PersonaRelations {
  // describe navigational properties here
}

export type PersonaWithRelations = Persona & PersonaRelations;
