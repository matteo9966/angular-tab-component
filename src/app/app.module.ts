import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodFormComponentModule } from './components/food-form/food-form.component';
import { SharedComponentsModule } from './components/shared/shared-components.module';
import { FoodPageComponent } from './pages/food-page/food-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    FoodFormComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
