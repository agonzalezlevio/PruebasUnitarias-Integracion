import { Jugador } from './class';


describe('Pruebas de clase', () => {

    // Jugador de prueba
    let jugador = new Jugador();
  /*
    Ciclos de vida

    // Inicio
    beforeAll(); // Global
    beforeEach();   // Especifica

    // Finalización
    afterAll(); // Global
    afterEach(); // Especifica

 */

    beforeAll(() => {
        console.log('beforeAll');
    });

    beforeEach(() => {
        console.log('beforeEach');
        // Reiniciar el jugador
        jugador = new Jugador();
    });

    afterAll(() => {
        console.log('afterAll');
    });

    afterEach(() => {
        console.log('afterEach');
    });






    it('Debe de retornar 80 de vida, si recibe 20 de daño', () => {

        const resp = jugador.recibeDamage(20);

        expect(resp).toBe(80);

    });


    it('Debe de retornar 50 de vida, si recibe 50 de daño', () => {

        const resp = jugador.recibeDamage(50);

        expect(resp).toBe(50);

    });

});
