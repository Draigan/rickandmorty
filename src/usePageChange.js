import { useState } from "react";

function usePageChange() {
  const [url, setURL] = useState("https://rickandmortyapi.com/api/character");
  const [currentPages, setCurrentPages] = useState(null);
  const [allPages, setAllPages] = useState(null);
  const [dataType, setDataType] = useState("character");

  function changePage(e) {
    let tmpPage = +e.target.innerHTML;
    let location = "https://rickandmortyapi.com/api/location";
    let character = "https://rickandmortyapi.com/api/character";
    let tmpURL;
    if (dataType == "character") {
      tmpURL = `${character}?page=`
    }
    if (dataType == "location") {
      tmpURL = `${location}?page=`
    }
    console.log(tmpURL)

    // Next Page
    if (e.target.innerHTML == "»") {
      setCurrentPages(allPages.slice(currentPages[0], currentPages[0] + 5));
      setURL(`${tmpURL}${currentPages[0] + 1}`);
      return;
    }
    // Prev Page
    if (e.target.innerHTML == "«") {
      console.log("PREV")
      if (currentPages[4] != null) {
        setCurrentPages(allPages.slice(currentPages[0] - 2, currentPages[0] + 3));

      }
      setURL(`${tmpURL}${currentPages[0] - 1}`);
      return;
    }
    // Click a page Number
    setCurrentPages(allPages.slice(tmpPage - 1, tmpPage + 4));
    setURL(`${tmpURL}${tmpPage}`);

  }
  return { url, currentPages, allPages, dataType, setAllPages, setURL, setCurrentPages, changePage, setDataType }
}

export default usePageChange;
