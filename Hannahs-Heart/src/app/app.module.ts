import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { WelcomeLandingComponent } from '@src/app/welcome-landing/welcome-landing.component';
import { UserProfileComponent } from '@src/app/user-profile/user-profile.component';
import { UpdateHcProviderComponent } from '@src/app/update-hc-provider/update-hc-provider.component';
import { LoginPageComponent } from '@src/app/login-page/login-page.component';
import { UpdateEmployeesComponent } from '@src/app/update-employees/update-employees.component';
import { EnterDataFormComponent } from '@src/app/enter-data-form/enter-data-form.component';
import { DeleteConfirmationComponent } from '@src/app/delete-confirmation/delete-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeLandingComponent,
    UserProfileComponent,
    UpdateHcProviderComponent,
    LoginPageComponent,
    UpdateEmployeesComponent,
    EnterDataFormComponent,
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
