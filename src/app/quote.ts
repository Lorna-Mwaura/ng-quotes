export class Quote {
    id: number;
    quote: string;
    author: string;
    publisher: string;
    upvotes: number;
    downvotes: number;
    completeDate: Date;
    constructor(id: number, quote: string, author: string, publisher: string, upvotes: number, downvotes: number,completeDate:Date) {
        this.id = id;
        this.quote = quote
        this.author = author
        this.publisher = publisher
        this.upvotes = upvotes
        this.downvotes = downvotes
        this. completeDate = completeDate
    }
} 
