import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCouncellProfComponent } from './admin-councell-prof.component';

describe('AdminCouncellProfComponent', () => {
  let component: AdminCouncellProfComponent;
  let fixture: ComponentFixture<AdminCouncellProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCouncellProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCouncellProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
