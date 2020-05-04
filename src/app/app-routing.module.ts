import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ZooListComponent } from './zoo-list/zoo-list.component';
import { FormComponent } from './form/form.component';


const routes: Routes = [
// { path: '', component: AppComponent },
{ path: '', component: ZooListComponent },
{ path: 'form/:id', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
