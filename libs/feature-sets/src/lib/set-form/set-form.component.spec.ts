import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFormComponent } from './set-form.component';

describe('SetFormComponent', () => {
  let component: SetFormComponent;
  let fixture: ComponentFixture<SetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
