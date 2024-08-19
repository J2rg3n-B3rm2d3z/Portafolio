import { Component, OnInit } from '@angular/core';
import { Contact } from '../_models/Contact';
import { NgFor, NgIf } from '@angular/common';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  contacts = {} as Contact[]
  isLoading = false;

  constructor(private contactsService: ContactsService){
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
