import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmusicComponent } from './dmusic.component';

describe('DmusicComponent', () => {
  let component: DmusicComponent;
  let fixture: ComponentFixture<DmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
