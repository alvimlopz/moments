import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componenst/footer/footer.component';
import { HeaderComponent } from './componenst/header/header.component';
import { MomentFormComponent } from './componenst/moment-form/moment-form.component';
import { AboutComponent } from './componenst/pages/about/about.component';
import { HomeComponent } from './componenst/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentFormComponent,
    MessagesComponent,
    MomentComponent,
    EditMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
     FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
