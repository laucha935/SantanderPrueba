import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class weatherService {

  dataTiempo: any;

  constructor( private http: HttpClient) { 

       
  }


  getWeather() {
      
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com',
      'x-rapidapi-key' :"96adf691f4msh35dee11b3778a93p1732d3jsnd54a4d8112d6"
   
      });

      return this.http.get('https://rapidapi.p.rapidapi.com/forecast/daily?lat=-34.61315&lon=%20-58.37723&units=M&lang=es', {headers})
     
    
    //return this.http.get('http://api.weatherapi.com/v1/forecast.json?key=64514005ae3749c39b543239201610&q=Buenos Aires&days=5');
      
    
    }

   getNextDays() {
   
        return this.getWeather().pipe( map ( data => {
          this.dataTiempo = data['data'];  
          return data['data'];
          
           }));

   }

   

   

   
   }



   
