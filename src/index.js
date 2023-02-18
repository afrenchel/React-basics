import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //CSS
import { books } from "./books";
import Book from "./Book";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//!Appending the component to the DOM, to the root
//!Need to use closing tags
ReactDOM.render(<Booklist />, document.getElementById("root"));
