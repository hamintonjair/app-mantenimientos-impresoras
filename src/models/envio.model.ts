import {Entity, model, property} from '@loopback/repository';

@model()
export class Envio extends Entity {
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
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;


  constructor(data?: Partial<Envio>) {
    super(data);
  }
}

export interface EnvioRelations {
  // describe navigational properties here
}

export type EnvioWithRelations = Envio & EnvioRelations;
