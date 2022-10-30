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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  marca: string;

  @property({
    type: 'string',
    required: true,
  })
  placa: string;

  @property({
    type: 'string',
    required: true,
  })
  anioModelo: string;

  @property({
    type: 'string',
    required: true,
  })
  velocidadImp: string;

  @property({
    type: 'string',
    required: true,
  })
  volumenImp: string;

  @property({
    type: 'string',
    required: true,
  })
  paisOrigen: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaMantenimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  detalles: string;

  @property({
    type: 'string',
    required: true,
  })
  caracteristicas: string;

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
