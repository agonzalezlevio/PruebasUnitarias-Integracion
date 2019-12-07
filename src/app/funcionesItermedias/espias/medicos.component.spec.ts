import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, EMPTY, throwError } from 'rxjs';




describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
        componente = new MedicosComponent(servicio);
    });

    // Espías
    it('ngOnInit: Debe de cargar los médicos', () => {

        const medicos = ['Médico 1', 'Médico 2' , 'Médico 3'];
        // Espiar una llamada en el método getMedico del servicio y ejecutar la función establecida
        spyOn(servicio, 'getMedicos').and.callFake( () => {
            return from( [medicos] );
        });

        componente.ngOnInit();
        expect(componente.medicos.length).toBeGreaterThanOrEqual(0);

    });

    // Confirmar que un método sea llamado
    it('Debe de llamar al servidor para agregar un médico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico: any) => {
            return EMPTY;
        });
        // Se llamá al método una vez que se crea el espía
        componente.agregarMedico();
        expect(espia).toHaveBeenCalled();

    });

    // Espías, returnValue
    it('Debe de agregar un nuevo médico al arreglo de médicos', () => {

        const medico = {
            id: 1,
            nombre: 'Juan'
        };

        spyOn(servicio, 'agregarMedico').and.returnValue( from([medico]) );
        // Se llamá al método una vez que se crea el espía
        componente.agregarMedico();
        expect(componente.medicos.length).toBe(1);
        // Confirmar si el médico esta incluido en el arreglo de médicos
        expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });

    // Probar errores en los observable
    it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio ', () => {

        const error = 'No se pudo agregar el médico';

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(error);
    });

    // Simular confirmaciones de usuario
    it('Debe de llamar al servidor para borrar un médico', () => {

        // Espía window
        spyOn(window, 'confirm').and.returnValue(true);

        // Espía al servicio
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');
        expect(espia).toHaveBeenCalledWith('1');

    });

    it('No debe de llamar al servidor para borrar un médico', () => {

        // Espía window
        spyOn(window, 'confirm').and.returnValue(false);

        // Espía al servicio
        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');
        expect(espia).not.toHaveBeenCalledWith('1');

    });



});
