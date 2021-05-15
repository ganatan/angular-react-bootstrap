import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { MailingModule } from './modules/general/contact/mailing/mailing.module';
import { MailingComponent } from './modules/general/contact/mailing/mailing.component';
import { MapModule } from './modules/general/contact/map/map.module';
import { MapComponent } from './modules/general/contact/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    MailingComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MailingModule,
    MapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }