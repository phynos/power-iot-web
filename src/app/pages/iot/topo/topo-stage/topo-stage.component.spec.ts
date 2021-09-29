import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoStageComponent } from './topo-stage.component';

describe('TopoStageComponent', () => {
  let component: TopoStageComponent;
  let fixture: ComponentFixture<TopoStageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoStageComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
