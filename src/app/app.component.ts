import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { settingsModel } from './models/settingsModel';
import { AppSettingsService } from './services/app-settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
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
  public logo: string = '';
  public items: any;
  style: any;
  background: string = '';
  


  constructor( public appSettings: AppSettingsService, private elementRef: ElementRef,public sanitizer: DomSanitizer) {
    appSettings.GetSettings().subscribe(s=> {
      this.logo = s.setting.logo;
      this.items = s.nav;
      this.elementRef.nativeElement.ownerDocument.body.style = s.background.style;
    })
   }
   ngAfterViewInit() {
    

}

// onLoad() : any{
// return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
// }


}


