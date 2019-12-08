import { TestBed, ComponentFixture } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicosService } from '../../funcionesIntermedias/espias/medicos.service';
import { HttpClientModule } from '@angular/common/http';

/*
        TestBed : Configura e inicializa el entorno para pruebas unitarias
        y proporciona métodos para crear componentes y servicios en pruebas unitarias.

 */

describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {


        // Básicamente se debe de compilar para trabajar en el componente
        TestBed.configureTestingModule({
            declarations: [
                MedicoComponent
            ],
            providers: [
                MedicosService
            ],
            imports: [
                HttpClientModule
            ]
        });
        // Creación del componente, regresa un fixture -> Obtener acceso al componente
        fixture = TestBed.createComponent(MedicoComponent);
        // Obtener las funciones y métodos del componente
        component = fixture.componentInstance;
    });

    // Comprobar que el componente se crea correctamente
    it('Debe de crearse el componente', () => {
        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombre del médico', () => {

        const nombre = 'Alejandro';
        const respuesta = component.saludarMedico(nombre);

        expect(respuesta).toContain(nombre);
    });



});
