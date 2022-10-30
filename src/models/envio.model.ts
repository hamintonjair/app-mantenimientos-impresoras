import {Entity, model, property, hasMany} from '@loopback/repository';
import {Persona} from './persona.model';

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
  Email?: string;

  @property({
    type: 'string',
    required: true,
  })
  Detalle: string;

  @hasMany(() => Persona)
  personas: Persona[];

  constructor(data?: Partial<Envio>) {
    super(data);
  }
}

export interface EnvioRelations {
  // describe navigational properties here
}

export type EnvioWithRelations = Envio & EnvioRelations;
