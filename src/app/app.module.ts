import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TestComponent } from './test/test.component';

export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader:{
          provide:TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }
    )
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
