import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSearchComponentComponent } from './car-search-component.component';

describe('CarSearchComponentComponent', () => {
  let component: CarSearchComponentComponent;
  let fixture: ComponentFixture<CarSearchComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarSearchComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarSearchComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
