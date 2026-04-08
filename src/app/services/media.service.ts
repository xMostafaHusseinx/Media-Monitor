import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  // Mock articles representing a media monitoring feed
  
  private articles: Article[] = [
    {
      id: 1,
      headline: 'AI Breakthrough Transforms Healthcare Diagnostics',
      source: 'TechCrunch',
      date: '2026-04-08',
      category: 'Technology',
      sentiment: 'positive',
      summary: 'Researchers unveil a new AI model capable of diagnosing rare diseases with 97% accuracy.'
    },
    {
      id: 2,
      headline: 'Federal Budget Sparks Debate Over Spending Priorities',
      source: 'CBC News',
      date: '2026-04-07',
      category: 'Politics',
      sentiment: 'neutral',
      summary: 'The newly released federal budget has drawn mixed reactions from opposition parties and economists.'
    },
    {
      id: 3,
      headline: 'Major Retailer Announces 3,000 Layoffs Amid Market Slowdown',
      source: 'Financial Post',
      date: '2026-04-07',
      category: 'Business',
      sentiment: 'negative',
      summary: 'One of Canada\'s largest retailers confirms significant workforce reductions as consumer spending declines.'
    },
    {
      id: 4,
      headline: 'New Study Links Mediterranean Diet to Reduced Cancer Risk',
      source: 'Health Canada',
      date: '2026-04-06',
      category: 'Health',
      sentiment: 'positive',
      summary: 'A large-scale study involving 50,000 participants found a 34% reduction in cancer risk among those following the diet.'
    },
    {
      id: 5,
      headline: 'Streaming Wars Intensify as Platform Mergers Continue',
      source: 'Variety',
      date: '2026-04-06',
      category: 'Entertainment',
      sentiment: 'neutral',
      summary: 'Two major streaming platforms announce merger talks, raising questions about content diversity and pricing.'
    },
    {
      id: 6,
      headline: 'Cybersecurity Firm Reports Record Number of Data Breaches',
      source: 'Wired',
      date: '2026-04-05',
      category: 'Technology',
      sentiment: 'negative',
      summary: 'A new report reveals that data breaches hit an all-time high in Q1 2026, affecting over 200 million records globally.'
    },
    {
      id: 7,
      headline: 'Ottawa Launches Green Infrastructure Initiative',
      source: 'Ottawa Citizen',
      date: '2026-04-05',
      category: 'Politics',
      sentiment: 'positive',
      summary: 'The city of Ottawa announces a $500 million investment in sustainable infrastructure and green energy projects.'
    },
    {
      id: 8,
      headline: 'Tech Giant Posts Record Quarterly Profits',
      source: 'Bloomberg',
      date: '2026-04-04',
      category: 'Business',
      sentiment: 'positive',
      summary: 'A leading technology company reported quarterly earnings that exceeded analyst expectations by 23%.'
    },
    {
      id: 9,
      headline: 'Mental Health Crisis Among Youth Reaches Alarming Levels',
      source: 'Globe and Mail',
      date: '2026-04-04',
      category: 'Health',
      sentiment: 'negative',
      summary: 'New statistics reveal a sharp increase in anxiety and depression diagnoses among Canadians aged 15 to 24.'
    },
    {
      id: 10,
      headline: 'Canadian Film Wins Top Prize at International Festival',
      source: 'Toronto Star',
      date: '2026-04-03',
      category: 'Entertainment',
      sentiment: 'positive',
      summary: 'A Canadian independent film took home the top award at one of Europe\'s most prestigious film festivals.'
    },
  ];

  // Returns all articles

  getArticles(): Article[] {
    return this.articles;
  }

  // Returns articles filtered by category

  getArticlesByCategory(category: string): Article[] {
    if (category === 'All') {
      return this.articles;
    }
    return this.articles.filter(article => article.category === category);
  }

  // Returns articles matching a search term in headline or summary

  searchArticles(term: string): Article[] {
    const lower = term.toLowerCase();
    return this.articles.filter(article =>
      article.headline.toLowerCase().includes(lower) ||
      article.summary.toLowerCase().includes(lower)
    );
  }

  // Returns counts of each sentiment for the stats bar

  getSentimentCounts(): { positive: number; neutral: number; negative: number } {
    return {
      positive: this.articles.filter(a => a.sentiment === 'positive').length,
      neutral: this.articles.filter(a => a.sentiment === 'neutral').length,
      negative: this.articles.filter(a => a.sentiment === 'negative').length,
    };
  }
}