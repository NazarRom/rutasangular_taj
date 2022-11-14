import { HomeComponent } from "./components/home/home.component";
import { CineComponent } from "./components/cine/cine.component";
import { TelevisionComponent } from "./components/television/television.component";
import { MusicaComponent } from "./components/musica/musica.component";
import { Error404Component } from "./components/error404/error404.component";

//necesitampos lo siguiendtes modulos para routing
import {Routes,RouterModule} from '@angular/router';
import { ModuleWithProviders} from '@angular/core';

//definimos un array de objetos routes

const appRoutes: Routes = [
    {path: "", component: HomeComponent},
    {path: "musica", component:MusicaComponent},
    {path: "cine", component:CineComponent},
    {path: "television",component:TelevisionComponent},
    {path:"**",component:Error404Component}
]
 export const appRoutingProviders: any[] = [];
 export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes)

