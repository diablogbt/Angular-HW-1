import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HellComponent } from './helloworldc/helloworldc.component';
import { ChildToParentDemoComponent } from './child-to-parent-demo/child-to-parent-demo.component';
import { Child } from './child-to-parent-demo/child.component';
import { GetUserDemoComponent } from './httprequest-demo/GetUser.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HellComponent,
    ChildToParentDemoComponent,
    Child,
    GetUserDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
