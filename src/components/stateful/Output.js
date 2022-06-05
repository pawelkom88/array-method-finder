import classes from './Output.module.css';

export default function Output({data, chooseMethod}) {
  return (
    <>
      <h4>Output</h4>
      <div className={classes.output}>
        {data.map((method, index) => {
          if (chooseMethod === method.type) {
            return (
              <div key={index} className="method-details">
                <span className={classes['output-code']}>{method.output}</span>
              </div>
            );
          }
          return '';
        })}
      </div>
    </>
  );
}
