import { Component, Input } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.html',
  styleUrl: './media-card.scss'
})
export class MediaCardComponent {

  // Receives a single article object from the parent
  
  @Input() article!: Article;
}