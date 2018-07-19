import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbookComponent } from './dbook.component';

describe('DbookComponent', () => {
  let component: DbookComponent;
  let fixture: ComponentFixture<DbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
