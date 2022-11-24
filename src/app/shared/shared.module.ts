import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './Components/layout/layout.component';
import { BlogModule } from '../pages/blog/blog.module';
import { TestComponent } from './Components/test/test.component';



@NgModule({
  declarations: [
    LayoutComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    BlogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
