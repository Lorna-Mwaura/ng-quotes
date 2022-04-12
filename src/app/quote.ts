export class Quote {
    id: number;
    quote: string;
    author: string;
    publisher: string;
    upvotes: number;
    downvotes: number;
    constructor(id: number, quote: string, author: string, publisher: string, upvotes: number, downvotes: number) {
        this.id = id;
        this.quote = quote
        this.author = author
        this.publisher = publisher
        this.upvotes = upvotes
        this.downvotes = downvotes
    }
}

