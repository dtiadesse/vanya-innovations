import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeService } from './providers/home.service';
import { HeaderService } from './providers/header.service';
import { FooterService } from './providers/footer.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {
      useHash: true,
      enableTracing: false
    }),
    HttpClientModule,
    RouterModule,
    SharedModule,
    HomeModule
  ],
  providers: [HomeService,HeaderService,FooterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
