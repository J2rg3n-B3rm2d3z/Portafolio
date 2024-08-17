import { Injectable } from '@angular/core';
import { Tecnology, TypeTec } from '../_models/Tecnology';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor(private firestore: Firestore) { }

  GetTechnology():  Observable<TypeTec[]> { //Get all technology
    const contacts = collection(this.firestore, 'Typetecs');
    
    return collectionData(contacts,{idField:'id'}) as Observable<TypeTec[]>;
  }

}
