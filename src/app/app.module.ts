import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedSuggestionsComponent } from './featured-suggestions/featured-suggestions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EndtimePipe } from './shared/pipes/endtime.pipe';
import { WatchPipe } from './shared/pipes/watch.pipe';
import { GenreSelectorComponent } from './genre-selector/genre-selector.component';
import { TruncatePipe } from './shared/pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedSuggestionsComponent,
    EndtimePipe,
    WatchPipe,
    GenreSelectorComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
