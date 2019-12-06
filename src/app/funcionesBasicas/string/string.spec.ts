import { mensaje } from './string';

/*
    Estructura básica de un archivo de pruebas.

    // Agrupación de  pruebas.
    describe('Pruebas de strings');

    // Prueba en especifico, el it() realiza una evaluación en concreto.
    it('Debe de regresar un string');

*/

describe ('Pruebas de strings', () => {

    it('Debe de regresar un string', () => {

        const resp = mensaje('Alejandro');
        // Determina si es de tipo string
        expect( typeof resp ).toBe('string');
    });


    it('Debe de regresar un contenido especificado previamente', () => {

        const nombre = 'Alejandro';
        const resp = mensaje(nombre);
        //  Determina si la cadena de texto puede ser encontrada dentro de otra cadena de texto
        expect( resp ).toContain(nombre);
    });
});




