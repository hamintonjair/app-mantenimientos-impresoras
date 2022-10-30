import {Entity, model, property} from '@loopback/repository';

@model()
export class Impresiones3D extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Cliente: string;

  @property({
    type: 'number',
    required: true,
  })
  Identificacion: number;

  @property({
    type: 'number',
    required: true,
  })
  Cantidad: number;


  constructor(data?: Partial<Impresiones3D>) {
    super(data);
  }
}

export interface Impresiones3DRelations {
  // describe navigational properties here
}

export type Impresiones3DWithRelations = Impresiones3D & Impresiones3DRelations;
