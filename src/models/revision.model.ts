import {Entity, model, property, hasMany} from '@loopback/repository';
import {Impresora} from './impresora.model';
import {Repuesto} from './repuesto.model';
import {Persona} from './persona.model';

@model()
export class Revision extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  detalles: string;

  @property({
    type: 'string',
    required: true,
  })
  actualizacion: string;

  @property({
    type: 'string',
    required: true,
  })
  revision: string;

  @property({
    type: 'string',
    required: true,
  })
  fechaRevision: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @hasMany(() => Impresora)
  impresoras: Impresora[];

  @hasMany(() => Repuesto)
  repuestos: Repuesto[];

  @hasMany(() => Persona)
  personas: Persona[];

  constructor(data?: Partial<Revision>) {
    super(data);
  }
}

export interface RevisionRelations {
  // describe navigational properties here
}

export type RevisionWithRelations = Revision & RevisionRelations;
