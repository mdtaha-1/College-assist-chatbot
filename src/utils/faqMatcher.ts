import { FAQ } from '../types/chat';
import { faqs } from '../data/faqs';

export class FAQMatcher {
  private faqs: FAQ[];

  constructor() {
    this.faqs = faqs;
  }

  findBestMatch(query: string): FAQ | null {
    const normalizedQuery = query.toLowerCase().trim();
    
    // Direct question match
    for (const faq of this.faqs) {
      if (this.calculateSimilarity(normalizedQuery, faq.question.toLowerCase()) > 0.7) {
        return faq;
      }
    }

    // Keyword matching
    const queryWords = normalizedQuery.split(/\s+/);
    let bestMatch: FAQ | null = null;
    let bestScore = 0;

    for (const faq of this.faqs) {
      const score = this.calculateKeywordScore(queryWords, faq.keywords);
      if (score > bestScore && score > 0.3) {
        bestScore = score;
        bestMatch = faq;
      }
    }

    return bestMatch;
  }

  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    
    if (longer.length === 0) return 1.0;
    
    const editDistance = this.levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1,
            matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  private calculateKeywordScore(queryWords: string[], keywords: string[]): number {
    let matches = 0;
    let totalWeight = 0;

    for (const keyword of keywords) {
      const keywordWords = keyword.toLowerCase().split(/\s+/);
      let keywordMatches = 0;
      
      for (const keywordWord of keywordWords) {
        for (const queryWord of queryWords) {
          if (queryWord.includes(keywordWord) || keywordWord.includes(queryWord)) {
            keywordMatches++;
            break;
          }
        }
      }
      
      if (keywordMatches > 0) {
        matches += keywordMatches;
      }
      totalWeight += keywordWords.length;
    }

    return totalWeight > 0 ? matches / totalWeight : 0;
  }

  getFAQsByCategory(category: string): FAQ[] {
    return this.faqs.filter(faq => faq.category === category);
  }

  getAllCategories(): string[] {
    const categories = new Set(this.faqs.map(faq => faq.category));
    return Array.from(categories);
  }
}