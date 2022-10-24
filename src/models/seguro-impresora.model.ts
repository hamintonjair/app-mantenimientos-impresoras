import {Entity, model, property} from '@loopback/repository';

@model()
export class SeguroImpresora extends Entity {
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
  tipoSeguro: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: number;

  @property({
    type: 'date',
    required: true,
  })
  fechaActivacion: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaVencimiento: string;


  constructor(data?: Partial<SeguroImpresora>) {
    super(data);
  }
}

export interface SeguroImpresoraRelations {
  // describe navigational properties here
}

export type SeguroImpresoraWithRelations = SeguroImpresora & SeguroImpresoraRelations;
