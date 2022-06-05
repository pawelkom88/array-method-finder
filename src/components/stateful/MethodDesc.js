export default function MethodDesc({data, chooseMethod}) {
  return (
    <>
      {data.map((prop, index) => {
        if (chooseMethod === prop.type) {
          return (
            <div className="method-details" key={index}>
              <h3>{prop.name}</h3>
              <p className="paragraph">{prop.desc}</p>
              <a href={prop.doc} target="_blank" rel="noreferrer">
                MDN documentation
              </a>
            </div>
          );
        }
        return '';
      })}
    </>
  );
}
