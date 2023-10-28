import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss'],
})
export class EditContactComponent implements OnInit, OnDestroy {
  contact: ContactInterface | undefined;
  name!: string;
  age!: number;
  constructor(
    private contactsService: ContactsService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contact = this.contactsService.getContactById(+params['id']);
    });
  }

  saveEdit() {
    const newContact: ContactInterface = {
      id: this.contact ? this.contact.id : Math.floor(Math.random() * 1000),
      name: this.name,
      age: this.age,
      status: this.contact ? this.contact.status : 'offline',
    };
    this.contactsService.editContact(newContact);
  }

  ngOnDestroy(): void {}
}
