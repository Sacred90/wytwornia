import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project13Component } from './project13.component';

describe('Project13Component', () => {
  let component: Project13Component;
  let fixture: ComponentFixture<Project13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
