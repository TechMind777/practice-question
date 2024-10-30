/*
// app.module.ts
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfigService } from './config.service';

// Function to initialize app by loading config
export function loadAppConfig(configService: ConfigService) {
  return () => configService.loadConfig(); // Returns a promise to delay app initialization
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule // Make sure to import HttpClientModule
  ],
  providers: [
    // APP_INITIALIZER provider to call the API before the app starts
    {
      provide: APP_INITIALIZER,
      useFactory: loadAppConfig,
      deps: [ConfigService], // Inject ConfigService
      multi: true // Allows multiple initializers if needed
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

*/