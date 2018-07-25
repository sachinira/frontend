import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DchomeComponent } from './dchome.component';

describe('DchomeComponent', () => {
  let component: DchomeComponent;
  let fixture: ComponentFixture<DchomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DchomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DchomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
