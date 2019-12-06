import { incrementar } from './number';




describe('Pruebas de número', () => {
    it('Debe de retornar 100, si el número es mayor a 100', () => {
        const resp = incrementar(300);

        expect(resp).toBe(100);
    });

    it('Debe de retornar el número ingresado + 1, si no es mayor a 100', () => {
        const resp = incrementar(50);

        expect(resp).toBe(51);
    });
});



