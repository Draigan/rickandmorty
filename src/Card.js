function card({ header }) {
  return (
    <div className="card text-white bg-secondary mb-3 my-card" >
      <div className="card-header">{header}</div>
      <div className="card-body">
        <h4 className="card-title">Primary card title</h4>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  );

}

export default card;
