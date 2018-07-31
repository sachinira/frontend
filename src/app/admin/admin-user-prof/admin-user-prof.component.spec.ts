import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserProfComponent } from './admin-user-prof.component';

describe('AdminUserProfComponent', () => {
  let component: AdminUserProfComponent;
  let fixture: ComponentFixture<AdminUserProfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserProfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
