import classes from "./Usage.module.css";

export default function Usage({data = [], chooseMethod}) {
  return (
    <div className="fadeIn">
      <header>
        <h4>Usage</h4>
      </header>
      <div className={classes.usage}>
        <div className="method-details">
          {data &&
            data.map(method => {
              if (chooseMethod === method.type) {
                const [example, fn, usage] = method.usage;

                return (
                  <div key={method.id}>
                    <p className={`${classes["usage-code"]} fadeIn`}>{example}</p>
                    <p className={`${classes.highlight} fadeIn`}>{fn}</p>
                    <p className="fadeIn">{usage}</p>
                  </div>
                );
              }
              return "";
            })}
        </div>
      </div>
    </div>
  );
}
