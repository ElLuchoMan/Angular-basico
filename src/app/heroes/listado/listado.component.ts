import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent {
heroes:string[]=['Capitán América','Iron Man','Hulk','Thor','Spiderman','Vision'];
heroeBorrado:string='';
borrarHeroe(){
  
this.heroeBorrado = this.heroes.shift()||'';


}


}
