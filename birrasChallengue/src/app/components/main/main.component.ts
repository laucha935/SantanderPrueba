import { Component, OnInit } from '@angular/core';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  
  constructor(private userService: UsersService) {

     
        
  }



  ngOnInit(): void {
  }

}
