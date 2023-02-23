import Card from './Card';
import { useState, useEffect } from "react";



// let cards = (
//   <>
//     <Card header={"Sup"} />
//     <Card header={"Sup"} />
//     <Card header={"Sup"} />
//   </>
// );



// function RenderStuff() {
//   return cards;
// }

function Main() {
  const [state, changeState] = useState({ tag: "location", data: null });
  // const cards = [];
  // let apiToRender;

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/${state.tag}`)
      .then((data) => { return data.json() })
      .then((data) => {
        // rickStuff = data.results;
        // data.results.forEach((item) => { cards.push(item); })
        // console.log(cards, "these are cards")
        console.log(state.tag);
        console.log(state.data);
      });
  }, [])


  return (
    <div id="main" className="card mb-3 p-2 my-main" >
      <button onClick={() => {
        changeState(prevState => {
          return { ...prevState, tag: "location" }
        });
      }
      }>Location</button>
      <button onClick={() => {
        changeState(prevState => {
          return { ...prevState, tag: "character" }
        });
      }
      }>character</button>
    </div>
  );
}

export default Main;
