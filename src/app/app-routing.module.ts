import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoBodiesComponent } from './auto-bodies/auto-bodies.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { MemoAutorepairComponent } from './memo-autorepair/memo-autorepair.component';

const routes: Routes = [
  {
    component : MemoAutorepairComponent ,
    path : 'memoautorepair'
  },
  {
    component : AutoBodiesComponent ,
    path : 'autobodies'
  },
  {
    component : MainComponentComponent ,
    path : ''
  },
  {
    component : MainComponentComponent ,
    path : '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
