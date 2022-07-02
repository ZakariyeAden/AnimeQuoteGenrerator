import React from "react";
import Card from "./Card";


function Quote(props) {
  return (
    <Card>
      <form>
        <h1>{props.anime}Anime</h1>
        <h4>{props.character}character</h4>
        <p>{props.quote}Quote</p>
        <button>Hello</button>
      </form>
    </Card>
  );
}

export default Quote;
