import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgAmpComponent } from './ng-amp.component';

describe('NgAmpComponent', () => {
  let component: NgAmpComponent;
  let fixture: ComponentFixture<NgAmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgAmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgAmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
