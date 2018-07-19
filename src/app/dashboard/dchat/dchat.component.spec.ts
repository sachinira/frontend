import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DchatComponent } from './dchat.component';

describe('DchatComponent', () => {
  let component: DchatComponent;
  let fixture: ComponentFixture<DchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DchatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
