import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthInterceptor } from "./auth.interceptor";
import { TransactionsTableComponent } from './transactions-table/transactions-table.component';
import { KeysPipe } from './keys.pipe';
import { SearchButtonComponent } from './search-button/search-button.component';
import { SelectOptionsComponent } from './select-options/select-options.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsTableComponent,
    KeysPipe,
    SearchButtonComponent,
    SelectOptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
