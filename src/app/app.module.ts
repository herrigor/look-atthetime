import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedSuggestionsComponent } from './featured-suggestions/featured-suggestions.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EndtimePipe } from './shared/pipes/endtime.pipe';
import { WatchPipe } from './shared/pipes/watch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedSuggestionsComponent,
    EndtimePipe,
    WatchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
