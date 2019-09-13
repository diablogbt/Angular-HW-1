import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildToParentDemoComponent } from './child-to-parent-demo.component';

describe('ChildToParentDemoComponent', () => {
  let component: ChildToParentDemoComponent;
  let fixture: ComponentFixture<ChildToParentDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildToParentDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildToParentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
