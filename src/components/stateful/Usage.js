import classes from './Usage.module.css';

export default function Usage({data, chooseMethod}) {
  return (
    <>
      <h4>Usage</h4>
      <div className={classes.usage}>
        {data.map((method, index) => {
          if (method.type && chooseMethod === method.type) {
            return (
              <div key={index} className="method-details">
                <p className={classes.paragraph}>{method.usage.example1}</p>
                <p className={classes['usage-code']}>{method.usage.example3}</p>
                <p className={classes['usage-code']}>{method.usage.example2}</p>
              </div>
            );
          }
          return '';
        })}
      </div>
    </>
  );
}
