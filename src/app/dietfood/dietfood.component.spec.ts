import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietfoodComponent } from './dietfood.component';

describe('DietfoodComponent', () => {
  let component: DietfoodComponent;
  let fixture: ComponentFixture<DietfoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietfoodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietfoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
