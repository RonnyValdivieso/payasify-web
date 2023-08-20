import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from "@angular/material/radio";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NominatedService } from './services/nominated.service';
import { HttpClientModule } from '@angular/common/http';
import { VotingResultsComponent } from './pages/voting-results/voting-results.component';
import { NominatedPreviewComponent } from './components/nominated-preview/nominated-preview.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VotingComponent } from './pages/voting/voting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    VotingResultsComponent,
    NominatedPreviewComponent,
    VotingComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [
    NominatedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
