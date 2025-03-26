import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityFrListComponent } from './city-fr-list.component';

describe('CityFrListComponent', () => {
  let component: CityFrListComponent;
  let fixture: ComponentFixture<CityFrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityFrListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityFrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
