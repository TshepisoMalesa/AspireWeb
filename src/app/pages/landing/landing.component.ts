import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { settingsModel } from 'src/app/models/settingsModel';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  isLoggedIn = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  settings: any;
  currentSettings: settingsModel = new settingsModel;
  appSettingsService: any;
  public logo: string = '';
  public items: any;
  style: any;
  background: string = '';
  

  constructor( protected authService: AuthService,public appSettings: AppSettingsService, private router: Router){
    this.authService.GetLoginStatus().subscribe(result => {
      debugger;
      if(result){
        this.appSettings.GetSettings().subscribe(s=> {
          this.logo = s.setting.logo;
          this.items = s.nav;
        });
      }
      else{
        let loginUrl = "Login";
        this.router.navigateByUrl("Login")
      }

    });

    
   }

  
  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {
  }
}
