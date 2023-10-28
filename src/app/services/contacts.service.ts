import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  selectedId: undefined | number;
  private contacts: ContactInterface[] = [
    { id: 2614, name: 'Jane', age: 22, status: 'online' },
    { id: 23414, name: 'Repo', age: 13, status: 'offline' },
    { id: 2214, name: 'Alex', age: 36, status: 'notActive' },
    { id: 234, name: 'Sam', age: 34, status: 'online' },
  ];

  getContacts(): ContactInterface[] {
    return this.contacts;
  }
  getContactById(id: number): ContactInterface | undefined {
    return this.contacts.filter((contact) => contact.id === id)[0];
  }

  addContact(contact: ContactInterface) {
    this.contacts.push(contact);
    return true;
  }

  removeContactById(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
  editContact(contact: ContactInterface) {
    this.removeContactById(contact.id);
    this.addContact(contact);
  }
}
export type Status = 'online' | 'offline' | 'notActive';
export interface ContactInterface {
  id: number;
  name: string;
  age: number;
  status: Status;
}
