import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZooListComponent } from './zoo-list/zoo-list.component';
import { FormComponent } from './form/form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { DetailsFormComponent } from './details-form/details-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';


const routes: Routes = [
  { path: '', component: ZooListComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'edit/:id', component: EditFormComponent },
  { path: 'details/:id', component: DetailsFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
