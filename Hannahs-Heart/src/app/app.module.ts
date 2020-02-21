import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';

// Components
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { WelcomeLandingComponent } from '@src/app/welcome-landing/welcome-landing.component';
import { UserProfileComponent } from '@src/app/user-profile/user-profile.component';
import { UpdateHcProviderComponent } from '@src/app/update-hc-provider/update-hc-provider.component';
import { LoginPageComponent } from '@src/app/login-page/login-page.component';
import { UpdateEmployeesComponent } from '@src/app/update-employees/update-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeLandingComponent,
    UserProfileComponent,
    UpdateHcProviderComponent,
    LoginPageComponent,
    UpdateEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
