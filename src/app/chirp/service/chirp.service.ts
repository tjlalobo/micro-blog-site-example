import { Injectable } from '@angular/core';

import { 
  EntityCollectionServiceBase, 
  EntityCollectionServiceElementsFactory } 
from '@ngrx/data';

import { Chirp } from '../../shared/models/chirp';

@Injectable({
  providedIn: 'root'
})
export class ChirpService extends EntityCollectionServiceBase<Chirp> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) { 
    super('chirp', serviceElementsFactory);
  }
  
}
