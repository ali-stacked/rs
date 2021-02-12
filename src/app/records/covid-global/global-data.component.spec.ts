import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalCovidGridComponent } from './global-data.component';

describe('GlobalCovidGridComponent', () => {
  let component: GlobalCovidGridComponent;
  let fixture: ComponentFixture<GlobalCovidGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalCovidGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalCovidGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
