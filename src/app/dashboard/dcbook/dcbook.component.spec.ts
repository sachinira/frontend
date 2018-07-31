import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbookComponent } from './dcbook.component';

describe('DcbookComponent', () => {
  let component: DcbookComponent;
  let fixture: ComponentFixture<DcbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
