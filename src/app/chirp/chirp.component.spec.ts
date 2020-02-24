import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { chirpComponent } from './chirp.component';

describe('chirpComponent', () => {
  let component: chirpComponent;
  let fixture: ComponentFixture<chirpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ chirpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(chirpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
