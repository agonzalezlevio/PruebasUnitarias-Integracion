import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });
    // Realizar pruebas en el HTML del componente referente a la leyenda
    it('Debe de mostrar la leyenda', () => {
        // Se asigna la leyenda al componente
        component.leyenda = 'Progreso de carga';
        // Disparar la detección de cambios
        fixture.detectChanges();
        // Referencia al html (h3)
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('Progreso de carga');

    });

    // Revisar el valor de un input
    it('Debe de mostrar en el input el valor del progreso',  (done) => {

        component.cambiarValor(5);

        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input'));
            const elem: HTMLInputElement = input.nativeElement;

            expect(elem.value).toBe('55');
            done();
        });

    });

    // Confirmar que elementos HTML tengan los eventos deseados
    it('Debe de incrementar/disminuir en 5, con un click en el botón', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        // Simular click, el primer botón resta
        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);
        // Simular click, el segundo botón resta
        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    // Verificar cambios de un elemento HTML tras eventos
    it('Debe de mostrar el valor del progreso por defecto', () => {

        // Se obtiene el valor por defecto del progreso
        const progresoValor = component.progreso.toString();
        // Disparar la detección de cambios
        fixture.detectChanges();
        // Referencia al html (h3)
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain(progresoValor);

    });

     // Verificar cambios de un elemento HTML tras eventos
    it('Debe de mostrar el valor del progreso, al hacer click', () => {

        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        // Simular click, el primer botón resta
        botones[0].triggerEventHandler('click', null);
        // Disparar la detección de cambios
        fixture.detectChanges();
        // Referencia al html (h3)
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('45');

    });


});
