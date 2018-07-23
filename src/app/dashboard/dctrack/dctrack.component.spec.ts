import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DctrackComponent } from './dctrack.component';

describe('DctrackComponent', () => {
  let component: DctrackComponent;
  let fixture: ComponentFixture<DctrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DctrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DctrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
