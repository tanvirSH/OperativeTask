import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnComponentComponent } from './btn-component.component';

describe('BtnComponentComponent', () => {
  let component: BtnComponentComponent;
  let fixture: ComponentFixture<BtnComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtnComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
