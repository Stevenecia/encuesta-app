import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuesta3homeComponent } from './encuesta3home.component';

describe('Encuesta3homeComponent', () => {
  let component: Encuesta3homeComponent;
  let fixture: ComponentFixture<Encuesta3homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encuesta3homeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encuesta3homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
