import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { settingsModel } from 'src/app/models/settingsModel';
import { AppSettingsService } from 'src/app/services/app-settings.service';

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
  

  constructor(public appSettings: AppSettingsService){
    appSettings.GetSettings().subscribe(s => {
      this.logo = s.setting.logo;
    });

   }

  
  ngOnInit(): void {

  }
  
  ngAfterViewInit(): void {
  }
}
