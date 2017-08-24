import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';
import { AppComponent } from './app.component';
// importing routes
import { appRouting } from './app.routing';
// importing components
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    appRouting
  ],
  declarations: [ 
    AppComponent ,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotFoundComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}