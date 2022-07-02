import React, { useState } from 'react'
import Quote from './Components/Quote';



function App() {
  
  const [quote,setQuote] = useState();
  const request = fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => console.log(quote))

    console.log(request);
  return (
    <div>
      <Quote />
    </div>
  )
}

export default App
