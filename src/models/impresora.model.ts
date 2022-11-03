import {Entity, model, property, hasMany} from '@loopback/repository';
import {TipoImpresora} from './tipo-impresora.model';

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
  FechaMantenimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  Datelle: string;

  @property({
    type: 'string',
    required: true,
  })
  OtrasCaracteristicas: string;

  @hasMany(() => TipoImpresora)
  tipoImpresoras: TipoImpresora[];

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
