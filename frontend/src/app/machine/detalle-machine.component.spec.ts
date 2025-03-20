import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMachineComponent } from './detalle-machine.component';

describe('DetalleMachineComponent', () => {
  let component: DetalleMachineComponent;
  let fixture: ComponentFixture<DetalleMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
