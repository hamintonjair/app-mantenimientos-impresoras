import {Entity, model, property} from '@loopback/repository';

@model()
export class NivelEstudio extends Entity {
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
  descripcion: string;


  constructor(data?: Partial<NivelEstudio>) {
    super(data);
  }
}

export interface NivelEstudioRelations {
  // describe navigational properties here
}

export type NivelEstudioWithRelations = NivelEstudio & NivelEstudioRelations;
