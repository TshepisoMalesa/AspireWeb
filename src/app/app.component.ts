import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { settingsModel } from './models/settingsModel';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'AspireWeb';
  isLoggedIn = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  settings: any;
  currentSettings: settingsModel = new settingsModel;
  appSettingsService: any;
  logo: string = '';
  items: any;
  style: any;
  background: string = '';


  constructor( public appSettings: AppSettingsService, private elementRef: ElementRef) {
    appSettings.GetSettings().then((settings) => {
      this.currentSettings = settings;
      this.logo = this.currentSettings.setting.logo;
      this.items = this.currentSettings.nav;
      this.style = this.currentSettings.background.style;
      this.background = this.currentSettings.background.value;
      this.elementRef.nativeElement.ownerDocument
      .body.style = this.style;
      
     
      debugger;
    })
    debugger;

   }
   ngAfterViewInit() {
    

}

}


