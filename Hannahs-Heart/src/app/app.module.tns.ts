import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { TNSCheckBoxModule } from '@nstudio/nativescript-checkbox/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';

// Components
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { WelcomeLandingComponent } from '@src/app/welcome-landing/welcome-landing.component';
import { UpdateHcProviderComponent } from '@src/app/update-hc-provider/update-hc-provider.component';
import { LoginPageComponent } from '@src/app/login-page/login-page.component';
import { UpdateEmployeesComponent } from '@src/app/update-employees/update-employees.component';
import { EnterDataFormComponent } from '@src/app/enter-data-form/enter-data-form.component';
import { DeleteConfirmationComponent } from '@src/app/delete-confirmation/delete-confirmation.component';


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
    LoginPageComponent,
    UpdateEmployeesComponent,
    EnterDataFormComponent,
    DeleteConfirmationComponent,
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
