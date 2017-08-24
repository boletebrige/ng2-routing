import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
// importing components
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
    AppComponent ,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}