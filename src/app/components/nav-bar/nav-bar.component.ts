import { Component,HostListener , Input, OnInit, ViewEncapsulation } from '@angular/core';
import { settingsModel } from 'src/app/models/settingsModel';
import {AppComponent} from '../../app.component';
import {AppSettingsService} from '../../services/app-settings.service'

@Component({
  selector: 'app-nav-bar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],



})
export class NavBarComponent implements OnInit {
  @Input() title = '';
  isLoggedIn = false;
  public getScreenWidth: any;
  public getScreenHeight: any;
  settings: any;
  currentSettings: settingsModel = new settingsModel;
  appSettingsService: any;
  logo: string = '';
  items: any;

  constructor( public Myapp: AppComponent, public appSettings: AppSettingsService) {
    this.title = Myapp.title;
    
    appSettings.GetSettings().then((settings) => {
      this.currentSettings = settings;
      this.logo = this.currentSettings.setting.logo;
      this.items = this.currentSettings.nav;
      debugger;
    })
    debugger;

   }

  ngOnInit(): void {
    this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.getScreenWidth = window.innerWidth;
    debugger;
    this.getScreenHeight = window.innerHeight;
  }

  goToPage(url: string){

  }

}
