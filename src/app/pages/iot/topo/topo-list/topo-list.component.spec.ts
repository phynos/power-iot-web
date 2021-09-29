import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoListComponent } from './topo-list.component';

describe('TopoListComponent', () => {
  let component: TopoListComponent;
  let fixture: ComponentFixture<TopoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
