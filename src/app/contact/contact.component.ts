import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Contact } from '../_models/Contact';
import { NgFor } from '@angular/common';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contacts = {} as Contact[];
  email: string = 'jurgenfbermudezpicado@gmail.com'

  constructor(private tittleService: Title, private contactsService: ContactsService) {
    this.tittleService.setTitle('Jurgen Bermúdez - Contactos');
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.GetContacts();
  }

}
