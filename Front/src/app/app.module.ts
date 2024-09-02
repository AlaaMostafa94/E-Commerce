import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TestAngularMaterialComponent } from './Components/test-angular-material/test-angular-material.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmDeleteDialogComponent } from './Components/confirm-delete-dialog/confirm-delete-dialog.component';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { loggingInterceptor } from './Interceptors/logging.interceptor';
import { headersInterceptor } from './Interceptors/headers.interceptor';
import { ErrorsInterceptor } from './Interceptors/errors.interceptor';
import { LoginComponent } from './Components/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from '../environments/environment.development';
import { RegisterComponent } from './Components/register/register.component';
import { CheckPasswordDirective } from './Directives/check-password.directive';
import { AdminLayoutComponent } from './Components/admin-layout/admin-layout.component';
import { AdminNavbarComponent } from './Components/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './Components/admin-footer/admin-footer.component';

export function tokenGetter(){
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MainLayoutComponent,
    NotFoundComponent,
    TestAngularMaterialComponent,
    ConfirmDeleteDialogComponent,
    LoginComponent,
    RegisterComponent,
    CheckPasswordDirective,
    AdminLayoutComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:tokenGetter,
        allowedDomains:[`${environment.ApiUrl}`],
        disallowedRoutes:[]
      }
    }),
    MatSlideToggleModule,
    MatButtonModule,
    MatDialogModule,
    MatDialogContent
  ],
  providers: [
    provideAnimationsAsync(),
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //    useClass: loggingInterceptor,
    //    multi: true
    // },
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:headersInterceptor,
    //   multi:true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
