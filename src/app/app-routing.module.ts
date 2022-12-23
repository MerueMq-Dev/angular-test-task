import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { EmptyComponent } from './empty/empty.component';
import { InputsFilesComponent } from './inputs-files/inputs-files.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

const routes: Routes = [
  {
    path: '', component: InputsFilesComponent, pathMatch: 'full',
  }
  ,
  { path: 'email', component: EmailFormComponent },
  { path: 'actualize', component: EmptyComponent },
  { path: 'load', component: ProgressBarComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
