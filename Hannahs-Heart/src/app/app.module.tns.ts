import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';

// Components
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { WelcomeLandingComponent } from '@src/app/welcome-landing/welcome-landing.component';
import { UpdateHcProviderComponent } from '@src/app/update-hc-provider/update-hc-provider.component';


// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeLandingComponent,
    UpdateHcProviderComponent,
  ],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    TNSCheckBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
