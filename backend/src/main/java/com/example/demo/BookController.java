package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(
        origins = "http://localhost:5173"
)

public class BookController {
    @GetMapping("/api/books")
    public List<Book> getBooks(){
        List<Book> books = new ArrayList<>();
        Book book1 = new Book(1 , "Programming in C" , "Japman Singh" , "Programming");
        Book book2 = new Book(2 , "Physics" , "HC Verma" , "Science");
        books.add(book1);
        books.add(book2);
        return books ;
    }
}
