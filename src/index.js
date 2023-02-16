import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //CSS

//*Setting variables for booklist
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL600_SR600,400_.jpg",
    title: "You're my little cuddle bug",
    author: "Nicola Edwards",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/61UW7b6Lv+L._AC_UL900_SR900,600_.jpg",
    title: "Why women deserve LESS",
    author: "Myron Gaines",
  },
];

//Component (General convention is to call this APP)
//Nesting components
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

//?Book component

const Book = (props) => {
  const { img, title, author } = props; //destructuring the props object
  //attribute, eventHandler
  const clickHandler = () => {
    alert("hello world");
  };
  return (
    <article className="book">
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
    </article>
  );
};

//*Separate components with inline CSS
// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL600_SR600,400_.jpg"
//     alt=""
//   ></img>
// );
// const Title = () => <h1>You're my little cuddle bug</h1>;
// const Author = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Nicola Edwards
//   </h4>
// );

/////////////////////////////////////////////////////

// const Person = () => <h2>this is Alina and this is my first component</h2>;

// const Message = () => {
//   return <p>this is my message</p>;
// };

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello World")
//   );
// };

//Appending the component to the DOM, to the root
//!Need to use closing tags
ReactDOM.render(<Booklist />, document.getElementById("root"));
