import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( protected authService: AuthService, private router: Router, private location : Location) { 
  }

  ngOnInit(): void {
  }

  login(){
    this.authService.Login('Ceo@gmail.com', 'rterterte360RTE#').subscribe(data => {
      this.router.navigate(['/Home']);
    });
  }

}
