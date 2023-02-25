import { useState, useEffect } from "react";
import usePageChange from "./usePageChange"
import Navbar from './Navbar';
import Main from './Main';
import LoadCards from './LoadCards';

function App() {
  const [text, setText] = useState("Cool");
  const [data, setData] = useState(null);
  // const [url, setURL] = useState("https://rickandmortyapi.com/api/character");
  // const [page, setPage] = useState(null);
  // const [allPages, setAllPages] = useState(null);
  const { currentPages, setAllPages, allPages, url, setCurrentPages, setURL, changePage } = usePageChange();

  useEffect(() => {
    fetch(url)
      .then((res) => { return res.json() })
      .then((data) => {
        setData(data.results);
        //  Set Pages
        let tmp = [];
        if (!currentPages) {
          for (let i = 1; i <= data.info.pages; i++) {
            tmp.push(i);
          }
          console.log(tmp, "tmp")
          setAllPages(tmp);
          setCurrentPages(tmp.slice(0, 5));
        }
        console.log(allPages, "all pages")
      });
  }, [url]);

  function changeDataType() {
    setURL("https://rickandmortyapi.com/api/location/")

  }

  return (
    <>
      <Navbar />
      <Main text={text} changeDataType={changeDataType} changePage={changePage} page={currentPages} LoadCards={LoadCards} data={data} />
    </>
  );
}

export default App;
