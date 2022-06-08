export default function MethodDesc({data, chooseMethod}) {
  return (
    <div style={{minHeight: "40vh"}} className="method-details fadeIn">
      {data &&
        data.map(prop => {
          if (chooseMethod === prop.type) {
            return (
              <article key={prop.id} className="fadeIn">
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
