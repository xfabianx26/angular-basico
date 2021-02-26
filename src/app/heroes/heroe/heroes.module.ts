import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroes.compoent';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //componente que tiene 
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    //que cosa quiero que sea visible
    exports: [
        ListadoComponent
    ],
    imports:[
        //ofrece durirectivas cini *ngFor *ngIf
        CommonModule
    ]
})
export class HeroesModule{}