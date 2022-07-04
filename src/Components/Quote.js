import React, { useState,useEffect } from "react";
import Card from "./Card";
import classes from "./Style/Quote.module.css";

function Quote() {

  // fetch('https://animechan.vercel.app/api/random')
  //   .then(response => response.json())
  //   .then(quote => console.log(quote))

  const [quotes, setQuotes] = useState("");


  const getQuote = () => {
    fetch("https://animechan.vercel.app/api/random")
      .then(response => response.json())
      .then(quote => {
        setQuotes(quote);
        console.log(quote)
      });
  };


useEffect(() => {
  getQuote();
}, [])

  return (
    <Card>
      <div className={classes.form}>
        <div>
          <form>
            <h2>{quotes.anime}</h2>
            <p>{quotes.quote}</p>
            <h6>{quotes.character}</h6>
            <button onClick={getQuote}>Get Quote</button>
          </form>
        </div>
      </div>
    </Card>
  );
}

export default Quote;
