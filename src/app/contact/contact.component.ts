import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from '../_models/Contact';
import { NgFor, NgIf } from '@angular/common';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  isLoading = false;
  contacts = {} as Contact[];
  email: string = 'jurgenb.contacto@gmail.com'

  constructor(private tittleService: Title, private contactsService: ContactsService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Contactos');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.contactsService.GetContacts().subscribe(
      contacts => {
        this.contacts = contacts;
        this.contacts.sort((a, b) => { return a.id - b.id });
        this.isLoading = false;
      },
      error => {
        console.error('Error al cargar los datos', error);
        this.isLoading = true;
      }
    )
  }
}
