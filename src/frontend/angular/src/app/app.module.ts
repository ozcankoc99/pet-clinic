import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HttpErrorHandlerService } from './shared/services/http-error-handler.service';
import { LogService } from './shared/services/log.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, LayoutModule, HttpClientModule],
  providers: [HttpErrorHandlerService, LogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
