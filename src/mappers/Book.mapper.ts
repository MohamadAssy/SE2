import { Book } from '../model/Book.model';
import { BookBuilder } from '../model/builders/Book.builder';
import { IMapper } from './IMapper';

export class JSONBookMapper implements IMapper<Record<string, any>, Book> {
  map(data: Record<string, any>): Book {
    return BookBuilder.newBuilder()
      .setTitle(data.title)
      .setAuthor(data.author)
      .setGenre(data.genre)
      .setFormat(data.format)
      .setLanguage(data.language)
      .setPublisher(data.publisher)
      .setSpecialEdition(data.edition)
      .setPackaging(data.packaging)
      .build();
  }
}