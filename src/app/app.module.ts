import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore'
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {FIREBASE_CONFIG} from './fireconfig';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard'; 

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireStorageModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireAuthGuardModule
  ],
    
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: FirestoreSettingsToken, useValue: {}},
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
