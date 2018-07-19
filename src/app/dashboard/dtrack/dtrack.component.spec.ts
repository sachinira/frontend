import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DtrackComponent } from './dtrack.component';

describe('DtrackComponent', () => {
  let component: DtrackComponent;
  let fixture: ComponentFixture<DtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
