import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project12Component } from './project12.component';

describe('Project12Component', () => {
  let component: Project12Component;
  let fixture: ComponentFixture<Project12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
