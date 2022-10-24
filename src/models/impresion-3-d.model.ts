import {Entity, model, property} from '@loopback/repository';

@model()
export class Impresion3D extends Entity {
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
  cliente: string;

  @property({
    type: 'number',
    required: true,
  })
  identificacion: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidad: number;


  constructor(data?: Partial<Impresion3D>) {
    super(data);
  }
}

export interface Impresion3DRelations {
  // describe navigational properties here
}

export type Impresion3DWithRelations = Impresion3D & Impresion3DRelations;
