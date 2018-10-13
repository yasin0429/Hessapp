import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { GirisComponent } from './giris/giris.component';
import { from } from 'rxjs';
import { KayitOlComponent } from './kayit-ol/kayit-ol.component';
import { HomeComponent } from './home/home.component';
import { IslemlerComponent } from './islemler/islemler.component';
import { SifreUnuttumComponent } from './sifre-unuttum/sifre-unuttum.component';

const routes: Routes = [
    {
        path: "home",
        component:HomeComponent,
        children: [
            {
                path: '',
                component: IslemlerComponent
            },
            {
                path: "giris",
                component: GirisComponent
            },
            {
                path: "kayit-ol",
                component: KayitOlComponent
            },
            {
                path: "sifremi-unuttum",
                component: SifreUnuttumComponent
            }
        ]
    },
    {path: "", redirectTo:"/home", pathMatch:'full'},
    {path: "islemler", component: IslemlerComponent}
];

@NgModule({
   declarations: [
      AppComponent,
      GirisComponent,
      KayitOlComponent,
      HomeComponent,
      IslemlerComponent,
      SifreUnuttumComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes)
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
