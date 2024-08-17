import { Injectable } from '@angular/core';
import { Contact } from '../_models/Contact';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private firestore: Firestore) { }

  GetContacts(): Observable<Contact[]>  { //Get all the contacts
    const contacts = collection(this.firestore, 'Contacts');
    
    return collectionData(contacts,{idField:'id'}) as Observable<Contact[]>;
  }
}
