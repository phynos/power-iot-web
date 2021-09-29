import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoPreviewComponent } from './topo-preview.component';

describe('TopoPreviewComponent', () => {
  let component: TopoPreviewComponent;
  let fixture: ComponentFixture<TopoPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoPreviewComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
