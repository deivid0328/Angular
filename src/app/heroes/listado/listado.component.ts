import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes:string[]=[ 'Spiderman', 'Ironam', 'Hulk', 'Thor' ]
  heroeBorrado:string='';
  list:string[]=[];

  borrarHeroe(){
      const heroeBorrado=this.heroes.shift() || '';
     this.heroeBorrado=heroeBorrado;
     this.list.push(this.heroeBorrado)
    }

}
