import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { settingsModel } from 'src/app/models/settingsModel';
import { AppSettingsService } from 'src/app/services/app-settings.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
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
  


  constructor( public appSettings: AppSettingsService, private elementRef: ElementRef,public sanitizer: DomSanitizer) {
    appSettings.GetSettings().subscribe(s =>{
        s.entity;
    });
  }
  ngOnInit(): void {
  }

}
