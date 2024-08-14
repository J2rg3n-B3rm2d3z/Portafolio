import { Component, OnInit } from '@angular/core';
import { Contact } from '../_models/Contact';
import { NgFor } from '@angular/common';
import { ContactsService } from '../_services/contacts.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  contacts = {} as Contact[]

  constructor(private contactsService: ContactsService){
  }

  ngOnInit(): void {
    this.contacts = this.contactsService.GetContacts();
  }

}
