import { Jugador } from './class';


describe('Pruebas de clase', () => {


    it('Debe de retornar 80 de vida, si recibe 20 de daño', () => {

        // Jugador de prueba
        const jugador = new Jugador();
        const resp = jugador.recibeDamage(20);

        expect(resp).toBe(80);

    });


    it('Debe de retornar 50 de vida, si recibe 50 de daño', () => {

        // Jugador de prueba
        const jugador = new Jugador();
        const resp = jugador.recibeDamage(50);

        expect(resp).toBe(50);

    });

});
