import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {ConsumeLocalService1Component} from './consumeService/consume-local-service1/consume-local-service1.component';

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
    path:'local',
    component:ConsumeLocalService1Component
  },
  {
    path:'service2',
    component:ConsumeLocalService2Component
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
