import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class heroeComponent {

    nombre: string = "Capitán América";
    edad: number = 35;
    get nombreCaitalizado():string{
        return this.nombre.toUpperCase();
    }
obtenerNombre():string{
    return `${this.nombre} - ${this.edad}`;
}
cambiarNombre():void{
    this.nombre='Ironman';

}
cambiarEdad():void{
    this.edad = 37;
}
}