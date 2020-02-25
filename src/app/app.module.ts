import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { StackViewComponent } from './stack-view/stack-view.component';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeViewComponent,
    StackViewComponent,
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
