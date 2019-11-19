# Angular i18n

## 主流技术方案
* i18n  
* **ngx-translate**   

## ngx-translate   

### 环境配置
1. library安装
```
    npm install @ngx-translate/core
    npm install @ngx-translate/http-loader
```
2. TranslateModule引入
```typescript
// app.module.ts
...
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";

// 这里配置
export function createTranslateHttpLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json'); // 后两个参数为optional
}

@NgModule({
  ...
  imports: [
    ...
    // 在这里配置
    HttpClientModule,          // Important!!!
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateHttpLoader),
        deps: [HttpClient]
      }
    })
  ],
  ...
})
...
```
### 初始化语言
```typescript
// app.component.ts
...
import {TranslateService} from '@ngx-translate/core';

...
export class AppComponent implements OnInit {
  title = 'app';

  constructor(public translateService: TranslateService) {
  }

  ngOnInit() {
    /* --- set i18n begin ---*/
    // this.translateService.addLangs(['zh', 'en']); // not necessary
    this.translateService.setDefaultLang('zh');
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
    /* --- set i18n end ---*/
  }
}

```
### 手动切换语言
```typescript
this.translateService.use(lang);
```
### js和HTML使用
1. JavaScript使用
```typescript
this.translateService.get(['hello']).subscribe(translations=>{
    this.helloStr = translations['hello'];
})
```
2. HTML使用
```html
<h1>{{'hello' | translate}}</h1>  
```

### [同步获取语言值](https://github.com/ngx-translate/core/issues/517)

## 参考
* [ngx-translate](https://segmentfault.com/a/1190000015311981)   
* [safely use translate.instant()](https://github.com/ngx-translate/core/issues/517)   
