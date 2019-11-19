import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public helloStr: string;
  public switcher= true;
  constructor(public translateService: TranslateService) {
    this.translateService = translateService;

    this.helloStr = translateService.instant('hello');
  }

  ngOnInit(): void {
    //this.initTranslateSrv();

    //this.initLocalStr();
  }

  initTranslateSrv() {
    /* --- set i18n begin ---*/
    this.translateService.setDefaultLang('zh');
    //const browserLang = this.translateService.getBrowserLang();
    //this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    /* --- set i18n end ---*/
  }
/*
  initLocalStr() {
    this.translateService.get(['hello']).subscribe(translations=>{
      this.helloStr = translations['hello'];
  })
  }
*/

  ChangeLanguage() {
    this.translateService.use(this.switcher ? 'en':'zh');

    //this.initLocalStr();
    this.helloStr = this.translateService.instant('hello');

    this.switcher = !this.switcher;
  }
}
