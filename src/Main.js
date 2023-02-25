import Card from './Card';
import { useState, useEffect } from "react";

function Main({ LoadCards, data, page, changePage }) {
  const [state, changeState] = useState({ tag: "location", data: null });
  // const cards = [];
  // let apiToRender;



  return (
    <div id="main" className="card my-main mb-3 p-2 " >
      <div className="my-content">
        {data && <LoadCards data={data} />}
      </div>
      <div className="d-flex justify-content-center">
        <ul className="pagination pagination-lg">
          <li className="page-item ">
            <a className="page-link" onClick={changePage} href="#">&laquo;</a>
          </li>
          <li className="page-item active">
            <a className="page-link" onClick={changePage} href="#">{page && page[0]}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page && page[1]}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page && page[2]}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page && page[3]}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page && page[4]}</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">&raquo;</a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Main;
