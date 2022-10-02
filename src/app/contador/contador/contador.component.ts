import { Component } from '@angular/core'

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{ titulo }}</h1>

        <button (click)="acumular(1)">+ 1</button>
        <span>{{ numero }}</span>
        <button (click)="acumular(-1)" >- 1</button>

        <button (click)="acumular(base)">+ {{ base }}</button>
        <span>{{ result }}</span>
        <button (click)="acumular(-base)" >- {{base}}</button>
    `
})


export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
    result: number = 0;

    acumular(valor: number) {
        this.result = this.result + valor;
    }
}