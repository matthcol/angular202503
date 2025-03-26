import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFrDetailComponent } from './city-fr-detail.component';

describe('CityFrDetailComponent', () => {
  let component: CityFrDetailComponent;
  let fixture: ComponentFixture<CityFrDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFrDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityFrDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
