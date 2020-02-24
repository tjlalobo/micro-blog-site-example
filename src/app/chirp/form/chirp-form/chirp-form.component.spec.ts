import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chirpFormComponent } from './chirp-form.component';

describe('chirpFormComponent', () => {
  let component: chirpFormComponent;
  let fixture: ComponentFixture<chirpFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chirpFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chirpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
