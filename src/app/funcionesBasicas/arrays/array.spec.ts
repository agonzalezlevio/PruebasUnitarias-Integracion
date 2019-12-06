import { obtenerFrutas } from './array';


describe('Pruebas de Arreglos', () => {

    it('Debe de retornar al menos tres frutas', () => {

        const resp: any[] = obtenerFrutas();

        expect(resp.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe de existir un Plátano y una Pera', () => {

        const resp: any[] = obtenerFrutas();

        expect(resp).toContain('Plátano');
        expect(resp).toContain('Pera');

    });

});
