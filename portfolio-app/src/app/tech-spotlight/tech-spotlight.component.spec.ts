import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSpotlightComponent } from './tech-spotlight.component';

describe('TechSpotlightComponent', () => {
  let component: TechSpotlightComponent;
  let fixture: ComponentFixture<TechSpotlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechSpotlightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
