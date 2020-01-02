import { Injectable } from '@angular/core';
import { Tribe } from '../modules/application/models/tribe';
import { TRIBES } from '../services/mock-tribes';

@Injectable({
  providedIn: 'root'
})
export class TribesService {

  // Retourne toutes les tribus
  getTribes(): Tribe[] {
    return TRIBES;
  }

  // Retourne la tribu avec l'identifiant passé en paramètre
  getTribeById(id: number): Tribe {
    const tribes = this.getTribes();

    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < tribes.length; index++) {
      if (id === tribes[index].id) {
        return tribes[index];
      }
    }
  }
}
