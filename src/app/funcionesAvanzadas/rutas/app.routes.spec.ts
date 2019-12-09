import { ROUTES } from './app.routes';
import { MedicoComponent } from 'src/app/funcionesIntermedias2/medico/medico.component';


describe('Rutas principales', () => {

    // Probar la existencía de una ruta en particular 
    it('Debe de existir la ruta /medico/:id', () => {

    expect(ROUTES).toContain(
        { path: 'medico/:id',
        component: MedicoComponent
        });

    });


});
