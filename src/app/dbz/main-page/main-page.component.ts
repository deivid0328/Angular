import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})


export class MainPageComponent  {

 personajes:Personaje[]=[
    {
      nombre:'Goku',
      poder: 15000
    },
    {
      nombre:'Vegeta',
      poder: 7500
    },
]

nuevo:Personaje={
  nombre:'Deivid',
  poder:30
}


agregarNuevoPersonaje( argumento:Personaje ){
  this.personajes.push( argumento )
}

constructor( public dbzService:DbzService ){

}

}
