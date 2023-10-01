import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarDetailsComponentComponent } from './car-details-component.component';

describe('CarDetailsComponentComponent', () => {
  let component: CarDetailsComponentComponent;
  let fixture: ComponentFixture<CarDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarDetailsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
