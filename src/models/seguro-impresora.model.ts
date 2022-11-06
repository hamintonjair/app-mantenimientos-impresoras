import {Entity, model, property, hasMany} from '@loopback/repository';
import {Impresora} from './impresora.model';

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
  Impresora: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoSeguro: string;

  @property({
    type: 'number',
    required: true,
  })
  Precio: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaActivacion: string;

  @property({
    type: 'date',
    required: true,
  })
  FechaVencimiento: string;

  @hasMany(() => Impresora)
  impresoras: Impresora[];

  constructor(data?: Partial<SeguroImpresora>) {
    super(data);
  }
}

export interface SeguroImpresoraRelations {
  // describe navigational properties here
}

export type SeguroImpresoraWithRelations = SeguroImpresora & SeguroImpresoraRelations;
