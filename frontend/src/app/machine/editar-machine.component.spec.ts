import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMachineComponent } from './editar-machine.component';

describe('EditarMachineComponent', () => {
  let component: EditarMachineComponent;
  let fixture: ComponentFixture<EditarMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditarMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
