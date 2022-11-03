import {Entity, model, property, hasMany} from '@loopback/repository';
import {Impresora} from './impresora.model';
import {Persona} from './persona.model';
import {Repuesto} from './repuesto.model';

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
  Valor: number;

  @property({
    type: 'string',
    required: true,
  })
  Datalles: string;

  @property({
    type: 'string',
    required: true,
  })
  Actualizacion: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaRevision: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoRevision: string;

  @property({
    type: 'string',
    required: true,
  })
  Estado: string;

  @hasMany(() => Impresora)
  impresoras: Impresora[];

  @hasMany(() => Persona)
  personas: Persona[];

  @hasMany(() => Repuesto)
  repuestos: Repuesto[];

  constructor(data?: Partial<Revision>) {
    super(data);
  }
}

export interface RevisionRelations {
  // describe navigational properties here
}

export type RevisionWithRelations = Revision & RevisionRelations;
