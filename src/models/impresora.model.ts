import {Entity, model, property, hasMany} from '@loopback/repository';

@model()
export class Impresora extends Entity {
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
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Marca: string;

  @property({
    type: 'string',
    required: true,
  })
  Placa: string;

  @property({
    type: 'string',
    required: true,
  })
  Pais: string;

  @property({
    type: 'date',
    required: true,
  })
  AnoModelo: string;

  @property({
    type: 'string',
    required: true,
  })
  TipoImpresora: string;

  @property({
    type: 'string',
    required: true,
  })
  Velocidadimpresion: string;

  @property({
    type: 'number',
    required: true,
  })
  VolumenImpresion: number;

  @property({
    type: 'date',
    required: true,
  })
  FechaIngreso: string;


  @property({
    type: 'string',
    required: true,
  })
  Datalles: string;


  @property({
    type: 'string',
  })
  seguroImpresoraId?: string;

  @property({
    type: 'string',
  })
  revisionId?: string;

  constructor(data?: Partial<Impresora>) {
    super(data);
  }
}

export interface ImpresoraRelations {
  // describe navigational properties here
}

export type ImpresoraWithRelations = Impresora & ImpresoraRelations;
