import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoEditorComponent } from './topo-editor.component';

describe('TopoEditorComponent', () => {
  let component: TopoEditorComponent;
  let fixture: ComponentFixture<TopoEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoEditorComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
