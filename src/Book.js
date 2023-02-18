import React from "react";

const Book = (props) => {
  const { img, title, author } = props; //destructuring the props object
  //attribute, eventHandler
  //event can be placed in line or outside
  const clickHandler = () => {
    alert("hello world");
  };

  const complexExample = (author, e) => {
    console.log(author);
    console.log(e);
    console.log(e.target);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt=""></img>
      <h1>{title}</h1>
      <h4>{author} </h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>

      {/* in the case we pass the argument */}
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

export default Book;
