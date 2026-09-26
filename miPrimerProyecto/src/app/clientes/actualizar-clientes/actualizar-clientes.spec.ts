import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActualizarClientes } from './actualizar-clientes';

describe('ActualizarClientes', () => {
  let component: ActualizarClientes;
  let fixture: ComponentFixture<ActualizarClientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarClientes],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualizarClientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
