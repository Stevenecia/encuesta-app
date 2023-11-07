import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestahomeComponent } from './encuestahome.component';

describe('EncuestahomeComponent', () => {
  let component: EncuestahomeComponent;
  let fixture: ComponentFixture<EncuestahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncuestahomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncuestahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
