function LoadCards({ data }) {
  // let blogs = props.blogs;
  // let title = props.title;
  return (
    <>
      {data.map((item) => (
        <div className="card border-primary mb-3 " key={item.id}>
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h4 className="card-title text-center">{item.name}</h4>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>

      ))}

    </>
  );
}
export default LoadCards;
