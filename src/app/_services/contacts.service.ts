import { Injectable } from '@angular/core';
import { Contact } from '../_models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [
    {
      id: 0,
      contactlink: '//www.linkedin.com/in/jurgen-francisco-b-376a95265',
      pictures: '../../assets/Linkedin.png',
      name: 'LinkedIn'
    },
    {
      id: 1,
      contactlink: '//github.com/J2rg3n-B3rm2d3z',
      pictures: '../../assets/Github.jpeg',
      name: 'Github'
    }
  ]

  constructor() { }

  GetContacts(): Contact[] {
    return this.contacts;
  }
}
