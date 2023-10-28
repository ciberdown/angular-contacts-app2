import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedContactComponent } from './show-selected-contact.component';

describe('ShowSelectedContactComponent', () => {
  let component: ShowSelectedContactComponent;
  let fixture: ComponentFixture<ShowSelectedContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowSelectedContactComponent],
    });
    fixture = TestBed.createComponent(ShowSelectedContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
