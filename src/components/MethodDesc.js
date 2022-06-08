export default function MethodDesc({data, chooseMethod, singleItem, multipleItems}) {
  return (
    <div className="method-details">
      {data &&
        data.map(prop => {
          if (chooseMethod === prop.type) {
            return (
              <article key={prop.id}>
                <header>
                  <h3>{prop.name}</h3>
                </header>
                <p className="paragraph">{prop.desc}</p>
                <a href={prop.doc} target="_blank" rel="noreferrer">
                  MDN documentation
                </a>
              </article>
            );
          }
          return "";
        })}
    </div>
  );
}
