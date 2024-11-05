import {Controller, Param, Body, Delete, Get, Post, Put} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('books')
export class BookController {
    BookService: BookService
    constructor() {
        this.BookService = new BookService();
    }

    @Get()
    getAllPosts() {
        console.log('모든 책 조회');
        return this.BookService.getAllPosts();
    }

    @Post()
    createPost(@Body() bookDto) {
        console.log('책 추가');
        this.BookService.createPost(bookDto);
        return 'success';
    }

    @Get('/:id')
    getPost(@Param('id') id:string) {
        console.log(['특정 책 조회']);
        return this.BookService.getPost(id);
    }

    @Delete('/:id')
    deletePost(@Param('id') id:string) {
        console.log('책 삭제');
        this.BookService.delete(id);
        return 'success';
    }

    @Put('/:id')
    updatePost(@Param('id') id: string, @Body() bookDto) {
        console.log('책 정보 수정', id, bookDto);
        return this.BookService.updatePost(id, bookDto);
    }
}