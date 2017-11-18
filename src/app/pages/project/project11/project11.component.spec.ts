import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project11Component } from './project11.component';

describe('Project11Component', () => {
  let component: Project11Component;
  let fixture: ComponentFixture<Project11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
