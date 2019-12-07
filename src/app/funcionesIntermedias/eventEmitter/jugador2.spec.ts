import { Jugador2 } from './jugador2';


describe('Jugador 2 emit', () => {
    let jugador: Jugador2;

    beforeEach(() => jugador = new Jugador2());

    it('Debe de emitir un evento cuando el jugador recibe daño', () => {

        let nuevaVida = 0;

        jugador.vidaCambia.subscribe(vida => {
            nuevaVida = vida;
        });

        jugador.recibeDamage(1000);

        expect(nuevaVida).toBe(0);

    });

    it('Debe de emitir un evento cuando el jugador recibe daño y sobrevivir si es menos de 100', () => {

        let nuevaVida = 0;

        jugador.vidaCambia.subscribe(vida => {
            nuevaVida = vida;
        });

        jugador.recibeDamage(50);

        expect(nuevaVida).toBe(50);

    });

} );
