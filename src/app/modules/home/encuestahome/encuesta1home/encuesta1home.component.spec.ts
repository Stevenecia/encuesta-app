import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuesta1homeComponent } from './encuesta1home.component';

describe('Encuesta1homeComponent', () => {
  let component: Encuesta1homeComponent;
  let fixture: ComponentFixture<Encuesta1homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encuesta1homeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encuesta1homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
