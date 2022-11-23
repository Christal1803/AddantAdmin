import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/Components/login/login.component';
import { BlogComponent } from './pages/blog/Components/blog/blog.component';
import { EnquiryComponent } from './pages/contact/enquiry/enquiry.component';
import { LayoutComponent } from './shared/Components/layout/layout.component';

const routes: Routes = [

  {
    path: 'board',
    component: LayoutComponent,
    
  },


  {
    path: '',
    component: LoginComponent ,

  },


  {
    path: 'blog',
    component: BlogComponent
  },


  {
    path: 'enquiry',
    component: EnquiryComponent
  },
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
