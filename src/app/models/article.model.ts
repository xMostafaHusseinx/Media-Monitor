export type Sentiment = 'positive' | 'neutral' | 'negative';

export type Category = 'Technology' | 'Politics' | 'Business' | 'Health' | 'Entertainment' | 'All';

export interface Article {
  id: number;
  headline: string;
  source: string;
  date: string;
  category: Category;
  sentiment: Sentiment;
  summary: string;
}