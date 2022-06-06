import classes from './Usage.module.css';

export default function Usage({data, chooseMethod, singleItem, multipleItems}) {
  return (
    <>
      <header>
        <h4>Usage</h4>
      </header>
      <div className={classes.usage}>
        <div className="method-details">
          {data.map(method => {
            if (
              chooseMethod === method.type ||
              singleItem === method.type ||
              multipleItems === method.type
            ) {
              return (
                <div key={method.id}>
                  <p className={classes.paragraph}>{method.usage.example1}</p>
                  <p
                    className={
                      method.usage.example2 !== undefined &&
                      method.usage.example2.includes('function')
                        ? classes.highlight
                        : classes.paragraph
                    }
                  >
                    {method.usage.example2}
                  </p>
                  <p className={classes['usage-code']}>{method.usage.example3}</p>
                </div>
              );
            }
            return '';
          })}
        </div>
      </div>
    </>
  );
}
