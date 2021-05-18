import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFeaturesComponent } from './app-features/app-features.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: '', component: AppFeaturesComponent },
  { path: 'services', component: ServicesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
