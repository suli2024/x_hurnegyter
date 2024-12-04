import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegyszogComponent } from './negyszog.component';

describe('NegyszogComponent', () => {
  let component: NegyszogComponent;
  let fixture: ComponentFixture<NegyszogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegyszogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NegyszogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
