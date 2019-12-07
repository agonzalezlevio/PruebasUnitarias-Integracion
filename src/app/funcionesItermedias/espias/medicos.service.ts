import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators/';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class MedicosService {

  constructor( public http: HttpClient ) { }

  public getMedicos() {
    return this.http.get('...')
                .pipe(map( (resp: any) => resp.medicos ));
  }

  public agregarMedico( medico: any ) {
    return this.http.post('...', medico )
                .pipe(map( (resp: any) => resp.medico ));
  }

  public borrarMedico( id: string ) {
    return this.http.delete('...' )
                .pipe(map( (resp: any) => resp.medico ));
  }


}
