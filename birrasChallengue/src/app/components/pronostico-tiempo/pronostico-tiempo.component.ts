import { Component, OnInit } from '@angular/core';
import { weatherService }  from 'src/app/services/serviceweather.service';

@Component({
  selector: 'app-pronostico-tiempo',
  templateUrl: './pronostico-tiempo.component.html',
  styleUrls: ['./pronostico-tiempo.component.css']
})
export class PronosticoTiempoComponent implements OnInit {

  tiempo: any[] = [];
  date: string[] = [];

  constructor( private weather: weatherService) {

        this.weather.getNextDays().subscribe((data =>{

               this.tiempo = data;
               
               
         }));

         
   }

   

  ngOnInit(): void {
  }

  

}
