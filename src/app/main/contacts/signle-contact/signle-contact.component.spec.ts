import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignleContactComponent } from './signle-contact.component';

describe('SignleContactComponent', () => {
  let component: SignleContactComponent;
  let fixture: ComponentFixture<SignleContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignleContactComponent]
    });
    fixture = TestBed.createComponent(SignleContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
