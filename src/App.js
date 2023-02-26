import { useState, useEffect } from "react";
import usePageChange from "./usePageChange"
import Navbar from './Navbar';
import Main from './Main';
import LoadCards from './LoadCards';

function App() {
  const [data, setData] = useState(null);
  const { currentPages, dataType, setDataType, setAllPages, allPages, url, setCurrentPages, setURL, changePage } = usePageChange();



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


  function changeDataType(e) {
    if (e.target.innerHTML == "Locations") {
      setURL("https://rickandmortyapi.com/api/location");
      setCurrentPages(null);
      setDataType("location")
    }
    if (e.target.innerHTML == "Characters") {
      setURL("https://rickandmortyapi.com/api/character");
      setCurrentPages(null);
      setDataType("character");
    }

  }

  return (
    <>
      <Navbar changeDataType={changeDataType}
      />
      <Main
        changePage={changePage}
        page={currentPages}
        LoadCards={LoadCards}
        data={data} />
    </>
  );
}

export default App;
