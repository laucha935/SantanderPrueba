import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculo-birras',
  templateUrl: './calculo-birras.component.html',
  styleUrls: ['./calculo-birras.component.css']
})
export class CalculoBirrasComponent implements OnInit {
  cantCajas: number;
  mostrar: boolean = false;
  completarTemp:boolean = false;
  completarEmp:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  calcular( temp: number, parti: number) {

    if( temp != 0) {
 
       if(parti != 0){
        this.mostrar = true;

        if( temp > 20 && temp < 24 )  {
              
              this.cantCajas = ( ( ( parti * 1 ) /6) ) + 1;
        }else {
          if( temp < 20 ) {
             
             this.cantCajas =(( ( parti * 0.75 ) )/6 ) + 1;
          }else{
            if( temp > 24 ){

             this.cantCajas = ((( parti * 3 )) /6 ) + 1;
            }
          }
        }
          this.cantCajas = Math.round(this.cantCajas);
      }else{
        this.completarEmp = true;
      }


      }else{
           this.completarTemp = true;
      }
    }

}
