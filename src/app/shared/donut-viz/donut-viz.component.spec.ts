import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutVizComponent } from './donut-viz.component';

describe('DonutVizComponent', () => {
  let component: DonutVizComponent;
  let fixture: ComponentFixture<DonutVizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonutVizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonutVizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
