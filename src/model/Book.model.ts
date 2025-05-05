export class Book {
    private title: string;
    private author: string;
    private isbn: string; // international standard book number
    private pages: number;
  
    constructor(
        title: string,
        author: string, 
        isbn: string, 
        pages: number
    ) 
    {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.pages = pages;
    }
  
    getTitle(): string {
      return this.title;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    getIsbn(): string {
      return this.isbn;
    }
  
    getPages(): number {
      return this.pages;
    }
  }
  