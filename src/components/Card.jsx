function Card(props) {
  return (
    <section className="card flex">
      <img className="icon" src="https://img.icons8.com/ios/452/education.png" alt="" />
      <div className="content">
        <h1>{props.title}</h1>
        <hr />
        <div className={`elements ${props.isHorizontal ? "horizontal" : ""}`}>
          {props.array.map((element, i) => {
            return (
              <article key={i} className="element">
                <h1 className="title">{element.title}</h1>
                {!props.noDate && <h4 className="date">{element.date}</h4>}
                {!props.noDescription && <p className="description">{element.description}</p>}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Card;
