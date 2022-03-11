import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { PendingComponent } from './pending/pending.component';
import { FormsModule } from '@angular/forms';
import { FunnyTitleDirective } from './funny-title.directive';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    ListComponent,
    PendingComponent,
    FunnyTitleDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
