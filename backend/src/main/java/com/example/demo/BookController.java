package com.example.demo;

import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(
        origins = "http://localhost:5173"
)

public class BookController {

    List<Book> books = new ArrayList<>();
    @GetMapping("/api/books")
    public List<Book> getBooks(){
        return books ;
    }

    private Integer nextId = 0;
    @PostMapping("/api/books")
    public Book addBook(@RequestBody Book book){
        book.setId(nextId++);
        books.add(book);
        return book ;
    }

    @DeleteMapping("/api/books/{id}")
    public Book deleteBook(@PathVariable Integer id ){
        Book bookToDelete = null ;
        for(Book book : books){
            if(book.getId().equals(id)){
                bookToDelete = book ;
                break ;
            }
        }
        if(bookToDelete != null){
            books.remove(bookToDelete);
        }
        return bookToDelete ;
    }
}
