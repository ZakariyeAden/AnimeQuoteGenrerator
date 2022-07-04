import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import classes from "./Style/Quote.module.css";

function Quote() {
  const [quotes, setQuotes] = useState("");
 
  // getting two objects at once from the API
  const getQuote = () => {
    fetch("https://animechan.vercel.app/api/random")
      .then(response => response.json())
      .then(quote => {
        setQuotes(quote);

        console.log();
      });
  };

  //  Loading quote right away
  useEffect(() => {
    // Delay the objects
    setTimeout(() => {
      getQuote();
    }, 1000);
  }, [setQuotes]);

  const form = (
    <form>
      <h2>Anime: {quotes.anime}</h2>
      <p>Quote: {quotes.quote}</p>
      <h6>Character: {quotes.character}</h6>
      <button onClick={getQuote}>Get Quote</button>
    </form>
  );

  // add loading screen
  const textScreen = <p>Loading...</p>;
  return (
    <Card>
       { textScreen && <div className={classes.form}>
          <div>{form}</div>
      </div>}
    </Card>
  );
}

export default Quote;
