// Imports components > declarations
import { AppComponent } from './app.component'; //**Bootstrap**/
import { NavbarComponent } from './components/navbar/navbar.component';
import { LogFormComponent } from './components/log-form/log-form.component';
import { LogsComponent } from './components/logs/logs.component';
// Imports modules > imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
// Imports services > providers
import { LogService } from './services/log.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
