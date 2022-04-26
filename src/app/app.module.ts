import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeModule } from './home/home.module'
import { AuthModule } from './auth/auth.module'
import { AuthService } from './services/auth.service'
import { BookService } from './services/book.service'
import { HttpClientModule } from '@angular/common/http'
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular'

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    HttpClientModule, 
    AppRoutingModule, 
    HomeModule, 
    AuthModule,
    NativeScriptUISideDrawerModule
  ],
  declarations: [AppComponent],
  providers: [BookService, AuthService],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
