import { usuarioLogeado } from './boolean';


describe('Pruebas de Booleanos', () => {

     it('Debe de retornar true', () => {

        const resp = usuarioLogeado();

        expect(resp).toBeTruthy();
     });
});
