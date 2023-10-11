import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './modules/components/category.component';

const routes: Routes = [
  // Ruta para CategoryComponent
   { path: 'category', component: CategoryComponent },
   
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
