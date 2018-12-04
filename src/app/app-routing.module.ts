import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { NotFoundComponent } from './not-found/not-found.component';

const myroutes: Routes = [

  {
    path: 'family',
    component: GrandParentComponent,
    children: [
      {
        path: 'father',
        component:FatherComponent
      },
      {
        path: 'mother',
        component: MotherComponent
      }
    ]
  },
  {
    path: 'task',
    component: TaskManagerComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(myroutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
