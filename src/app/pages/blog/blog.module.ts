import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBlogComponent } from './Component/add-blog/add-blog.component';
import { BlogComponent } from './Component/blog/blog.component';



@NgModule({
  declarations: [
    AddBlogComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
