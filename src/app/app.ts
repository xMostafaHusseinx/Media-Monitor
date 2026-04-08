import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MediaService } from './services/media.service';
import { Article } from './models/article.model';
import { HeaderComponent } from './components/header/header';
import { StatsBarComponent } from './components/stats-bar/stats-bar';
import { FilterBarComponent } from './components/filter-bar/filter-bar';
import { MediaCardComponent } from './components/media-card/media-card';


@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, HeaderComponent, StatsBarComponent, FilterBarComponent, MediaCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {

  // All articles and the currently displayed filtered list

  allArticles: Article[] = [];
  filteredArticles: Article[] = [];

  // Stats for the stats bar

  totalCount: number = 0;
  positiveCount: number = 0;
  neutralCount: number = 0;
  negativeCount: number = 0;

  // Current active filter and search term

  currentCategory: string = 'All';
  currentSearch: string = '';

  constructor(private mediaService: MediaService) {}

  // Runs once when the component is initialized

  ngOnInit(): void {
    this.allArticles = this.mediaService.getArticles();
    this.filteredArticles = this.allArticles;
    const counts = this.mediaService.getSentimentCounts();
    this.totalCount = this.allArticles.length;
    this.positiveCount = counts.positive;
    this.neutralCount = counts.neutral;
    this.negativeCount = counts.negative;
  }

  // Called when the user types in the search bar

  onSearchChanged(term: string): void {
    this.currentSearch = term;
    this.applyFilters();
  }

  // Called when the user clicks a category filter

  onCategoryChanged(category: string): void {
    this.currentCategory = category;
    this.applyFilters();
  }

  // Applies both search and category filters together

  applyFilters(): void {
    let results = this.allArticles;

    if (this.currentCategory !== 'All') {
      results = results.filter(a => a.category === this.currentCategory);
    }

    if (this.currentSearch.trim() !== '') {
      const lower = this.currentSearch.toLowerCase();
      results = results.filter(a =>
        a.headline.toLowerCase().includes(lower) ||
        a.summary.toLowerCase().includes(lower)
      );
    }

    this.filteredArticles = results;
  }
}