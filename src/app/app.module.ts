import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GrandParentComponent } from './family/grand-parent/grand-parent.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { TaskManagerComponent } from './mini-app/task-manager/task-manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StringSortPipePipe } from './myPipes/string-sort-pipe.pipe';
import { NumberSortPipePipe } from './myPipes/number-sort-pipe.pipe';
import { ConsumeLocalService1Component } from './consumeService/consume-local-service1/consume-local-service1.component';
import { ConsumeLocalService2Component } from './consumeService/consume-local-service2/consume-local-service2.component';
import { RemoteDataComponent } from './remote/remote-data/remote-data.component';
import { UserApiComponentComponent } from './remote/user-api-component/user-api-component.component';
import { AutoSearchPipePipe } from './myPipes/auto-search-pipe.pipe';
import { UserDetailComponent } from './remote/user-detail/user-detail.component';
import { TemplateFormComponent } from './forms/template-form/template-form.component';
import { ModelFormsComponent } from './forms/model-forms/model-forms.component';
import { AnimationComponent } from './animation/animation/animation.component';
import { LandingpageComponent } from './landing/landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    GrandParentComponent,
    FatherComponent,
    MotherComponent,
    TaskManagerComponent,
    NotFoundComponent,
    StringSortPipePipe,
    NumberSortPipePipe,
    ConsumeLocalService1Component,
    ConsumeLocalService2Component,
    RemoteDataComponent,
    UserApiComponentComponent,
    AutoSearchPipePipe,
    UserDetailComponent,
    TemplateFormComponent,
    ModelFormsComponent,
    AnimationComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
