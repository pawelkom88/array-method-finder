import classes from './Output.module.css';

export default function Output({data, chooseMethod, singleItem, multipleItems}) {
  return (
    <>
      <header>
        <h4>Output</h4>
      </header>
      <div className={classes.output}>
        <div className="method-details">
          {data.map(method => {
            if (
              chooseMethod === method.type ||
              singleItem === method.type ||
              multipleItems === method.type
            ) {
              return (
                <span key={method.id} className={classes['output-code']}>
                  {method.output}
                </span>
              );
            }
            return '';
          })}
        </div>
      </div>
    </>
  );
}
