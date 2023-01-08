export class Blog {
    id: number;
   author: string ;
   title: string;
   dayUpdate: string;
    content: string;

  constructor(id: number, author: string, title: string, dayUpdate: string, content: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.dayUpdate = dayUpdate;
    this.content = content;
  }
}
