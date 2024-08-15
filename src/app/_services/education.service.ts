import { Injectable } from '@angular/core';
import { Education, Phase_education } from '../_models/Education';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private firestore: Firestore) { }

  GetPhase_education(): Observable<Phase_education[]> {
    const phase_education = collection(this.firestore, 'Education');

    return collectionData(phase_education, { idField: 'id' }) as Observable<Phase_education[]>;
  }
}
