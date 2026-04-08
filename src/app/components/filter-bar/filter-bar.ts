import { Component, Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';
import { Category } from '../../models/article.model';

@Component({
  selector: 'app-filter-bar',
  imports: [NgFor],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss'
})
export class FilterBarComponent {

  // The currently selected category

  selectedCategory: Category = 'All';

  // All available category options

  categories: Category[] = ['All', 'Technology', 'Politics', 'Business', 'Health', 'Entertainment'];

  // Sends the selected category up to the parent

  @Output() categoryChanged = new EventEmitter<Category>();

  // Called when user clicks a category button
  
  onCategoryClick(category: Category): void {
    this.selectedCategory = category;
    this.categoryChanged.emit(category);
  }
}