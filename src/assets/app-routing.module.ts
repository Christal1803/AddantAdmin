import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/Components/login/login.component';
import { BlogComponent } from './pages/blog/Component/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
  {
    path: 'blog',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
