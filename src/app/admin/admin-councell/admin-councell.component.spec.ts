import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCouncellComponent } from './admin-councell.component';

describe('AdminCouncellComponent', () => {
  let component: AdminCouncellComponent;
  let fixture: ComponentFixture<AdminCouncellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCouncellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCouncellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
