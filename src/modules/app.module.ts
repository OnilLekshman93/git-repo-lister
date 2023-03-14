import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimeNgModules } from './primeng.module';

import { AppComponent } from '../sub-pages/app/app.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { UserDashboardComponent } from 'src/pages/user-dashboard/user-dashboard.component';
import { RepoCardComponent } from 'src/reusables/repo-card/repo-card.component';
import { RepoListComponent } from 'src/sub-pages/repo-list/repo-list.component';
import { UserDetailsComponent } from 'src/sub-pages/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserDashboardComponent,
    RepoCardComponent,
    RepoListComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModules,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
