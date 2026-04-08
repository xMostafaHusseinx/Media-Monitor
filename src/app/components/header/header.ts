import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {

  // Holds the current search input value
  
  searchTerm: string = '';

  // EventEmitter that sends the search term up to the parent component

  @Output() searchChanged = new EventEmitter<string>();

  // Called every time the user types in the search box

  onSearchInput(): void {
    this.searchChanged.emit(this.searchTerm);
  }
}