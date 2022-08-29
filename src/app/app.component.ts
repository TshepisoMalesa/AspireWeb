import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PersonModel } from './models/PersonModel';
import { settingsModel } from './models/settingsModel';
import { UserRegistration } from './models/UserRegistration';
import { AppSettingsService } from './services/app-settings.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'AspireWeb';
  public getScreenWidth: any;
  public getScreenHeight: any;
  settings: any;
  currentSettings: settingsModel = new settingsModel;
  appSettingsService: any;
  public logo: string = '';
  public items: any;
  style: any;
  background: string = '';
  person : UserRegistration = new UserRegistration;
  


  constructor( public appSettings: AppSettingsService, private elementRef: ElementRef,public sanitizer: DomSanitizer, private router : Router) {

      appSettings.GetSettings().subscribe(s=> {
        this.elementRef.nativeElement.ownerDocument.body.style = s.background.style;
      });
    
    
   

    
    
   }
   ngAfterViewInit() {
    

}

// onLoad() : any{
// return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
// }


}


