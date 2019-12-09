import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        NavbarComponent
      ],
      imports: [
        // Todos los elementos relacionados a las rutas
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

   // Confirmar que exista un routerLink hacia el componente médico
  it('Debe de tener un link a la página de médicos', () => {
    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    let existe = false;

    for (const elem of elementos) {

      if (elem.attributes.routerLink === '/medicos') {
        existe = true;
        break;
      }
    }
    expect(existe).toBeTruthy();

  });

});
