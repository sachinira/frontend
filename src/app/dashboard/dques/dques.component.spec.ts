import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DquesComponent } from './dques.component';

describe('DquesComponent', () => {
  let component: DquesComponent;
  let fixture: ComponentFixture<DquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
