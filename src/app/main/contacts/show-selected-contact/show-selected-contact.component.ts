import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  ContactInterface,
  ContactsService,
} from 'src/app/services/contacts.service';

@Component({
  selector: 'app-show-selected-contact',
  templateUrl: './show-selected-contact.component.html',
  styleUrls: ['./show-selected-contact.component.scss'],
})
export class ShowSelectedContactComponent implements OnInit, OnDestroy {
  selectedId!: number;
  contact!: ContactInterface | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactsService: ContactsService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.contact = this.contactsService.getContactById(+params['id']);
    });
  }
  ngOnDestroy(): void {}
}
