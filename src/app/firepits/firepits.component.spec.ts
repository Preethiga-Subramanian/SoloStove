import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirepitsComponent } from './firepits.component';

describe('FirepitsComponent', () => {
  let component: FirepitsComponent;
  let fixture: ComponentFixture<FirepitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirepitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirepitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
