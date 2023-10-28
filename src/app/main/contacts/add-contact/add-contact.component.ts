import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss'],
})
export class AddContactComponent implements OnInit {
  name!: string;
  age!: number;

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {}

  addContactHandle() {
    this.contactsService.addContact({
      id: Math.floor(Math.random() * 10000),
      name: this.name,
      age: this.age,
      status: 'online',
    });
  }
}
