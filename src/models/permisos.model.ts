import {Entity, model, property} from '@loopback/repository';

@model()
export class Permisos extends Entity {
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
  Rol: string;
  
  @property({
    type: 'string',
    required: true,
  })
  Persona: string;

  @property({
    type: 'string',
    required: true,
  })
  Impresora: string;

  @property({
    type: 'string',
    required: true,
  })
  Impresion3D: string;

  @property({
    type: 'string',
    required: true,
  })
  Repuestos: string;

  @property({
    type: 'string',
    required: true,
  })
  Revisiones: string;

  @property({
    type: 'string',
    required: true,
  })
  RevisionFinalizadas: string;

  @property({
    type: 'string',
    required: true,
  })
  Seguros: string;


  constructor(data?: Partial<Permisos>) {
    super(data);
  }
}

export interface PermisosRelations {
  // describe navigational properties here
}

export type PermisosWithRelations = Permisos & PermisosRelations;
