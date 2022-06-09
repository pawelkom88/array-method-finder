import classes from "./Output.module.css";

export default function Output({data = [], chooseMethod}) {
  return (
    <div className="fadeIn">
      <header>
        <h4>Output</h4>
      </header>
      <div className={classes.output}>
        <div className="method-details">
          {data &&
            data.map(method => {
              if (chooseMethod === method.type) {
                return (
                  <span key={method.id} className={`${classes["output-code"]} fadeIn`}>
                    {method.output}
                  </span>
                );
              }
              return "";
            })}
        </div>
      </div>
    </div>
  );
}
