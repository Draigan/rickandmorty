
function Main({ LoadCards, data, page, changePage }) {

  const prev = document.getElementById("prev");
  if (page && page[0] == 1) {
    prev.classList.add("disabled");
  } else {
    page && prev.classList.remove("disabled");
  }
  if (page && page[0] == null) {
    console.log("WE REACHED NULLBABVY")
  }
  return (
    <div id="main" className="card my-main mb-3 p-2 " >
      <div className="my-content">
        {data && <LoadCards data={data} />}
      </div>
      <div className="d-flex justify-content-center">
        <ul className="pagination pagination-lg">
          <li className="page-item ">
            <a className="page-link" id="prev" onClick={changePage} href="#">&laquo;</a>
          </li>
          <li className="page-item active">
            <a className="page-link" onClick={changePage} href="#">{page && page[0]}</a>
          </li>
          {page && page[1] && <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page[1]}</a>
          </li>
          }
          {page && page[2] && <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page[2]}</a>
          </li>
          }
          {page && page[3] && <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page[3]}</a>
          </li>
          }
          {page && page[4] && <li className="page-item">
            <a className="page-link" onClick={changePage} href="#">{page[4]}</a>
          </li>}
          <li className="page-item">
            <a className="page-link my-next" onClick={changePage} href="#">&raquo;</a>
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Main;
