import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from 'src/app/input/input.component';
import { ResultComponent } from 'src/app/result/result.component';



const routes: Routes = [
  { path: '', component: InputComponent },
  { path: 'output', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
