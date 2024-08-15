import { Injectable } from '@angular/core';
import { Homeinf, Lenguage } from '../_models/Home';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeinfService {

  private homeinf = {
    id: 0,
    resume: 'Ingeniero en computación Jr, con una gran pasión por el aprendizaje y desarrollo de nuevas tecnologías, con sed de autosuperación tanto a nivel profesional como personal.',
    img: '../../assets/default.jpg',
    featureproject: 0,
    habilities: ['Trabajo en equipo', 'Liderazgo', 'Sentido de responsabilidad', 'Disciplina', 'Creatividad', 'Rápido aprendizaje', 'Comunicación asertiva', 'Pensamiento crítico, analítico y resolutivo'],
    lenguages: [
      {
        id: 0,
        name: 'Español',
        img: '../../assets/spanish.png',
        habilities: ['Escritura: Nativo', 'Lectura: Nativo', 'Conversacional: Nativo']
      },
      {
        id: 1,
        name: 'Ingles',
        img: '../../assets/english.png',
        habilities: ['Escritura: Básico', 'Lectura: Intermedio', 'Conversacional: Básico']
      }
    ] as Lenguage[]
  } as Homeinf;

  constructor(private firestore: Firestore) { }

  GetHomeinf() : Observable<Homeinf[]> {
    const homeinf = collection(this.firestore, 'Homeinf');

    return collectionData(homeinf, { idField: 'id' }) as Observable<Homeinf[]>;
  }

}
