import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/Components/login/login.component';
import { LayoutComponent } from './shared/Components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
