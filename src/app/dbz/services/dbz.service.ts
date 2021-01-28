import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
    private _personajes: Personaje[] = [{
        nombre: 'Gokú',
        poder: 15000
    },
    {
        nombre: 'Vegueta',
        poder: 12000
    }];
    get personajes():Personaje[]{
        return [...this._personajes];
    }
    
    constructor() { }
    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }
}