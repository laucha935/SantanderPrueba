import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valido: boolean;
  isAdmin: boolean;
  completarDatos: boolean = false;

  constructor( private router: Router, private userSer: UsersService ) { }

  loginVal:boolean = true;

  ngOnInit(): void {
  }

  ingresar(user: string, passw: string) {
    let respuesta: boolean;
    

    
    if(user != '') {

          if(passw !=''){

           respuesta = this.userSer.validarUsr( user, passw);
     
           if ( respuesta ){

                   this.router.navigate(['/main']);   
           }else {

                 
                   this.loginVal = false;
           }
          }else{
             
               this.completarDatos = true;
          }
    }else{

             this.completarDatos = true;
  }
  }

}
