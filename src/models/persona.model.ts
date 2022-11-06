import {Entity, model, property, hasMany} from '@loopback/repository';
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
  Nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellidos: string;

  @property({
    type: 'number',
    required: true,
  })
  Identificacion: number;

  @property({
    type: 'number',
    required: true,
  })
  Telefono: number;

  @property({
    type: 'string',
    required: true,
  })
  Email: string;

  @property({
    type: 'string',
    required: true,
  })
  Direccion: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaNacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  Socio: string;

  @property({
    type: 'string',
    required: true,
  })
  NivelEstudios: string;

  @hasMany(() => NivelEstudio)
  nivelEstudios: NivelEstudio[];

  @property({
    type: 'string',
  })
  revisionId?: string;

  @property({
    type: 'string',
  })
  rolId?: string;

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
