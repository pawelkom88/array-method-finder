import classes from "./Usage.module.css";

export default function Usage({data, chooseMethod}) {
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
                return (
                  <div key={method.id}>
                    {method.usage.map((example, i) => {
                      const variableColor = example.includes("let")
                        ? classes["usage-code"]
                        : undefined;
                      const functionColor = example.includes("function")
                        ? classes.highlight
                        : undefined;

                      return (
                        <p key={i} className={`${variableColor} ${functionColor} fadeIn`}>
                          {example}
                        </p>
                      );
                    })}
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
