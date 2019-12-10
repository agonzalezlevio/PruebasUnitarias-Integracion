import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

/*

  Reemplazar servicios de Angular por servicios falsos
  para hacer y usar llamados de alguna propiedad

*/


// Simular el navigate
class MockRouter {
  public navigate(params) {
  }
}
// Simular la propiedad params
class MockActivatedRoute {
  // params: Observable<any> = EMPTY;
  // subject para insertar valores en un observable
  private subject = new Subject();

  // Agregar un valor al subject
  public push(valor) {
    this.subject.next(valor);
  }


  get params() {
    return this.subject.asObservable();
  }

}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouterMedicoComponent
       ],
       providers: [
         {
           provide: Router,
           useClass: MockRouter
         },
         {
          provide: ActivatedRoute,
          useClass: MockActivatedRoute
        }
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe de redireccionar Médico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);

  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: MockActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id : 'nuevo'});

    expect(component.id).toBe('nuevo');

  });




});
