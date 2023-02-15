import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //CSS

//Component (General convention is to call this APP)
//Nesting components
function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/713lRguJLsL._AC_UL600_SR600,400_.jpg"
        alt=""
      ></img>
      <h1>You're my little cuddle bug</h1>
      <h4>Nicola Edwards </h4>
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
