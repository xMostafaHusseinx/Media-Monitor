import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-bar',
  templateUrl: './stats-bar.html',
  styleUrl: './stats-bar.scss'
})
export class StatsBarComponent {

  // Receives data from the parent component
  
  @Input() total: number = 0;
  @Input() positive: number = 0;
  @Input() neutral: number = 0;
  @Input() negative: number = 0;
}