import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InputcomponentComponent } from './inputcomponent/inputcomponent.component';
import { PropertybindingsComponent } from './propertybindings/propertybindings.component';
import { SecondpropertbindComponent } from './secondpropertbind/secondpropertbind.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { LearningservicesComponent } from './learningservices/learningservices.component';
import { CaculatorserviceService } from './caculatorservice.service';
import { HttpComponent } from './http/http.component';
import { RoutingComponent } from './routing/routing.component';
import { RouterModule,Routes } from '@angular/router';
import { WildcardComponent } from './wildcard/wildcard.component';

const routes:Routes = [
  {path:"",redirectTo:"/routingcomponent",pathMatch:'full'},
  {path:"routingcomponent",component:RoutingComponent},
  {path:"inputcomponent/:id",component:InputcomponentComponent},
  {path:"modeldrivenform",component:ModelDrivenFormComponent},
  {path:"tempaltedrivenform",component:TemplateDrivenFormComponent},
  {path:"httpComponent",component:HttpComponent},
  {path:"puzzle",component:PuzzleComponent},
  {path:"propertybinding",component:PropertybindingsComponent},
  {path:"**",component:WildcardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputcomponentComponent,
    PropertybindingsComponent,
    SecondpropertbindComponent,
    TemplateDrivenFormComponent,
    ModelDrivenFormComponent,
    PuzzleComponent,
    LearningservicesComponent,
    HttpComponent,
    RoutingComponent,
    WildcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CaculatorserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
