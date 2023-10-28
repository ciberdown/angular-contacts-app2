import { Component, Input } from '@angular/core';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts.service';

@Component({
  selector: 'app-signle-contact',
  templateUrl: './signle-contact.component.html',
  styleUrls: ['./signle-contact.component.scss'],
})
export class SignleContactComponent {
  @Input() contact!: ContactInterface;
  @Input() index!: number;

  constructor(private contactsSerivce: ContactsService) {}

  stopPropagation(event: MouseEvent) {
    event.stopPropagation();
  }

  removeHandle() {
    this.contactsSerivce.removeContactById(this.contact.id);
  }
}
