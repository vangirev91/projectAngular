import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMachineComponent } from './lista-machine.component';

describe('ListaMachineComponent', () => {
  let component: ListaMachineComponent;
  let fixture: ComponentFixture<ListaMachineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaMachineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
