import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from '../../funcionesIntermedias2/hospital/hospital.component';
import { MedicoComponent } from '../../funcionesIntermedias2/medico/medico.component';
import { IncrementadorComponent } from '../../funcionesIntermedias2/incrementador/incrementador.component';

export const ROUTES: Routes = [
    { path: 'hospital', component: HospitalComponent },
    { path: 'medico/:id', component: MedicoComponent },
    { path: '**', component: IncrementadorComponent }
];
