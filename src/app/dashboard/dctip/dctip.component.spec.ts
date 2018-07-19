import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DctipComponent } from './dctip.component';

describe('DctipComponent', () => {
  let component: DctipComponent;
  let fixture: ComponentFixture<DctipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DctipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DctipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
