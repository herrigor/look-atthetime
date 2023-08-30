import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedSuggestionsComponent } from './featured-suggestions.component';

describe('FeaturedSuggestionsComponent', () => {
  let component: FeaturedSuggestionsComponent;
  let fixture: ComponentFixture<FeaturedSuggestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedSuggestionsComponent]
    });
    fixture = TestBed.createComponent(FeaturedSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
