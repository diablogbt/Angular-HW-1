import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HellComponent} from './helloworldc.component';

describe('HellComponent', () => {
  let component: HellComponent;
  let fixture: ComponentFixture<HellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

