import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserDemoComponent } from './GetUser.component';

describe('GetUserDemoComponent', () => {
  let component: GetUserDemoComponent;
  let fixture: ComponentFixture< GetUserDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
