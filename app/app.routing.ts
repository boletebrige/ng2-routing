import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutUserComponent } from './about/about-user.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    // order of routes in router is important beacause it search for first route that match
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'about/:username', component: AboutUserComponent },
    { path: 'contact', component: ContactComponent },
    // this should not be the first route
    { path: '**', component: NotFoundComponent }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);