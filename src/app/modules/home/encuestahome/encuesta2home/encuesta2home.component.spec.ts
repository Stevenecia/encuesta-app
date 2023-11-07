import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Encuesta2homeComponent } from './encuesta2home.component';

describe('Encuesta2homeComponent', () => {
  let component: Encuesta2homeComponent;
  let fixture: ComponentFixture<Encuesta2homeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Encuesta2homeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Encuesta2homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
