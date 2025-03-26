import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFrCreateComponent } from './city-fr-create.component';

describe('CityFrCreateComponent', () => {
  let component: CityFrCreateComponent;
  let fixture: ComponentFixture<CityFrCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFrCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityFrCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
