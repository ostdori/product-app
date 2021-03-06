import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule}   from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome.component';

import { AppComponent }  from './app.component';
import {ProductModule} from './products/product.module';

@NgModule({
  imports: [ BrowserModule,
			   HttpModule,
			   FormsModule,
  			   RouterModule.forRoot([
  			 
  			 	{path: 'welcome',component:WelcomeComponent},
  			 	{path: '' , redirectTo: 'welcome' , pathMatch:'full'},
  			 	{path:'**',redirectTo:'welcome',pathMatch:'full'}

  			 	]),
         ProductModule
  			],


  declarations: [
  					AppComponent,
  					WelcomeComponent
  				],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
