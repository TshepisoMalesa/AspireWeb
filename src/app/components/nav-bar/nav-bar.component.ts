import { Component,HostListener , Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
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
  logo: string = '';
  items: any;

  constructor( public Myapp: AppComponent, public appSettings: AppSettingsService) {
    this.title = Myapp.title;
    
    appSettings.GetSettings().subscribe(s=> {
      this.logo = s.setting.logo;
      this.items = s.nav;
    })

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

  @ViewChild('sidenav')
  sidenav!: MatSidenav;

}
