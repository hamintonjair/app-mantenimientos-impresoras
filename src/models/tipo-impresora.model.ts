import {Entity, model, property} from '@loopback/repository';

@model()
export class TipoImpresora extends Entity {
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
  nombre: string;


  constructor(data?: Partial<TipoImpresora>) {
    super(data);
  }
}

export interface TipoImpresoraRelations {
  // describe navigational properties here
}

export type TipoImpresoraWithRelations = TipoImpresora & TipoImpresoraRelations;
