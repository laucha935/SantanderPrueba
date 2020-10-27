import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() usr: string;

  isAdmin: any;
  userLog: any;


  constructor( public userServ: UsersService) { 

       this.userLog = this.userServ.getUserInfo();
       this.isAdmin = this.userLog.esAdm;
      
       
       
      
       
  }

  ngOnInit(): void {
    
       
  }

    

      

}
