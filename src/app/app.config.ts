import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(), 
    importProvidersFrom(ModalModule.forRoot()), 
    importProvidersFrom(CarouselModule.forRoot()),
    importProvidersFrom(CollapseModule.forRoot()),
    provideAnimations(), provideFirebaseApp(() => initializeApp({"projectId":"portfolio-j24","appId":"1:945239578259:web:762b26448f2c7d47835f66","storageBucket":"portfolio-j24.appspot.com","apiKey":"AIzaSyBUzOlf2A9HS8ETKZhuvf5UIhrMCpsD_tU","authDomain":"portfolio-j24.firebaseapp.com","messagingSenderId":"945239578259","measurementId":"G-8S3N9F2JS4"})), provideFirestore(() => getFirestore())
  ]
};
