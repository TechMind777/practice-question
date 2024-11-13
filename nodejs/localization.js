/* To implement localization in an Angular application, you can use @ngx-translate/core, a popular library for handling translations. Here’s a step-by-step guide to set it up:

Step 1: Install the Library
    In your Angular project, run:
    
    npm install @ngx-translate/core @ngx-translate/http-loader --save


Step 2: Set Up Translation Files
    Create a folder (e.g., src/assets/i18n) to hold JSON files for each language. For example:

    en.json (for English)
    fr.json (for French)

    // en.json
    {
        "HELLO": "Hello",
        "WELCOME": "Welcome to our application"
    }
    
    // fr.json
    {
        "HELLO": "Bonjour",
        "WELCOME": "Bienvenue dans notre application"
    }

  

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ], 
})
export class AppModule { }


import { TranslateService } from '@ngx-translate/core';

@Component({
    templet:`<h1>{{ 'HELLO' | translate }}</h1>
            <p>{{ 'WELCOME' | translate }}</p>

            <button (click)="switchLanguage('en')">English</button>
            <button (click)="switchLanguage('fr')">French</button>
`
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en'); // Set default language
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}



*/