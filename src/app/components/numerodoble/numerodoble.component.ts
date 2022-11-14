import { Component, OnInit } from '@angular/core';
//incluimos router pra redirigir
import { ActivatedRoute,Params,Router } from '@angular/router';
@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
//variables para capturar nuestro numero
public numero!: number;
public doble!:number;
 
//activaterouter viene inyectado desde el module
//necesitamos declarar ioC
//para poder recuperar los parametros

constructor(private _activeRoute:ActivatedRoute, private _router: Router){}
redirect(num:number):void {
  this._router.navigate(["/numerodoble",num]);
}
  ngOnInit(): void {
    //en el inint component es dode debemos suscribirnos y recuperar parametros
    //utilizamos iyeccion
    this._activeRoute.params.subscribe((parametros: Params)=>{
      //dentor de params podemos recuperar cada parametro por su name
      //parametros[':parameter name']
      if(parametros['numero'] != null){
        //loa parametros siempre son string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    });
  }

}
