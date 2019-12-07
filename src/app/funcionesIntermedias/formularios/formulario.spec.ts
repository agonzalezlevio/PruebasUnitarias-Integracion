import { FormularioRegistro } from './formulario';
import { FormBuilder, ControlContainer } from '@angular/forms';


describe('Formularios', () => {

    let component: FormularioRegistro;

    beforeEach(() => {
        component = new FormularioRegistro(new FormBuilder());
    });

    it('Debe de crear un formulario con dos campos; email y password', () => {
        // Debe de existir el campo email
        expect(component.form.contains('email')).toBeTruthy();
        // Debe de existir el campo password
        expect(component.form.contains('password')).toBeTruthy();
    });


    it('El email debe de ser obligatorio', () => {
        // Se obtiene la referencia a email
        const campoEmail = component.form.get('email');
        // Se inserta el valor a evaluar
        campoEmail.setValue('');

        expect(campoEmail.valid).toBeFalsy();

    });

    it('El email debe de ser válido', () => {
        // Se obtiene la referencia a email
        const campoEmail = component.form.get('email');
        // Se inserta el valor a evaluar
        campoEmail.setValue('alejandro@gmail.com');

        expect(campoEmail.valid).toBeTruthy();

    });


});

