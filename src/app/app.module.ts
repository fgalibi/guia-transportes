import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModalService } from './shared/alert-modal.service';
import { TransportesModule } from './transportes/transportes.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TransportesModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [AlertModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
