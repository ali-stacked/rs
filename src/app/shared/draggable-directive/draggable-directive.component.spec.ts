import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraggableDirectiveComponent } from './draggable-directive.component';

describe('DraggableDirectiveComponent', () => {
  let component: DraggableDirectiveComponent;
  let fixture: ComponentFixture<DraggableDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraggableDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraggableDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
