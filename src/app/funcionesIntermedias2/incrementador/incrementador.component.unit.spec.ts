import { IncrementadorComponent } from './incrementador.component';


describe('Incrementador Component Unit', () => {

    let componet: IncrementadorComponent;

    beforeEach(() => {
        componet = new IncrementadorComponent();
    });

    it('No debe de pasar de 100 el progreso', () => {
        componet.progreso = 50;

        componet.cambiarValor(5);

        expect(componet.progreso).toBe(55);
    });

});
