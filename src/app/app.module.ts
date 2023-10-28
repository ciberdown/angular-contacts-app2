import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { InfoComponent } from './main/info/info.component';
import { HomeComponent } from './main/home/home.component';
import { SignleContactComponent } from './main/contacts/signle-contact/signle-contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexboxComponent } from './customComponents/flexbox/flexbox.component';
import { AddContactComponent } from './main/contacts/add-contact/add-contact.component';
import { EditContactComponent } from './main/contacts/edit-contact/edit-contact.component';
import { ShowSelectedContactComponent } from './main/contacts/show-selected-contact/show-selected-contact.component';
import { GridComponent } from './customComponents/grid/grid.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      { path: 'edit/:id', component: EditContactComponent },
      { path: 'show/:id', component: ShowSelectedContactComponent },
      { path: 'add', component: AddContactComponent },
    ],
  },
  {
    path: 'info',
    component: InfoComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ContactsComponent,
    InfoComponent,
    HomeComponent,
    SignleContactComponent,
    FlexboxComponent,
    AddContactComponent,
    EditContactComponent,
    ShowSelectedContactComponent,
    GridComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
