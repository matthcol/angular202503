import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityListComponent } from './city-list.component';

describe('CityListComponent', () => {
  let component: CityListComponent;
  let fixture: ComponentFixture<CityListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
