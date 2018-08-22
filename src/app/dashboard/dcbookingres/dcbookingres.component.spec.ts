import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DcbookingresComponent } from './dcbookingres.component';

describe('DcbookingresComponent', () => {
  let component: DcbookingresComponent;
  let fixture: ComponentFixture<DcbookingresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DcbookingresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DcbookingresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
