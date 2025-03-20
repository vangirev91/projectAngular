import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoMachineComponent } from './nuevo-machine.component';

describe('NuevoMachineComponent', () => {
  let component: NuevoMachineComponent;
  let fixture: ComponentFixture<NuevoMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NuevoMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
