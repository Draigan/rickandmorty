import { useState } from "react";

function usePageChange() {
  const [url, setURL] = useState("https://rickandmortyapi.com/api/location");
  const [currentPages, setCurrentPages] = useState(null);
  const [allPages, setAllPages] = useState(null);

  function changePage(e) {
    let tmpPage = +e.target.innerHTML;
    let tmpURL = `${url}?page=${tmpPage}`

    // Next Page
    if (e.target.innerHTML == "»") {
      setCurrentPages(allPages.slice(currentPages[0], currentPages[0] + 5));
      setURL(`${url}/${currentPages[0] + 1}`)
      return;
    }
    // Prev Page
    if (e.target.innerHTML == "«") {
      console.log("PREV")
      setCurrentPages(allPages.slice(currentPages[0] - 2, currentPages[0] + 3));
      setURL(`https://rickandmortyapi.com/api/character?page=${currentPages[0] - 1}`)
      return;
    }
    // Click a page Number
    setCurrentPages(allPages.slice(tmpPage - 1, tmpPage + 4))
    setURL(tmpURL);

  }
  return { url, currentPages, allPages, setAllPages, setURL, setCurrentPages, changePage }
}

export default usePageChange;
