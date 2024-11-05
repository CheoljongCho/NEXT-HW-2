import { BookDto } from './book.model';

export class BookService {
    posts = [];

    getAllPosts() {
        return this.posts;
    }

    createPost(bookDto: BookDto) {
        const id = this.posts.length + 1;
        this.posts.push({ id: id.toString(), ...bookDto, bookRegistationDt: new Date()});
    }
    
    getPost(id) {
        const post = this.posts.find((post) => {
            return post.id === id;
        });
        console.log(post);
        return post;
    }
    
    delete(id) {
        const filteredPosts = this.posts.filter((post) => post.id !== id);
        this.posts = [...filteredPosts];
    }
    
    updatePost(id, BookDto: BookDto) {
        let updateIndex = this.posts.findIndex((post) => post.id === id);
        const updatePost = { id, ...BookDto, BookUpdatedDt: new Date() };
        this.posts[updateIndex] = updatePost;
        return updatePost;
    }
}