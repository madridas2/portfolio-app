import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AppComponent },
  { path: 'experience', component: AppComponent },
  { path: 'skills', component: AppComponent },
  { path: 'education', component: AppComponent },
  { path: 'projects', component: AppComponent },
  { path: 'contact', component: AppComponent },
  { path: 'tech-spotlight', component: AppComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }